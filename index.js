const http = require("http")

const server=http.createServer((req,res)=>{
    res.send("this is my first server")
})

server.listen(3000,()=>{
    console.log("server started on port 3000")
})
console.log("HElo World fjjf")