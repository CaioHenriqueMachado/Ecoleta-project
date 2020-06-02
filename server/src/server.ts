import express from 'express';

const app = express()

app.use(express.json())

const users = [
    'Diego',
    'Caio',
    'Rodrigo',
    'Lucas'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers =search ? users.filter(user => user.includes(search)) : users

    return response.json(filteredUsers)
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.get('/users', (request, response) => {
    console.log('Listagem de usuário');

    return response.json(users);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user)
})

app.listen(3333);