const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.getAllUsers)
routes.post('/users', UserController.createUser)
routes.put('/users/:id', UserController.updatedUser)
routes.delete('/users/:id', UserController.deleteUser)

routes.get('/users/:user_id/addresses', AddressController.getAllAddress) //localhost:3333/users/3/addresses
routes.post('/users/:user_id/addresses', AddressController.createAddress) //localhost:3333/users/3/addresses

routes.get('/users/:user_id/techs', TechController.getAllTech) //localhost:3333/users/3/techs
routes.post('/users/:user_id/techs', TechController.createTech) //localhost:3333/users/3/techs
routes.delete('/users/:user_id/techs', TechController.deleteTech) //localhost:3333/users/3/techs

routes.get('/report', ReportController.show)

module.exports = routes;
