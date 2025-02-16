# File Metadata Microservice

Este é um projeto do FreeCodeCamp para criar um microserviço de metadados de arquivos. Ele permite que os usuários façam upload de arquivos e recebam informações sobre eles, como nome, tipo e tamanho.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## 📂 Instalação e Configuração

1. Clone este repositório:

   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Inicie o servidor:

   ```sh
   npm start
   ```

O servidor rodará na porta `3000` ou na definida no arquivo `.env`.

## 📌 Endpoints

### `GET /`

Retorna a página inicial do projeto.

### `POST /api/fileanalyse`

Aceita um arquivo enviado através de um formulário e retorna um JSON com os metadados do arquivo.

**Requisição:**

- O arquivo deve ser enviado no campo `upfile` do formulário.

**Resposta (JSON):**

```json
{
  "name": "arquivo.txt",
  "type": "text/plain",
  "size": 1234
}
```

## 🛠️ Como Funciona

1. O usuário acessa a página inicial (`/`).
2. Um formulário permite que ele envie um arquivo.
3. O servidor recebe o arquivo via `multer`, armazena temporariamente e retorna seus metadados.

