const varient = require("../models/varientModel");
const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');



const csvControllerVarient = async(req, res) =>{
try{
    const varient_data_arr = [];
    csv()
    .fromFile(req.file.path)
    .then(async(response)=>{

        for(var x=0; x<response.length; x++){
            varient_data_arr.push({
                brand_id: response[x].brand_id,
                product_id: response[x].product_id,
                varientName: response[x].varientName,
                exShowroomPrice: response[x].exShowroomPrice,
                VarientRanking: response[x].VarientRanking,
                varientGroupData: response[x].varientGroupData,
                active: response[x].active,
                seater: response[x].seater,
                fuel: response[x].fuel,
                FeatureExplained : response[x].FeatureExplained,
                transmission: response[x].transmission,
                GNCAP: response[x].GNCAP,
                EngineName: response[x].EngineName,
                Highlight: response[x].Highlight,
                summary: response[x].summary,
                automatic: response[x].automatic,
                iMT: response[x].iMT,
                manual: response[x].manual,
                iMT: response[x].iMT,
                images: response[x].images,
                imageText: response[x].imageText,
                Ventilated_Seats: response[x].Ventilated_Seats,
                Air_Purifier: response[x].Air_Purifier,
                Cruise_Control: response[x].Cruise_Control,
                Rain_Sensing_Wipers: response[x].Rain_Sensing_Wipers,
                sunroof: response[x].sunroof,
                automaticHeadLamp: response[x].automaticHeadLamp,
                Follow_Me_Home_Headlights: response[x].Follow_Me_Home_Headlights,
                keyLess_Entry: response[x].keyLess_Entry,
                ignition: response[x].ignition,
                Ambient_Lighting: response[x].Ambient_Lighting,
                Steering_Adjustment: response[x].Steering_Adjustment,
                Air_Conditioning: response[x].Air_Conditioning,
                Climate_Zones: response[x].Climate_Zones,
                rearACvent: response[x].rearACvent,
                frontArmrest: response[x].frontArmrest,
                rearArmrest: response[x].rearArmrest,
                IVRM: response[x].IVRM,
                OVRM: response[x].OVRM,
                Steering_Mounted_Controls: response[x].Steering_Mounted_Controls,
                Rear_Windshield_Defogger: response[x].Rear_Windshield_Defogger,
                Front_Windshield_Defogger: response[x].Front_Windshield_Defogger,
                Cooled_Glovebox: response[x].Cooled_Glovebox,
                Global_NCAP_Rating: response[x].Global_NCAP_Rating,
                airbags: response[x].airbags,
                airbagLocation: response[x].airbagLocation,
                ADAS: response[x].ADAS,
                ADAS_Features: response[x].ADAS_Features,
                Reverse_Camera: response[x].Reverse_Camera,
                Reverse_Camera_Guidelines: response[x].Reverse_Camera_Guidelines,
                TMPS: response[x].TMPS,
                Hill_Hold_Assist: response[x].Hill_Hold_Assist,
                Hill_Descent_Control: response[x].Hill_Descent_Control,
                Roll_Over_Mitigation: response[x].Roll_Over_Mitigation,
                Disc_Brakes: response[x].Disc_Brakes,
                ESP: response[x].ESP,
                ABS: response[x].ABS,
                EBD: response[x].EBD,
                Brake_assist: response[x].Brake_assist,
                ISOFIX_Mounts: response[x].ISOFIX_Mounts,
                Driver_CoDriver_Seatbelt_Warning: response[x].Driver_CoDriver_Seatbelt_Warning,
                High_speed_Alert_System: response[x].High_speed_Alert_System,
                Speed_Sensing_Door_Locks: response[x].Speed_Sensing_Door_Locks,
                Immobiliser: response[x].Immobiliser,
                Parking_Sensor: response[x].Parking_Sensor,
                Touch_Screen_Infotainment: response[x].Touch_Screen_Infotainment,
                Android_Apple_Carplay: response[x].Android_Apple_Carplay,
                Speakers: response[x].Speakers,
                tweeters: response[x].tweeters,
                subWoofers: response[x].subWoofers,
                USB_C_PORT: response[x].USB_C_PORT,
                FiveAmpiearchargingport: response[x].FiveAmpiearchargingport,
                charging12V_Port: response[x].charging12V_Port,
                wireless_Charging: response[x].wireless_Charging,
                connectedCarTech: response[x].connectedCarTech,
                engine_Name: response[x].engine_Name,
                Engine_Capacity: response[x].Engine_Capacity,
                fuel: response[x].fuel,
                transmission_2: response[x].transmission_2,
                number_of_Gears: response[x].number_of_Gears,
                paddle_shifter: response[x].paddle_shifter,
                max_power: response[x].max_power,
                torque: response[x].torque,
                speed_0_to_100: response[x].speed_0_to_100,
                top_speed: response[x].top_speed,
                EV_Battry_capacity: response[x].EV_Battry_capacity,
                Hybrid_Capacity: response[x].Hybrid_Capacity,
                Battery_type: response[x].Battery_type,
                Electric_Motor_placement: response[x].Electric_Motor_placement,
                EV_Range: response[x].EV_Range,
                EV_Charging_time: response[x].EV_Charging_time,
                Max_Electric_Motor_Power: response[x].Max_Electric_Motor_Power,
                Turbo_Charged: response[x].Turbo_Charged,
                Hybrid_Type: response[x].Hybrid_Type,
                driveTrain: response[x].driveTrain,
                Driving_Modes: response[x].Driving_Modes,
                offRoadModes: response[x].offRoadModes,
                Differential_Lock_Type: response[x].Differential_Lock_Type,
                Limited_Slip_Differential: response[x].Limited_Slip_Differential,
                Seat_Upholstery: response[x].Seat_Upholstery,
                Seats_Adjustment: response[x].Seats_Adjustment,
                Driver_Seat_Adjustment: response[x].Driver_Seat_Adjustment,
                Passenger_Seat_Adjustment: response[x].Passenger_Seat_Adjustment,
                Rear_Seat_Adjustment: response[x].Rear_Seat_Adjustment,
                Welcome_Seats: response[x].Welcome_Seats,
                Memory_Seats: response[x].Memory_Seats,
                headLight: response[x].headLight,
                tailLight: response[x].tailLight,
                radioAntina: response[x].radioAntina,
                OVRMColor: response[x].OVRMColor,
                DRL: response[x].DRL,
                sideIndicator: response[x].sideIndicator,
                rear_windsheeld_wiper: response[x].rear_windsheeld_wiper,
                Ground_Clearance: response[x].Ground_Clearance,
                Length: response[x].Length,
                Weidth: response[x].Weidth,
                Height: response[x].Height,
                wheelBase: response[x].wheelBase,
                turningRadious: response[x].turningRadious,
                Kerb_Weight: response[x].Kerb_Weight,
                Front_Tyre_Profile: response[x].Front_Tyre_Profile,
                Rear_Tyre_Profile: response[x].Rear_Tyre_Profile,
                Spare_Tyre_Profile: response[x].Spare_Tyre_Profile,
                Front_Suspension: response[x].Front_Suspension,
                Rear_Suspension: response[x].Rear_Suspension,
                Cupholders: response[x].Cupholders,
                Fuel_Tank_Capacity: response[x].Fuel_Tank_Capacity,
                boot_Space: response[x].boot_Space,
                Boot_Space_after: response[x].Boot_Space_after,
                Engine_Name_Varient: response[x].Engine_Name_Varient,
                Company_Claimed: response[x].Company_Claimed,
                City_Real_World: response[x].City_Real_World,
                Highway_Real_World: response[x].Highway_Real_World,
                roof_rails: response[x].roof_rails,
                front_fog_lights: response[x].front_fog_lights,
                spare_wheel_type: response[x].spare_wheel_type
        })}
       await varient.insertMany(varient_data_arr);

    })
    res.send({
        success: true,
        message: "CSV for Varient Has Been Uploaded Successfully"
    })
}
catch(e){
    console.log(e)
    res.send({
        success: false,
        message: e.message
    })
}
}



module.exports = {
    csvControllerVarient
}
