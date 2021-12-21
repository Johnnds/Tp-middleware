let admins = ['Greta', 'Ada', 'Vim', 'Tim'];

const acces = (req,res,next) =>{
    if (admins.includes( req.query.user)) {

        next()
        
    }else{
        res.send('No tienes privilegios para entrar')
    }
}

module.exports = acces