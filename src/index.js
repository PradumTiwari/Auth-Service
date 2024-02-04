const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const UserService = require('./services/user-service');
const app = express();


const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(3000, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        const service=new UserService();    
        const newToken=service.createToken({email:"satendarerit@gmail.com",password:"Pradum"});
        console.log("New Token",newToken);

        const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdGVuZGFyZXJpdEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IlByYWR1bSIsImlhdCI6MTcwNzA3OTIyNSwiZXhwIjoxNzA3MDgyODI1fQ.zGe7e8VV4tOKfCCpvn5aRv3lmwr71mfaStNRVg0mkJI';
        const Verify=service.verifyToken(token);
        console.log("Verify",Verify);
    });
}   

prepareAndStartServer();