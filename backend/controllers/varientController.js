const Varient = require("../models/varientModel");
const brand = require("../models/brandModel");
const fs = require('fs');
const path = require('path');

const add_varint = async(req, res)=>{
    try{

        var arrImages = [];
        for(let i = 0; i < req.files.length; i++) {
            
            arrImages[i] = {
                filename: req.files[i].filename, 
                path: `/varientImages/${req.files[i].filename}`
            };
        }
        var textwithImage = [];
        for(let j=0; j<req.files.length; j++){
            textwithImage[j] = req.body.imageText[j];
        }

        var varient = new Varient({
            brand_id: req.body.brand_id,
            product_id: req.body.product_id,
            varientName: req.body.varientName,
            exShowroomPrice: req.body.exShowroomPrice,
            VarientRanking: req.body.VarientRanking,
            varientGroupData: req.body.varientGroupData,
            FeatureExplained: req.body.FeatureExplained,
            active: req.body.active,
            seater: req.body.seater,
            fuel: req.body.fuel,
            transmission: req.body.transmission,
            GNCAP: req.body.GNCAP,
            EngineName: req.body.EngineName,
            Highlight: req.body.Highlight,
            summary: req.body.summary,
            automatic: req.body.automatic,
            iMT: req.body.iMT,
            manual: req.body.manual,
            images: arrImages,
            imageText: textwithImage,
            Ventilated_Seats: req.body.Ventilated_Seats,
            Air_Purifier: req.body.Air_Purifier,
            Cruise_Control: req.body.Cruise_Control,
            Rain_Sensing_Wipers:req.body.Rain_Sensing_Wipers,
            sunroof:req.body.sunroof,
            automaticHeadLamp: req.body.automaticHeadLamp,
            Follow_Me_Home_Headlights: req.body.Follow_Me_Home_Headlights,
            keyLess_Entry:req.body.keyLess_Entry,
            ignition:req.body.ignition,
            Ambient_Lighting:req.body.Ambient_Lighting,
            Steering_Adjustment:req.body.Steering_Adjustment,
            Air_Conditioning:req.body.Air_Conditioning,
            Climate_Zones:req.body.Climate_Zones,
            rearACvent:req.body.rearACvent,
            frontArmrest:req.body.frontArmrest,
            rearArmrest:req.body.rearArmrest,
            IVRM:req.body.IVRM,
            OVRM:req.body.OVRM,
            Steering_Mounted_Controls:req.body.Steering_Mounted_Controls,
            Rear_Windshield_Defogger:req.body.Rear_Windshield_Defogger,
            Front_Windshield_Defogger:req.body.Front_Windshield_Defogger,
            Cooled_Glovebox:req.body.Cooled_Glovebox,
            Global_NCAP_Rating:req.body.Global_NCAP_Rating,
            airbags:req.body.airbags,
            airbagLocation:req.body.airbagLocation,
            ADAS:req.body.ADAS,
            ADAS_Features:req.body.ADAS_Features,
            Reverse_Camera: req.body.Reverse_Camera,
            Reverse_Camera_Guidelines:req.body.Reverse_Camera_Guidelines,
            TMPS:req.body.TMPS,
            Hill_Hold_Assist:req.body.Hill_Hold_Assist,
            Hill_Descent_Control:req.body.Hill_Descent_Control,
            Roll_Over_Mitigation:req.body.Roll_Over_Mitigation,
            Disc_Brakes:req.body.Disc_Brakes,
            ESP:req.body.ESP,
            ABS:req.body.ABS,
            EBD:req.body.EBD,
            Brake_assist:req.body.Brake_assist,
            ISOFIX_Mounts:req.body.ISOFIX_Mounts,
            Driver_CoDriver_Seatbelt_Warning:req.body.Driver_CoDriver_Seatbelt_Warning,
            High_speed_Alert_System:req.body.High_speed_Alert_System,
            Speed_Sensing_Door_Locks: req.body.Speed_Sensing_Door_Locks,
            Immobiliser:req.body.Immobiliser,
            Parking_Sensor:req.body.Parking_Sensor,
            Touch_Screen_Infotainment :req.body.Touch_Screen_Infotainment,
            Android_Apple_Carplay :req.body.Android_Apple_Carplay,
            Speakers:req.body.Speakers,
            tweeters:req.body.tweeters,
            subWoofers:req.body.subWoofers,
            USB_C_PORT :req.body.USB_C_PORT,
            FiveAmpiearchargingport:req.body.FiveAmpiearchargingport,
            charging12V_Port:req.body.charging12V_Port,
            wireless_Charging:req.body.wireless_Charging,
            connectedCarTech:req.body.connectedCarTech,
            engine_Name: req.body.engine_Name,
            Engine_Capacity: req.body.Engine_Capacity,
            fuel: req.body.fuel,
            transmission_2: req.body.transmission_2,
            number_of_Gears: req.body.number_of_Gears,
            paddle_shifter: req.body.paddle_shifter,
            max_power: req.body.max_power,
            torque: req.body.torque,
            speed_0_to_100: req.body.speed_0_to_100,
            top_speed: req.body.top_speed,
            EV_Battery_capacity: req.body.EV_Battery_capacity,
            Hybrid_Capacity: req.body.Hybrid_Capacity,
            Battery_type: req.body.Battery_type,
            Electric_Motor_placement: req.body.Electric_Motor_placement,
            EV_Range: req.body.EV_Range,
            EV_Charging_time: req.body.EV_Charging_time,
            Max_Electric_Motor_Power: req.body.Max_Electric_Motor_Power,
            Turbo_Charged: req.body.Turbo_Charged,
            Hybrid_Type: req.body.Hybrid_Type,
            driveTrain: req.body.driveTrain,
            Driving_Modes: req.body.Driving_Modes,
            offRoadModes: req.body.offRoadModes,
            Differential_Lock_Type: req.body.Differential_Lock_Type,
            Limited_Slip_Differential: req.body.Limited_Slip_Differential,
            Seat_Upholstery: req.body.Seat_Upholstery,
            Seats_Adjustment: req.body.Seats_Adjustment,
            Driver_Seat_Adjustment: req.body.Driver_Seat_Adjustment,
            Passenger_Seat_Adjustment: req.body.Passenger_Seat_Adjustment,
            Rear_Seat_Adjustment: req.body.Rear_Seat_Adjustment,
            Welcome_Seats:req.body.Welcome_Seats,
            Memory_Seats:req.body.Memory_Seats,
            headLight:req.body.headLight,
            tailLight:req.body.tailLight,
            radioAntina:req.bodyradioAntina,
            OVRMColor: req.body.OVRMColor,
            DRL: req.body.DRL,
            sideIndicator: req.body.sideIndicator,
            rear_windsheeld_wiper: req.body.rear_windsheeld_wiper,
            Ground_Clearance: req.body.Ground_Clearance,
            Length: req.body.Length,
            Weidth: req.body.Weidth,
            Height: req.body.Height,
            wheelBase: req.body.wheelBase,
            turningRadious: req.body.turningRadious,
            Kerb_Weight: req.body.Kerb_Weight,
            Front_Tyre_Profile: req.body.Front_Tyre_Profile,
            Rear_Tyre_Profile: req.body.Rear_Tyre_Profile,
            Spare_Tyre_Profile: req.body.Spare_Tyre_Profile,
            Front_Suspension: req.body.Front_Suspension,
            Rear_Suspension: req.body.Rear_Suspension,
            Cupholders:req.body.Cupholders,
            Fuel_Tank_Capacity:req.body.Fuel_Tank_Capacity,
            boot_Space:req.body.boot_Space,
            Boot_Space_after:req.body.Boot_Space_after,
            Engine_Name_Varient:req.body.Engine_Name_Varient,
            Company_Claimed:req.body.Company_Claimed,
            City_Real_World:req.body.City_Real_World,
            Highway_Real_World:req.body.Highway_Real_World,
            roof_rails: req.body.roof_rails,
            front_fog_lights: req.body.front_fog_lights,
            spare_wheel_type: req.body.spare_wheel_type
        });
        const varient_Data = await varient.save();
        res.status(200).send({sucess:true, msg:"Varient Details", data:varient_Data});

    } catch(error){
        res.status(400).send({success:false,msg:error.message});
    }

}

// New get_all_variants function
const get_all_variants = async (req, res) => {
    try {
        const variants = await Varient.find({})
        .populate({ path: 'brand_id', select: 'name' }) // Populate brand details. Adjust 'brandDetails' to include the fields you need.
            .populate({ path: 'product_id', select: 'carname' }); // Populate product details. Adjust 'productDetails' to include the fields you need.
        res.status(200).send({ success: true, msg: "All Varients Retrieved", data: variants });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

//total number for varient for app and web
const count_variants_by_product_id = async (req, res) => {
    try {
        const { product_id } = req.params; 
        const variantCount = await Varient.countDocuments({
            product_id: product_id,
            active: true 
        });

        res.status(200).send({ success: true, msg: `Total variants for the product: ${variantCount}`, count: variantCount });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};


//Delete Varient from varient table

const delete_variant = async (req, res) => {
    try {
        const variantId = req.params.id;
        const variant = await Varient.findById(variantId);
        if (!variant) {
            return res.status(404).send({ success: false, msg: "Variant not found" });
        }

        if (!variant.images || !Array.isArray(variant.images)) {
            return res.status(400).send({ success: false, msg: "Invalid images array" });
        }

        // Debugging: Log variant images
        console.log('Variant images:', variant.images);

        const deletePromises = variant.images.map(image => {
            // Debugging: Log each image filename
            console.log('Processing image:', image);

            if (!image.filename) {
                console.error('Image filename is undefined:', image);
                return Promise.resolve(); // Skip this image
            }

            const imagePath = path.join(__dirname, '..', 'public', 'variantImages', image.filename); 
            return fs.promises.unlink(imagePath)
                .catch(err => console.error(`Failed to delete image ${image.filename}: ${err}`));
        });

        await Promise.all(deletePromises);

        await Varient.findByIdAndDelete(variantId);

        res.status(200).send({ success: true, msg: "Variant and its images deleted successfully" });
    } catch (error) {
        console.error(error); 
        res.status(500).send({ success: false, msg: error.message });
    }
};
//get active varient product wise for Frontend
const get_active_variants_by_product = async (req, res) => {
    try {
        const { product_id } = req.params; 
        const activeVariants = await Varient.find({
            product_id: product_id,
            active: true
        }).select('-images -imageText'); 

        if (activeVariants.length === 0) {
            return res.status(404).send({ success: false, msg: "No active variants found for this product" });
        }

        res.status(200).send({ success: true, msg: `Active variants for the product sorted by ranking`, data: activeVariants });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

//Find Varient by id
const find_variant_by_id = async (req, res) => {
    try {
        const variantId = req.params.id;

        const variant = await Varient.findById(variantId)
            .populate('brand_id', 'name') 
            .populate('product_id', 'carname'); 

        if (!variant) {
            return res.status(404).send({ success: false, msg: "Variant not found" });
        }

        res.status(200).send({ success: true, msg: "Variant found", data: variant });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};
//for app varient page
const get_variant_by_id_forapp = async (req, res) => {
    try {
        const { id } = req.params; // Extracting the ID from the request parameters
        const variant = await Varient.findById(id)
            .populate('brand_id', 'name') // Assuming 'name' is the field you want from the brand
            .populate('product_id'); // Assuming 'carname' is the field you want from the product

        if (!variant) {
            return res.status(404).send({ success: false, msg: "Variant not found" });
        }

        res.status(200).send({ success: true, msg: "Variant found", data: variant });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};


//Edit Varient
const edit_variant = async (req, res) => {
    try {
        const variantId = req.params.id;
        const variant = await Varient.findById(variantId);
        if (!variant) {
            return res.status(404).send({ success: false, msg: "Variant not found" });
        }

        // Update variant details from req.body
        Object.keys(req.body).forEach(key => {
            variant[key] = req.body[key];
        });

        // If there are new files uploaded
        if (req.files && req.files.length > 0) {
            // Process the deletion of old images
            const deletionPromises = variant.images.map(oldImage => {
                if (oldImage && oldImage.filename) {
                    const imagePath = path.join(__dirname, '..', 'public', 'varientImages', oldImage.filename);
                    return fs.promises.unlink(imagePath).catch(err => {
                        console.error(`Failed to delete old image ${oldImage.filename}: ${err}`);
                    });
                } else {
                    return Promise.resolve();
                }
            });

            // Wait for all deletions to complete
            await Promise.all(deletionPromises);

            // Update variant with new images
            variant.images = req.files.map(file => ({
                filename: file.filename,
                path: `/varientImages/${file.filename}`
            }));
        }

        // Save the updated variant
        const updatedVariant = await variant.save();
        res.status(200).send({ success: true, msg: "Variant updated successfully", data: updatedVariant });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, msg: error.message });
    }
};


//DELETE ALL VARIENTS
// DELETE ALL VARIANTS
// DELETE ALL VARIANTS
const delete_all_variants = async (req, res) => {
    try {
        // Find all variants
        const variants = await Varient.find({});
        if (variants.length === 0) {
            return res.status(404).send({ success: false, msg: "No variants found to delete." });
        }

        // Prepare promises for deleting all variants and their images
        const deletePromises = variants.map(async (variant) => {
            if (!variant.images || !Array.isArray(variant.images)) {
                console.warn('No images found for variant:', variant._id);
                return Promise.resolve(); // Skip deletion if images are invalid or missing
            }

            // Delete images associated with this variant
            const imageDeletePromises = variant.images.map(image => {
                if (!image.filename) {
                    console.warn('Image filename is missing for variant:', variant._id);
                    return Promise.resolve(); // Skip deletion if filename is missing
                }

                const imagePath = path.join(__dirname, '..', 'public', 'varientImages', image.filename);
                return fs.promises.unlink(imagePath)
                    .catch(err => {
                        if (err.code === 'ENOENT') {
                            console.warn(`Image file not found: ${imagePath}`);
                        } else {
                            console.error(`Failed to delete image ${image.filename}: ${err}`);
                        }
                    });
            });

            // Wait for all image deletions to complete for this variant
            await Promise.all(imageDeletePromises);

            // Delete the variant itself
            return Varient.findByIdAndDelete(variant._id);
        });

        // Wait for all variants and their images to be deleted
        await Promise.all(deletePromises);

        res.status(200).send({ success: true, msg: "All variants and their images deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, msg: error.message });
    }
};



module.exports ={
    add_varint,
    get_all_variants,
    delete_variant,
    delete_all_variants,
    find_variant_by_id,
    count_variants_by_product_id,
    get_active_variants_by_product,
    get_variant_by_id_forapp,
    edit_variant
}