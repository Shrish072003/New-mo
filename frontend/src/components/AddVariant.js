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




  const appendFields = (formData, fields) => {
    Object.keys(fields).forEach(key => {
      formData.append(key, fields[key]);
    });
  };
  
  const handleClick = async () => {
    let formData = new FormData();
  
    // Append general form fields
    const generalFields = {
      brand_id: selectedBrand,
      product_id: selectedCar,
      varientName: variant,
      active: disable,
      airbagLocation,
      featuresexplained,
      summary: summaryVarient,
      exShowroomPrice,
      ADAS_Features: ADASfeature,
      VarientRanking,
      FeatureExplained: featuresexplained,
      seater,
      transmission,
      transmission_2,
      fuel,
      Highlight,
      EngineName,
      GNCAP,
      automatic,
      iMT,
      manual,
      Ventilated_Seats,
      Air_Purifier,
      Cruise_Control,
      Rain_Sensing_Wipers,
      sunroof,
      automaticHeadLamp,
      Follow_Me_Home_Headlights,
      keyLess_Entry,
      ignition,
      Ambient_Lighting,
      Steering_Adjustment,
      Air_Conditioning,
      Climate_Zones,
      rearACvent,
      frontArmrest,
      rearArmrest,
      IVRM,
      OVRM,
      Steering_Mounted_Controls,
      Rear_Windshield_Defogger,
      Front_Windshield_Defogger,
      Cooled_Glovebox,
      Global_NCAP_Rating,
      airbags,
      ADAS,
      Reverse_Camera,
      Reverse_Camera_Guidelines,
      TMPS,
      Hill_Hold_Assist,
      Hill_Descent_Control,
      Roll_Over_Mitigation,
      Disc_Brakes,
      ESP,
      ABS,
      EBD,
      Brake_assist,
      ISOFIX_Mounts,
      Driver_CoDriver_Seatbelt_Warning,
      High_speed_Alert_System,
      Speed_Sensing_Door_Locks,
      Immobiliser,
      Parking_Sensor,
      Touch_Screen_Infotainment,
      Android_Apple_Carplay,
      Speakers,
      tweeters,
      subWoofers,
      USB_C_PORT,
      FiveAmpiearchargingport,
      charging12V_Port,
      wireless_Charging,
      connectedCarTech,
      engine_Name,
      Engine_Capacity,
      number_of_Gears,
      paddle_shifter,
      max_power,
      torque,
      speed_0_to_100,
      top_speed,
      EV_Battry_capacity,
      Hybrid_Capacity,
      Battery_type,
      Electric_Motor_placement,
      EV_Range,
      EV_Charging_time,
      Max_Electric_Motor_Power,
      Turbo_Charged,
      Hybrid_Type,
      driveTrain,
      Driving_Modes,
      offRoadModes,
      Differential_Lock_Type,
      Limited_Slip_Differential,
      Seat_Upholstery,
      Seats_Adjustment,
      Driver_Seat_Adjustment,
      Passenger_Seat_Adjustment,
      Rear_Seat_Adjustment,
      Welcome_Seats,
      Memory_Seats,
      headLight,
      tailLight,
      radioAntina,
      OVRMColor,
      DRL,
      sideIndicator,
      rear_windsheeld_wiper,
      Ground_Clearance,
      Length,
      Weidth,
      Height,
      wheelBase,
      turningRadious,
      Kerb_Weight,
      Front_Tyre_Profile,
      Rear_Tyre_Profile,
      Spare_Tyre_Profile,
      Front_Suspension,
      Rear_Suspension,
      Cupholders,
      Fuel_Tank_Capacity,
      boot_Space,
      Boot_Space_after,
      Engine_Name_Varient,
      Company_Claimed,
      City_Real_World,
      Highway_Real_World,
      varientGroupData: varientgroup,
      roof_rails: Roof_rails,
      front_fog_lights: Fog_lights,
      spare_wheel_type: Spare_wheel
    };
  
    appendFields(formData, generalFields);
  
    // Append preview images and texts
    previewImages.forEach((previewImage, index) => {
      appendPreviewImage(formData, previewImage, PreviewImagedef, index);
    });
    previewTexts.forEach((previewText, index) => {
      appendPreviewText(formData, previewText, index);
    });
  
    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/add-varient`, {
        method: 'POST',
        body: formData,
      });
  
      if (result.status >= 200 && result.status < 300) {
        toast.success('Variant saved successfully!');
        setTimeout(() => window.location.assign('/variant'), 3500);
      } else {
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
              <input
                type="text"
                className="form-control"
                id="ventilated-seats"
                placeholder="Ventilated Seats"
                required
                value={Ventilated_Seats}
                onChange={(e) => setVentilated_Seats(e.target.value)}
                list="ventilated-seats-options"
              />

              <datalist id="ventilated-seats-options">
                <option value="YES" />
                <option value="NA" />
                <option value="FRONT" />
                <option value="FRONT & REAR" />
              </datalist>
            </div>
            <div>
              <label for=" "> Air Purifier</label>
              <input
                type="text"
                className="form-control inwart"
                id="air-purifier"
                placeholder="Air Purifier"
                value={Air_Purifier}
                onChange={(e) => setAir_Purifier(e.target.value)}
                list="air-purifier-options"
                aria-label="Default select example"
              />

              <datalist id="air-purifier-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Cruise Control</label>
              <input
                type="text"
                className="form-control inwart"
                id="cruise-control"
                placeholder="Cruise Control"
                value={Cruise_Control}
                onChange={(e) => setCruise_Control(e.target.value)}
                list="cruise-control-options"
                aria-label="Default select example"
              />

              <datalist id="cruise-control-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Rain Sensing Wipers</label>
              <input
                type="text"
                className="form-control inwart"
                id="rain-sensing-wipers"
                placeholder="Rain Sensing Wipers"
                value={Rain_Sensing_Wipers}
                onChange={(e) => setRain_Sensing_Wipers(e.target.value)}
                list="rain-sensing-wipers-options"
                aria-label="Default select example"
              />

              <datalist id="rain-sensing-wipers-options">
                <option value="YES" />
                <option value="NA" />
                <option value="ADAPTIVE" />
              </datalist>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3 mt-5">
            <div>
              <label for=" ">Sunroof</label>
              <input type="Name" class="form-control" id=" " placeholder="Sunroof" required value={sunroof} onChange={(e) => setsunroof(e.target.value)} />
            </div>
            <div>
              <label for=" ">Automatic Headlamp</label>
              <input
                type="text"
                className="form-control inwart"
                id="automatic-headlamp"
                placeholder="Automatic Headlamp"
                value={automaticHeadLamp}
                onChange={(e) => setautomaticHeadLamp(e.target.value)}
                list="automatic-headlamp-options"
                aria-label="Default select example"
              />

              <datalist id="automatic-headlamp-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Follow Me Home Headlights</label>
              <input
                type="text"
                className="form-control inwart"
                id="follow-me-home-headlights"
                placeholder="Follow Me Home Headlights"
                value={Follow_Me_Home_Headlights}
                onChange={(e) => setFollow_Me_Home_Headlights(e.target.value)}
                list="follow-me-home-headlights-options"
                aria-label="Default select example"
              />

              <datalist id="follow-me-home-headlights-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Keyless Entry</label>
              <input
                type="text"
                className="form-control inwart"
                id="keyless-entry"
                placeholder="Keyless Entry"
                value={keyLess_Entry}
                onChange={(e) => setkeyLess_Entry(e.target.value)}
                list="keyless-entry-options"
                aria-label="Default select example"
              />

              <datalist id="keyless-entry-options">
                <option value="YES" />
                <option value="NA" />
                <option value="KEYLESS ENTRY" />
                <option value="PROXIMITY SENSOR" />
              </datalist>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3 mt-5">
            <div>
              <label for=" ">Ignition</label>
              <input
                type="text"
                className="form-control inwart"
                id="ignition"
                placeholder="Ignition"
                value={ignition}
                onChange={(e) => setignition(e.target.value)}
                list="ignition-options"
                aria-label="Default select example"
              />

              <datalist id="ignition-options">
                <option value="KEY START" />
                <option value="PUSH BUTTON START STOP" />
              </datalist>

            </div>
            <div>
              <label for=" ">Ambient Lighting</label>
              <input
                type="text"
                className="form-control inwart"
                id="ambient-lighting"
                placeholder="Ambient Lighting"
                value={Ambient_Lighting}
                onChange={(e) => setAmbient_Lighting(e.target.value)}
                list="ambient-lighting-options"
                aria-label="Default select example"
              />

              <datalist id="ambient-lighting-options">
                <option value="NA" />
                <option value="SINGLE COLOUR" />
                <option value="MULTI COLOUR" />
              </datalist>
            </div>
            <div>
              <label for=" ">Steering Adjustment</label>
              <input
                type="text"
                className="form-control inwart"
                id="steering-adjustment"
                placeholder="Steering Adjustment"
                value={Steering_Adjustment}
                onChange={(e) => setSteering_Adjustment(e.target.value)}
                list="steering-adjustment-options"
                aria-label="Default select example"
              />

              <datalist id="steering-adjustment-options">
                <option value="TILT" />
                <option value="TILT & TELESCOPIC" />
              </datalist>
            </div>
            <div>
              <label for=" ">Air Conditioning</label>
              <input
                type="text"
                className="form-control inwart"
                id="air-conditioning"
                placeholder="Air Conditioning"
                value={Air_Conditioning}
                onChange={(e) => setAir_Conditioning(e.target.value)}
                list="air-conditioning-options"
                aria-label="Default select example"
              />

              <datalist id="air-conditioning-options">
                <option value="YES" />
                <option value="MANUAL" />
                <option value="AUTOMATIC" />
              </datalist>
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
              <input
                type="text"
                className="form-control inwart"
                id="front-armrest"
                placeholder="Front Armrest"
                value={frontArmrest}
                onChange={(e) => setfrontArmrest(e.target.value)}
                list="front-armrest-options"
                aria-label="Default select example"
              />

              <datalist id="front-armrest-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Rear Armrest</label>
              <input
                type="text"
                className="form-control inwart"
                id="rear-armrest"
                placeholder="Rear Armrest"
                value={rearArmrest}
                onChange={(e) => setrearArmrest(e.target.value)}
                list="rear-armrest-options"
                aria-label="Default select example"
              />

              <datalist id="rear-armrest-options">
                <option value="YES" />
                <option value="NA" />
                <option value="Automatic" />
              </datalist>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-3 mt-5">
            <div>
              <label for=" ">Inside rear view mirror (IRVM)</label>
              <input
                type="text"
                className="form-control inwart"
                id="irvm"
                placeholder="Inside Rear View Mirror (IRVM)"
                value={IVRM}
                onChange={(e) => setIVRM(e.target.value)}
                list="irvm-options"
                aria-label="Default select example"
              />

              <datalist id="irvm-options">
                <option value="MANUAL" />
                <option value="AUTO DIMMING" />
              </datalist>
            </div>
            <div>
              <label for=" ">Outside rear view mirrors (ORVM)</label>
              <input type="Name" class="form-control" id=" " placeholder="Outside rear view mirrors (ORVM)" value={OVRM} onChange={(e) => setOVRM(e.target.value)} />
            </div>
            <div>
              <label for=" ">Steering Mounted Controls</label>
              <input
                type="text"
                className="form-control inwart"
                id="steering-mounted-controls"
                placeholder="Steering Mounted Controls"
                value={Steering_Mounted_Controls}
                onChange={(e) => setSteering_Mounted_Controls(e.target.value)}
                list="steering-mounted-controls-options"
                aria-label="Default select example"
              />

              <datalist id="steering-mounted-controls-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Rear Windshield Defogger</label>
              <input
                type="text"
                className="form-control inwart"
                id="rear-windshield-defogger"
                placeholder="Rear Windshield Defogger"
                value={Rear_Windshield_Defogger}
                onChange={(e) => setRear_Windshield_Defogger(e.target.value)}
                list="rear-windshield-defogger-options"
                aria-label="Default select example"
              />

              <datalist id="rear-windshield-defogger-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>

          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Front Windshield Defogger</label>
              <input
                type="text"
                className="form-control inwart"
                id="front-windshield-defogger"
                placeholder="Front Windshield Defogger"
                value={Front_Windshield_Defogger}
                onChange={(e) => setFront_Windshield_Defogger(e.target.value)}
                list="front-windshield-defogger-options"
                aria-label="Default select example"
              />

              <datalist id="front-windshield-defogger-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Cooled Glovebox</label>
              <input
                type="text"
                className="form-control inwart"
                id="cooled-glovebox"
                placeholder="Cooled Glovebox"
                value={Cooled_Glovebox}
                onChange={(e) => setCooled_Glovebox(e.target.value)}
                list="cooled-glovebox-options"
                aria-label="Default select example"
              />

              <datalist id="cooled-glovebox-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
          </div>







          <hr></hr>
          <div className='h2 mt-3 inside-block'>Safety<span></span></div>
          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Global NCAP Rating</label>
              <input
                type="text"
                className="form-control inwart"
                id="global-ncap-rating"
                placeholder="Select Rating"
                value={Global_NCAP_Rating}
                onChange={(e) => setGlobal_NCAP_Rating(e.target.value)}
                list="global-ncap-rating-options"
                aria-label="Default select example"
              />

              <datalist id="global-ncap-rating-options">
                <option value="NA" />
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
              </datalist>
            </div>
            <div>
              <label for=" ">Airbags</label>
              <input
                type="text"
                className="form-control inwart"
                id="airbags"
                placeholder="Airbags"
                value={airbags}
                onChange={(e) => setairbags(e.target.value)}
                list="airbags-options"
                aria-label="Default select example"
              />

              <datalist id="airbags-options">
                <option value="NA" />
                {[...Array(30).keys()].map(num => (
                  <option key={num + 1} value={num + 1} />
                ))}
              </datalist>
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
              <input
                type="text"
                className="form-control inwart"
                id="reverse-camera-guidelines"
                placeholder="Reverse Camera Guidelines"
                value={Reverse_Camera_Guidelines}
                onChange={(e) => setReverse_Camera_Guidelines(e.target.value)}
                list="reverse-camera-guidelines-options"
                aria-label="Default select example"
              />

              <datalist id="reverse-camera-guidelines-options">
                <option value="YES" />
                <option value="NA" />
                <option value="STATIC" />
                <option value="ADAPTIVE" />
              </datalist>
            </div>
            <div>
              <label for=" ">Tyre pressure Monitor (TPMS)</label>
              <input
                type="text"
                className="form-control inwart"
                id="tpms"
                placeholder="Tyre pressure Monitor (TPMS)"
                value={TMPS}
                onChange={(e) => setTMPS(e.target.value)}
                list="tpms-options"
                aria-label="Default select example"
              />

              <datalist id="tpms-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Hill Hold Assist</label>
              <input
                type="text"
                className="form-control inwart"
                id="hill-hold-assist"
                placeholder="Hill Hold Assist"
                value={Hill_Hold_Assist}
                onChange={(e) => setHill_Hold_Assist(e.target.value)}
                list="hill-hold-assist-options"
                aria-label="Default select example"
              />

              <datalist id="hill-hold-assist-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Hill Descent Control</label>
              <input
                type="text"
                className="form-control inwart"
                id="hill-descent-control"
                placeholder="Hill Descent Control"
                value={Hill_Descent_Control}
                onChange={(e) => setHill_Descent_Control(e.target.value)}
                list="hill-descent-control-options"
                aria-label="Default select example"
              />

              <datalist id="hill-descent-control-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
          </div>


          <div class="form-group d-flex justify-content-evenly mb-3">

            <div>
              <label for=" ">Roll Over Mitigation</label>
              <input
                type="text"
                className="form-control inwart"
                id="roll-over-mitigation"
                placeholder="Roll Over Mitigation"
                value={Roll_Over_Mitigation}
                onChange={(e) => setRoll_Over_Mitigation(e.target.value)}
                list="roll-over-mitigation-options"
                aria-label="Default select example"
              />

              <datalist id="roll-over-mitigation-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">Disc Brakes</label>
              <input
                type="text"
                className="form-control inwart"
                id="disc-brakes"
                placeholder="Disc Brakes"
                value={Disc_Brakes}
                onChange={(e) => setDisc_Brakes(e.target.value)}
                list="disc-brakes-options"
                aria-label="Default select example"
              />

              <datalist id="disc-brakes-options">
                <option value="FRONT" />
                <option value="FRONT & REAR" />
              </datalist>
            </div>
            <div>
              <label for=" ">Electronic stability program (ESP)</label>
              <input
                type="text"
                className="form-control inwart"
                id="esp"
                placeholder="Electronic Stability Program (ESP)"
                value={ESP}
                onChange={(e) => setESP(e.target.value)}
                list="esp-options"
                aria-label="Default select example"
              />

              <datalist id="esp-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
            <div>
              <label for=" ">ABS</label>
              <input
                type="text"
                className="form-control inwart"
                id="abs"
                placeholder="ABS"
                value={ABS}
                onChange={(e) => setABS(e.target.value)}
                list="abs-options"
                aria-label="Default select example"
              />

              <datalist id="abs-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

            </div>


          </div>

          <div class="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for=" ">Electronic Brakeforce Distribution (EBD)</label>
              <input
                type="text"
                className="form-control inwart"
                id="ebd"
                placeholder="Electronic Brakeforce Distribution (EBD)"
                value={EBD}
                onChange={(e) => setEBD(e.target.value)}
                list="ebd-options"
                aria-label="Default select example"
              />

              <datalist id="ebd-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

            </div>
            <div>
              <label for=" ">Brake assist (BA)</label>
              <input
                type="text"
                className="form-control inwart"
                id="brake-assist"
                placeholder="Brake Assist (BA)"
                value={Brake_assist}
                onChange={(e) => setBrake_assist(e.target.value)}
                list="brake-assist-options"
                aria-label="Default select example"
              />

              <datalist id="brake-assist-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

            </div>
            <div>
              <label for=" ">ISOFIX Mounts</label>
              <input
                type="text"
                className="form-control inwart"
                id="isofix-mounts"
                placeholder="ISOFIX Mounts"
                value={ISOFIX_Mounts}
                onChange={(e) => setISOFIX_Mounts(e.target.value)}
                list="isofix-mounts-options"
                aria-label="Default select example"
              />

              <datalist id="isofix-mounts-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

            </div>
            <div>
              <label for=" ">Driver & Co-Driver Seatbelt Warning</label>
              <input
                type="text"
                className="form-control inwart"
                id="seatbelt-warning"
                placeholder="Driver & Co-Driver Seatbelt Warning"
                value={Driver_CoDriver_Seatbelt_Warning}
                onChange={(e) => setDriver_CoDriver_Seatbelt_Warning(e.target.value)}
                list="seatbelt-warning-options"
                aria-label="Default select example"
              />

              <datalist id="seatbelt-warning-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
            </div>
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4">
            <div>
              <label for=" ">High speed Alert System</label>
              <input
                type="text"
                className="form-control inwart"
                id="high-speed-alert-system"
                placeholder="High Speed Alert System"
                value={High_speed_Alert_System}
                onChange={(e) => setHigh_speed_Alert_System(e.target.value)}
                list="high-speed-alert-system-options"
                aria-label="Default select example"
              />

              <datalist id="high-speed-alert-system-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

            </div>
            <div>
              <label for=" ">Speed Sensing Door Locks</label>
              <input
                type="text"
                className="form-control inwart"
                id="speed-sensing-door-locks"
                placeholder="Speed Sensing Door Locks"
                value={Speed_Sensing_Door_Locks}
                onChange={(e) => setSpeed_Sensing_Door_Locks(e.target.value)}
                list="speed-sensing-door-locks-options"
                aria-label="Default select example"
              />

              <datalist id="speed-sensing-door-locks-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

            </div>
            <div>
              <label for=" ">Immobiliser</label>
              <input
                type="text"
                className="form-control inwart"
                id="immobiliser"
                placeholder="Immobiliser"
                value={Immobiliser}
                onChange={(e) => setImmobiliser(e.target.value)}
                list="immobiliser-options"
                aria-label="Default select example"
              />

              <datalist id="immobiliser-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

            </div>
            <div>
              <label for=" ">Parking Sensor</label>
              <input
                type="text"
                className="form-control inwart"
                id="parking-sensor"
                placeholder="Parking Sensor"
                value={Parking_Sensor}
                onChange={(e) => setParking_Sensor(e.target.value)}
                list="parking-sensor-options"
                aria-label="Default select example"
              />

              <datalist id="parking-sensor-options">
                <option value="YES" />
                <option value="FRONT & REAR" />
                <option value="REAR" />
                <option value="NA" />
              </datalist>

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
              <input
                type="text"
                className="form-control inwart"
                id="android-apple-carplay"
                placeholder="Android & Apple Carplay"
                value={Android_Apple_Carplay}
                onChange={(e) => setAndroid_Apple_Carplay(e.target.value)}
                list="android-apple-carplay-options"
                aria-label="Default select example"
              />

              <datalist id="android-apple-carplay-options">
                <option value="NA" />
                <option value="WIRED" />
                <option value="WIRELESS" />
              </datalist>

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
              <input
                type="text"
                className="form-control inwart"
                id="wireless-charging"
                placeholder="Wireless Charging"
                value={wireless_Charging}
                onChange={(e) => setwireless_Charging(e.target.value)}
                list="wireless-charging-options"
                aria-label="Default select example"
              />

              <datalist id="wireless-charging-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

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
              <input
                type="text"
                className="form-control inwart"
                id="fuel"
                placeholder="Fuel"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                list="fuel-options"
                aria-label="Default select example"
              />

              <datalist id="fuel-options">
                <option value="PETROL" />
                <option value="DIESEL" />
                <option value="CNG" />
                <option value="HYBRID" />
                <option value="ELECTRIC" />
              </datalist>

            </div>
            <div>
              <label for=" ">Transmission</label>
              <input
                type="text"
                className="form-control inwart"
                id="transmission"
                placeholder="Transmission"
                value={transmission_2}
                onChange={(e) => setTransmission_2(e.target.value)}
                list="transmission-options"
                aria-label="Default select example"
              />

              <datalist id="transmission-options">
                <option value="MANUAL" />
                <option value="IMT" />
                <option value="AMT" />
                <option value="DUAL CLUTCH" />
                <option value="TORQUE CONVERTER" />
                <option value="CVT" />
                <option value="E-CVT" />
                <option value="SINGLE SPEED AUTOMATIC" />
              </datalist>

            </div>
          </div>

          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">No of Gears</label>
              <input type="name" class="form-control" id=" " placeholder="No of Gears" value={number_of_Gears} onChange={(e) => setnumber_of_Gears(e.target.value)} />
            </div>
            <div>
              <label for=" ">Paddle Shifter</label>
              <input
                type="text"
                className="form-control inwart"
                id="paddle-shifter"
                placeholder="Paddle Shifter"
                value={paddle_shifter}
                onChange={(e) => setpaddle_shifter(e.target.value)}
                list="paddle-shifter-options"
                aria-label="Default select example"
              />

              <datalist id="paddle-shifter-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>
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
              <input
                type="text"
                className="form-control inwart"
                id="turbo-charged"
                placeholder="Turbo Charged"
                value={Turbo_Charged}
                onChange={(e) => setTurbo_Charged(e.target.value)}
                list="turbo-charged-options"
                aria-label="Default select example"
              />

              <datalist id="turbo-charged-options">
                <option value="NON-TURBO CHARGED" />
                <option value="TURBO CHARGED" />
              </datalist>

            </div>
            <div>
              <label for=" ">Hybrid Type</label>
              <input
                type="text"
                className="form-control inwart"
                id="hybrid-type"
                placeholder="Hybrid Type"
                value={Hybrid_Type}
                onChange={(e) => setHybrid_Type(e.target.value)}
                list="hybrid-type-options"
                aria-label="Default select example"
              />

              <datalist id="hybrid-type-options">
                <option value="NA" />
                <option value="MILD-HYBRID" />
                <option value="STRONG-HYBRID" />
                <option value="PLUG-IN HYBRID" />
                <option value="FULLY ELECTRIC" />
              </datalist>

            </div>
            <div>
              <label for=" ">Drive Train</label>
              <input
                type="text"
                className="form-control inwart"
                id="drive-train"
                placeholder="Drive Train"
                value={driveTrain}
                onChange={(e) => setDriveTrain(e.target.value)}
                list="drive-train-options"
                aria-label="Default select example"
              />

              <datalist id="drive-train-options">
                <option value="FRONT WHEEL DRIVE" />
                <option value="REAR WHEEL DRIVE" />
                <option value="ALL WHEEL DRIVE" />
                <option value="4x4" />
              </datalist>

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
            <div>
              <label for=" ">Differential Lock Type</label>
              <input type="name" class="form-control" id=" " placeholder="Differential Lock Type" value={Differential_Lock_Type} onChange={(e) => setDifferential_Lock_Type(e.target.value)} />
            </div>
          </div>

          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Limited Slip Differential</label>
              <input
                type="text"
                className="form-control inwart"
                id="limited-slip-differential"
                placeholder="Limited Slip Differential"
                value={Limited_Slip_Differential}
                onChange={(e) => setLimited_Slip_Differential(e.target.value)}
                list="limited-slip-differential-options"
                aria-label="Default select example"
              />

              <datalist id="limited-slip-differential-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

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
          </div>
          <div class="form-group d-flex justify-content-evenly mb-4 mt-5">
            <div>
              <label for=" ">Radio Antenna</label>
              <input
                type="text"
                className="form-control inwart"
                id="radio-antenna"
                placeholder="Radio Antenna"
                value={radioAntina}
                onChange={(e) => setRadioAntina(e.target.value)}
                list="radio-antenna-options"
                aria-label="Default select example"
              />

              <datalist id="radio-antenna-options">
                <option value="REGULAR" />
                <option value="SHARK FIN" />
                <option value="NA" />
              </datalist>

            </div>
            <div>
              <label for=" ">Outside rear view mirror (ORVM) Colour</label>
              <input type="name" class="form-control" id=" " placeholder="Outside rear view mirror (ORVM) Colour" value={OVRMColor} onChange={(e) => setOVRMColor(e.target.value)} />
            </div>
            <div>
              <label for=" ">Daytime running lights (DRL's)</label>
              <input
                type="text"
                className="form-control inwart"
                id="drl"
                placeholder="Daytime Running Lights (DRL's)"
                value={DRL}
                onChange={(e) => setDRL(e.target.value)}
                list="drl-options"
                aria-label="Default select example"
              />

              <datalist id="drl-options">
                <option value="YES" />
                <option value="NA" />
              </datalist>

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
              <input
                type="text"
                className="form-control inwart"
                id="cupholders"
                placeholder="Cupholders"
                value={Cupholders}
                onChange={(e) => setCupholders(e.target.value)}
                list="cupholders-options"
                aria-label="Default select example"
              />

              <datalist id="cupholders-options">
                <option value="NA" />
                <option value="YES" />
              </datalist>

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