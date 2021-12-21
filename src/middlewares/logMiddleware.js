const fs = require('fs');
function logMiddleware (req,res,next){
    fs.appendFileSync('userLog.txt', 'El usuario ingresó a la página ' + req.url +'\n');

    next();
};

  module.exports = logMiddleware;

