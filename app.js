var restify = require('restify');
var server = restify.createServer();
var io = require('socket.io')(server.server);
server.use(restify.bodyParser());

/*server.get('/ping/:name', function(req,res){
    io.emit('ping', req.params.name);
    console.log('Recebendo Ping');
    res.send(200);
});
 
server.post('/geo', function(req,res){
    io.emit('geo', {
        lat:req.body.lat,
        lng:req.body.lng
    });
    console.log(req.body);
    res.send(200);
});*/

io.on('connection',(socket)=>{
    console.log(socket.id);
});

server.post('/notify', function(req, res) {
    var emergency = req.body;
    console.log(emergency);
    io.emit('new_emergency',emergency);
    res.send(200);
});

server.listen(9000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
