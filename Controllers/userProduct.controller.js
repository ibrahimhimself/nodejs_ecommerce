const db = require('../Models/Products.model');

exports.getProduct = (req,res,next) => {

    //get Products
    //render index.ejs

    var sql = "Select * from products"
        db.query(sql,(err,result)=>{
        if(err) throw err
        res.render('userProduct',{product:result})
    })
}