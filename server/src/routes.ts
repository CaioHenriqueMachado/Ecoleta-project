import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// PARA LISTA ITEMS
routes.get('/items', itemsController.index);

// CRIAR UM NOVO PONTO DE COLETA
routes.post('/points', pointsController.create);

// LISTAR PONTOS
routes.get('/points', pointsController.index);

// LISTA PONTO ESPECIFICO
routes.get('/points/:id', pointsController.show);


export default routes;

