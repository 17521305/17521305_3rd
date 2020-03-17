//Define Dependencies
const express=require('express');
const bodyParser=require('body-parser');
const logger=require('morgan');
//Import routes files config ./app/routes/*
const projects=require('./app/routes/projects.route');
//Content
const app=express();
//Middlewares
//**Set up morgan*/
app.use(logger('dev'));
//**Set up bodyparser*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Routes
app.use('/projects',projects);
//Catch 404 Errors and forward them to the error handler
app.use((req,res,next)=>{
    const err=new Error('Not found!');
    err.status=404;
    next(err);
});
//Error handler function
app.use((req,res,next)=>{
    const error=app.get('env')==='development' ? err:{};
    const status=err.status || 500;
    //Respond to client
    res.status(status).json({
        error:{
            message:error.message
            
        }
    });
});
//Module exports
module.exports=app;