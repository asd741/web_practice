var http=require('http');
var fs=require('fs');
var ws=require('socket.io');
var server=http.createServer(function (req,res) {
    var html=fs.readFileSync('./index.htm');
    res.end(html);
});
server.listen(3000);
var io=ws(server);
io.on("connection",function(socket) {
    socket.on("message",function(msg) {
        io.emit("message",msg);
    })
})