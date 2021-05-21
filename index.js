const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;
//---------------------------------------------
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/index.html');
}); 
//no post cuz no database or backend
//arrow function no req cuz no body

io.on('connection', (socket) => { //call back function
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
  
});

http.listen(port, () => {
  console.log(`*** server running at http://localhost:${port}/chat`);
});
