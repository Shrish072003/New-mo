// require('dotenv').config()
const helmet = require('helmet')
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); //chatgpt
dotenv.config();
const app = express();
require("./db/config");
const User = require("./db/User");
const reguser = require("./models/endUserModel");
const vbrand = require("./models/brandModel");
const path = require('path');
const bcrypt = require('bcrypt');


app.use(helmet());
app.use(express.json());
app.use(cors());

// 
// app.use((req, res, next) => {
//   res.removeHeader('X-Powered-By');
//   // Add or modify any other headers here
//   next();
// });



const brandImagesDirectory = path.join(__dirname, 'public/brandImages');
const userImagesDirectory = path.join(__dirname, 'public/userImages');
const productImagesDirectory = path.join(__dirname, 'public/productImages');
const varientImagesDirectory = path.join(__dirname, 'public/varientImages');
const ownersreviewImagesDirectory = path.join(__dirname, 'public/ownersreviewImages');
app.use('/userImages', express.static(userImagesDirectory));
app.use('/brandImages', express.static(brandImagesDirectory));
app.use('/productImages', express.static(productImagesDirectory));
app.use('/varientImages', express.static(varientImagesDirectory));
app.use('/ownersImages', express.static(ownersreviewImagesDirectory));




const saltRounds = 10;




app.post("/register", async (req, res) => {
  if (req.body.password && req.body.email) {
    try {
      
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

      
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        
      });

      
      await newUser.save();
     
      
      res.send({ result: 'User registered successfully' });
    } catch (error) {
      res.status(500).send({ result: 'Internal server error' });
    }
  } else {
    res.status(400).send({ result: 'Invalid request' });
  }
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (err) {
            res.status(500).send({ result: 'Error comparing passwords' });
          } else if (result) {
            
            res.send({ ...user._doc, password: undefined });
          } else {
            res.send({ result: 'Incorrect password' });
          }
        });
      } else {
        res.send({ result: 'No user found' });
      }
    } catch (error) {
      res.status(500).send({ result: 'Internal server error' });
    }
  } else {
    res.send({ result: 'No user found' });
  }
});

//user router

const user_routes = require("./routes/userRoute");
app.use('/api',user_routes);

app.get("/enduser",(req,res)=>{
  reguser.find()
  .then(reguser=>res.json(reguser))
  .catch(err=>res.json(err))
})

app.get("/search/:key", async(req, res)=>{
  let result = await reguser.find({
    "$or":[
      { fname:{$regex:req.params.key} },
      { lname:{$regex:req.params.key} },
      { email:{$regex:req.params.key} },
      { mobile:{$regex:req.params.key} },
      { pin:{$regex:req.params.key} },
      { DOB:{$regex:req.params.key} },
      { gender:{$regex:req.params.key} },
      { profession:{$regex:req.params.key} },
      { wheredidyouhearus:{$regex:req.params.key} }
    ]
  });
  res.send(result);
});
app.post("/endUserlogin", async(req, res) => {
  if (req.body.mobile){
    let user = await reguser.findOne({ mobile: req.body.mobile });
  if (user){
    res.send(user);
  } else {
    res.send({result:'No User found'})
  }
  } 
  else {
    res.send({result:'No User found'})
  }
  
});

//Brand-API
const brand_routes = require("./routes/brandRoute");
const { fstat } = require('fs');
app.use('/api',brand_routes);

app.get("/brands",(req,res)=>{
  vbrand.find()
  .then(vbrand=>res.json(vbrand))
  .catch(err=>res.json(err))
})

app.delete("/brands/:id",async(req,res)=>{
  
  const result = await vbrand.deleteOne({_id:req.params.id})
  res.send(result);
  
})

//common route

const common_route = require("./routes/commonRoute");
app.use('/api', common_route);
//Add Product

const product_route = require("./routes/productRoute");
app.use('/api', product_route);

//Edit and Mislanious operation for Product
const mislanious_product = require("./routes/productExtraRoute");
app.use('/api/extra', mislanious_product);

//Varient Route
const varient_route = require("./routes/varientRoute");
app.use('/api', varient_route);

//BRAND CSV- By mistake I have named it as user
const brand_csv = require("./routes/brandCSVRoute");
app.use('/api/v1', brand_csv);
//VARIENT CSV- By mistake I have named it as user
const varient_csv = require("./routes/varientCSVRoute");
app.use('/api/v1', varient_csv);
//PRODUCT CSV ROUTE
const productCSV = require("./routes/productCSVRoute");
app.use('/api/v1', productCSV);

//OWNER'S REVIEW ROUTE
const ownersReview = require("./routes/ownersReviewRoute");
app.use('/api/v1/tern',ownersReview);

//OTP ROUTES
const otpsendandVerification = require("./routes/otpRoute");
app.use('/api/auth',otpsendandVerification);

//COMPARO ROUTES
const comparoRoutes = require("./routes/comparoRoutes");
app.use('/api/comparo',comparoRoutes);


//DELERSHIP ROUTES
const dealershipRoute = require("./routes/dealershipRoute");
app.use('/api/v1',dealershipRoute)

//SERVICE CENTRE ROUTES
const service_Centre_routes = require("./routes/servicecentreRoute");
app.use('/api/v1',service_Centre_routes)

//ASSIST ME ROUTES
// const assistMe = require("./routes/assistmeRoute");
// app.use('/api/assistme',assistMe);

//RTO DATA ROUTES
const rtoData = require("./routes/rtodataRoutes");
app.use('/api/v1',rtoData);

//FUEL PRICE ROUTE
const fuelPrice = require("./routes/fuelpriceRoute");
app.use('/api/v1',fuelPrice);

//PRICE BREAKUP PAGE LOAN 
const loanCalculator = require("./routes/loanRoute");
app.use('/api/v1',loanCalculator);

// Use process.env.PORT for the server's port
const PORT = process.env.PORT || 5000; // Use 3000 as a default if PORT is not specified in .env

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});