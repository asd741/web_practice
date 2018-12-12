var http=require('http');
var fs=require('fs');
var ws=require('socket.io');
const port = process.env.PORT || 3000;
var server=http.createServer(function (req,res) {
    var html=fs.readFileSync('./index.htm');
    res.end(html);
});
server.listen(port, () => {
    console.log("Server Started. http://localhost:" + port);
});
var io=ws(server);
io.on("connection",function(socket) {
    socket.on("message",function(msg) {
        io.emit("message",msg);
    })
})