const db = require('../Models/Products.model');

exports.getHome = (req,res,next) => {

    //get Products
    //render index.ejs

    var sql = "Select * from Products"
        db.query(sql,(err,result)=>{
        if(err) throw err
        db.end();
        res.render('index',{product:result})
                
    })

}