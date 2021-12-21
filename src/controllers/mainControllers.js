const path = require('path');


module.exports ={
    index : (req,res) =>
    res.render('index'),

     registro : (req, res) => {
            return res.render('register')
        },
     login: (req, res) => {
            return res.render('login')
        },
    admin : (req, res) =>{
        return res.render('admin')
    }

}