const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const port = 8000;

let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
}

app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})      

const validateData = (userData) => {
    let errors = [];
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกงานอดิเรก');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }
    return errors;
}    


app.post('/users', async (req, res) => {
    try {
    let user = req.body;
    const errors = validateData(user);
    if (errors.length > 0){
        throw {
            message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            errors: errors
        }
    }
    const results = await conn.query('INSERT INTO users SET ?', user);
    console.log('results:', results);
    res.json({
        Message: 'User added successfully',
        data: results[0]
    });
    } catch (error) {
        const errorMessage = error.message || 'Error adding user';
        const errors = error.errors || [];
        console.error('Error inserting user:', error);
        res.status(500).json({
            message: errorMessage,
            errors: errors 
        });
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
        if (results[0].length === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json(results[0][0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user' 
        });
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        if (results[0].affectedRows === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User updated successfully',
            data: results[0]
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({message: 'Error updating user'});
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;

        const results = await conn.query('DELETE FROM users WHERE id = ?', [id]);
        if (results[0].affectedRows === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User deleted successfully',
            data: results[0]
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({message: 'Error deleting user'});
    }
});

//path: = /GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

//path: = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
    Message: 'User added successfully',
    user: user
    });
});

// path: = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;

    //หา user ที่จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    //อัปเดตข้อมูล users
    if (updatedUser.firstname) {
        users[selectedIndex].firstname = updatedUser.firstname;
    }
    if (updatedUser.lastname) {
        users[selectedIndex].lastname = updatedUser.lastname;
    }

    res.json({
        Message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexupdate: selectedIndex    
        }
    });
    //ส่ง users ที่อัปเดตแล้วกลับไป
});

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ user ออกจาก users
    users.splice(selectedIndex, 1);

    res.json({
            Message: 'User deleted successfully',
            indexupdate: selectedIndex
    });
});


app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});



/**ทำการ import โมดูล http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World! this is my first server.');
}

//run server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
let users = [];
let counter = 1;*/

/**
    GET /users => ดึงข้อมูลผู้ใช้ทั้งหมด
    POST /user => เพิ่มผู้ใช้ใหม่
    GET /user/:id => ดึงข้อมูลผู้ใช้ตาม id
    PUT /user/:id => แก้ไขข้อมูลผู้ใช้ตาม id ที่บันทึก
    DELETE /user/:id => ลบผู้ใช้ตาม id ที่บันทึก
*/


