const db = require('../config');
const { hash, compare, hashSync } = require('bcrypt');
const { createToken } = require('../middleware/authenticateUser');

class Users {
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, gender, userDOB, emailAdd, userPW, userProfile
        FROM users;
        `
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res.statusCode,
                results
            });
        });
    };

    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, gender, userDOB, emailAdd, userPW, userProfile
        FROM users
        WHERE userID = ${ req.params.id };
        `
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res.statusCode,
                result
            });
        });
    };
    login(req, res){
        const {emailAdd, userPass} = 
        req.body 
        const query = `
        SELECT *
        FROM Users
        WHERE emailAdd = '${emailAdd}'
        `
        db.query(query, (err, result)=>{
            if (err) throw err 
        
        })
    }

    async register(req, res) {
        const data =req.body;

         // Encrypt password
         data.userPW = await hash(data.userPW, 15);

         // Payload
         const user = {
             emailAdd: data.emailAdd,
             userPW: data.userPW
         };
 
         // Query
         const query = `
         INSERT INTO users
         SET ?;
         `
 
         db.query(query, [data], (err) => {
             if (err) {
                 console.log(err)
             }
             // Create token
             let token = createToken(user)
             res.cookie('LegitUser', token, {
                 maxAge: 3600000,
                 httpOnly: true
             });
             res.json({
                 status: res.statusCode,
                 msg: 'You are now registered.'
             });
         });
    };

    updateUser(req, res) {
        const query = `
        UPDATE users
        SET ?
        WHERE userID = ?;
        `

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err)
            }
            res.json({
                status: res.statusCode,
                msg: 'The user record was updated.'
            });
        });
    };

    deleteUser(req, res) {
        const query = `
        DELETE FROM users
        WHERE userID = ${ req.params.id };
        `

        db.query(query, (err) =>{
            if (err) {
                console.log(err)
            }
            res.json({
                status: res.statusCode,
                msg: 'Aeser record was deleted.'
            });
        });
    };
};

class Products {
    fetchProducts(req, res) {
        const query = `
        SELECT prodID, prodName, quantity, prodPrice, category, prodDesc, prodUrl
        FROM products;
        `
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res.statusCode,
                results
            });
        });
    };

    fetchProduct(req, res) {
        const query = `
        SELECT prodID, prodName, quantity, prodPrice, category, prodDesc, prodUrl
        FROM products
        WHERE prodID = ${ req.params.id };
        `
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res.statusCode,
                result
            });
        });
    };

    addProduct(req, res) {
        const query = `
        INSERT INTO products
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not add product'});
            } else {
                res.status(200).json({msg: 'Product added'});
            }
        });
    }

    updateProduct(req, res) {
        const query =`
        UPDATE products
        SET ?
        WHERE prodID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not update records'});
            } else {
                res.status(200).json({msg: 'Product updated'});
            }
        });
    }

    deleteProduct(req,res) {
        const query =`
        DELETE FROM products
        WHERE prodID = ${req.params.id};
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Record was not found'});
            } else {
                res.status(200).json({msg: 'product was deleted'});
            }
        });
    }
}

module.exports = {
    Users,
    Products
}