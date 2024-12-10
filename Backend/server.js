const http=require("http");
const app=require("./app");

const port=process.env.PORT || 3000;

const server=http.createServer(app);

server.listen(port,(req,res)=>{
    console.log(`server listening at port ${port}`);
});