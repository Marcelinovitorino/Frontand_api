Aqui está um modelo de README atrativo para o repositório GitHub do seu front-end, explicando que ele consome a API que você já havia criado:

---

# **Gestão de Vídeos - Frontend**

🎬 **Frontend para a API de Gestão de Vídeos**  
Este projeto é a interface de usuário (UI) que consome a API de Gestão de Vídeos que foi previamente desenvolvida com Node.js. A aplicação permite a criação, listagem, edição e exclusão de vídeos. O layout foi projetado para ser simples, intuitivo e fácil de usar.

## 🌐 **Visão Geral**

Este front-end foi desenvolvido com **HTML**, **CSS** e **JavaScript** puros, com foco em uma experiência de usuário limpa e agradável. A principal funcionalidade do site é a interação com a API de vídeos, permitindo que os usuários façam as operações de CRUD (Criar, Ler, Atualizar e Excluir) nos vídeos de maneira simples.

A interface inclui:

- **Listagem de vídeos**: Exibe todos os vídeos cadastrados.
- **Criação de vídeo**: Permite adicionar novos vídeos.
- **Edição de vídeo**: Atualiza as informações de um vídeo existente.
- **Exclusão de vídeo**: Remove um vídeo da lista.

## 🛠 **Tecnologias Utilizadas**

- **HTML**: Estruturação básica do conteúdo da página.
- **CSS**: Estilização visual da interface, com um design moderno.
- **JavaScript**: Para fazer a comunicação com a API, manipulando dados e gerenciando eventos.
- **Fetch API**: Para realizar requisições HTTP à API de vídeos.
- **Cores inspiradas no Next.js**: Utilização de um esquema de cores modernas e agradáveis.

## 🚀 **Funcionalidades**

1. **Exibição de vídeos**: Ao carregar a página, os vídeos são automaticamente listados.
2. **Adição de vídeos**: O usuário pode inserir novos vídeos com título, descrição e duração.
3. **Edição de vídeos**: O usuário pode atualizar as informações de um vídeo existente.
4. **Exclusão de vídeos**: O usuário pode excluir vídeos da lista.

## 📑 **Estrutura do Projeto**

O projeto possui a seguinte estrutura:

```
/css
  └── styles.css       # Estilos gerais da página
/js
  └── script.js        # Lógica JavaScript para interação com a API
index.html            # Página principal
README.md             # Documentação do projeto
```

## 🖥 **Como Executar Localmente**

1. Clone este repositório:
   ```bash
   git clone https://github.com/Marcelinovitorino/frontend-gestao-de-videos.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd frontend-gestao-de-videos
   ```

3. Abra o arquivo `index.html` em seu navegador favorito.

Agora, o front-end estará disponível localmente no seu navegador, e você poderá interagir com a API para realizar as operações de CRUD nos vídeos.

## 🌍 **Deploy**

O projeto está disponível para visualização pública através do seguinte link:

[Visite o Frontend Online](https://frontand-api.onrender.com)

## 🔗 **API Backend**

Este front-end consome a API de Gestão de Vídeos, que pode ser acessada em:

[API de Gestão de Vídeos](https://crud-nodejs-neon.onrender.com)

### **Endpoints da API**

- **GET /videos**: Retorna todos os vídeos cadastrados.
- **POST /videos**: Cria um novo vídeo.
- **PUT /videos/:id**: Atualiza um vídeo existente.
- **DELETE /videos/:id**: Exclui um vídeo.


