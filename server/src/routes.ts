import express from 'express';
import { celebrate, Joi } from  'celebrate';
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
routes.post(
  '/points', 
  upload.single('image'), 
  pointsController.create);
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }),
  pointsController.create


export default routes;

