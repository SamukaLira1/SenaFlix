//primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

//permiti aceitat JSON na requisição
app.use(express.json())

//-----FILMES------------------------------------
const filmes = [
    {
        id: 1,
        title: "Openheimer",
        descricao: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
        genre: "Drama",
        duracao: "3 Horas",
        lancamento: 2023,
        image: "https://m.media-amazon.com/images/M/MV5BOGRmMDc3ZWYtNTJlYS00ZDdhLWI4OTgtNDIxNWI5YTMxNzdkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
]

//criar um novo filme
app.post("/filmes", (req,res)=>{
    const id = 2
    const nome = req.body.nome
    const descricao = req.body.descricao
    const genre = req.body.genre
    const lancamento = req.body.lancamento
    const duracao = req.body.duracao

 
    if( !id || !nome || !descricao || !genre || !lancamento || !duracao){
        return res.status(400).json({erro:"estes dados são obrigatórios!"})
    }
    const novoFilme = {
        id: 2,
        nome: nome,
        descricao:descricao,
        genre: genre,
        lancamento: lancamento,
        duracao: duracao
    }
    filmes.push(novoFilme)
    res.status(201).send()
})

//encontrar pelo id
app.get("/filmes/:id", function(req,res){
    const id = parseInt(req.params.id)
    const filmesFiltro = filmes.find( a => a.id == id)
    if(filmes){
        return res.json(filmesFiltro)
    }else{
        res.status(404).json("filme não encontrado")
    }
})

//filtrar genero
app.get("/filmes", function(req, res){
    const genre1 = req.query.genre
 
    if(!genre1){
        return res.json(filmes)
    }
    const genre1Filtrados = filmes.filter(a => a.genre.toLowerCase().includes(genre1.toLowerCase()))
 
    res.json(genre1Filtrados)
 
})



//-------SERIES----------------------------------------
const series = [
    {
        id: 1,
        title: "Round 6",
        descricao: "Um grupo de pessoas passando por dificuldades financeiras aceita um estranho convite para um jogo de sobrevivência. Um prêmio bilionário os aguarda, mas as apostas são altas e mortais.",
        genre: "Trhiler",
        duracao: "3 temporadas",
        lancamento: 2021,
        image: "https://oespecialista.safra.com.br/wp-content/uploads/2021/10/squid-game-round-6-netflix.jpg"
    }
]

//pegar todos os filmes GET
app.get("/series", (req, res) =>{
    return res.json(series)
})

//criar uma nova serie
app.post("/series", (req,res)=>{
    const id = 2
    const nome = req.body.nome
    const descricao = req.body.descricao
    const genre = req.body.genre
    const lancamento = req.body.lancamento
    const duracao = req.body.duracao 
 
    if( !id || !nome || !descricao || !genre || !lancamento || !duracao){
        return res.status(400).json({erro:"estes dados são obrigatórios!"})
    }
    const novaSerie = {
        id: 2,
        nome: nome,
        descricao:descricao,
        genre: genre,
        lancamento: lancamento,
        duracao: duracao
    }
    series.push(novaSerie)
    res.status(201).send()
})
//encontrar pelo id
app.get("/series/:id", function(req,res){
    const id = parseInt(req.params.id)
    const seriesFiltro = series.find( a => a.id == id)
    if(series){
        return res.json(seriesFiltro)
    }else{
        res.status(404).json("serie não encontrado")
    }
})
//filtrar genero
app.get("/series", function(req, res){
    const genre1 = req.query.genre
 
    if(!genre1){
        return res.json(series)
    }
    const genre1Filtrados = series.filter(a => a.genre.toLowerCase().includes(genre1.toLowerCase()))
 
    res.json(genre1Filtrados)
})



// sengundo passo, colocar o servidor para rodar
app.listen(3000, () =>{
    console.log("servidor rodando em http://localhost:3000")
})