import Image from 'next/image'

export default function Home() {
  return (
   <main className="container mx-auto px-4 py-8">
     <h1 className="text-4xl font-bold mb-4 text-center mt-6 text-gray-100">POC React Next.js PWA</h1>
     <div className="flex justify-center">
        <Image
          src="./img/pwa.png"
          alt="Imagem de um celular usando um app feito em PWA"
          title="pwa"
          width={400}
          height={300}
        />
      </div>
      <h3 className="text-center mt-4">
        <a
          href="https://github.com/g-aleprojetos-Projects/poc-pwa-react-next"
          className="text-blue-500 underline"
        >
          🔗 https://github.com/g-aleprojetos-Projects/poc-pwa-react-next
        </a>
      </h3>
      <p className="mt-8 text-neutral-400">
        Apresento um aplicativo desenvolvido com React e Next.js, utilizando a biblioteca next-pwa para transformá-lo em um
        Progressive Web App (PWA). O aplicativo foi hospedado no GitHub Pages, permitindo fácil acesso e disponibilidade.
      </p>
      <p className="mt-8 text-neutral-400">
        Combinando a robustez do Next.js, incluindo suas capacidades de renderização do lado do servidor (SSR) e de
        pré-renderização, juntamente com a funcionalidade PWA fornecida pela biblioteca next-pwa, o aplicativo proporciona uma
        experiência ágil e responsiva aos usuários.
      </p>
      <p className="mt-8 text-neutral-400">
        A interface intuitiva e amigável do aplicativo oferece recursos impressionantes, sendo adequado para diversos propósitos,
        como e-commerce, redes sociais, produtividade, entre outros. A integração das tecnologias React, Next.js, next-pwa e a
        hospedagem no GitHub Pages garante desempenho excepcional e uma experiência de usuário de alta qualidade.
      </p>
      <h2 className="text-2xl font-bold mt-8 text-gray-100">Índice</h2>
      <ul className="list-disc ml-8 mt-4">
        <li className="text-blue-500">
          <a href="#o-que-é-pwa" >
            O que é PWA
          </a>
        </li>
        <li className="text-blue-500">
          <a href="#por-que-usar-o-pwa" >
            Por que usar o PWA
          </a>
        </li >
        <li className="text-blue-500">
          <a href="#qual-a-vantagem-de-contruir-um-pwa-com-react-nestjs" >
            Qual a vantagem de construir um PWA com React Next.js
          </a>
        </li>
        <li className="text-blue-500">
          <a href="#qual-a-vantagem-de-usar-tudo-isso-no-github-pages-">
            Qual a vantagem de usar tudo isso no GitHub Pages
          </a>
        </li>
        <li className="text-blue-500">
          <a href="#setup-do-projeto" >
            Setup do projeto
          </a>
        </li>
        <li className="text-blue-500">
          <a href="#preparação-do-projeto-para-o-github-pages" >
            Preparação do projeto para o GitHub Pages
          </a>
        </li>
        <li className="text-blue-500">
          <a href="#criação-do-pwa">
            Criação do PWA
          </a>
        </li>
        <li className="text-blue-500">
          <a href="#fontes">
          Fontes
          </a>
        </li>
      </ul>
      <h3 id="o-que-é-pwa" className="text-2xl font-bold mt-8 text-gray-100">
        O que é PWA
      </h3>
      <p className="mt-4 text-neutral-400">
        Progressive Web App (PWA) é uma abordagem para desenvolvimento web que visa fornecer uma experiência semelhante à de um
        aplicativo nativo em diferentes dispositivos e plataformas. Os PWAs combinam recursos da web moderna com recursos de
        aplicativos móveis, permitindo que os usuários acessem um site diretamente por meio de uma URL e oferecendo funcionalidade
        offline, notificações push e atualizações automáticas.
      </p>
      <h3 id="por-que-usar-o-pwa" className="text-2xl font-bold mt-8 text-gray-100">
        Por que usar o PWA
      </h3>
      <p className="mt-4 text-neutral-400">
        Existem várias vantagens em utilizar um PWA:
      </p>
      <ul className="list-disc ml-8 mt-4 text-neutral-400">
        <li className='text-neutral-400'>
          Acessibilidade direta via URL: Os usuários podem acessar o aplicativo diretamente por meio de uma URL, sem a necessidade de
          instalação através de uma loja de aplicativos.
        </li>
        <li className='text-neutral-400'>
          Funcionamento em diferentes dispositivos e plataformas: Os PWAs são projetados para serem responsivos e funcionarem
          perfeitamente em diferentes dispositivos, incluindo smartphones, tablets e desktops.
        </li>
        <li className='text-neutral-400'>
          Funcionalidade offline: Os PWAs podem ser acessados mesmo quando não há conexão com a internet, permitindo que os usuários
          continuem a usar o aplicativo em modo offline.
        </li>
        <li className='text-neutral-400'>
          Atualizações automáticas: Os PWAs podem ser atualizados automaticamente, garantindo que os usuários sempre tenham a versão
          mais recente do aplicativo.
        </li>
      </ul>
      <h3 id="qual-a-vantagem-de-contruir-um-pwa-com-react-nestjs" className="text-2xl font-bold mt-8 text-gray-100">
        Qual a vantagem de construir um PWA com React Next.js
      </h3>
      <p className="mt-4 text-neutral-400">
        A combinação do React com o Next.js oferece várias vantagens na construção de um PWA:
      </p>
      <ul className="list-disc ml-8 mt-4 text-neutral-400">
        <li className='text-neutral-400'>
          Desenvolvimento eficiente: O React e o Next.js fornecem uma estrutura de desenvolvimento rápida e eficiente, permitindo
          criar interfaces de usuário complexas e reativas com facilidade.
        </li>
        <li className='text-neutral-400'>
          Componentização: O React é baseado em componentes reutilizáveis, o que facilita a criação e manutenção do código.
        </li>
        <li className='text-neutral-400'>
          Renderização no lado do servidor (SSR) e pré-renderização: O Next.js suporta renderização no lado do servidor, o que melhora
          o desempenho e a experiência do usuário. Além disso, o Next.js também oferece suporte à pré-renderização, onde as páginas
          são geradas antecipadamente, resultando em tempos de carregamento mais rápidos.
        </li>
        <li className='text-neutral-400'>
          Compatibilidade com PWA: O Next.js é compatível com o desenvolvimento de PWAs e oferece suporte a funcionalidades como
          service workers, caching e notificações push.
        </li>
      </ul>
      <h3 id="qual-a-vantagem-de-usar-tudo-isso-no-github-pages-" className="text-2xl font-bold mt-8 text-gray-100">
        Qual a vantagem de usar tudo isso no GitHub Pages
      </h3>
      <p className="mt-4 text-neutral-400">
        O GitHub Pages é um serviço de hospedagem gratuito oferecido pelo GitHub. Ao hospedar um aplicativo PWA no GitHub Pages, você
        pode se beneficiar de várias vantagens:
      </p>
      <ul className="list-disc ml-8 mt-4 text-neutral-400">
        <li className='text-neutral-400'>
          Fácil acesso: O GitHub Pages permite que você acesse seu aplicativo PWA por meio de uma URL pública, sem a necessidade de
          configurar e gerenciar um servidor separado.
        </li>
        <li className='text-neutral-400'>
          Disponibilidade: O GitHub Pages garante que seu aplicativo PWA esteja disponível online, permitindo que os usuários acessem
          o aplicativo a qualquer momento.
        </li>
        <li className='text-neutral-400'>
          Integração com controle de versão: O GitHub Pages é integrado ao sistema de controle de versão do GitHub, permitindo que
          você rastreie e gerencie as alterações no código do seu aplicativo PWA.
        </li>
      </ul>
      <h2 id="setup-do-projeto" className="text-2xl font-bold mt-8 text-gray-100">
        Setup do projeto
      </h2>
      <h3 className="mt-4 text-neutral-400">
        Criação do projeto
      </h3>
      <pre className="bg-slate-800 p-4 mt-4 rounded-xl overflow-x-auto">
        <code className="text-sm text-gray-100">
          npx create-next-app@latest
        </code>
      </pre>
      <h3 className="mt-4 text-neutral-400">
        Configura o projeto
      </h3>
      <pre className="bg-slate-800 p-4 mt-4 rounded-xl overflow-x-auto">
        <code className="text-sm font-bold text-white pr-4">
          <p>What is your project named? <span className='text-neutral-400'>poc-pwa-react-next</span></p>
          <p>Would you like to use <span className="text-blue-400">TypeScript</span> with this project? <span className='text-neutral-400'>...No</span> / <span className='underline text-green-300'>Yes</span> </p>
          <p>Would you like to use <span className="text-blue-400">ESLint</span> with this project? <span className='text-neutral-400'>...No</span> / <span className='underline text-green-300'>Yes</span> </p>
          <p>Would you like to use <span className="text-blue-400">Tailwind CSS</span> with this project? <span className='text-neutral-400'>...No</span> / <span className='underline text-green-300'>Yes</span> </p>
          <p>Would you like to use <span className="text-blue-400">`src/` directory</span> with this project? <span className='text-neutral-400'>...No</span> / <span className='underline text-green-300'>Yes</span> </p>
          <p>Use <span className="text-blue-400">App Router</span> (recommended)? <span className='text-neutral-400'>...No</span> / <span className='underline text-green-300'>Yes </span> </p>
          <p>Would you like to customize the default <span className="text-blue-400">import alias</span>? <span className='underline text-green-300'>No</span> / <span className='text-neutral-400'>Yes</span> </p>
        </code>
      </pre>
      <h3 className="mt-4 text-neutral-400">
        Execute o servidor de desenvolvimento
      </h3>
      <pre className="bg-slate-800 p-4 mt-4 rounded-xl overflow-x-auto scroll-ps-6 ">
        <code className="text-sm text-gray-100">
          <p>npm run dev </p>
          <p className='text-green-300'># or </p>
          <p>yarn dev </p>
          <p className='text-green-300'># or </p>
          <p>pnpm dev </p>
        </code>
      </pre>
      <h3 className="mt-4 text-neutral-400">Abra<a
          href="http://localhost:3000"
          className="text-blue-500 underline"
        >
          🔗 http://localhost:3000
        </a> com seu navegador para ver o resultado.</h3>

      <h2 id="preparação-do-projeto-para-o-github-pages" className="text-2xl font-bold mt-8 text-gray-100">
        Preparação do projeto para o github pages
      </h2>
      <p className='text-neutral-400'>Na pasta <code>next.config.js</code> acrescente o <code>{`output: 'export'`}</code> 
      no <code>nextConfig</code> como solicitado na documentação 
      <a 
      href="https://nextjs.org/docs/app/building-your-application/deploying/static-exports"
      className="text-blue-500 underline">
         🔗 nextjs/static-exports
        </a></p>
        <pre className="bg-slate-800 p-4 mt-4 rounded-xl overflow-x-auto scroll-ps-6 ">
          <code className="text-sm text-gray-100">
             <p> {"/**"}</p>
             <p> {"* @type {import('next').NextConfig}"} </p>
             <p> {"*/ "}</p>
             <p> {"  const nextConfig = { "}</p>
             <p> {"  output: 'export', "}</p>
             <p> {"  // Optional: Add a trailing slash to all paths `/about` -> `/about/` "}</p>
             <p> {"  // trailingSlash: true, "}</p>
             <p> {"  // Optional: Change the output directory `out` -> `dist` "}</p>
             <p> {"  // distDir: 'dist', "}</p>
             <p>{"}"}</p>
 
              <p>{"module.exports = nextConfig"}</p>
        </code>
      </pre>

      <p className="mt-4 text-neutral-400">Acrescente pontos no endereço das imagens, pois o githube pages não encontra se tiver apenas /.</p>

     <h3 className="mt-4 text-neutral-400">Exemplo </h3>
     <pre className="bg-slate-800 p-4 mt-4 rounded-xl overflow-x-auto scroll-ps-6 ">
        <code className="text-sm text-gray-100">
         <p>{" <Image"}</p>
         <p>{`    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"`}</p>
         <p>{`    src="./next.svg" //Aqui foi acrecentado o ponto na frente da barra`}</p>
         <p>{`    alt="Next.js Logo"`}</p>
         <p>{"    width={180}"}</p>
         <p>{"    height={37}"}</p>
         <p>{"    priority"}</p>
         <p>{"  />"}</p>
        </code>
      </pre>
      <h2 className="text-2xl font-bold mt-8 text-gray-100">
      Crie um repositório no gitHub e suba o projeto
      </h2>
      <h3 className="mt-4 text-neutral-400"> navegue até a guia de configurações desse repositório.</h3>
      <div>
        <Image
          src="./img/setting.jpeg"
          alt="Mostra a pasta setting do github"
          title="setting"
          width={600}
          height={400}
        />
      </div>

      <h3 className="mt-4 text-neutral-400"> Clique em Pages na barra lateral esquerda</h3>
      <div>
        <Image
          src="./img/pages.jpeg"
          alt="Mostra a barra lateral onde deve clicar"
          title="barra lateral"
          width={400}
          height={300}
        />
      </div>

      <h3 className="mt-4 text-neutral-400">Em Deploy for a branch, escolha GitHub Actions</h3>
      <div>
        <Image
          src="./img/actions.jpeg"
          alt="Mostra onde clicar para acionar o GitHub Actions"
          title="GitHub Actions"
          width={400}
          height={300}
        />
      </div>

      <h3 className="mt-4 text-neutral-400">Isso irá sugerir alguns fluxos de trabalho para você com base no código em seu repositório. Você pode escolher o fluxo de trabalho compatível com sua base de código.</h3>
      <div>
        <Image
          src="./img/build.jpeg"
          alt="Para escolher o fluxo de trabalho"
          title="fluxo de trabalho"
          width={400}
          height={300}
        />
      </div>

      <h3 className="mt-4 text-neutral-400">Clicar em configurar levará você a um fluxo de trabalho pré-criado. Sinta-se à vontade para revisar o YAML, ajustá-lo de acordo com sua preferência e confirmar o código.</h3>
      <div>
        <Image
          src="./img/yaml.png"
          alt="Cria o YAML e mostra botão para confirmar"
          title="Confirma o yaml criado"
          width={400}
          height={300}
        />
      </div>

      <h3 className="mt-4 text-neutral-400">Em alguns segundos, sua ação começará a ser executada. Ele gerará um URL e implantará seu site estático no GitHub Pages se for bem-sucedido.</h3>
      <div>
        <Image
          src="./img/url.png"
          alt="Mostra fazendo o deploy"
          title="Deploys"
          width={400}
          height={300}
        />
      </div>

      <h3 className="mt-4 text-neutral-400">Dirija-se ao seu URL nomeado <code>yourusername.github.io/your_repo_name</code> para verificar o seu site está pronto!</h3>
      <div>
        <Image
          src="./img/finalizacao.jpeg"
          alt="Mostra a url"
          title="url"
          width={400}
          height={300}
        />
      </div>
      <h2 id="criação-do-pwa" className="text-2xl font-bold mt-8 text-gray-100">
         Criar o PWA
      </h2>

      <h3 className="mt-4 text-neutral-400">Baixar a biblioteca <a 
      href="https://www.npmjs.com/package/next-pwa"
      className="text-blue-500 underline">
        🔗 next-pwa
        </a></h3>

      <h3 className="mt-4 text-neutral-400"> Configurar a página <code>layout.tsx</code> substituindo o metadata.</h3>

      <pre className="bg-slate-800 p-4 mt-4 rounded-xl overflow-x-auto scroll-ps-6 ">
        <code className="text-sm text-gray-100">
         <p>{` const APP_NAME = "next-pwa example";`}</p>
         <p>{` const APP_DESCRIPTION = "This is an example of using next-pwa plugin";`}</p>

         <p> {"export const metadata: Metadata = {"} </p>
         <p>{`   title: "POC PWA React Next",`}</p>
         <p>   description: APP_DESCRIPTION,</p>
         <p>   applicationName: APP_NAME,</p>
         <p>  {" appleWebApp: { "}</p>
         <p>     capable: true, </p>
         <p>     title: APP_NAME, </p>
         <p>{`     statusBarStyle: "default", `}</p>
         <p>  {" }, "}</p>
         <p>  {"  formatDetection: {"}</p>
         <p>     telephone: false, </p>
         <p>  {"}, "}</p>
         <p>   viewport:</p>
         <p>{`     "minimum-scale=1, initial-scale=1, width=device-width, `}</p>
         <p>{`   shrink-to-fit=no, viewport-fit=cover",manifest: "./manifest.json",`}</p>
         <p>{"   icons: ["}</p>
         <p>{`     { rel: "apple-touch-icon", url: "./icons/apple-touch-icon.png" },`}</p>
         <p>{`     { rel: "shortcut icon", url: "./favicon.ico" },`} </p>
         <p>{"   ],"}</p>
         <p>{`   keywords: ["nextjs", "pwa", "next-pwa"],`} </p>
         <p>{" };"}</p>
        </code>
      </pre>

      <h3 className="mt-4 text-neutral-400"> Criar o <code>manifest.json</code> na pasta <code>public</code></h3>

      <pre className="bg-slate-800 p-4 mt-4 rounded-xl overflow-x-auto scroll-ps-6 ">
        <code className="text-sm text-gray-100">
          <p>{`   "name": "POC React next pwa",`}</p>
          <p>{`   "short_name": "App",`}</p>
          <p>{`   "description": "Apresento um aplicativo desenvolvido com React e Next.js, utilizando a `}</p>
          <p>{`   biblioteca next-pwa para transformá-lo em um Progressive Web App (PWA). O aplicativo foi `}</p>
          <p>{`   hospedado no GitHub Pages, permitindo fácil acesso e disponibilidade.",`}</p>
          <p>{`   "display": "fullscreen",`}</p>
          <p>{`   "orientation": "portrait",`}</p>
          <p>{`   "theme_color": "#20232a",`}</p>
          <p>{`   "background_color":"#282c34",`}</p>
          <p>{`   "start_url": ".", `}</p>
          <p>{`   "icons": [ `}</p>
          <p>{`     { `}</p>
          <p>{`       "src": "./icons/android-chrome-192x192.png", `}</p>
          <p>{`       "sizes": "192x192", `}</p>
          <p>{`       "type": "image/png", `}</p>
          <p>{`       "purpose": "any maskable" `}</p>
          <p>{`     }, `}</p>
          <p>{`     { `}</p>
          <p>{`       "src": "./icons/icon-512x512.png", `}</p>
          <p>{`       "sizes": "512x512", `}</p>
          <p>{`       "type": "image/png" `}</p>
          <p>{`     } `}</p>
          <p>{`   ], `}</p>
          <p>{`   "manifest_version": 1, `}</p>
          <p>{`   "version": "0.1" `}</p>
          <p>{`  }`}</p>        
          </code>
      </pre>

      <h3 className='mt-4 text-neutral-400'>Descrição</h3>

      <ul className="list-disc ml-8 mt-4 text-neutral-400">
        <li><strong>name</strong> - exibido na tela inicial abaixo do ícone do aplicativo</li>
        <li><strong>short_name</strong> - exibido abaixo do atalho na área de trabalho ou na tela inicial</li>
        <li><strong>description</strong> - uma descrição geral da aplicação</li>
        <li><strong>display</strong> - especifica o modo de exibição. Aqui estão os diferentes modos disponíveis classificados por ordem de fallback:</li>
        <ul className="list-disc ml-8 mt-4">
            <li><strong>fullscreen</strong>: toda a área de exibição disponível é usada e nenhuma interface de usuário do navegador é mostrada.</li>
            <li><strong>standalone</strong>: olhe e sinta-se como um aplicativo independente. Isso significa que o aplicativo terá sua própria janela, seu próprio ícone no ativador e assim por diante. Nesse modo, o agente do usuário excluirá elementos da interface do usuário para controlar a navegação, mas poderá incluir outros elementos da interface do usuário, como uma barra de status.</li>
            <li><strong>minimal-ui</strong>: o aplicativo será parecido com um aplicativo independente, mas terá um conjunto mínimo de elementos de interface do usuário para controlar a navegação. Esses elementos variam de acordo com o navegador e o sistema.</li>
            <li><strong>browser (default)</strong>: o aplicativo é aberto em uma guia do navegador convencional ou em uma nova janela, dependendo do navegador e da plataforma.</li>
        </ul>
        <li><strong>orientation</strong> - define a orientação padrão para dispositivos móveis: any, natural,landscape, portrait...</li>
        <li><strong>theme_color</strong> - a cor do tema geral do aplicativo, usada nas barras de status, por exemplo, se forem exibidas</li>
        <li><strong>background_color</strong> - a cor de fundo da tela inicial</li>
        <li><strong>start_url</strong> - a URL que é carregada primeiro quando você abre o aplicativo a partir do atalho</li>
        <li><strong>icons</strong> - A `icons` chave especifica ícones para sua extensão. Esses ícones serão usados ​​para representar a extensão em componentes como o Gerenciador de complementos. Consiste em pares chave-valor de tamanho de imagem em px e caminho de imagem relativo ao diretório raiz da extensão.</li>
        <li><strong>manifest_version</strong> - Esta chave especifica a versão de manifest.json usada por esta extensão.</li>
        <li><strong>version</strong> - A string de versão para a extensão.</li>
    </ul>

    <h3 className="mt-4 text-neutral-400">Colocar as imagens na pasta <code>public/icons</code></h3>
      <div>
        <Image
          src="./img/imagenspwa.png"
          alt="Mostra a pasta onde fica os icones"
          title="icones"
          width={350}
          height={250}
        />
      </div>

      <h3 className="mt-4 text-neutral-400">Agora é só subir o projeto para o github</h3>

      <h2 id="fontes" className="text-2xl font-bold mt-8 text-gray-100">
      Fontes
      </h2>
      <h3 className="mt-4"><a 
      href="https://dev.to/github/how-to-host-a-static-nextjs-site-on-github-pages-4pe0"
      className="text-blue-500 underline">
        🔗 How to host a Hugo or Next.js site on GitHub Pages
        </a></h3>
        <h3 className="mt-4"><a 
      href="https://youtu.be/WoL3xbkAfOU"
      className="text-blue-500 underline">
        🔗 How to host next js app on GitHub pages using GitHub Actions | CI/CD
        </a></h3>

    </main>
  )
}
