<style>
    blue{color:#2D77B4;font-weight:700;}
    bold{font-weight:700;}
</style>

## Configuração do `manifest.json`

* <blue>name</blue> - exibido na tela inicial abaixo do ícone do aplicativo
* <blue>short_name</blue> - exibido abaixo do atalho na área de trabalho ou na tela inicial
* <blue>description</blue> - uma descrição geral da aplicação
* <blue>display</blue> - especifica o modo de exibição. Aqui estão os diferentes modos disponíveis classificados por ordem de fallback:
    * <bold>fullscreen</bold>: toda a área de exibição disponível é usada e nenhuma interface de usuário do navegador é mostrada.
    * <bold>standalone</bold>: olhe e sinta-se como um aplicativo independente. Isso significa que o aplicativo terá sua própria janela, seu próprio ícone no ativador e assim por diante. Nesse modo, o agente do usuário excluirá elementos da interface do usuário para controlar a navegação, mas poderá incluir outros elementos da interface do usuário, como uma barra de status.
    * <bold>minimal-ui</bold>: o aplicativo será parecido com um aplicativo independente, mas terá um conjunto mínimo de elementos de interface do usuário para controlar a navegação. Esses elementos variam de acordo com o navegador e o sistema.
    * <bold>browser (default)</bold>: o aplicativo é aberto em uma guia do navegador convencional ou em uma nova janela, dependendo do navegador e da plataforma.
* <blue>orientation</blue> - define a orientação padrão para dispositivos móveis: any, natural,landscape, portrait...
* <blue>theme_color</blue> - a cor do tema geral do aplicativo, usada nas barras de status, por exemplo, se forem exibidas
* <blue>background_color</blue> - a cor de fundo da tela inicial
* <blue>lang</blue> - o idioma principal do aplicativo.
* <blue>start_url</blue> - a URL que é carregada primeiro quando você abre o aplicativo a partir do atalho
* <blue>manifest_version</blue> - Esta chave especifica a versão de manifest.json usada por esta extensão.
* <blue>version</blue> - A string de versão para a extensão.
* <blue>icons</blue> - A `icons` chave especifica ícones para sua extensão. Esses ícones serão usados ​​para representar a extensão em componentes como o Gerenciador de complementos. Consiste em pares chave-valor de tamanho de imagem em px e caminho de imagem relativo ao diretório raiz da extensão.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
