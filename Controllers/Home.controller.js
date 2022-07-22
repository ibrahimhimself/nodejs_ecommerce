const db = require('../Models/Products.model');

exports.getHome = (req,res,next) => {

    //get Products
    //render index.ejs

    var sql = "Select * from Products"
        db.query(sql,(err,result)=>{
        if(err) throw err
        res.render('index',{product:result})
    })

    // let searchBySellerName = req.query.Seller;
    // let searchByName = req.query.name;
    // console.log(searchByName);
    // if(searchByName && searchByName!== ""){
    //     var sql = `Select * from product where Seller = ${searchBySellerName} || where name = ${searchByName}`
    //     db.query(sql,(err,result)=>{
    //     if(err) throw err
    //     res.render('index',{product:result})
    // })
    // }
    // else
    // {
    //     var sql = "Select * from product"
    //     db.query(sql,(err,result)=>{
    //     if(err) throw err
    //     res.render('index',{product:result})
    //     })
    // }
}