const cors = require('cors')
const { urlencoded, Router, query } = require('express');
const express = require('express');
const { LONGLONG } = require('mysql/lib/protocol/constants/types');
const app = express()
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors())


app.set('view engine','ejs');



const Business = [

{
    "id":1,
    "BusinessType":"food",
    "location":"california",
    "BusinessName":"pizza hut",
    "rating":5,
},
{
    "id":2,
    "BusinessType":"food",
    "location":"california",
    "BusinessName":"MacDonalds",
    "rating":5,
}
, 
{
    "id":3,
    "BusinessType":"food",
    "location":"california",
    "BusinessName":"MacDonalds",
    "rating":5,
}

]

var cou = 0


app.get('/',(req,res)=>{
    res.render('landingpage.ejs')
})
app.get('/signin',(req,res)=>{
    cou = cou +1 
    console.log(req.body.firstName) 
    res.send("sign in" + cou);
    
})

app.post('/signin',(req,res)=>{
    cou = cou +1 
   // console.log(req.body.firstName) 
console.log("First Name "+ req.body.firstName);
console.log("LAst Name "+req.body.lastName)
console.log(req.body.phoneNumber) 
console.log(req.body.email) 
console.log(req.body.password) 

    res.send("sign in" + cou);
    
})

app.post('/login',(req,res)=>{
    cou = cou +1 

console.log(req.body.phoneNumber) 
console.log(req.body.password) 

    res.send("sign in" + cou);
    
})

app.get('/SearchBusiness',(req,res)=>{
    res.render('SearchBusiness.ejs')
})


app.get('/shopProducts',(req,res)=>{
    
   res.render( 'shopProducts.ejs')
})

app.get('/getShops',(req,res)=>{
    const shopType = req.query.shopType;
    console.log(shopType)
    res.send(Business)
})
app.post('/SearchBusiness',(req,res)=>{
    let BusinessType = req.body.BusinessType;
    console.log(BusinessType)
    res.render('displayBusiness.ejs',{BusinessList:Business});
})
 
app.get('/viewShop/:id',(req,res)=>{
    

    console.log(req.params.id)
    res.render('landingpage.ejs')
    //let shopID = req.params.id
   
    /*let slectdBusine="" ;
    console.log('viewshop')
    var flag = 0;
    for (var i=0;i<Business.length;i++){
    console.log(Business[i].id);

    if(shopID == Business[i].id){
        console.log( 'this is id'+Business[i].id);
        flag = 1;
       // res.render('viewShop.ejs');
        
    }
}

if(flag == 1){
    console.log('flag is 1')
   // res.send({data:'shop exists you can procees'});
   res.send('https://web.whatsapp.com/')

    //res.render('SearchBusiness.ejs')
}

    //res.render('viewShop.ejs' ,{BusinessList:Business})*/
})

app.get('/ShopDetails',(req,res)=>{
    const shopID = req.query.id;
    console.log('shop id ',shopID)
    res.send({ShopName:'Taco Bell', ShopDescription:'Mexican classic'})
})

app.listen(8080,()=>{
    console.log('server')
});  