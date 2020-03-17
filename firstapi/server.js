//Define Dependencies
const http=require('http');
const app=require('./app');
//Define PORT
const port=process.env.PORT || 8888;
//Create a Server
const Server=http.createServer(app);
//PORT Listener
Server.listen(port);
//**Note: This app wants to run the command: npm start.*/