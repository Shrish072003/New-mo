import React, { useState, useEffect } from 'react';
import { IoCaretDown } from "react-icons/io5";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import defaultImageSrc from '../image/No-Image-Placeholder.svg.png';
import base64 from 'base64-js';


const Addvariant = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [cars, setCars] = useState([]);
  const [variant, setVariant] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [ADASfeature, setADASfeature] = useState('');
  const [airbagLocation, setairbagLocation] = useState('');
  const [featuresexplained, setFeaturesexplained] = useState('');
  const [summaryVarient, setSummaryVariant] = useState('');
  const [disable, setDisable] = useState(false);
  const [previewImage0, setPreviewImage] = useState();
  const [previewImage1, setPreviewImage1] = useState('');
  const [previewImage2, setPreviewImage2] = useState('');
  const [previewImage3, setPreviewImage3] = useState('');
  const [previewImage4, setPreviewImage4] = useState('');
  const [previewImage5, setPreviewImage5] = useState('');
  const [previewImage6, setPreviewImage6] = useState('');
  const [previewImage7, setPreviewImage7] = useState('');
  const [previewImage8, setPreviewImage8] = useState('');
  const [previewImage9, setPreviewImage9] = useState('');
  const [previewImage10, setPreviewImage10] = useState('');
  const [previewImage11, setPreviewImage11] = useState('');
  const [previewImage12, setPreviewImage12] = useState('');
  const [previewImage13, setPreviewImage13] = useState('');
  const [previewImage14, setPreviewImage14] = useState('');
  const [previewImage15, setPreviewImage15] = useState('');
  const [previewImage16, setPreviewImage16] = useState('');
  const [previewImage17, setPreviewImage17] = useState('');
  const [previewImage18, setPreviewImage18] = useState('');
  const [previewImage19, setPreviewImage19] = useState('');
  const [previewText0, setpreviewText] = useState('');
  const [previewText1, setpreviewText1] = useState('');
  const [previewText2, setpreviewText2] = useState('');
  const [previewText3, setpreviewText3] = useState('');
  const [previewText4, setpreviewText4] = useState('');
  const [previewText5, setpreviewText5] = useState('');
  const [previewText6, setpreviewText6] = useState('');
  const [previewText7, setpreviewText7] = useState('');
  const [previewText8, setpreviewText8] = useState('');
  const [previewText9, setpreviewText9] = useState('');
  const [previewText10, setpreviewText10] = useState('');
  const [previewText11, setpreviewText11] = useState('');
  const [previewText12, setpreviewText12] = useState('');
  const [previewText13, setpreviewText13] = useState('');
  const [previewText14, setpreviewText14] = useState('');
  const [previewText15, setpreviewText15] = useState('');
  const [previewText16, setpreviewText16] = useState('');
  const [previewText17, setpreviewText17] = useState('');
  const [previewText18, setpreviewText18] = useState('');
  const [previewText19, setpreviewText19] = useState('');


  const [exShowroomPrice, setexShowroomPrice] = useState('');
  const [VarientRanking, setVarientRanking] = useState('');


  const [seater, setSeater] = useState('');
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [transmission_2, setTransmission_2] = useState('');
  const [GNCAP, setGNCAP] = useState('');
  const [EngineName, setEngineName] = useState('');
  const [Highlight, setHighlight] = useState('');

  const [automatic, setautomatic] = useState('');
  const [manual, setmanual] = useState('');
  const [iMT, setiMT] = useState('');

  const [Ventilated_Seats, setVentilated_Seats] = useState('');
  const [Air_Purifier, setAir_Purifier] = useState('');
  const [Cruise_Control, setCruise_Control] = useState('');
  const [Rain_Sensing_Wipers, setRain_Sensing_Wipers] = useState('');
  const [sunroof, setsunroof] = useState('');
  const [automaticHeadLamp, setautomaticHeadLamp] = useState('');
  const [Follow_Me_Home_Headlights, setFollow_Me_Home_Headlights] = useState('');
  const [keyLess_Entry, setkeyLess_Entry] = useState('');
  const [ignition, setignition] = useState('');
  const [Ambient_Lighting, setAmbient_Lighting] = useState('');
  const [Steering_Adjustment, setSteering_Adjustment] = useState('');
  const [Air_Conditioning, setAir_Conditioning] = useState('');
  const [Climate_Zones, setClimate_Zones] = useState('');
  const [rearACvent, setrearACvent] = useState('');
  const [frontArmrest, setfrontArmrest] = useState('');
  const [rearArmrest, setrearArmrest] = useState('');
  const [IVRM, setIVRM] = useState('');
  const [OVRM, setOVRM] = useState('');
  const [Steering_Mounted_Controls, setSteering_Mounted_Controls] = useState('');
  const [Rear_Windshield_Defogger, setRear_Windshield_Defogger] = useState('');
  const [Front_Windshield_Defogger, setFront_Windshield_Defogger] = useState('');
  const [Cooled_Glovebox, setCooled_Glovebox] = useState('');
  const [Global_NCAP_Rating, setGlobal_NCAP_Rating] = useState('');
  const [airbags, setairbags] = useState('');
  // const [airbagLocation, setairbagLocation] = useState('');
  const [ADAS, setADAS] = useState('');
  const [ADAS_Features, setADAS_Features] = useState('');
  const [Reverse_Camera, setReverse_Camera] = useState('');
  const [Reverse_Camera_Guidelines, setReverse_Camera_Guidelines] = useState('');
  const [TMPS, setTMPS] = useState('');
  const [Hill_Hold_Assist, setHill_Hold_Assist] = useState('');
  const [Hill_Descent_Control, setHill_Descent_Control] = useState('');
  const [Roll_Over_Mitigation, setRoll_Over_Mitigation] = useState('');
  const [Disc_Brakes, setDisc_Brakes] = useState('');
  const [ESP, setESP] = useState('');
  const [ABS, setABS] = useState('');
  const [EBD, setEBD] = useState('');
  const [Brake_assist, setBrake_assist] = useState('');
  const [ISOFIX_Mounts, setISOFIX_Mounts] = useState('');
  const [Driver_CoDriver_Seatbelt_Warning, setDriver_CoDriver_Seatbelt_Warning] = useState('');
  const [High_speed_Alert_System, setHigh_speed_Alert_System] = useState('');
  const [Speed_Sensing_Door_Locks, setSpeed_Sensing_Door_Locks] = useState('');
  const [Immobiliser, setImmobiliser] = useState('');
  const [Parking_Sensor, setParking_Sensor] = useState('');
  const [Touch_Screen_Infotainment, setTouch_Screen_Infotainment] = useState('');
  const [Android_Apple_Carplay, setAndroid_Apple_Carplay] = useState('');
  const [Speakers, setSpeakers] = useState('');
  const [tweeters, settweeters] = useState('');
  const [subWoofers, setsubWoofers] = useState('');
  const [USB_C_PORT, setUSB_C_PORT] = useState('');
  const [FiveAmpiearchargingport, setFiveAmpiearchargingport] = useState('');
  const [charging12V_Port, setcharging12V_Port] = useState('');
  const [wireless_Charging, setwireless_Charging] = useState('');
  const [connectedCarTech, setconnectedCarTech] = useState('');
  const [engine_Name, setengine_Name] = useState('');
  const [Engine_Capacity, setEngine_Capacity] = useState('');
  const [number_of_Gears, setnumber_of_Gears] = useState('');
  const [paddle_shifter, setpaddle_shifter] = useState('');
  const [max_power, setmax_power] = useState('');
  const [torque, settorque] = useState('');


  const [speed_0_to_100, setSpeed_0_to_100] = useState('');
  const [top_speed, setTop_speed] = useState('');
  const [EV_Battry_capacity, setEV_Battry_capacity] = useState('');
  const [Hybrid_Capacity, setHybrid_Capacity] = useState('');
  const [Battery_type, setBattery_type] = useState('');
  const [Electric_Motor_placement, setElectric_Motor_placement] = useState('');
  const [EV_Range, setEV_Range] = useState('');
  const [EV_Charging_time, setEV_Charging_time] = useState('');
  const [Max_Electric_Motor_Power, setMax_Electric_Motor_Power] = useState('');
  const [Turbo_Charged, setTurbo_Charged] = useState('');
  const [Hybrid_Type, setHybrid_Type] = useState('');
  const [driveTrain, setDriveTrain] = useState('');
  const [Driving_Modes, setDriving_Modes] = useState('');
  const [offRoadModes, setOffRoadModes] = useState('');
  const [Differential_Lock_Type, setDifferential_Lock_Type] = useState('');
  const [Limited_Slip_Differential, setLimited_Slip_Differential] = useState('');
  const [Seat_Upholstery, setSeat_Upholstery] = useState('');
  const [Seats_Adjustment, setSeats_Adjustment] = useState('');
  const [Driver_Seat_Adjustment, setDriver_Seat_Adjustment] = useState('');
  const [Passenger_Seat_Adjustment, setPassenger_Seat_Adjustment] = useState('');
  const [Rear_Seat_Adjustment, setRear_Seat_Adjustment] = useState('');
  const [Welcome_Seats, setWelcome_Seats] = useState('');
  const [Memory_Seats, setMemory_Seats] = useState('');
  const [headLight, setHeadLight] = useState('');
  const [tailLight, setTailLight] = useState('');
  const [radioAntina, setRadioAntina] = useState('');
  const [OVRMColor, setOVRMColor] = useState('');
  const [DRL, setDRL] = useState('');
  const [sideIndicator, setSideIndicator] = useState('');
  const [rear_windsheeld_wiper, setRear_Windsheeld_Wiper] = useState('');
  const [Ground_Clearance, setGround_Clearance] = useState('');
  const [Length, setLength] = useState('');
  const [Weidth, setWeidth] = useState('');
  const [Height, setHeight] = useState('');
  const [wheelBase, setWheelBase] = useState('');
  const [turningRadious, setTurningRadious] = useState('');
  const [Kerb_Weight, setKerb_Weight] = useState('');
  const [Front_Tyre_Profile, setFront_Tyre_Profile] = useState('');
  const [Rear_Tyre_Profile, setRear_Tyre_Profile] = useState('');
  const [Spare_Tyre_Profile, setSpare_Tyre_Profile] = useState('');
  const [Front_Suspension, setFront_Suspension] = useState('');
  const [Rear_Suspension, setRear_Suspension] = useState('');
  const [Cupholders, setCupholders] = useState('');
  const [Fuel_Tank_Capacity, setFuel_Tank_Capacity] = useState('');
  const [boot_Space, setBoot_Space] = useState('');
  const [Boot_Space_after, setBoot_Space_after] = useState('');
  const [Engine_Name_Varient, setEngine_Name_Varient] = useState('');
  const [Company_Claimed, setCompany_Claimed] = useState('');
  const [City_Real_World, setCity_Real_World] = useState('');
  const [Highway_Real_World, setHighway_Real_World] = useState('');
  const [varientgroup, setVarientgroup] = useState('');
  const [Roof_rails, setRoof_rails] = useState('');
  const [Fog_lights, setFog_lights] = useState('');
  const [Spare_wheel, setSpare_wheel] = useState('');

  const [PreviewImagedef, setPreviewImagedef] = useState('');
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/brands`);
        const data = await response.json();
        const sortedBrands = data.sort((a, b) => a.name.localeCompare(b.name));
        setBrands(sortedBrands);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      if (selectedBrand) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API}/api/cars/brand/${selectedBrand}`);
          const data = await response.json();
          if (Array.isArray(data)) {
            setCars(data);
          } else {
            setCars([]);
          }
        } catch (error) {
          console.error('Error fetching cars:', error);
          setCars([]);
        }
      } else {
        setCars([]);
      }
    };
    fetchCars();
  }, [selectedBrand]);


  const appendPreviewImage = (formData, previewImage, PreviewImagedef, index) => {
    
    const image = previewImage || PreviewImagedef;
    formData.append(`images`, image);
  };
  
  const previewImages = [previewImage0, previewImage1, previewImage2, previewImage3, previewImage4, previewImage5, previewImage6, previewImage7, previewImage8, previewImage9, previewImage10, previewImage11, previewImage12, previewImage13, previewImage14, previewImage15, previewImage16, previewImage17, previewImage18, previewImage19];






  const appendPreviewText = (formData, previewText, index) => {
    const text = previewText || "No data available";
    formData.append(`imageText`, text);
  };
    const previewTexts = [previewText0, previewText1, previewText2, previewText3, previewText4, previewText5, previewText6, previewText7, previewText8, previewText9, previewText10, previewText11, previewText12, previewText13, previewText14, previewText15, previewText16, previewText17, previewText18, previewText19];
  



  const handleClick = async () => {
    let formData = new FormData();
    formData.append('brand_id', selectedBrand);
    formData.append('product_id', selectedCar);
    formData.append('varientName', variant);
    formData.append('active', disable);
    formData.append('airbagLocation', airbagLocation);
    formData.append('featuresexplained', featuresexplained);
    formData.append('summary', summaryVarient);

    previewImages.forEach((previewImage, index) => {
      appendPreviewImage(formData, previewImage, PreviewImagedef, index);
    });

    previewTexts.forEach((previewText, index) => {
      appendPreviewText(formData, previewText, index);
    });

    formData.append('exShowroomPrice', exShowroomPrice);
    formData.append('ADAS_Features', ADASfeature);


    formData.append('VarientRanking', VarientRanking);
    formData.append('FeatureExplained', featuresexplained);

    formData.append('seater', seater);
    formData.append('transmission', transmission);
    formData.append('transmission_2', transmission_2);
    formData.append('fuel', fuel);
    formData.append('Highlight', Highlight);
    formData.append('EngineName', EngineName);
    formData.append('GNCAP', GNCAP);
    formData.append('automatic', automatic);
    formData.append('iMT', iMT);
    formData.append('manual', manual);

    formData.append('Ventilated_Seats', Ventilated_Seats);
    formData.append('Air_Purifier', Air_Purifier);
    formData.append('Cruise_Control', Cruise_Control);
    formData.append('Rain_Sensing_Wipers', Rain_Sensing_Wipers);
    formData.append('sunroof', sunroof);
    formData.append('automaticHeadLamp', automaticHeadLamp);
    formData.append('Follow_Me_Home_Headlights', Follow_Me_Home_Headlights);
    formData.append('keyLess_Entry', keyLess_Entry);
    formData.append('ignition', ignition);
    formData.append('Ambient_Lighting', Ambient_Lighting);
    formData.append('Steering_Adjustment', Steering_Adjustment);
    formData.append('Air_Conditioning', Air_Conditioning);
    formData.append('Climate_Zones', Climate_Zones);
    formData.append('rearACvent', rearACvent);
    formData.append('frontArmrest', frontArmrest);
    formData.append('rearArmrest', rearArmrest);
    formData.append('IVRM', IVRM);
    formData.append('OVRM', OVRM);
    formData.append('Steering_Mounted_Controls', Steering_Mounted_Controls);
    formData.append('Rear_Windshield_Defogger', Rear_Windshield_Defogger);
    formData.append('Front_Windshield_Defogger', Front_Windshield_Defogger);
    formData.append('Cooled_Glovebox', Cooled_Glovebox);
    formData.append('Global_NCAP_Rating', Global_NCAP_Rating);
    formData.append('airbags', airbags);
    formData.append('ADAS', ADAS);
    // formData.append('ADAS_Features', ADAS_Features);
    formData.append('Reverse_Camera', Reverse_Camera);
    formData.append('Reverse_Camera_Guidelines', Reverse_Camera_Guidelines);
    formData.append('TMPS', TMPS);
    formData.append('Hill_Hold_Assist', Hill_Hold_Assist);
    formData.append('Hill_Descent_Control', Hill_Descent_Control);
    formData.append('Roll_Over_Mitigation', Roll_Over_Mitigation);
    formData.append('Disc_Brakes', Disc_Brakes);
    formData.append('ESP', ESP);
    formData.append('ABS', ABS);
    formData.append('EBD', EBD);
    formData.append('Brake_assist', Brake_assist);
    formData.append('ISOFIX_Mounts', ISOFIX_Mounts);
    formData.append('Driver_CoDriver_Seatbelt_Warning', Driver_CoDriver_Seatbelt_Warning);
    formData.append('High_speed_Alert_System', High_speed_Alert_System);
    formData.append('Speed_Sensing_Door_Locks', Speed_Sensing_Door_Locks);
    formData.append('Immobiliser', Immobiliser);
    formData.append('Parking_Sensor', Parking_Sensor);
    formData.append('Touch_Screen_Infotainment', Touch_Screen_Infotainment);
    formData.append('Android_Apple_Carplay', Android_Apple_Carplay);
    formData.append('Speakers', Speakers);
    formData.append('tweeters', tweeters);
    formData.append('subWoofers', subWoofers);
    formData.append('USB_C_PORT', USB_C_PORT);
    formData.append('FiveAmpiearchargingport', FiveAmpiearchargingport);
    formData.append('charging12V_Port', charging12V_Port);
    formData.append('wireless_Charging', wireless_Charging);
    formData.append('connectedCarTech', connectedCarTech);
    formData.append('engine_Name', engine_Name);
    formData.append('Engine_Capacity', Engine_Capacity);
    formData.append('number_of_Gears', number_of_Gears);
    formData.append('paddle_shifter', paddle_shifter);
    formData.append('max_power', max_power);
    formData.append('torque', torque);
    // formData.append('Climate_Zones', Climate_Zones);


    formData.append('speed_0_to_100', speed_0_to_100);
    formData.append('top_speed', top_speed);
    formData.append('EV_Battry_capacity', EV_Battry_capacity);
    formData.append('Hybrid_Capacity', Hybrid_Capacity);
    formData.append('Battery_type', Battery_type);
    formData.append('Electric_Motor_placement', Electric_Motor_placement);
    formData.append('EV_Range', EV_Range);
    formData.append('EV_Charging_time', EV_Charging_time);
    formData.append('Max_Electric_Motor_Power', Max_Electric_Motor_Power);
    formData.append('Turbo_Charged', Turbo_Charged);
    formData.append('Hybrid_Type', Hybrid_Type);
    formData.append('driveTrain', driveTrain);
    formData.append('Driving_Modes', Driving_Modes);
    formData.append('offRoadModes', offRoadModes);
    formData.append('Differential_Lock_Type', Differential_Lock_Type);
    formData.append('Limited_Slip_Differential', Limited_Slip_Differential);
    formData.append('Seat_Upholstery', Seat_Upholstery);
    formData.append('Seats_Adjustment', Seats_Adjustment);
    formData.append('Driver_Seat_Adjustment', Driver_Seat_Adjustment);
    formData.append('Passenger_Seat_Adjustment', Passenger_Seat_Adjustment);
    formData.append('Rear_Seat_Adjustment', Rear_Seat_Adjustment);
    formData.append('Welcome_Seats', Welcome_Seats);
    formData.append('Memory_Seats', Memory_Seats);
    formData.append('headLight', headLight);
    formData.append('tailLight', tailLight);
    formData.append('radioAntina', radioAntina);
    formData.append('OVRMColor', OVRMColor);
    formData.append('DRL', DRL);
    formData.append('sideIndicator', sideIndicator);
    formData.append('rear_windsheeld_wiper', rear_windsheeld_wiper);
    formData.append('Ground_Clearance', Ground_Clearance);
    formData.append('Length', Length);
    formData.append('Weidth', Weidth);
    formData.append('Height', Height);
    formData.append('wheelBase', wheelBase);
    formData.append('turningRadious', turningRadious);
    formData.append('Kerb_Weight', Kerb_Weight);
    formData.append('Front_Tyre_Profile', Front_Tyre_Profile);
    formData.append('Rear_Tyre_Profile', Rear_Tyre_Profile);
    formData.append('Spare_Tyre_Profile', Spare_Tyre_Profile);
    formData.append('Front_Suspension', Front_Suspension);
    formData.append('Rear_Suspension', Rear_Suspension);
    formData.append('Cupholders', Cupholders);
    formData.append('Fuel_Tank_Capacity', Fuel_Tank_Capacity);
    formData.append('boot_Space', boot_Space);
    formData.append('Boot_Space_after', Boot_Space_after);
    formData.append('Engine_Name_Varient', Engine_Name_Varient);
    formData.append('Company_Claimed', Company_Claimed);
    formData.append('City_Real_World', City_Real_World);
    formData.append('Highway_Real_World', Highway_Real_World);
    formData.append('varientGroupData', varientgroup);
    formData.append('roof_rails', Roof_rails);
    formData.append('front_fog_lights', Fog_lights);
    formData.append('spare_wheel_type', Spare_wheel);





    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/add-varient`, {
        method: 'POST',
        body: formData,
      });
    
      if (result.status >= 200 && result.status < 300) {
        toast.success('Variant saved successfully!');
        // Delay for 2 seconds before redirecting
        setTimeout(() => {
          window.location.assign('/variant');
        }, 3500);

      } else if (result.status === 409) {
        // Handle conflict
        const data = await result.json(); 
        toast.error(`Conflict: ${data.msg}`);
      } else {
        // Handle other cases
        const data = await result.json();
        toast.error(`Error: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      toast.error('Error: Unable to save product.');
    }
    
  };


  const handleDisableToggle = () => {
    setDisable(!disable);
  };

  const handleimagechange = (e) => {
    const file = e.target.files[0];
    setPreviewImage(file || defaultImageSrc);
    // setPreviewImage(file);
    // onChange(file, index);
  };
  const handleimagechange1 = (e) => {
    const file = e.target.files[0];
    setPreviewImage1(file);
  };
  const handleimagechange2 = (e) => {
    const file = e.target.files[0];
    setPreviewImage2(file);
  };
  const handleimagechange3 = (e) => {
    const file = e.target.files[0];
    setPreviewImage3(file);
  };
  const handleimagechange4 = (e) => {
    const file = e.target.files[0];
    setPreviewImage4(file);
  };
  const handleimagechange5 = (e) => {
    const file = e.target.files[0];
    setPreviewImage5(file);
  };
  const handleimagechange6 = (e) => {
    const file = e.target.files[0];
    setPreviewImage6(file);
  };
  const handleimagechange7 = (e) => {
    const file = e.target.files[0];
    setPreviewImage7(file);
  };
  const handleimagechange8 = (e) => {
    const file = e.target.files[0];
    setPreviewImage8(file);
  };
  const handleimagechange9 = (e) => {
    const file = e.target.files[0];
    setPreviewImage9(file);
  };
  const handleimagechange10 = (e) => {
    const file = e.target.files[0];
    setPreviewImage10(file);
  };
  const handleimagechange11 = (e) => {
    const file = e.target.files[0];
    setPreviewImage11(file);
  };
  const handleimagechange12 = (e) => {
    const file = e.target.files[0];
    setPreviewImage12(file);
  };
  const handleimagechange13 = (e) => {
    const file = e.target.files[0];
    setPreviewImage13(file);
  };
  const handleimagechange14 = (e) => {
    const file = e.target.files[0];
    setPreviewImage14(file);
  };
  const handleimagechange15 = (e) => {
    const file = e.target.files[0];
    setPreviewImage15(file);
  };
  const handleimagechange16 = (e) => {
    const file = e.target.files[0];
    setPreviewImage16(file);
  };
  const handleimagechange17 = (e) => {
    const file = e.target.files[0];
    setPreviewImage17(file);
  };
  const handleimagechange18 = (e) => {
    const file = e.target.files[0];
    setPreviewImage18(file);
  };
  const handleimagechange19 = (e) => {
    const file = e.target.files[0];
    setPreviewImage19(file);
  };




  useEffect(() => {
    if (defaultImageSrc) {
      const uint8Array = base64.toByteArray(defaultImageSrc.split(',')[1]);
      const blob = new Blob([uint8Array], { type: 'image/png' });
      setPreviewImagedef(blob);
    }
  }, [defaultImageSrc]);
  






  const handleVarientRanking = (event) => {
    setVarientRanking(event.target.value);
  };
  const handleGNCAP = (event) => {
    setGNCAP(event.target.value);
  };
  const handleVentilated_Seats = (event) => {
    setVentilated_Seats(event.target.value);
  };
  const handleAir_Purifier = (event) => {
    setAir_Purifier(event.target.value);
  };
  const handleCruise_Control = (event) => {
    setCruise_Control(event.target.value);
  };
  const handleRain_Sensing_Wipers = (event) => {
    setRain_Sensing_Wipers(event.target.value);
  };
  const handleautomaticHeadLamp = (event) => {
    setautomaticHeadLamp(event.target.value);
  };
  const handleFollow_Me_Home_Headlights = (event) => {
    setFollow_Me_Home_Headlights(event.target.value);
  };
  const handlekeyLess_Entry = (event) => {
    setkeyLess_Entry(event.target.value);
  };
  const handleignition = (event) => {
    setignition(event.target.value);
  };
  const handleAmbient_Lighting = (event) => {
    setAmbient_Lighting(event.target.value);
  };
  const handleSteering_Adjustment = (event) => {
    setSteering_Adjustment(event.target.value);
  };
  const handleAir_Conditioning = (event) => {
    setAir_Conditioning(event.target.value);
  };
  const handlefrontArmrest = (event) => {
    setfrontArmrest(event.target.value);
  };
  const handlerearArmrest = (event) => {
    setrearArmrest(event.target.value);
  };
  const handleIVRM = (event) => {
    setIVRM(event.target.value);
  };
  const handleSteering_Mounted_Controls = (event) => {
    setSteering_Mounted_Controls(event.target.value);
  };
  const handleRear_Windshield_Defogger = (event) => {
    setRear_Windshield_Defogger(event.target.value);
  };
  const handFront_Windshield_Defogger = (event) => {
    setFront_Windshield_Defogger(event.target.value);
  };
  const handleCooled_Glovebox = (event) => {
    setCooled_Glovebox(event.target.value);
  };


  const handleGlobal_NCAP_Rating = (event) => {
    setGlobal_NCAP_Rating(event.target.value);
  };

  const handleairbags = (event) => {
    setairbags(event.target.value);
  };

  const handleReverse_Camera_Guidelines = (event) => {
    setReverse_Camera_Guidelines(event.target.value);
  };

  const handleTMPS = (event) => {
    setTMPS(event.target.value);
  };

  const handleHill_Hold_Assist = (event) => {
    setHill_Hold_Assist(event.target.value);
  };

  const handleHill_Descent_Control = (event) => {
    setHill_Descent_Control(event.target.value);
  };

  const handleRoll_Over_Mitigation = (event) => {
    setRoll_Over_Mitigation(event.target.value);
  };

  const handleDisc_Brakes = (event) => {
    setDisc_Brakes(event.target.value);
  };

  const handleESP = (event) => {
    setESP(event.target.value);
  };

  const handleABS = (event) => {
    setABS(event.target.value);
  };

  const handleEBD = (event) => {
    setEBD(event.target.value);
  };

  const handleBrake_assist = (event) => {
    setBrake_assist(event.target.value);
  };

  const handleISOFIX_Mounts = (event) => {
    setISOFIX_Mounts(event.target.value);
  };

  const handleDriver_CoDriver_Seatbelt_Warning = (event) => {
    setDriver_CoDriver_Seatbelt_Warning(event.target.value);
  };

  const handleHigh_speed_Alert_System = (event) => {
    setHigh_speed_Alert_System(event.target.value);
  };

  const handleSpeed_Sensing_Door_Locks = (event) => {
    setSpeed_Sensing_Door_Locks(event.target.value);
  };

  const handleImmobiliser = (event) => {
    setImmobiliser(event.target.value);
  };

  const handleParking_Sensor = (event) => {
    setParking_Sensor(event.target.value);
  };

  const handleAndroid_Apple_Carplay = (event) => {
    setAndroid_Apple_Carplay(event.target.value);
  };

  const handlewireless_Charging = (event) => {
    setwireless_Charging(event.target.value);
  };
  const handlefuel = (event) => {
    setFuel(event.target.value);
  };
  const handletransmission = (event) => {
    setTransmission_2(event.target.value);
  };
  const handlepaddle_shifter = (event) => {
    setpaddle_shifter(event.target.value);
  };
  const handleTurbo_Charged = (event) => {
    setTurbo_Charged(event.target.value);
  };
  const handleHybrid_Type = (event) => {
    setHybrid_Type(event.target.value);
  };
  const handleLimited_Slip_Differential = (event) => {
    setLimited_Slip_Differential(event.target.value);
  };
  const handleRadioAntina = (event) => {
    setRadioAntina(event.target.value);
  };
  const handleDRL = (event) => {
    setDRL(event.target.value);
  };
  const handleCupholders = (event) => {
    setCupholders(event.target.value);
  };
  const handledriveTrain = (event) => {
    setDriveTrain(event.target.value);
  };



  return (
    <>

      <section className='main-container-full cardata'>
        <div className='h2 text-center bg-blue'>Add <span>Variant</span></div>

        <div className='d-flex align-items-center justify-content-center gap-3'>
          <select
            className="form-select mt-3 w-50"
            aria-label="Default select example"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="" disabled>Choose one of the Brand!</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
          <IoCaretDown className='drop-icon1' />
          <select
            className="form-select mt-3 w-50"
            aria-label="Select Car"
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            disabled={!selectedBrand || cars.length === 0}
          >
            <option value="" disabled>
              {cars.length > 0 ? 'Choose a Car!' : 'No cars are available for this brand'}
            </option>
            {Array.isArray(cars) && cars.map((car) => (
              <option key={car._id} value={car._id}>
                {car.carname || "Unknown Car"}
              </option>
            ))}
          </select>
          <IoCaretDown className='drop-icon1' />

        </div>

        <div className='h2 mt-3'>Variant <span>Data</span></div>

        <div className='carcardssection'>

          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Variant Name</label>
              <input type="Name" class="form-control" id=" " placeholder="Variant Name" required value={variant}
                onChange={(e) => setVariant(e.target.value)} />
              <div className='d-flex justify-content-center mt-5 ml-1'>
                <label style={{ marginTop: '5px' }} className="form-check-label">
                  {disable ? 'Active' : 'Disabled'}
                </label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={disable}
                    onChange={handleDisableToggle}
                  />
                </div>
              </div>
            </div>
            <div >
              <label for=" ">Ex-showroom Price</label>
              <input type="Number" class="form-control" id=" " placeholder="Ex-showroom Price" required value={exShowroomPrice} onChange={(e) => setexShowroomPrice(e.target.value)} />
        
              <label className='mt-4' for=" ">Varient Group</label>
              <input type="text" class="form-control" id=" " placeholder="Varient Group" required value={varientgroup} onChange={(e) => setVarientgroup(e.target.value)} />
            </div>
            <div>
              <label for=" ">Variant Ranking</label>
              <select
                className="form-select "
                value={VarientRanking}
                onChange={handleVarientRanking}
              >
                <option value="" >
                  Variant Ranking
                  <IoCaretDown className='drop-icon2' />
                </option>
                <option value="BASE">BASE</option>
                <option value="MID">MID</option>
                <option value="TOP">TOP</option>
              </select>
            </div>
            <div className='reactquiltext'>
              <div>
                <label for=" ">Features Explained</label>
                <ReactQuill type="text" className="form-control" id="text-areas" required rows="5" value={featuresexplained} onChange={setFeaturesexplained} />
              </div>
            </div>
          </div>



        </div>








        <div className='h2 mt-3'>Variant <span>info</span></div>

        <div className='carcardssection'>
          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Seater</label>
              <input type="Name" class="form-control" id=" " placeholder="Seater" rows={5} value={seater} onChange={(e) => setSeater(e.target.value)} />
            </div>
            <div>
              <label for=" ">Fuel</label>
              <input type="Name" class="form-control" id=" " placeholder="Fuel" required value={fuel} onChange={(e) => setFuel(e.target.value)} />
            </div>
            <div>
              <label for=" ">Transmission</label>
              <input type="Name" class="form-control" id=" " placeholder="Transmission" required value={transmission} onChange={(e) => setTransmission(e.target.value)} />
            </div>
            <div>
              <label for=" ">GNCAP Rating</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={GNCAP}
                onChange={handleGNCAP}
              >
                <option value="" >
                  Rating
                </option>
                <option value="1">NA</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

            </div>
            <IoCaretDown className='drop-icon3' />

          </div>
        </div>
























        <div className='h2 mt-3'>Variant <span>Engine</span></div>

        <div className='carcardssection'>
          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Engine Name</label>
              <input type="Name" className="form-control" placeholder="Engine Name" required value={EngineName} onChange={(e) => setEngineName(e.target.value)} />
            </div>
            <div className='pro-cons'>
              <label for="">Highlight</label>
              <input type="Name" className="form-control" placeholder="Header" required value={Highlight} onChange={(e) => setHighlight(e.target.value)} />
            </div>
            <div className='reactquiltext'>
              <label for="">Summary</label>
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="5" value={summaryVarient} onChange={setSummaryVariant} />
            </div>
          </div>

          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Automatic </label>
              <textarea type="Name" className="form-control" id=" " placeholder="Automatic" value={automatic} onChange={(e) => setautomatic(e.target.value)} />
            </div>
            <div className='pro-cons'>
              <label for="">iMT </label>
              <textarea type="Name" className="form-control" id=" " placeholder="iMT" value={iMT} onChange={(e) => setiMT(e.target.value)} />
            </div>
            <div className='pro-cons'>
              <label for="">Manual</label>
              <textarea type="Name" className="form-control" id=" " placeholder="Manual" value={manual} onChange={(e) => setmanual(e.target.value)} />
            </div>
          </div>

        </div>



        <div className='h2 mt-3'>Variant Key <span>Specification</span></div>



        <div className='carcardssection'>
          <section className='uplord-card-section'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 1</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage0 && previewImage0 && (
                    <img src={URL.createObjectURL(previewImage0)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText0} onChange={(e) => setpreviewText(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 2</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange1}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage1 && previewImage1 && (
                    <img src={URL.createObjectURL(previewImage1)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText1} onChange={(e) => setpreviewText1(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 3</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange2}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage2 && previewImage2 && (
                    <img src={URL.createObjectURL(previewImage2)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText2} onChange={(e) => setpreviewText2(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 4</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange3}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage3 && previewImage3 && (
                    <img src={URL.createObjectURL(previewImage3)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText3} onChange={(e) => setpreviewText3(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 5</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange4}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage4 && previewImage4 && (
                    <img src={URL.createObjectURL(previewImage4)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText4} onChange={(e) => setpreviewText4(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 6</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange5}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage5 && previewImage5 && (
                    <img src={URL.createObjectURL(previewImage5)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText5} onChange={(e) => setpreviewText5(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 7</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange6}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage6 && previewImage6 && (
                    <img src={URL.createObjectURL(previewImage6)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText6} onChange={(e) => setpreviewText6(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 8</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange7}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage7 && previewImage7 && (
                    <img src={URL.createObjectURL(previewImage7)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText7} onChange={(e) => setpreviewText7(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 9</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange8}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage8 && previewImage8 && (
                    <img src={URL.createObjectURL(previewImage8)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText8} onChange={(e) => setpreviewText8(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 10</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange9}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage9 && previewImage9 && (
                    <img src={URL.createObjectURL(previewImage9)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText9} onChange={(e) => setpreviewText9(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 11</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange10}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage10 && previewImage10 && (
                    <img src={URL.createObjectURL(previewImage10)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText10} onChange={(e) => setpreviewText10(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 12</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange11}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage11 && previewImage11 && (
                    <img src={URL.createObjectURL(previewImage11)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText11} onChange={(e) => setpreviewText11(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 13</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange12}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage12 && previewImage12 && (
                    <img src={URL.createObjectURL(previewImage12)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText12} onChange={(e) => setpreviewText12(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 14</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange13}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage13 && previewImage13 && (
                    <img src={URL.createObjectURL(previewImage13)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText13} onChange={(e) => setpreviewText13(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 15</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange14}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage14 && previewImage14 && (
                    <img src={URL.createObjectURL(previewImage14)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText14} onChange={(e) => setpreviewText14(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 16</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange15}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage15 && previewImage15 && (
                    <img src={URL.createObjectURL(previewImage15)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText15} onChange={(e) => setpreviewText15(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 17</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange16}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage16 && previewImage16 && (
                    <img src={URL.createObjectURL(previewImage16)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText16} onChange={(e) => setpreviewText16(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 18</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange17}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage17 && previewImage17 && (
                    <img src={URL.createObjectURL(previewImage17)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText17} onChange={(e) => setpreviewText17(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 19</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange18}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage18 && previewImage18 && (
                    <img src={URL.createObjectURL(previewImage18)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText18} onChange={(e) => setpreviewText18(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Image 20</h5>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleimagechange19}

                />
                <div className="mt-3 imagedivf ">
                  {previewImage19 && previewImage19 && (
                    <img src={URL.createObjectURL(previewImage19)} className="img-fluid" alt="Image Preview" />
                  )}
                </div>
              </div>
              <input type="Name" class="form-control information-form" id=" " placeholder="Information" value={previewText19} onChange={(e) => setpreviewText19(e.target.value)} />
            </div>

          </section>
        </div>










        <div className='h2 mt-3'>Variant Technical<span> Specifications</span></div>

        <div className='carcardssection'>
          <div className='h2 mt-3 inside-block'>Comfort & <span>Convenience</span></div>
          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Ventilated Seats</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Ventilated_Seats}
                onChange={handleVentilated_Seats}

              >
                <option value="" >
                  Ventilated Seats
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
                <option value="FRONT">FRONT</option>
                <option value="FRONT & REAR">FRONT & REAR</option>
              </select>
            </div>
            <div>
              <label for=" "> Air Purifier</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Air_Purifier}
                onChange={handleAir_Purifier}
              >
                <option value="" >
                  Air Purifier
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Cruise Control</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Cruise_Control}
                onChange={handleCruise_Control}
              >
                <option value="" >
                  Cruise Control
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Rain Sensing Wipers</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Rain_Sensing_Wipers}
                onChange={handleRain_Sensing_Wipers}
              >
                <option value="" >
                  Rain Sensing Wipers
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
                <option value="ADAPTIVE">ADAPTIVE</option>
              </select>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3 mt-5">
            <div>
              <label for=" ">Sunroof</label>
              <input type="Name" class="form-control" id=" " placeholder="Sunroof" required value={sunroof} onChange={(e) => setsunroof(e.target.value)} />
            </div>
            <div>
              <label for=" ">Automatic Headlamp</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={automaticHeadLamp}
                onChange={handleautomaticHeadLamp}
              >
                <option value="" >
                  Automatic Headlamp
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Follow Me Home Headlights</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Follow_Me_Home_Headlights}
                onChange={handleFollow_Me_Home_Headlights}
              >
                <option value="" >
                  Follow Me Home Headlights
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Keyless Entry</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={keyLess_Entry}
                onChange={handlekeyLess_Entry}
              >
                <option value="" >
                  Keyless Entry
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
                <option value="KEYLESS ENTRY">KEYLESS ENTRY</option>
                <option value="PROXIMITY SENSOR">PROXIMITY SENSOR</option>
              </select>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3 mt-5">
            <div>
              <label for=" ">Ignition</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={ignition}
                onChange={handleignition}
              >
                <option value="" >
                  Ignition
                </option>
                <option value="KEY START">KEY START</option>
                <option value="PUSH BUTTON START STOP">PUSH BUTTON START STOP</option>
              </select>
            </div>
            <div>
              <label for=" ">Ambient Lighting</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Ambient_Lighting}
                onChange={handleAmbient_Lighting}
              >
                <option value="" >
                  Ambient Lighting
                </option>
                <option value="NA">NA</option>
                <option value="SINGLE COLOUR">SINGLE COLOUR</option>
                <option value="MULTI COLOUR">MULTI COLOUR</option>
              </select>
            </div>
            <div>
              <label for=" ">Steering Adjustment</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Steering_Adjustment}
                onChange={handleSteering_Adjustment}
              >
                <option value="" >
                  Steering Adjustment
                </option>
                <option value="TILT">TILT</option>
                <option value="TILT & TELESCOPIC">TILT & TELESCOPIC</option>
              </select>
            </div>
            <div>
              <label for=" ">Air Conditioning</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Air_Conditioning}
                onChange={handleAir_Conditioning}
              >
                <option value="" >
                  Air Conditioning
                </option>
                <option value="YES">YES</option>
                <option value="MANUAL">MANUAL</option>
                <option value="AUTOMATIC">AUTOMATIC</option>
                {/* <option value="Proximity Sensor">Proximity Sensor</option> */}
              </select>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3 mt-5">
            <div>
              <label for=" ">Climate Zones</label>
              <input type="Name" class="form-control" id=" " placeholder="Climate Zones" required value={Climate_Zones} onChange={(e) => setClimate_Zones(e.target.value)} />
            </div>
            <div>
              <label for=" ">Rear A/C Vents</label>
              <input type="Name" class="form-control" id=" " placeholder="Rear A/C Vents" required value={rearACvent} onChange={(e) => setrearACvent(e.target.value)} />
            </div>

            <div>
              <label for=" ">Front Armrest</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={frontArmrest}
                onChange={handlefrontArmrest}
              >
                <option value="" >
                  Front Armrest
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Rear Armrest</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={rearArmrest}
                onChange={handlerearArmrest}
              >
                <option value="" >
                  Rear Armrest
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
                <option value="Automatic">Automatic</option>

              </select>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3 mt-5">
            <div>
              <label for=" ">Inside rear view mirror (IRVM)</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={IVRM}
                onChange={handleIVRM}
              >
                <option value="" >
                  Inside rear view mirror (IRVM)
                </option>
                <option value="MANUAL">MANUAL</option>
                <option value="AUTO DIMMING">AUTO DIMMING</option>
              </select>
            </div>
            <div>
              <label for=" ">Outside rear view mirrors (ORVM)</label>
              <input type="Name" class="form-control" id=" " placeholder="Outside rear view mirrors (ORVM)" value={OVRM} onChange={(e) => setOVRM(e.target.value)} />
            </div>
            <div>
              <label for=" ">Steering Mounted Controls</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Steering_Mounted_Controls}
                onChange={handleSteering_Mounted_Controls}
              >
                <option value="" >
                  Steering Mounted Controls
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Rear Windshield Defogger</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Rear_Windshield_Defogger}
                onChange={handleRear_Windshield_Defogger}
              >
                <option value="" >
                  Rear Windshield Defogger
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>

          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            {/* <div>
              <label for=" ">Rear Windshield Defogger</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Front_Windshield_Defogger}
                onChange={handleFront_Windshield_Defogger}
              >
                <option value="" >
                Rear Windshield Defogger
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div> */}
            <div>
              <label for=" ">Front Windshield Defogger</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Front_Windshield_Defogger}
                onChange={handFront_Windshield_Defogger}
              >
                <option value="" >
                  Front Windshield Defogger
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Cooled Glovebox</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Cooled_Glovebox}
                onChange={handleCooled_Glovebox}
              >
                <option value="" >
                  Cooled Glovebox
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
          </div>







          <hr></hr>
          <div className='h2 mt-3 inside-block'>Safety<span></span></div>
          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Global NCAP Rating</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Global_NCAP_Rating}
                onChange={handleGlobal_NCAP_Rating}
              >
                <option value="" >
                  Select Rating
                </option>
                <option value="NA">NA</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label for=" ">Airbags</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={airbags}
                onChange={handleairbags}
              >
                <option value="" >
                  Airbags
                </option>
                <option value="NA">NA</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
              </select>
            </div>

            <div className='reactquiltext'>
              <label for="">Airbags Location</label>
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="5" value={airbagLocation} onChange={setairbagLocation} />
            </div>

          </div>
          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">ADAS</label>
              <input type="Name" class="form-control" id=" " placeholder="ADAS" required value={ADAS} onChange={(e) => setADAS(e.target.value)} />
            </div>
            <div className='reactquiltext'>
              <label for="">ADAS Features</label>
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="5" value={ADAS_Features} onChange={setADAS_Features} />
            </div>
            <div>
              <label for=" ">Reverse Camera</label>
              <input type="Name" class="form-control" id=" " placeholder="Reverse Camera" value={Reverse_Camera} onChange={(e) => setReverse_Camera(e.target.value)} />
            </div>
          </div>


          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Reverse Camera Guidelines</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Reverse_Camera_Guidelines}
                onChange={handleReverse_Camera_Guidelines}
              >
                <option value="" >
                  Reverse Camera Guidelines
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
                <option value="STATIC">STATIC</option>
                <option value="ADAPTIVE">ADAPTIVE</option>
              </select>
            </div>
            <div>
              <label for=" ">Tyre pressure Monitor (TPMS)</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={TMPS}
                onChange={handleTMPS}
              >
                <option value="" >
                  Tyre pressure Monitor (TPMS)
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Hill Hold Assist</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Hill_Hold_Assist}
                onChange={handleHill_Hold_Assist}
              >
                <option value="" >
                  Hill Hold Assist
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Hill Descent Control</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Hill_Descent_Control}
                onChange={handleHill_Descent_Control}
              >
                <option value="" >
                  Hill Descent Control
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
          </div>


          <div class="form-group d-flex justify-content-evenly mb-3">

            <div>
              <label for=" ">Roll Over Mitigation</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Roll_Over_Mitigation}
                onChange={handleRoll_Over_Mitigation}
              >
                <option value="" >
                  Roll Over Mitigation
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Disc Brakes</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Disc_Brakes}
                onChange={handleDisc_Brakes}
              >
                <option value="" >
                  Disc Brakes
                </option>
                <option value="FRONT">FRONT</option>
                <option value="FRONT & REAR">Front & Rear</option>
              </select>
            </div>
            <div>
              <label for=" ">Electronic stability program (ESP)</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={ESP}
                onChange={handleESP}
              >
                <option value="" >
                  Electronic stability program (ESP)
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">ABS</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={ABS}
                onChange={handleABS}
              >
                <option value="" >
                  ABS
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>


          </div>

          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Electronic Brakeforce Distribution (EBD)</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={EBD}
                onChange={handleEBD}
              >
                <option value="" >
                  Electronic Brakeforce Distribution (EBD)
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Brake assist (BA)</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Brake_assist}
                onChange={handleBrake_assist}
              >
                <option value="" >
                  Brake assist (BA)
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">ISOFIX Mounts</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={ISOFIX_Mounts}
                onChange={handleISOFIX_Mounts}
              >
                <option value="" >
                  ISOFIX Mounts
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Driver & Co-Driver Seatbelt Warning</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Driver_CoDriver_Seatbelt_Warning}
                onChange={handleDriver_CoDriver_Seatbelt_Warning}
              >
                <option value="" >
                  Driver & Co-Driver Seatbelt Warning
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4">
            <div>
              <label for=" ">High speed Alert System</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={High_speed_Alert_System}
                onChange={handleHigh_speed_Alert_System}
              >
                <option value="" >
                  High speed Alert System
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Speed Sensing Door Locks</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Speed_Sensing_Door_Locks}
                onChange={handleSpeed_Sensing_Door_Locks}
              >
                <option value="" >
                  Speed Sensing Door Locks
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Immobiliser</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Immobiliser}
                onChange={handleImmobiliser}
              >
                <option value="" >
                  Immobiliser
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Parking Sensor</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Parking_Sensor}
                onChange={handleParking_Sensor}
              >
                <option value="" >
                  Parking Sensor
                </option>
                <option value="YES">YES</option>
                <option value="FRONT & REAR">Front & Rear</option>
                <option value="REAR">REAR</option>
                <option value="NA">NA</option>
              </select>
            </div>
          </div>




          <hr></hr>
          <div className='h2 mt-3 inside-block'>Entertainment & <span>Connectivity</span></div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">

            <div>
              <label for=" ">Touch Screen Infotainment</label>
              <input type="text" class="form-control" id=" " placeholder="Touch Screen Infotainment" value={Touch_Screen_Infotainment} onChange={(e) => setTouch_Screen_Infotainment(e.target.value)} />
            </div>
            <div>
              <label for=" ">Android & Apple Carplay</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Android_Apple_Carplay}
                onChange={handleAndroid_Apple_Carplay}
              >
                <option value="" >
                  Android & Apple Carplay
                </option>
                <option value="NA">NA</option>
                <option value="WIRED">WIRED</option>
                <option value="WIRELESS">WIRELESS</option>
              </select>
            </div>
            <div>
              <label for=" ">Speakers</label>
              <input type="text" class="form-control" id=" " placeholder="Speakers" value={Speakers} onChange={(e) => setSpeakers(e.target.value)} />
            </div>
            <div>
              <label for=" ">Tweeters</label>
              <input type="text" class="form-control" id=" " placeholder="Tweeters" value={tweeters} onChange={(e) => settweeters(e.target.value)} />
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Subwoofers</label>
              <input type="text" class="form-control" id=" " placeholder="Subwoofers" value={subWoofers} onChange={(e) => setsubWoofers(e.target.value)} />
            </div>
            <div>
              <label for=" ">USB-C Charging Ports</label>
              <input type="text" class="form-control" id=" " placeholder="USB-C Charging Ports" value={USB_C_PORT} onChange={(e) => setUSB_C_PORT(e.target.value)} />
            </div>
            <div>
              <label for=" ">5A Charging Ports</label>
              <input type="text" class="form-control" id=" " placeholder="5A Charging Ports" value={FiveAmpiearchargingport} onChange={(e) => setFiveAmpiearchargingport(e.target.value)} />
            </div>
            <div>
              <label for=" ">12V Charging Ports</label>
              <input type="text" class="form-control" id=" " placeholder="12V Charging Ports" value={charging12V_Port} onChange={(e) => setcharging12V_Port(e.target.value)} />
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">

            <div>
              <label for=" ">Wireless Charging</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={wireless_Charging}
                onChange={handlewireless_Charging}
              >
                <option value="" >
                  Wireless Charging
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Connected Car Tech</label>
              <input type="text" class="form-control" id=" " placeholder="Connected Car Tech" value={connectedCarTech} onChange={(e) => setconnectedCarTech(e.target.value)} />
            </div>
          </div>








          <hr></hr>
          <div className='h2 mt-3 inside-block'>Engine &<span>Transmission</span></div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Engine Name</label>
              <input type="name" class="form-control" id=" " placeholder="Engine Name" value={engine_Name} onChange={(e) => setengine_Name(e.target.value)} />
            </div>
            <div>
              <label for=" ">Engine Capacity</label>
              <input type="number" class="form-control" id=" " placeholder="Engine Capacity" value={Engine_Capacity} onChange={(e) => setEngine_Capacity(e.target.value)} />
            </div>
            <div>
              <label for=" ">Fuel</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={fuel}
                onChange={handlefuel}
              >
                <option value="" >
                  Fuel
                </option>
                <option value="PETROL">PETROL</option>
                <option value="DIESEL">DIESEL</option>
                <option value="CNG">CNG</option>
                <option value="HYBRID">HYBRID</option>
                <option value="ELECTRIC">ELECTRIC</option>
              </select>
            </div>
            <div>
              <label for=" ">Transmission</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={transmission_2}
                onChange={handletransmission}
              >
                <option value="" >
                  Transmission
                </option>
                <option value="MANUAL">Manual</option>
                <option value="IMT">IMT</option>
                <option value="AMT">AMT</option>
                <option value="DUAL CLUTCH">DUAL CLUTCH</option>
                <option value="TORQUE CONVERTER">TORQUE CONVERTER</option>
                <option value="CVT">CVT</option>
                <option value="E-CVT">E-CVT</option>
                <option value="SINGLE SPEED AUTOMATIC">SINGLE SPEED AUTOMATIC</option>
              </select>
            </div>
          </div>

          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">No of Gears</label>
              <input type="name" class="form-control" id=" " placeholder="No of Gears" value={number_of_Gears} onChange={(e) => setnumber_of_Gears(e.target.value)} />
            </div>
            <div>
              <label for=" ">Paddle Shifter</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={paddle_shifter}
                onChange={handlepaddle_shifter}
              >
                <option value="" >
                  Paddle Shifter
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Max Power</label>
              <input type="name" class="form-control" id=" " placeholder="Max Power" value={max_power} onChange={(e) => setmax_power(e.target.value)} />
            </div>
            <div>
              <label for=" ">Torque</label>
              <input type="name" class="form-control" id=" " placeholder="Torque" value={torque} onChange={(e) => settorque(e.target.value)} />
            </div>
          </div>

          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">0 to 100 Kmph Time</label>
              <input type="name" class="form-control" id=" " placeholder="0 to 100 Kmph Time" value={speed_0_to_100} onChange={(e) => setSpeed_0_to_100(e.target.value)} />
            </div>
            <div>
              <label for=" ">Top Speed (Km/h)</label>
              <input type="number" class="form-control" id=" " placeholder="Top Speed (Km/h)" value={top_speed} onChange={(e) => setTop_speed(e.target.value)} />
            </div>
            <div>
              <label for=" ">EV Battery Capacity (kWh)</label>
              <input type="number" class="form-control" id=" " placeholder="EV Battery Capacity (kWh)" value={EV_Battry_capacity} onChange={(e) => setEV_Battry_capacity(e.target.value)} />
            </div>
            <div>
              <label for=" ">Hybrid Battery Capacity (kWh)</label>
              <input type="number" class="form-control" id=" " placeholder="Hybrid Battery Capacity (kWh)" value={Hybrid_Capacity} onChange={(e) => setHybrid_Capacity(e.target.value)} />
            </div>

          </div>

          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Battery Type</label>
              <input type="name" class="form-control" id=" " placeholder="Battery Type" value={Battery_type} onChange={(e) => setBattery_type(e.target.value)} />
            </div>
            <div>
              <label for=" ">Electric Motor Placement</label>
              <input type="name" class="form-control" id=" " placeholder="Electric Motor Placement" value={Electric_Motor_placement} onChange={(e) => setElectric_Motor_placement(e.target.value)} />
            </div>
            <div>
              <label for=" ">EV Range</label>
              <input type="number" class="form-control" id=" " placeholder="EV Range" value={EV_Range} onChange={(e) => setEV_Range(e.target.value)} />
            </div>
            <div>
              <label for=" ">EV Charging Time</label>
              <input type="name" class="form-control" id=" " placeholder="EV Charging Time" value={EV_Charging_time} onChange={(e) => setEV_Charging_time(e.target.value)} />
            </div>

          </div>



          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Max Electric Motor Power</label>
              <input type="name" class="form-control" id=" " placeholder="Max Electric Motor Power" value={Max_Electric_Motor_Power} onChange={(e) => setMax_Electric_Motor_Power(e.target.value)} />
            </div>
            <div>
              <label for=" ">Turbo Charged</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Turbo_Charged}
                onChange={handleTurbo_Charged}
              >
                <option value="" >
                  Turbo Charged
                </option>
                <option value="NON-TURBO CHARGED">NON-TURBO CHARGED</option>
                <option value="TURBO CHARGED">TURBO CHARGED</option>
              </select>
            </div>
            <div>
              <label for=" ">Hybrid Type</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Hybrid_Type}
                onChange={handleHybrid_Type}
              >
                <option value="" >
                  Hybrid Type
                </option>
                <option value="NA">NA</option>
                <option value="MILD-HYBRID">MILD-HYBRID</option>
                <option value="STRONG-HYBRID">STRONG-HYBRID</option>
                <option value="PLUG-IN HYBRID">PLUG-IN HYBRID</option>

                <option value="FULLY ELECTRIC">FULLY ELECTRIC</option>
              </select>
            </div>
            <div>
              <label for=" ">Drive Train</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={driveTrain}
                onChange={handledriveTrain}
              >
                <option value="" >
                  Drive Train
                </option>
                <option value="FRONT WHEEL DRIVE">Front Wheel Drive</option>
                <option value="REAR WHEEL DRIVE">REAR WHEEL DRIVE</option>
                <option value="ALL WHEEL DRIVE">ALL WHEEL DRIVE</option>
                <option value="4x4">4x4</option>
              </select>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Driving Modes</label>
              <input type="name" class="form-control" id=" " placeholder="Driving Modes" value={Driving_Modes} onChange={(e) => setDriving_Modes(e.target.value)} />
            </div>
            <div>
              <label for=" ">Off Road Modes</label>
              <input type="name" class="form-control" id=" " placeholder="Off Road Modes" value={offRoadModes} onChange={(e) => setOffRoadModes(e.target.value)} />
            </div>
            {/* <div>
              <label for=" ">Differential Lock Type</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Differential_Lock_Type}
                onChange={handleDifferential_Lock_Type}
              >
                <option value="" >
                Differential Lock
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div> */}
            <div>
              <label for=" ">Differential Lock Type</label>
              <input type="name" class="form-control" id=" " placeholder="Differential Lock Type" value={Differential_Lock_Type} onChange={(e) => setDifferential_Lock_Type(e.target.value)} />
            </div>
          </div>

          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Limited Slip Differential</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Limited_Slip_Differential}
                onChange={handleLimited_Slip_Differential}
              >
                <option value="" >
                  Limited Slip Differential
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
          </div>


          <hr></hr>
          <div className='h2 mt-3 inside-block'>Seating <span>Comfort</span></div>
          <div class="form-group d-flex justify-content-evenly mb-4">
            <div>
              <label for=" ">Seat Upholstery</label>
              <input type="name" class="form-control" id=" " placeholder="Seat Upholstery" value={Seat_Upholstery} onChange={(e) => setSeat_Upholstery(e.target.value)} />
            </div>
            <div>
              <label for=" ">Seats Adjustment</label>
              <textarea type="name" class="form-control" id=" " placeholder="Seats Adjustment" rows={3} value={Seats_Adjustment} onChange={(e) => setSeats_Adjustment(e.target.value)} />
            </div>
            <div>
              <label for=" ">Driver Seat Adjustment</label>
              <input type="name" class="form-control" id=" " placeholder="Driver Seat Adjustment" value={Driver_Seat_Adjustment} onChange={(e) => setDriver_Seat_Adjustment(e.target.value)} />
            </div>
            <div>
              <label for=" ">Passenger Seat Adjustment</label>
              <input type="name" class="form-control" id=" " placeholder="Passenger Seat Adjustment" value={Passenger_Seat_Adjustment} onChange={(e) => setPassenger_Seat_Adjustment(e.target.value)} />
            </div>
            
          </div>

          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Rear Seat Adjustment</label>
              <input type="name" class="form-control" id=" " placeholder="Rear Seat Adjustment" value={Rear_Seat_Adjustment} onChange={(e) => setRear_Seat_Adjustment(e.target.value)} />
            </div>
            <div>
              <label for=" ">Welcome Seats</label>
              <input type="name" class="form-control" id=" " placeholder="Welcome Seats" value={Welcome_Seats} onChange={(e) => setWelcome_Seats(e.target.value)} />
            </div>
            <div>
              <label for=" ">Memory Seats</label>
              <input type="name" class="form-control" id=" " placeholder="Memory Seats" value={Memory_Seats} onChange={(e) => setMemory_Seats(e.target.value)} />
            </div>
            <div>
              <label for=" ">Roof Rails</label>
              <input type="name" class="form-control" id=" " placeholder="Roof Rails" value={Roof_rails} onChange={(e) => setRoof_rails(e.target.value)} />
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 pr-3">
           
            <div>
              <label for=" ">Fog Lights</label>
              <input type="name" class="form-control" id=" " placeholder="Fog Lights" value={Fog_lights} onChange={(e) => setFog_lights(e.target.value)} />
            </div>
          </div>




          <hr></hr>
          <div className='h2 mt-3 inside-block'><span>Exteriors</span></div>


          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Head Lights</label>
              <input type="name" class="form-control" id=" " placeholder="Head Lights" value={headLight} onChange={(e) => setHeadLight(e.target.value)} />
            </div>
            <div>
              <label for=" ">Tail Light</label>
              <input type="name" class="form-control" id=" " placeholder="Tail Light" value={tailLight} onChange={(e) => setTailLight(e.target.value)} />
            </div>
            {/* <div>
              <label for=" ">Front Fog Lights</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={ignition}
                onChange={handleignition}
              >
                <option value="" >
                Front Fog Lights
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Roof Rails</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
              >
                <option value="" >
                Roof Rails
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div> */}
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Radio Antenna</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={radioAntina}
                onChange={handleRadioAntina}
              >
                <option value="" >
                  Radio Antenna
                </option>
                <option value="REGULAR">REGULAR</option>
                <option value="SHARK FIN">SHARK FIN</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div>
              <label for=" ">Outside rear view mirror (ORVM) Colour</label>
              <input type="name" class="form-control" id=" " placeholder="Outside rear view mirror (ORVM) Colour" value={OVRMColor} onChange={(e) => setOVRMColor(e.target.value)} />
            </div>
            <div>
              <label for=" ">Daytime running lights (DRL's)</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={DRL}
                onChange={handleDRL}
              >
                <option value="" >
                  Daytime running lights (DRL's)
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div>

            <div>
              <label for=" ">Side Indicator</label>
              <input type="name" class="form-control" id=" " placeholder="Side Indicator" value={sideIndicator} onChange={(e) => setSideIndicator(e.target.value)} />
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Rear Windshield Wiper With Washer</label>
              <input type="name" class="form-control" id=" " placeholder="Rear Windshield Wiper With Washer" value={rear_windsheeld_wiper} onChange={(e) => setRear_Windsheeld_Wiper(e.target.value)} />
            </div>
            {/* <div>
              <label for=" ">Rear Windshield Wiper With Washer</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={ignition}
                onChange={handleignition}
              >
                <option value="" >
                Rear Windshield Wiper With Washer
                </option>
                <option value="YES">YES</option>
                <option value="NA">NA</option>
              </select>
            </div> */}
          </div>



          <hr></hr>
          <div className='h2 mt-3 inside-block'><span>Dimensions</span></div>


          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Ground Clearance</label>
              <input type="number" class="form-control" id=" " placeholder="Ground Clearance" value={Ground_Clearance} onChange={(e) => setGround_Clearance(e.target.value)} />
            </div>
            <div>
              <label for=" ">Length</label>
              <input type="number" class="form-control" id=" " placeholder="Length" value={Length} onChange={(e) => setLength(e.target.value)} />
            </div>
            <div>
              <label for=" ">Width</label>
              <input type="number" class="form-control" id=" " placeholder="Width" value={Weidth} onChange={(e) => setWeidth(e.target.value)} />
            </div>
            <div>
              <label for=" ">Height</label>
              <input type="number" class="form-control" id=" " placeholder="Height" value={Height} onChange={(e) => setHeight(e.target.value)} />
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Wheelbase</label>
              <input type="number" class="form-control" id=" " placeholder="Wheelbase" value={wheelBase} onChange={(e) => setWheelBase(e.target.value)} />
            </div>
            <div>
              <label for=" ">Turning Radius</label>
              <input type="number" class="form-control" id=" " placeholder="Turning Radius" value={turningRadious} onChange={(e) => setTurningRadious(e.target.value)} />
            </div>
            <div>
              <label for=" ">Kerb Weight</label>
              <input type="number" class="form-control" id=" " placeholder="Kerb Weight" value={Kerb_Weight} onChange={(e) => setKerb_Weight(e.target.value)} />
            </div>
          </div>



          <hr></hr>
          <div className='h2 mt-3 inside-block'>Tyre & <span>Suspension</span></div>


          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Front Tyre Profile</label>
              <input type="name" class="form-control" id=" " placeholder="Front Tyre Profile" value={Front_Tyre_Profile} onChange={(e) => setFront_Tyre_Profile(e.target.value)} />
            </div>
            <div>
              <label for=" ">Rear Tyre Profile</label>
              <input type="name" class="form-control" id=" " placeholder="Rear Tyre Profile" value={Rear_Tyre_Profile} onChange={(e) => setRear_Tyre_Profile(e.target.value)} />
            </div>
            <div>
              <label for=" ">Spare Tyre Profile</label>
              <input type="name" class="form-control" id=" " placeholder="Spare Tyre Profile" value={Spare_Tyre_Profile} onChange={(e) => setSpare_Tyre_Profile(e.target.value)} />
            </div>
            {/* <div>
              <label for=" ">Spare Wheel Type</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={ignition}
                onChange={handleignition}
              >
                <option value="" >
                Spare Wheel Type
                </option>
                <option value="NA">NA</option>
                <option value="Steel">Steel</option>
                <option value="Full Size">Full Size</option>
                <option value="Space Saver">Space Saver</option>
              </select>
            </div> */}
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Front Suspension</label>
              <input type="text" class="form-control" id=" " placeholder="Front Suspension" value={Front_Suspension} onChange={(e) => setFront_Suspension(e.target.value)} />
            </div>
            <div>
              <label for=" ">Rear Suspension</label>
              <input type="text" class="form-control" id=" " placeholder="Rear Suspension" value={Rear_Suspension} onChange={(e) => setRear_Suspension(e.target.value)} />
            </div>
            <div>
              <label for=" ">Spare wheel</label>
              <input type="text" class="form-control" id=" " placeholder="Spare wheel" value={Spare_wheel} onChange={(e) => setSpare_wheel(e.target.value)} />
            </div>

          </div>

          <hr></hr>
          <div className='h2 mt-3 inside-block'><span>Storage</span></div>


          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Cupholders</label>
              <select
                className="form-select inwart"
                aria-label="Default select example"
                value={Cupholders}
                onChange={handleCupholders}
              >
                <option value="" >
                  Cupholders
                </option>
                <option value="NA">NA</option>
                <option value="YES">YES</option>
              </select>
            </div>
            <div>
              <label for=" ">Fuel Tank Capacity</label>
              <input type="number" class="form-control" id=" " placeholder="Fuel Tank Capacity" value={Fuel_Tank_Capacity} onChange={(e) => setFuel_Tank_Capacity(e.target.value)} />
            </div>
            <div>
              <label for=" ">Boot Space</label>
              <input type="number" class="form-control" id=" " placeholder="Boot Space" value={boot_Space} onChange={(e) => setBoot_Space(e.target.value)} />
            </div>
            <div>
              <label for=" ">Boot Space after folding last row seats</label>
              <input type="number" class="form-control" id=" " placeholder="Boot Space after folding last row seats" value={Boot_Space_after} onChange={(e) => setBoot_Space_after(e.target.value)} />
            </div>
          </div>
        </div>


        <div className='h2 mt-3'>Variant <span>Mileage</span></div>

        <div className='carcardssection'>

          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Engine Name</label>
              <input type="Name" class="form-control" id=" " placeholder="Engine Name" value={Engine_Name_Varient} onChange={(e) => setEngine_Name_Varient(e.target.value)} />
            </div>
            <div>
              <label for=" ">Company Claimed</label>
              <input type="number" class="form-control" id=" " placeholder="Company Claimed" value={Company_Claimed} onChange={(e) => setCompany_Claimed(e.target.value)} />
            </div>
            <div>
              <label for=" ">City Real World</label>
              <input type="number" class="form-control" id=" " placeholder="City Real World" value={City_Real_World} onChange={(e) => setCity_Real_World(e.target.value)} />
            </div>
            <div>
              <label for=" ">Highway Real World</label>
              <input type="number" class="form-control" id=" " placeholder="Highway Real World" value={Highway_Real_World} onChange={(e) => setHighway_Real_World(e.target.value)} />
            </div>
          </div>
        </div>







        <div className='save-btnadd' onClick={handleClick}>
          Save
        </div>


      </section>
      <ToastContainer />

    </>
  )
}

export default Addvariant