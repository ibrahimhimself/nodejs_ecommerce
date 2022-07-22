const db = require('../Models/Products.model');

exports.getProductDetails = (req , res) => {

    //get id
    //get product
    //render

    var sql = `Select * from products where ${req.params.id}`
        db.query(sql,(err,result)=>{
        if(err) throw err
        res.render('product',{product:result})
           
    })
    
}