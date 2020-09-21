const app = require("./src/app")

const PORT = 8001

app.listen(PORT, function(){
    console.log("O nosso app esta rodando na porta", PORT)
})
