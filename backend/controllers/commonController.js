const Brand = require("../models/brandModel"); 
const User = require("../models/endUserModel");
const Car = require("../models/productModel");
const Varient = require("../models/varientModel")
const data_count = async(req,res)=>{

    try{
        const count_data = [];
        const brand_data = await Brand.find().count();
        const user_data = await User.find().count();
        const product_data = await Car.find().count();
        const varient_data = await Varient.find().count();

        count_data.push({
            brand: brand_data,
            user: user_data,
            car : product_data,
            varient : varient_data
        });

        res.status(200).send({success:true,msg:"Counting data",data:count_data});


    } catch(error){
        res.status(400).send({sucess:false, message:error.message});
    }


}
module.exports ={
    data_count
}