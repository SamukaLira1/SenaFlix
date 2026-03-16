# APi SenaFlix - node.js  +  Express
API RESET REST simples para gerenciar alunos e professores 

## Pré-Requisitos
-Node.js instalados

## Como Rodar

### Instalar dependências
```bash
npm :
```

### Iniciar o Servidor 
```bash
node index.js
```

### Acessar 
Abra o navegador em: `https://localhost:3000`

### Endpoints

### filmes

| Método | Endpoints | Descrição |
|--------|-----------|-----------|
| GET | `/filmes` | Lista de todos os filmes |
| GET | `/filmes/id:` | buscar um filme em id |
| POST | `/filmes` | Cria um novo filme|


### series

| Métodos | Endpoints | Descrição |
|---------|-----------|-----------|
| GET | `/series` | Lista de todos as series |
| GET | `/series/id:` | busca uma serie pelo id |
| POST | `/series` | Cria uma nova serie |


## Tecnologias 
-Node.js
-Express

## Notas 
- Os dados são armazenados na memória (Reiniciar o servidor apaga tudo)
