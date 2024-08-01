const mongoose = require('mongoose');

const varientSchema = new mongoose.Schema({
    brand_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand' 
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car' 
    },
    varientName:{
        type: String,
        required: true
    },
    exShowroomPrice:{
        type: String
    },
    VarientRanking:{
        type: String
    },
    varientGroupData:{
        type: String
       
    },
    FeatureExplained :{
        type: String
    },
    active:{
        type: String,
        required: true},
    seater: { type: String},
    fuel:  { type: String},
    transmission:  { type: String},
    GNCAP:  { type: String},
    EngineName:  { type: String},
    Highlight:  { type: String},
    summary:  { type: String},
    automatic:  { type: String},
    iMT: { type: String},
    manual: { type: String},
    images:{
        type: Array

    } ,
    imageText:{
        type: Array
    },
    Ventilated_Seats:{
        type: String
    },
    Air_Purifier:{
        type: String
    },
    Cruise_Control:{
        type: String
    },
    Rain_Sensing_Wipers:{type: String},
    sunroof:{type: String},
    automaticHeadLamp: {type: String},
    Follow_Me_Home_Headlights: {type: String},
    keyLess_Entry:{type: String},
    ignition:{type:String},
    Ambient_Lighting:{type: String},
    Steering_Adjustment:{type: String},
    Air_Conditioning:{type: String},
    Climate_Zones:{type:String},
    rearACvent:{type:String},
    frontArmrest:{type:String},
    rearArmrest:{type:String},
    IVRM:{type:String},
    OVRM:{type:String},
    Steering_Mounted_Controls:{type:String},
    Rear_Windshield_Defogger:{type:String},
    Front_Windshield_Defogger:{type:String},
    Cooled_Glovebox:{type:String},
    Global_NCAP_Rating:{type:String},
    airbags: {type:String},
    airbagLocation: {type:String},
    ADAS: {type:String},
    ADAS_Features:{type:String},
    Reverse_Camera:{type:String},
    Reverse_Camera_Guidelines:{type:String},
    TMPS: {type:String},
    Hill_Hold_Assist:{type:String},
    Hill_Descent_Control:{type:String},
    Roll_Over_Mitigation:{type:String},
    Disc_Brakes:{type:String},
    ESP:{type:String},
    ABS:{type:String},
    EBD:{type:String},
    Brake_assist:{type:String},
    ISOFIX_Mounts:{type:String},
    Driver_CoDriver_Seatbelt_Warning:{type:String},
    High_speed_Alert_System:{type: String},
    Speed_Sensing_Door_Locks: {type: String},
    Immobiliser:{type: String},
    Parking_Sensor: {type:String},
    Touch_Screen_Infotainment : {type:String},
    Android_Apple_Carplay : {type:String},
    Speakers: {type:String},
    tweeters: {type:String},
    subWoofers: {type:String},
    USB_C_PORT : {type:String},
    FiveAmpiearchargingport: {type:String},
    charging12V_Port: {type:String},
    wireless_Charging: {type:String},
    connectedCarTech: {type:String},
    engine_Name: {type:String},
    Engine_Capacity: {type:String},
    fuel: {type:String},
    transmission_2: {type:String},
    number_of_Gears: {type:String},
    roof_rails: {type:String},
    front_fog_lights: {type:String},
    spare_wheel_type: {type:String},
    paddle_shifter: {type:String},
    max_power: {type:String},
    torque: {type:String},
    speed_0_to_100: {type:String},
    top_speed: {type:String},
    EV_Battry_capacity: {type:String},
    Hybrid_Capacity: {type:String},
    Battery_type: {type:String},
    Electric_Motor_placement: {type:String},
    EV_Range: {type:String},
    EV_Charging_time: {type:String},
    Max_Electric_Motor_Power: {type:String},
    Turbo_Charged: {type:String},
    Hybrid_Type: {type:String},
    driveTrain: {type:String},
    Driving_Modes: {type:String},
    offRoadModes: {type:String},
    Differential_Lock_Type: {type:String},
    Limited_Slip_Differential: {type:String},
    Seat_Upholstery: {type:String},
    Seats_Adjustment: {type:String},
    Driver_Seat_Adjustment: {type:String},
    Passenger_Seat_Adjustment: {type:String},
    Rear_Seat_Adjustment: {type:String},
    Welcome_Seats:{
        type:String
    },
    Memory_Seats:{
        type:String
    },
    headLight:{type:String},
    tailLight:{type:String},
    radioAntina: {type:String},
    OVRMColor: {type:String},
    DRL: {type:String},
    sideIndicator: {type:String},
    rear_windsheeld_wiper: {type:String},
    Ground_Clearance: {type:String},
    Length: {type:String},
    Weidth: {type:String},
    Height: {type:String},
    wheelBase: {type:String},
    turningRadious: {type:String},
    Kerb_Weight: {type:String},
    Front_Tyre_Profile: {type:String},
    Rear_Tyre_Profile: {type:String},
    Spare_Tyre_Profile: {type:String},
    Front_Suspension: {type:String},
    Rear_Suspension: {type:String},
    Cupholders:{type:String},
    Fuel_Tank_Capacity: {type:String},
    boot_Space: {type:String},
    Boot_Space_after:{type:String},
    Engine_Name_Varient: {type:String},
    Company_Claimed:{type:String},
    City_Real_World:{type:String},
    Highway_Real_World: {type:String} 

},{ timestamps: true });

module.exports = mongoose.model('varient', varientSchema);