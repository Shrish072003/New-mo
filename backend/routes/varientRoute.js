const express = require('express');
const varient_route = express ();
const bodyParser = require('body-parser');
varient_route.use(bodyParser.json());
varient_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

varient_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/varientImages'),function(err,sucess){
            if(err){
                throw err;
            }
        });
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error,sucess){
            if(error){
                throw error;
            }
        });
    }
});

const upload = multer({storage: storage});

const varient_controller =  require("../controllers/varientController");

varient_route.post('/add-varient',upload.array('images'),varient_controller.add_varint);

varient_route.get('/get-all-varient', varient_controller.get_all_variants);

//Delete All Varient
varient_route.delete('/delete-all-vatient', varient_controller.delete_all_variants);

varient_route.delete('/delete/:id', varient_controller.delete_variant);

varient_route.get('/find/:id', varient_controller.find_variant_by_id);

varient_route.get('/variants/count/:product_id', varient_controller.count_variants_by_product_id);

varient_route.get('/variants/active/:product_id', varient_controller.get_active_variants_by_product);

varient_route.get('/varient/getbyid/:id', varient_controller.get_variant_by_id_forapp);
//edit varient
varient_route.put('/varient_edit/:id', upload.array('images'), varient_controller.edit_variant);

module.exports = varient_route;