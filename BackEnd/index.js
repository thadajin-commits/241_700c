//ทำการ import โมดูล Http
/*
const http = require('http');
const host = 'localhost';
const port = 8000;


//กำหนด server 
const requirelistener = function (req, res) {
    res.writeHead ( 200);
    res.end('Hello World! This is My server\n');
   
}

//run server
const server = http.createServer(requirelistener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}); 
*/


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 8000; 

let users = [];
let counter = 1;



app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
    message: 'User added successfully',
    user: user
    });
});

app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;

    let selectedIndex = users.findIndex(user => user.id == id );

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User update successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
})

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id );

    users.splice(selectedIndex, 1);

    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex
    });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});

