const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

 const users = [
     {id: 1, name: 'sakib khan', email: 'sakib@gmail.com', phone: 01234567},
     {id: 2, name: 'takib khan', email: 'takib@gmail.com', phone: 01234567},
     {id: 3, name: 'rakib khan', email: 'rakib@gmail.com', phone: 01234567},
     {id: 4, name: 'makib khan', email: 'makib@gmail.com', phone: 01234567},
     {id: 5, name: 'lakib khan', email: 'lakib@gmail.com', phone: 01234567},
     {id: 6, name: 'parib khan', email: 'parib@gmail.com', phone: 01234567},
     {id: 7, name: 'larib khan', email: 'larib@gmail.com', phone: 01234567},
 ]

app.get('/', (req, res) => {
    res.send('hello world, i am new in node js, mh rayhan')
});

app.get('/users', (req, res) =>{
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, ()=>{
    console.log('Listening to port' , port);
})