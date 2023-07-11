import { useCallback, useEffect, useState } from "react";

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function useAddToHomescreenPrompt(): [
  IBeforeInstallPromptEvent | null,
  () => void,
  boolean
] {
  const CACHE_NAME = 'my-cache-v1';
  const [prompt, setPrompt] = useState<IBeforeInstallPromptEvent | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  const promptToInstall = useCallback(() => {
    if (prompt) {
      prompt.prompt();
    } else {
      throw new Error('Tried installing before browser sent "beforeinstallprompt" event');
    }
  }, [prompt]);

  useEffect(() => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault();
      setPrompt(e);
    };

    const checkAppInstalled = async () => {      
      if (prompt) {
        const choiceResult = await prompt.userChoice;
        if (choiceResult.outcome === "accepted") {
          console.log("O aplicativo foi instalado pelo usuário");
          setIsAppInstalled(true);
          const installStatus = {
            isInstalled: true
          };

          caches.open(CACHE_NAME)
          .then(cache => cache.put('installStatus', new Response(JSON.stringify(installStatus))))
          .catch((error) =>console.log('Error: ', error) )
        } else {
          console.log("O usuário optou por não instalar o aplicativo");
        }
      } else {       
        try {
          const cache = await caches.open(CACHE_NAME);
          const response = await cache.match('installStatus');
        
          if (response) {
            const installStatusStr = await response.text();
            const installStatus = JSON.parse(installStatusStr);
            
            if (installStatus && installStatus.isInstalled) {
              console.log("O aplicativo já está instalado");
              setIsAppInstalled(true);
              return;
            }
          } else {
            throw new Error('O item "installStatus" não foi encontrado no cache.');
          }
        } catch (error) {
          console.log('Erro: ', error);
          return null;
        } 
      }
    };

    window.addEventListener("beforeinstallprompt", ready as any);

    checkAppInstalled();

    return () => {
      window.removeEventListener("beforeinstallprompt", ready as any);
    };
  }, [prompt]);

  return [prompt, promptToInstall, isAppInstalled];
}
