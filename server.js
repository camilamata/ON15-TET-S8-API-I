//Enunciado:extrair as mesmas informações da aula de sábado:
// criar rotas para acesso dos filmes por nome(title), ID e cadastro.

// colocando tudo que está em "data" na variável filmesJson e seriesJson
const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")
//chamando o express
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
// criando "rota de apresentação"
app.get("/" , (request, response) => {
    response.statusCode(200).json([
        {
           "Mensagem": "buscar filmes e séries"
        }
    ])
})
//rota de todos os filmes
app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})
//rota de todas as séries
app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
})
// rota do filme por id
app.get("/filmes/buscar/:id", (request, response) =>{
    let idRequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
})
  //rota serie por id
  app.get("/series/buscar/:id", (request, response) => {
      let idRequest = request.params.id
      let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)
      response.status(200).send(serieEncontrada)
  })
  
//rota de filme por nome
app.get("/filmes/filtro", (request, response) => {
    let tituloRequest = request.query.title.toLowerCase()
    let tituloEncontrado = filmesJson.filter(
        filme => filme.Title.toLowerCase().includes(tituloRequest)
    )
    response.status(200).send(tituloEncontrado)
})

//rota de serie por nome
app.get("/serie/filtro", (request, response) => {
    let tituloRequest = request.query.title.toLowerCase()
    let tituloEncontrado = seriesJson.filter(
        serie => serie.Title.toLowerCase().includes(tituloRequest)
    )
    response.status(200).send(tituloEncontrado)
})
//cadastrar filme novo!
app.post("/filmes/cadastro", (request, response) => {
    let bodyRequest = request.body
    let cadastroDeFilme = { //pedindo todas as infos que um filme precisa ter
        id: (filmesJson.length)+1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Eeleased,
        Runtime: bodyRequest.Runtime,
        Genre: bodyRequest.Genre,
        Director: bodyRequest.Director,
        Writer: bodyRequest.Writer,
        Actors: bodyRequest.Actors,
        Plot: bodyRequest.Plot,
        Language: bodyRequest.Language,
        Country: bodyRequest.Country,
        Awards: bodyRequest.Awards
    }
    filmesJson.push(filmeCadastrado) //colocando o filme na lista oficial
    response.status(200).send({
        "Mensagem": "O filme foi cadastrado!", cadastroDeFilme
    })
})
//abrindo a porta!
app.listen(8080, () => {
    console.log("Abre o portão que eu cheguei!!!!")
})

//nossa eu tive todos os tipos de erros possíveis!!!!!! 