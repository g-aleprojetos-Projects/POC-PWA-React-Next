import { useEffect, useState } from "react";


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
  () => void
] {
  const [prompt, setState] = useState<IBeforeInstallPromptEvent | null>(
    null
  );

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt();
    }
    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event'
      )
    );
  };

  useEffect(() => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault();
      setState(e);
    };

    const checkAppInstalled = async () => {
        if (prompt) {
          const choiceResult = await prompt.userChoice;
          if (choiceResult.outcome === "accepted") {
            console.log("O aplicativo foi instalado pelo usuário");
          } else {
            console.log("O usuário optou por não instalar o aplicativo");
          }
        }
      };

    window.addEventListener("beforeinstallprompt", ready as any);

    checkAppInstalled();

    return () => {
      window.removeEventListener("beforeinstallprompt", ready as any);
    };
  }, [prompt]);

  return [prompt, promptToInstall];
}