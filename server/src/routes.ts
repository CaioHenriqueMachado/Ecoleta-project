import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// PARA LISTA ITEMS
routes.get('/items', itemsController.index);

// LISTAR PONTOS
routes.get('/points', pointsController.index);

// LISTA PONTO ESPECIFICO
routes.get('/points/:id', pointsController.show);

// CRIAR UM NOVO PONTO DE COLETA
routes.post('/points', upload.single('image'), pointsController.create);


export default routes;

