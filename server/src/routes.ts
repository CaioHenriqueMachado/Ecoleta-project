import express from 'express';

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({message:'Helo'});
});

export default routes;

