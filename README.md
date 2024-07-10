# Aluraflix

![Static Badge](https://img.shields.io/badge/dependency-json_server-orange) ![Static Badge](https://img.shields.io/badge/realese_date-Jully-orange)

### Aluraflix: Desafio Alura com ONE (Oracle Next Education)
Aluraflix é um projeto desenvolvido em React com Vite, criado como parte de um desafio proposto pela Alura em parceria com o programa ONE. Este projeto simula um site de streaming, apresentando vídeos do canal Alura no YouTube. O desafio é um pré-requisito para a obtenção do certificado na etapa final do programa ONE.

### uncionalidades e Tecnologias Utilizadas
.React Router DOM: Navegação entre as páginas.
.Hooks do React: Uso de useState, useParams e useEffect para gerenciar estado e efeitos colaterais.
.Slider Automático e Manual: Permite a visualização dos vídeos em destaque no banner.
.Listagem e Categorização de Vídeos: Vídeos organizados por categorias para fácil navegação.
.Funcionalidades CRUD: Adição, edição e exclusão de vídeos, utilizando um servidor JSON para persistência de dados.

### Execução do Projeto
Para utilizar todas as funcionalidades do Aluraflix, é necessário clonar o repositório e executar o JSON Server no terminal. Mais detalhes sobre a execução estão disponíveis no repositório.

## Dependências 
`json-server`

## Funcionalidade:
* **Importante**: as funcionalidades descritas nos tópicos abaixo só serão possíveis se você clonar este projeto para a sua máquina e rodar o comando no terminal `npm i` para instalação do diretório "node_models" que foi ignorada no git commit, logo após, rode no terminal o comando `npm run dev` e mantenha, pois será necessário abrir outro terminal, abra outro terminal e rode o comando `npm start` ou `json-sever --watch db.json` para carregar os arquivos do db.json. Este projeto está fazendo fetch do my json sever que é diferente do json-server, portando, no componente Inicial, que está na pasta pages, no seu index.jsx troque const videosApi = await fetch('https://my-json-server.typicode.com/thoninogueira/aluraflix-api/videos') por const videosApi = await fetch('http://localhost:3000/videos')
  
### Banner com Slider Automático e Manual:
 O banner possui um slider que avança automaticamente a cada 5 segundos. Setas de navegação à esquerda e à direita permitem avançar ou retroceder manualmente. No lado direito do banner, um vídeo clicável direciona o usuário para assisti-lo.

### Listagem e Categorização de Vídeos:
 Vídeos organizados por categorias (Frontend, Backend, Mobile) para fácil navegação.
**Interação com Vídeos:** Ao clicar em um vídeo, você é direcionado para a página do respectivo vídeo.
**Funções CRUD:** Cada vídeo possui botões para excluir ou editar. A exclusão remove o vídeo do arquivo db.json. A edição abre uma modal para atualizar o título, link da imagem, link do vídeo e descrição, refletindo as mudanças imediatamente no site.
**Scroll Horizontal:** Quando há muitos vídeos em uma categoria, é possível rolar horizontalmente para visualizar todos.
Menu: Localizado no header, com opções para "Home" e "Novo Vídeo".

**Novo Vídeo:** Redireciona para a página de inserção de um novo vídeo, onde você pode preencher o formulário com título, link da imagem, link do vídeo e descrição. As atualizações são refletidas imediatamente no site.

**Home:** Retorna à página inicial, também acessível clicando no logo do Aluraflix.


* **link do site na Vercel**: [https://challenge-aluraflix-flax.vercel.app/]
## Imagem
![src/assets/Captura de tela](https://github.com/thoninogueira/challenge-aluraflix/blob/main/src/assets/Captura%20de%20tela)

## Tecnologias utilizadas
* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="logo React"/>
* <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="logo JavaScript">
* <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="logo Node.js">
## Autor
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/154802638?s=400&u=11fcb6503047b8538cf2bd2071b739954f484fe1&v=4" width=115><br><sub text-decoration="none">Thoni Nogueira</sub>](https://github.com/thoninogueira) |
| :---: |

Sua colaboração é valiosa nesse projeto, deixe seu feedback!
