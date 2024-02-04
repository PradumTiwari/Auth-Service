const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');
const UserRepository=require('./repository/user-repository');
const app = express();


const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(3000, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        const repo=new UserRepository();
        const response=await repo.getById(1);
        console.log(response);
        // const incomingpassword = 'EncryptedPasswordInSalt';
        // const user = await User.findByPk(2);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
        // console.log(response);
    });
}   

prepareAndStartServer();