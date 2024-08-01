import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCaretDown } from "react-icons/io5";




const Addproduct = () => {
  const [brands, setBrands] = useState([]);
  const [brand, setSelectedBrandId] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/brands`);
        const data = await response.json();
        const sortedBrands = data.sort((a, b) => a.name.localeCompare(b.name));
        setBrands(sortedBrands);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const [seater, setSeater] = useState('');
  const [fueltype, setFuel] = useState('');
  const [transmissiontype, setTransmission] = useState('');
  const [NCAP, setNCAP] = useState('');
  const [heroimagename, setHeroimagename] = useState('');
  // const [sellingsince, setSellingsince] = useState('');
  const [salesranking, setSalesranking] = useState('');
  const [launchedinput, setLaunchedinput] = useState('');
  const [grayname, setGrayname] = useState('');
  const [redname, setRedname] = useState('');
  const [blueimagename, setBlueimagename] = useState('');
  const [blackimagename, setBlackimagename] = useState('');
  const [greenimagename, setGreenimagename] = useState('');
  const [creamimagename, setCreamimagename] = useState('');
  const [brownimagename, setbrownimagename] = useState('');
  const [yellowimagename, setYellowimagename] = useState('');
  const [purpleimagename, setPurpleimagename] = useState('');
  const [whitename, setWhitename] = useState('');
  const [heroimage, setPreviewImage] = useState(null);
  const [grayimage, setPreviewImage1] = useState('');
  const [redimage, setPreviewImage2] = useState('');
  const [blueimage, setPreviewImage3] = useState('');
  const [blackimage, setPreviewImage4] = useState('');
  const [greenimage, setPreviewImage5] = useState('');
  const [creamimage, setPreviewImage6] = useState('');
  const [brownimage, setPreviewImage7] = useState('');
  const [yellowimage, setPreviewImage8] = useState('');
  const [purpleimage, setPreviewImage9] = useState('');
  const [whiteimage, setPreviewImage10] = useState('');
  const [carname, setCarName] = useState('');
  const [moverdict, setMoverdict] = useState('');
  const [itext, setText] = useState('');
  const [pro, setPro] = useState('');
  const [cons, setCon] = useState('');
  const [upcoming, setUpcoming] = useState(false);
  const [disable, setDisable] = useState(false);
  const [carbrowsher, setCarbrowsher] = useState(null);
  const [bodytype, setBodytype] = useState(null);
  const [subbodytype, setSubBodytype] = useState(null);


  const [asliheader1, setasliheader1] = useState(null);
  const [aslisummary1, setaslisummary1] = useState(null);
  const [engineh1, setengineh1] = useState(null);
  const [engineh2, setengineh2] = useState(null);
  const [enginesummary1, setenginesummary1] = useState(null);
  const [engineauto1, setengineauto1] = useState(null);
  const [engineimt1, setengineimt1] = useState(null);
  const [enginemanual1, setenginemanual1] = useState(null);
  const [engineh2a, setengineh2a] = useState(null);
  const [engineh21, setengineh21] = useState(null);
  const [enginesummary2, setenginesummary2] = useState(null);
  const [engineauto2, setengineauto2] = useState(null);
  const [engineimt2, setengineimt2] = useState(null);
  const [enginemanual2, setenginemanual2] = useState(null);
  const [engineh3, setengineh3] = useState(null);
  const [engineh31, setengineh31] = useState(null);
  const [enginesummary3, setenginesummary3] = useState(null);
  const [engineauto3, setengineauto3] = useState(null);
  const [engineimt3, setengineimt3] = useState(null);
  const [enginemanual3, setenginemanual3] = useState(null);
  const [engineh4, setengineh4] = useState(null);
  const [engineh41, setengineh41] = useState(null);
  const [enginesummary4, setenginesummary4] = useState(null);
  const [engineauto4, setengineauto4] = useState(null);
  const [engineimt4, setengineimt4] = useState(null);
  const [enginemanual4, setenginemanual4] = useState(null);
  const [standard, setstandard] = useState(null);
  const [extended, setextended] = useState(null);
  const [Service, setService] = useState(null);

  const [previewImage, setPreviewImagen] = useState('');
  const [previewImage1, setPreviewImagen1] = useState('');
  const [previewImage2, setPreviewImagen2] = useState('');
  const [previewImage3, setPreviewImagen3] = useState('');
  const [previewImage4, setPreviewImagen4] = useState('');
  const [previewImage5, setPreviewImagen5] = useState('');
  const [previewImage6, setPreviewImagen6] = useState('');
  const [previewImage7, setPreviewImagen7] = useState('');
  const [previewImage8, setPreviewImagen8] = useState('');
  const [previewImage9, setPreviewImagen9] = useState('');
  const [previewImage10, setPreviewImagen10] = useState('');
  const [previewImage11, setPreviewImagen11] = useState('');
  const [previewImage12, setPreviewImagen12] = useState('');
  const [previewImage13, setPreviewImagen13] = useState('');
  const [previewImage14, setPreviewImagen14] = useState('');
  const [previewImage15, setPreviewImagen15] = useState('');
  const [previewImage16, setPreviewImagen16] = useState('');
  const [previewImage17, setPreviewImagen17] = useState('');
  const [previewImage18, setPreviewImagen18] = useState('');
  const [previewImage19, setPreviewImagen19] = useState('');
  const [previewImage20, setPreviewImagen20] = useState('');
  const [previewImage21, setPreviewImagen21] = useState('');
  const [previewImage22, setPreviewImagen22] = useState('');
  const [previewImage23, setPreviewImagen23] = useState('');
  const [previewImage24, setPreviewImagen24] = useState('');
  const [previewImage25, setPreviewImagen25] = useState('');
  const [previewImage26, setPreviewImagen26] = useState('');
  const [previewImage27, setPreviewImagen27] = useState('');
  const [previewImage28, setPreviewImagen28] = useState('');
  const [previewImage29, setPreviewImagen29] = useState('');
  const [previewImage30, setPreviewImagen30] = useState('');
  const [previewImage31, setPreviewImagen31] = useState('');
  const [previewImage32, setPreviewImagen32] = useState('');
  const [previewImage33, setPreviewImagen33] = useState('');
  const [previewImage34, setPreviewImagen34] = useState('');
  const [previewImage35, setPreviewImagen35] = useState('');
  const [previewImage36, setPreviewImagen36] = useState('');
  const [previewImage37, setPreviewImagen37] = useState('');
  const [previewImage38, setPreviewImagen38] = useState('');
  const [previewImage39, setPreviewImagen39] = useState('');
  const [previewImage40, setPreviewImagen40] = useState('');
  const [previewImage41, setPreviewImagen41] = useState('');
  const [previewImage42, setPreviewImagen42] = useState('');
  const [previewImage43, setPreviewImagen43] = useState('');
  const [previewImage44, setPreviewImagen44] = useState('');
  const [previewImage45, setPreviewImagen45] = useState('');
  const [previewImage46, setPreviewImagen46] = useState('');
  const [previewImage47, setPreviewImagen47] = useState('');
  const [previewImage48, setPreviewImagen48] = useState('');
  const [previewImage49, setPreviewImagen49] = useState('');
  const [previewImage50, setPreviewImagen50] = useState('');
  const [previewImage51, setPreviewImagen51] = useState('');
  const [previewImage52, setPreviewImagen52] = useState('');
  const [previewImage53, setPreviewImagen53] = useState('');
  const [previewImage54, setPreviewImagen54] = useState('');
  const [previewImage55, setPreviewImagen55] = useState('');
  const [previewImage56, setPreviewImagen56] = useState('');
  const [previewImage57, setPreviewImagen57] = useState('');
  const [previewImage58, setPreviewImagen58] = useState('');
  const [previewImage59, setPreviewImagen59] = useState('');



  const [previewText, setpreviewText] = useState('');
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
  const [previewText20, setpreviewText20] = useState('');
  const [previewText21, setpreviewText21] = useState('');
  const [previewText22, setpreviewText22] = useState('');
  const [previewText23, setpreviewText23] = useState('');
  const [previewText24, setpreviewText24] = useState('');
  const [previewText25, setpreviewText25] = useState('');
  const [previewText26, setpreviewText26] = useState('');
  const [previewText27, setpreviewText27] = useState('');
  const [previewText28, setpreviewText28] = useState('');
  const [previewText29, setpreviewText29] = useState('');
  const [previewText30, setpreviewText30] = useState('');
  const [previewText31, setpreviewText31] = useState('');
  const [previewText32, setpreviewText32] = useState('');
  const [previewText33, setpreviewText33] = useState('');
  const [previewText34, setpreviewText34] = useState('');
  const [previewText35, setpreviewText35] = useState('');
  const [previewText36, setpreviewText36] = useState('');
  const [previewText37, setpreviewText37] = useState('');
  const [previewText38, setpreviewText38] = useState('');
  const [previewText39, setpreviewText39] = useState('');
  const [previewText40, setpreviewText40] = useState('');
  const [previewText41, setpreviewText41] = useState('');
  const [previewText42, setpreviewText42] = useState('');
  const [previewText43, setpreviewText43] = useState('');
  const [previewText44, setpreviewText44] = useState('');
  const [previewText45, setpreviewText45] = useState('');
  const [previewText46, setpreviewText46] = useState('');
  const [previewText47, setpreviewText47] = useState('');
  const [previewText48, setpreviewText48] = useState('');
  const [previewText49, setpreviewText49] = useState('');
  const [previewText50, setpreviewText50] = useState('');
  const [previewText51, setpreviewText51] = useState('');
  const [previewText52, setpreviewText52] = useState('');
  const [previewText53, setpreviewText53] = useState('');
  const [previewText54, setpreviewText54] = useState('');
  const [previewText55, setpreviewText55] = useState('');
  const [previewText56, setpreviewText56] = useState('');
  const [previewText57, setpreviewText57] = useState('');
  const [previewText58, setpreviewText58] = useState('');
  const [previewText59, setpreviewText59] = useState('');


  const handleClick = async () => {
    let formData = new FormData();
    formData.append("brand", brand);
    formData.append("seater", seater);
    formData.append("fueltype", fueltype);
    formData.append("transmissiontype", transmissiontype);
    formData.append("carname", carname);
    // formData.append("sellingsince", sellingsince);
    formData.append("salesranking", salesranking);
    formData.append("launchedinput", launchedinput);
    formData.append("movrating", moverdict);
    formData.append("heroimage", heroimage);
    formData.append("grayimage", grayimage);
    formData.append("redimage", redimage);
    formData.append("blueimage", blueimage);
    formData.append("blackimage", blackimage);
    formData.append("greenimage", greenimage);
    formData.append("creamimage", creamimage);
    formData.append("brownimage", brownimage);
    formData.append("yellowimage", yellowimage);
    formData.append("purpleimage", purpleimage);
    formData.append("whiteimage", whiteimage);
    formData.append("NCAP", NCAP);
    formData.append("heroimagename", heroimagename);
    formData.append("grayname", grayname);
    formData.append("redname", redname);
    formData.append("blueimagename", blueimagename);
    formData.append("blackimagename", blackimagename);
    formData.append("greenimagename", greenimagename);
    formData.append("creamimagename", creamimagename);
    formData.append("brownimagename", brownimagename);
    formData.append("yellowimagename", yellowimagename);
    formData.append("purpleimagename", purpleimagename);
    formData.append("itext", itext);
    formData.append("cons", cons);
    formData.append("pro", pro);
    formData.append("carbrowsher", carbrowsher);
    formData.append("upcoming", upcoming);
    formData.append("active", disable);
    formData.append("bodytype", bodytype);
    formData.append("subbodytype", subbodytype);

    formData.append("asliheader1", asliheader1);
    formData.append("aslisummary1", aslisummary1);
    formData.append("engineh1", engineh1);
    formData.append("engineh2", engineh2);
    formData.append("enginesummary1", enginesummary1);
    formData.append("engineauto1", engineauto1);
    formData.append("engineimt1", engineimt1);
    formData.append("enginemanual1", enginemanual1);
    formData.append("engineh2a", engineh2a);
    formData.append("engineh21", engineh21);
    formData.append("enginesummary2", enginesummary2);
    formData.append("engineauto2", engineauto2);
    formData.append("engineimt2", engineimt2);
    formData.append("enginemanual2", enginemanual2);
    formData.append("engineh3", engineh3);
    formData.append("engineh31", engineh31);
    formData.append("enginesummary3", enginesummary3);
    formData.append("engineauto3", engineauto3);
    formData.append("engineimt3", engineimt3);
    formData.append("enginemanual3", enginemanual3);
    formData.append("engineh4", engineh4);
    formData.append("engineh41", engineh41);
    formData.append("enginesummary4", enginesummary4);
    formData.append("engineauto4", engineauto4);
    formData.append("engineimt4", engineimt4);
    formData.append("enginemanual4", enginemanual4);
    formData.append("standard", standard);
    formData.append("extended", extended);
    formData.append("Service", Service);


    formData.append("keyF1", previewImage);
    formData.append("keyF1text", previewText);
    formData.append("keyF2", previewImage1);
    formData.append("keyF2text", previewText1);
    formData.append("keyF3", previewImage2);
    formData.append("keyF3text", previewText2);
    formData.append("keyF4", previewImage3);
    formData.append("keyF4text", previewText3);
    formData.append("keyF5", previewImage4);
    formData.append("keyF5text", previewText4);
    formData.append("keyF6", previewImage5);
    formData.append("keyF6text", previewText5);
    formData.append("keyF7", previewImage6);
    formData.append("keyF7text", previewText6);
    formData.append("keyF8", previewImage7);
    formData.append("keyF8text", previewText7);
    formData.append("keyF9", previewImage8);
    formData.append("keyF9text", previewText8);
    formData.append("keyF10", previewImage9);
    formData.append("keyF10text", previewText9);
    formData.append("keyF11", previewImage10);
    formData.append("keyF11text", previewText10);
    formData.append("keyF12", previewImage11);
    formData.append("keyF12text", previewText11);
    formData.append("keyF13", previewImage12);
    formData.append("keyF13text", previewText12);
    formData.append("keyF14", previewImage13);
    formData.append("keyF14text", previewText13);
    formData.append("keyF15", previewImage14);
    formData.append("keyF15text", previewText14);
    formData.append("keyF16", previewImage15);
    formData.append("keyF16text", previewText15);
    formData.append("keyF17", previewImage16);
    formData.append("keyF17text", previewText16);
    formData.append("keyF18", previewImage17);
    formData.append("keyF18text", previewText17);
    formData.append("keyF19", previewImage18);
    formData.append("keyF19text", previewText18);
    formData.append("keyF20", previewImage19);
    formData.append("keyF20text", previewText19);
    formData.append("spaceC1", previewImage20);
    formData.append("spaceC1text", previewText20);
    formData.append("spaceC2", previewImage21);
    formData.append("spaceC2text", previewText21);
    formData.append("spaceC3", previewImage22);
    formData.append("spaceC3text", previewText22);
    formData.append("spaceC4", previewImage23);
    formData.append("spaceC4text", previewText23);
    formData.append("spaceC5", previewImage24);
    formData.append("spaceC5text", previewText24);
    formData.append("spaceC6", previewImage25);
    formData.append("spaceC6text", previewText25);
    formData.append("spaceC7", previewImage26);
    formData.append("spaceC7text", previewText26);
    formData.append("spaceC8", previewImage27);
    formData.append("spaceC8text", previewText27);
    formData.append("spaceC9", previewImage28);
    formData.append("spaceC9text", previewText28);
    formData.append("spaceC10", previewImage29);
    formData.append("spaceC10text", previewText29);
    formData.append("spaceC11", previewImage30);
    formData.append("spaceC11text", previewText30);
    formData.append("spaceC12", previewImage31);
    formData.append("spaceC12text", previewText31);
    formData.append("spaceC13", previewImage32);
    formData.append("spaceC13text", previewText32);
    formData.append("spaceC14", previewImage33);
    formData.append("spaceC14text", previewText33);
    formData.append("spaceC15", previewImage34);
    formData.append("spaceC15text", previewText34);
    formData.append("spaceC16", previewImage35);
    formData.append("spaceC16text", previewText35);
    formData.append("spaceC17", previewImage36);
    formData.append("spaceC17text", previewText36);
    formData.append("spaceC18", previewImage37);
    formData.append("spaceC18text", previewText37);
    formData.append("spaceC19", previewImage38);
    formData.append("spaceC19text", previewText38);
    formData.append("spaceC20", previewImage39);
    formData.append("spaceC20text", previewText39);
    formData.append("storageC1", previewImage40);
    formData.append("storageC1text", previewText40);
    formData.append("storageC2", previewImage41);
    formData.append("storageC2text", previewText41);
    formData.append("storageC3", previewImage42);
    formData.append("storageC3text", previewText42);
    formData.append("storageC4", previewImage43);
    formData.append("storageC4text", previewText43);
    formData.append("storageC5", previewImage44);
    formData.append("storageC5text", previewText44);
    formData.append("storageC6", previewImage45);
    formData.append("storageC6text", previewText45);
    formData.append("storageC7", previewImage46);
    formData.append("storageC7text", previewText46);
    formData.append("storageC8", previewImage47);
    formData.append("storageC8text", previewText47);
    formData.append("storageC9", previewImage48);
    formData.append("storageC9text", previewText48);
    formData.append("storageC10", previewImage49);
    formData.append("storageC10text", previewText49);
    formData.append("storageC11", previewImage50);
    formData.append("storageC11text", previewText50);
    formData.append("storageC12", previewImage51);
    formData.append("storageC12text", previewText51);
    formData.append("storageC13", previewImage52);
    formData.append("storageC13text", previewText52);
    formData.append("storageC14", previewImage53);
    formData.append("storageC14text", previewText53);
    formData.append("storageC15", previewImage54);
    formData.append("storageC15text", previewText54);
    formData.append("storageC16", previewImage55);
    formData.append("storageC16text", previewText55);
    formData.append("storageC17", previewImage56);
    formData.append("storageC17text", previewText56);
    formData.append("storageC18", previewImage57);
    formData.append("storageC18text", previewText57);
    formData.append("storageC19", previewImage58);
    formData.append("storageCtext", previewText58);
    formData.append("storageC20", previewImage59);
    formData.append("storageC20text", previewText59);
    // formData.append("Service", previewImage);
    // formData.append("Service", previewImage);


    try {
      let result = await fetch(`${process.env.REACT_APP_API}/api/cars`, {
        method: "POST",
        body: formData,
      });
      if (result.status === 201) {
        toast.success("Product saved successfully!");
        setTimeout(() => {
          window.location.assign('/product');
        }, 3500);
        // Handle success
      } else if (result.status === 409) {
        // Handle conflict
      } else {
        // Handle other cases
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const handleHeroImage = (e) => {
    const file = e.target.files[0];
    setPreviewImage(file);
  };
  const handlegrayimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage1(file);
  };
  const handleredimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage2(file);
  };
  const handleblueimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage3(file);
  };
  const handleblackimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage4(file);
  };
  const handlegreenimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage5(file);
  };
  const handlecreamimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage6(file);
  };
  const handlebrownimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage7(file);
  };
  const handleyellowimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage8(file);
  };
  const handlepurpleimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage9(file);
  };
  const handlewhiteimage = (e) => {
    const file = e.target.files[0];
    setPreviewImage10(file);
  };
  //   const handleHeroImage = (e) => {
  //    const file = e.target.files[0];
  //    setPreviewImage(file);
  // };
  const handlecarbrowsher = (e) => {
    const file = e.target.files[0];
    setCarbrowsher(file);
  };



  const handleImageChangen = (e) => {
    const file = e.target.files[0];
    setPreviewImagen(file);
  };
  const handleImageChange1n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen1(file);
  };
  const handleImageChange2n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen2(file);
  };
  const handleImageChange3n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen3(file);
  };
  const handleImageChange4n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen4(file);
  };
  const handleImageChange5n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen5(file);
  };
  const handleImageChange6n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen6(file);
  };
  const handleImageChange7n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen7(file);
  };
  const handleImageChange8n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen8(file);
  };
  const handleImageChange9n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen9(file);
  };
  const handleImageChange10n = (e) => {
    const file = e.target.files[0];
    setPreviewImagen10(file);
  };
  const handleImageChange11 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen11(file);
  };
  const handleImageChange12 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen12(file);
  };
  const handleImageChange13 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen13(file);
  };
  const handleImageChange14 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen14(file);
  };
  const handleImageChange15 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen15(file);
  };
  const handleImageChange16 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen16(file);
  };
  const handleImageChange17 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen17(file);
  };
  const handleImageChange18 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen18(file);
  };
  const handleImageChange19 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen19(file);
  };
  const handleImageChange20 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen20(file);
  };
  const handleImageChange21 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen21(file);
  };
  const handleImageChange22 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen22(file);
  };
  const handleImageChange23 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen23(file);
  };
  const handleImageChange24 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen24(file);
  };
  const handleImageChange25 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen25(file);
  };
  const handleImageChange26 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen26(file);
  };
  const handleImageChange27 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen27(file);
  };
  const handleImageChange28 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen28(file);
  };
  const handleImageChange29 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen29(file);
  };
  const handleImageChange30 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen30(file);
  };
  const handleImageChange31 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen31(file);
  };
  const handleImageChange32 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen32(file);
  };
  const handleImageChange33 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen33(file);
  };
  const handleImageChange34 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen34(file);
  };
  const handleImageChange35 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen35(file);
  };
  const handleImageChange36 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen36(file);
  };
  const handleImageChange37 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen37(file);
  };
  const handleImageChange38 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen38(file);
  };
  const handleImageChange39 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen39(file);
  };
  const handleImageChange40 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen40(file);
  };
  const handleImageChange41 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen41(file);
  };
  const handleImageChange42 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen42(file);
  };
  const handleImageChange43 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen43(file);
  };
  const handleImageChange44 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen44(file);
  };
  const handleImageChange45 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen45(file);
  };
  const handleImageChange46 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen46(file);
  };
  const handleImageChange47 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen47(file);
  };
  const handleImageChange48 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen48(file);
  };
  const handleImageChange49 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen49(file);
  };
  const handleImageChange50 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen50(file);
  };
  const handleImageChange51 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen51(file);
  };
  const handleImageChange52 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen52(file);
  };
  const handleImageChange53 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen53(file);
  };
  const handleImageChange54 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen54(file);
  };
  const handleImageChange55 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen55(file);
  };
  const handleImageChange56 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen56(file);
  };
  const handleImageChange57 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen57(file);
  };
  const handleImageChange58 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen58(file);
  };
  const handleImageChange59 = (e) => {
    const file = e.target.files[0];
    setPreviewImagen59(file);
  };

  const handleUpcomingToggle = () => {
    setUpcoming(!upcoming);
  };
  const handleDisableToggle = () => {
    setDisable(!disable);
  };




  const handleBodyTypeChange = (event) => {
    // Update the state with the selected value
    setBodytype(event.target.value);
  };

  const handleSubBodyTypeChange = (event) => {
    // Update the state with the selected value
    setSubBodytype(event.target.value);
  };


  return (
    <>
      <section >
        <div className='h2 text-center bg-blue'>Add <span>Product</span></div>

        <div className='d-flex align-items-center justify-content-center'>
          <select className="form-select mt-3 w-50" value={brand} onChange={(e) => setSelectedBrandId(e.target.value)}>
            <option value="" disabled>Choose one of the Brand!</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand._id}>{brand.name}</option>
            ))}
          </select>
          {/* <IoCaretDown className='drop-icon' /> */}

        </div>

        <div className='h2 mt-3'>Car <span>Data</span></div>

        <div className='carcardssection'>

          <div className="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for="">Car Name</label>
              <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Name" required
                value={carname}
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>

            {/* <div>
              <label for="">Selling Since</label>
              <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="Selling Since"  value={sellingsince}
                onChange={(e) => setSellingsince(e.target.value)} />
            </div> */}
            <div>
              <label for="">Sales Ranking</label>
              <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Sales Ranking" value={salesranking}
                onChange={(e) => setSalesranking(e.target.value)} />
            </div>
            <div>
              <label for="">Launched</label>
              <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Launched" value={launchedinput}
                onChange={(e) => setLaunchedinput(e.target.value)} />
            </div>
            <div className=''>
              <label for="">MO verdict rating</label>
              <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="MO verdict rating" required
                value={moverdict}
                onChange={(e) => setMoverdict(e.target.value)}
              />
            </div>
          </div>

          <hr className='mt-4'></hr>

          <section className='uplord-card-section colore-card'>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Hero Image</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleHeroImage}


                />
                <div className="mt-3 imagedivf ">
                  {heroimage && heroimage && (
                    <img src={URL.createObjectURL(heroimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={heroimagename} onChange={(e) => setHeroimagename(e.target.value)}
              />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 2</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handlegrayimage}

                />
                <div className="mt-3 imagedivf ">
                  {grayimage && grayimage && (
                    <img src={URL.createObjectURL(grayimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={grayname} onChange={(e) => setGrayname(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 3</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleredimage}

                />
                <div className="mt-3 imagedivf ">
                  {redimage && redimage && (
                    <img src={URL.createObjectURL(redimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={redname} onChange={(e) => setRedname(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 4</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleblueimage}

                />
                <div className="mt-3 imagedivf">
                  {blueimage && blueimage && (
                    <img src={URL.createObjectURL(blueimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={blueimagename} onChange={(e) => setBlueimagename(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 5</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleblackimage}

                />
                <div className="mt-3 imagedivf ">
                  {blackimage && blackimage && (
                    <img src={URL.createObjectURL(blackimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={blackimagename} onChange={(e) => setBlackimagename(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 6</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handlegreenimage}

                />
                <div className="mt-3 imagedivf ">
                  {greenimage && greenimage && (
                    <img src={URL.createObjectURL(greenimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={greenimagename} onChange={(e) => setGreenimagename(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 7</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handlecreamimage}

                />
                <div className="mt-3 imagedivf ">
                  {creamimage && creamimage && (
                    <img src={URL.createObjectURL(creamimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={creamimagename} onChange={(e) => setCreamimagename(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 8</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handlebrownimage}
                />
                <div className="mt-3 imagedivf ">
                  {brownimage && brownimage && (
                    <img src={URL.createObjectURL(brownimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={brownimagename} onChange={(e) => setbrownimagename(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 9</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleyellowimage}

                />
                <div className="mt-3 imagedivf ">
                  {yellowimage && yellowimage && (
                    <img src={URL.createObjectURL(yellowimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={yellowimagename} onChange={(e) => setYellowimagename(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 10</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handlepurpleimage}

                />
                <div className="mt-3 imagedivf ">
                  {purpleimage && purpleimage && (
                    <img src={URL.createObjectURL(purpleimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={purpleimagename} onChange={(e) => setPurpleimagename(e.target.value)} />
            </div>
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between mb-3'>
                  <h5 className="card-title">Image 11</h5>

                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handlewhiteimage}

                />
                <div className="mt-3 imagedivf ">
                  {whiteimage && whiteimage && (
                    <img src={URL.createObjectURL(whiteimage)} alt="Uploaded" className="img-fluid" />
                  )}
                </div>

              </div>
              <input type="Name" className="form-control information-form" placeholder="Car Color" required value={whitename} onChange={(e) => setWhitename(e.target.value)} />
            </div>
          </section>

        </div>
      </section>

      <div className='h2 mt-3'>Car <span>Specification</span></div>

      <div className='carcardssection'>
        <div className="form-group justify-content-evenly d-flex mb-3">
          <div className='pro-cons reactquiltext'>
            <label for="">Seater</label>
            <ReactQuill type="text" className="form-control" id="text-areas" placeholder="Seater" required rows="3" value={seater} onChange={setSeater} />
          </div>
          <div className='pro-cons reactquiltext'>
            <label for="">Fuel Type</label>
            <ReactQuill type="text" className="form-control" id="text-areas" placeholder="Fuel Type" required rows="3" value={fueltype} onChange={setFuel} />
          </div>
          <div className='pro-cons reactquiltext'>
            <label for="">Transmission</label>
            <ReactQuill type="text" className="form-control" id="text-areas" placeholder="Transmission" required rows="3" value={transmissiontype} onChange={setTransmission} />
          </div>
          <div>
            <label for="">NCAP Rating</label>
            <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="NCAP Rating" required
              value={NCAP}
              onChange={(e) => setNCAP(e.target.value)}
            />
          </div>
        </div>

      </div>




      {/* the second part */}
      <section>
        <div className='h2 mt-3'>Additional <span>Car Data</span></div>
        <div className='carcardssection'>

          <div className="form-group justify-content-evenly d-flex mb-3">
            <div className="d-flex justify-content-center align-items-center  mt-3">
              <label className="form-check-label">Upcoming Car</label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={upcoming}
                  onChange={handleUpcomingToggle}
                />
              </div>
            </div>
            <div className='reactquiltext'>
              <label for="">ⓘ text</label>
              <ReactQuill type="text" className="form-control" id="text-areas" placeholder="ⓘ text" required rows="3" value={itext} onChange={setText} />
            </div>
            <div>
              <label for="">Car Brochure</label>
              <input className="form-control" type="file" id="formFile" onChange={handlecarbrowsher}
              />
            </div>
          </div>
          <section className='d-flex gap-3 w-100'>
            <div className="form-group justify-content-evenly d-flex mb-3 w-100">
              <div className='d-flex justify-content-center mt-1'>
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
              <div className='d-flex '>
                <select
                  className="form-select mt-3 "
                  value={bodytype || ''}
                  onChange={handleBodyTypeChange}
                >
                  <option value="" disabled>
                    Choose Body Type!
                  </option>
                  <option value="SUV">SUV</option>
                  <option value="SEDAN">SEDAN</option>
                  <option value="HATCHBACK">HATCHBACK</option>
                  <option value="MPV">MPV</option>
                  <option value="COUPE">COUPE</option>
                  <option value="PICKUP">PICKUP</option>
                  <option value="CONVERTIBLE">CONVERTIBLE</option>
                </select>
                <IoCaretDown className='drop-icon2' />
              </div>
              <div className='d-flex '>
                <select
                  className="form-select mt-3 "
                  value={subbodytype || ''}
                  onChange={handleSubBodyTypeChange}
                >
                  <option value="" disabled>
                    Choose Sub Body Type!
                  </option>
                  <option value="MICRO">MICRO</option>
                  <option value="ENTRY LEVEL">ENTRY LEVEL</option>
                  <option value="MID-LEVEL">MID-LEVEL</option>
                  <option value="SUB-COMPACT">SUB-COMPACT</option>
                  <option value="COMPACT">COMPACT</option>
                  <option value="COMPACT 6/7 SEATER">COMPACT 6/7 SEATER</option>
                  <option value="PREMIUM LEVEL">PREMIUM LEVEL</option>
                  <option value="FULL SIZE">FULL SIZE</option>
                  <option value="FLAGSHIP">FLAGSHIP</option>
                  <option value="OFF-ROAD">OFF-ROAD</option>
                  <option value="SPORTS">SPORTS</option>
                  <option value="MICRO ELECTRIC">MICRO ELECTRIC</option>
                  <option value="ENTRY-LEVEL ELECTRIC">ENTRY-LEVEL ELECTRIC</option>
                  <option value="MID-LEVEL ELECTRIC">MID-LEVEL ELECTRIC</option>
                  <option value="SUB-COMPACT ELECTRIC">SUB-COMPACT ELECTRIC</option>
                  <option value="COMPACT ELECTRIC">COMPACT ELECTRIC</option>
                  <option value="COMPACT 6/7 SEATER ELECTRIC">COMPACT 6/7 SEATER ELECTRIC</option>
                  <option value="PREMIUM LEVEL ELECTRIC">PREMIUM LEVEL ELECTRIC</option>
                  <option value="FULL SIZE ELECTRIC">FULL SIZE ELECTRIC</option>
                  <option value="FLAGSHIP ELECTRIC">FLAGSHIP ELECTRIC</option>
                  <option value="OFF-ROAD ELECTRIC">OFF-ROAD ELECTRIC</option>
                  <option value="SPORTS ELECTRIC">SPORTS ELECTRIC</option>
                  <option value="MICRO LUXURY">MICRO LUXURY</option>
                  <option value="ENTRY LEVEL LUXURY">ENTRY LEVEL LUXURY</option>
                  <option value="MID-LEVEL LUXURY">MID-LEVEL LUXURY</option>
                  <option value="SUB-COMPACT LUXURY">SUB-COMPACT LUXURY</option>
                  <option value="COMPACT LUXURY">COMPACT LUXURY</option>
                  <option value="COMPACT 6/7 SEATER LUXURY">COMPACT 6/7 SEATER LUXURY</option>
                  <option value="PREMIUM LEVEL LUXURY">PREMIUM LEVEL LUXURY</option>
                  <option value="FULL SIZE LUXURY">FULL SIZE LUXURY</option>
                  <option value="FLAGSHIP LUXURY">FLAGSHIP LUXURY</option>
                  <option value="OFF-ROAD LUXURY">OFF-ROAD LUXURY</option>
                  <option value="SPORTS LUXURY">SPORTS LUXURY</option>
                </select>
                <IoCaretDown className='drop-icon2' />
              </div>
            </div>
          </section>


        </div>

        <div className='h2 mt-3'>Pros & <span>Cons</span></div>

        <div className='carcardssection'>
          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons reactquiltext' >
              <label for="">Pro’s </label>
              <ReactQuill type="text" className="form-control" id="text-areas" placeholder="Pro’s" required rows="7" value={pro} onChange={setPro} />
            </div>
            <div className='pro-cons reactquiltext'>
              <label for="">Con’s </label>
              <ReactQuill type="text" className="form-control" id="text-areas" placeholder="Con’s" required column="7" value={cons} onChange={setCon} />
            </div>
          </div>
        </div>

      </section>

      {/* section 3 */}
      <section>
        <div className='h2 mt-3'>Fact <span>File</span></div>

        <div className='carcardssection'>

          <div className='h2 mt-3 inside-block'>SUMMARY/REVIEW/<span>ASLI TEST</span></div>
          <div className="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for="">Header</label>
              <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Header" value={asliheader1} onChange={(e) => setasliheader1(e.target.value)} />
            </div>
            <div className='reactquiltext'>
              <label for="">Summary</label>
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={aslisummary1} onChange={setaslisummary1} />

            </div>
          </div>
          <hr></hr>
          <div className='h2 mt-3 inside-block'><span>Engine</span></div>
          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Header</label>
              <input type="Name" className="form-control" placeholder="Header" onChange={(e) => setengineh1(e.target.value)} value={engineh1} required />
            </div>
            <div className='pro-cons'>
              <label for="">Header 2</label>
              <input type="Name" className="form-control" placeholder="Header" onChange={(e) => setengineh2(e.target.value)} value={engineh2} required />
            </div>
            <div className='reactquiltext'>
              <label for="">Summary</label>
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={enginesummary1} onChange={setenginesummary1} />
            </div>
          </div>

          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Automatic <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" onChange={(e) => setengineauto1(e.target.value)} value={engineauto1} />
            </div>
            <div className='pro-cons'>
              <label for="">iMT <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" onChange={(e) => setengineimt1(e.target.value)} value={engineimt1} />
            </div>
            <div className='pro-cons'>
              <label for="">Manual <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" onChange={(e) => setenginemanual1(e.target.value)} value={enginemanual1} />
            </div>
          </div>
          <hr></hr>
          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Header</label>
              <input type="Name" className="form-control" placeholder="Header" required onChange={(e) => setengineh2a(e.target.value)} value={engineh2a} />
            </div>
            <div className='pro-cons'>
              <label for="">Header 2</label>
              <input type="Name" className="form-control" placeholder="Header" required onChange={(e) => setengineh21(e.target.value)} value={engineh21} />
            </div>
            <div className='reactquiltext'>
              <label for="">Summary</label>
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={enginesummary2} onChange={setenginesummary2} />

            </div>
          </div>

          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Automatic <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" onChange={(e) => setengineauto2(e.target.value)} value={engineauto2} />
            </div>
            <div className='pro-cons'>
              <label for="">iMT <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" onChange={(e) => setengineimt2(e.target.value)} value={engineimt2} />
            </div>
            <div className='pro-cons'>
              <label for="">Manual <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" onChange={(e) => setenginemanual2(e.target.value)} value={enginemanual2} />
            </div>
          </div>
          <hr></hr>
          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Header</label>
              <input type="Name" className="form-control" placeholder="Header" required onChange={(e) => setengineh3(e.target.value)} value={engineh3} />
            </div>
            <div className='pro-cons'>
              <label for="">Header 2</label>
              <input type="Name" className="form-control" placeholder="Header" required onChange={(e) => setengineh31(e.target.value)} value={engineh31} />
            </div>
            <div className='reactquiltext'>
              <label for="">Summary</label>
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={enginesummary3} onChange={setenginesummary3} />

              {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
            </div>
          </div>

          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Automatic <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" onChange={(e) => setengineauto3(e.target.value)} value={engineauto3} />
            </div>
            <div className='pro-cons'>
              <label for="">iMT <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" onChange={(e) => setengineimt3(e.target.value)} value={engineimt3} />
            </div>
            <div className='pro-cons'>
              <label for="">Manual <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" onChange={(e) => setenginemanual3(e.target.value)} value={enginemanual3} />
            </div>
          </div>
          <hr></hr>          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Header</label>
              <input type="Name" className="form-control" placeholder="Header" required onChange={(e) => setengineh4(e.target.value)} value={engineh4} />
            </div>
            <div className='pro-cons'>
              <label for="">Header 2</label>
              <input type="Name" className="form-control" placeholder="Header" required onChange={(e) => setengineh41(e.target.value)} value={engineh41} />
            </div>
            <div className='reactquiltext'>
              <label for="">Summary</label>
              {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
              <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={enginesummary4} onChange={setenginesummary4} />

            </div>
          </div>

          <div className="form-group d-flex justify-content-evenly mb-3">
            <div className='pro-cons'>
              <label for="">Automatic <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" onChange={(e) => setengineauto4(e.target.value)} value={engineauto4} />
            </div>
            <div className='pro-cons'>
              <label for="">iMT <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" onChange={(e) => setengineimt4(e.target.value)} value={engineimt4} />
            </div>
            <div className='pro-cons'>
              <label for="">Manual <sup>Max Character 90</sup></label>
              <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" onChange={(e) => setenginemanual4(e.target.value)} value={enginemanual4} />
            </div>
          </div>
          <hr></hr>



          <hr></hr>
          <div className='h2 mt-3 inside-block'>Warranty & <span>Service</span></div>
          <div className="form-group d-flex justify-content-evenly mb-3">
            <div>
              <label for="">Standard</label>
              <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Standard Warranty" required onChange={(e) => setstandard(e.target.value)} value={standard} />
            </div>
            <div>
              <label for="">Extended Warranty</label>
              <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Extended Warranty" required onChange={(e) => setextended(e.target.value)} value={extended} />
            </div>
            <div>
              <label for="">Service Interval</label>
              <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Service Interval" required onChange={(e) => setService(e.target.value)} value={Service} />
            </div>
          </div>
        </div>
      </section>





      {/* Image section? */}



      <section>
        <>
          <div className='h2 mt-3'>Key <span>Specification</span></div>

          <div className='carcardssection'>
            <div className='h2 mt-3 inside-block'>Key <span>Features</span></div>
            <section className='uplord-card-section'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 1</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChangen}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage && previewImage && (
                      <img src={URL.createObjectURL(previewImage)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText} onChange={(e) => setpreviewText(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 2</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange1n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage1 && previewImage1 && (
                      <img src={URL.createObjectURL(previewImage1)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText1} onChange={(e) => setpreviewText1(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 3</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange2n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage2 && previewImage2 && (
                      <img src={URL.createObjectURL(previewImage2)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText2} onChange={(e) => setpreviewText2(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 4</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange3n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage3 && previewImage3 && (
                      <img src={URL.createObjectURL(previewImage3)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText3} onChange={(e) => setpreviewText3(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 5</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange4n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage4 && previewImage4 && (
                      <img src={URL.createObjectURL(previewImage4)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText4} onChange={(e) => setpreviewText4(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 6</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange5n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage5 && previewImage5 && (
                      <img src={URL.createObjectURL(previewImage5)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText5} onChange={(e) => setpreviewText5(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 7</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange6n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage6 && previewImage6 && (
                      <img src={URL.createObjectURL(previewImage6)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText6} onChange={(e) => setpreviewText6(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 8</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange7n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage7 && previewImage7 && (
                      <img src={URL.createObjectURL(previewImage7)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText7} onChange={(e) => setpreviewText7(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 9</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange8n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage8 && previewImage8 && (
                      <img src={URL.createObjectURL(previewImage8)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText8} onChange={(e) => setpreviewText8(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 10</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange9n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage9 && previewImage9 && (
                      <img src={URL.createObjectURL(previewImage9)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText9} onChange={(e) => setpreviewText9(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 11</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange10n}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage10 && previewImage10 && (
                      <img src={URL.createObjectURL(previewImage10)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText10} onChange={(e) => setpreviewText10(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 12</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange11}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage11 && previewImage11 && (
                      <img src={URL.createObjectURL(previewImage11)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText11} onChange={(e) => setpreviewText11(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 13</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange12}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage12 && previewImage12 && (
                      <img src={URL.createObjectURL(previewImage12)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText12} onChange={(e) => setpreviewText12(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 14</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange13}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage13 && previewImage13 && (
                      <img src={URL.createObjectURL(previewImage13)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText13} onChange={(e) => setpreviewText13(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 15</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange14}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage14 && previewImage14 && (
                      <img src={URL.createObjectURL(previewImage14)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText14} onChange={(e) => setpreviewText14(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 16</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange15}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage15 && previewImage15 && (
                      <img src={URL.createObjectURL(previewImage15)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText15} onChange={(e) => setpreviewText15(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 17</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange16}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage16 && previewImage16 && (
                      <img src={URL.createObjectURL(previewImage16)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText16} onChange={(e) => setpreviewText16(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 18</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange17}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage17 && previewImage17 && (
                      <img src={URL.createObjectURL(previewImage17)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText17} onChange={(e) => setpreviewText17(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 19</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange18}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage18 && previewImage18 && (
                      <img src={URL.createObjectURL(previewImage18)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText18} onChange={(e) => setpreviewText18(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 20</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange19}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage19 && previewImage19 && (
                      <img src={URL.createObjectURL(previewImage19)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText19} onChange={(e) => setpreviewText19(e.target.value)} />
              </div>
            </section>
            <hr className='mt-3'></hr>
            <div className='h2 mt-3 inside-block'>Space & <span>Comfort</span></div>
            <section className='uplord-card-section'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 1</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange20}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage20 && previewImage20 && (
                      <img src={URL.createObjectURL(previewImage20)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText20} onChange={(e) => setpreviewText20(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 2</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange21}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage21 && previewImage21 && (
                      <img src={URL.createObjectURL(previewImage21)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText21} onChange={(e) => setpreviewText21(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 3</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange22}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage22 && previewImage22 && (
                      <img src={URL.createObjectURL(previewImage22)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText22} onChange={(e) => setpreviewText22(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 4</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange23}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage23 && previewImage23 && (
                      <img src={URL.createObjectURL(previewImage23)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText23} onChange={(e) => setpreviewText23(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 5</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange24}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage24 && previewImage24 && (
                      <img src={URL.createObjectURL(previewImage24)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText24} onChange={(e) => setpreviewText24(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 6</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange25}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage25 && previewImage25 && (
                      <img src={URL.createObjectURL(previewImage25)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText25} onChange={(e) => setpreviewText25(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 7</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange26}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage26 && previewImage26 && (
                      <img src={URL.createObjectURL(previewImage26)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText26} onChange={(e) => setpreviewText26(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 8</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange27}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage27 && previewImage27 && (
                      <img src={URL.createObjectURL(previewImage27)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText27} onChange={(e) => setpreviewText27(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 9</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange28}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage28 && previewImage28 && (
                      <img src={URL.createObjectURL(previewImage28)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText28} onChange={(e) => setpreviewText28(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 10</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange29}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage29 && previewImage29 && (
                      <img src={URL.createObjectURL(previewImage29)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText29} onChange={(e) => setpreviewText29(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 11</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange30}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage30 && previewImage30 && (
                      <img src={URL.createObjectURL(previewImage30)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText30} onChange={(e) => setpreviewText30(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 12</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange31}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage31 && previewImage31 && (
                      <img src={URL.createObjectURL(previewImage31)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText31} onChange={(e) => setpreviewText31(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 13</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange32}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage32 && previewImage32 && (
                      <img src={URL.createObjectURL(previewImage32)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText32} onChange={(e) => setpreviewText32(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 14</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange33}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage33 && previewImage33 && (
                      <img src={URL.createObjectURL(previewImage33)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText33} onChange={(e) => setpreviewText33(e.target.value)} />
              </div>











              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 15</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange34}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage34 && previewImage34 && (
                      <img src={URL.createObjectURL(previewImage34)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText34} onChange={(e) => setpreviewText34(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 16</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange35}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage35 && previewImage35 && (
                      <img src={URL.createObjectURL(previewImage35)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText35} onChange={(e) => setpreviewText35(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 17</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange36}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage36 && previewImage36 && (
                      <img src={URL.createObjectURL(previewImage36)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText36} onChange={(e) => setpreviewText36(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 18</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange37}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage37 && previewImage37 && (
                      <img src={URL.createObjectURL(previewImage37)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText37} onChange={(e) => setpreviewText37(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 19</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange38}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage38 && previewImage38 && (
                      <img src={URL.createObjectURL(previewImage38)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText38} onChange={(e) => setpreviewText38(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 20</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange39}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage39 && previewImage39 && (
                      <img src={URL.createObjectURL(previewImage39)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText39} onChange={(e) => setpreviewText39(e.target.value)} />
              </div>
            </section>
            <hr className='mt-3'></hr>
            <div className='h2 mt-3 inside-block'>Storage & <span>Conveniences</span></div>
            <section className='uplord-card-section'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 1</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange40}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage40 && previewImage40 && (
                      <img src={URL.createObjectURL(previewImage40)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText40} onChange={(e) => setpreviewText40(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 2</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange41}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage41 && previewImage41 && (
                      <img src={URL.createObjectURL(previewImage41)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText41} onChange={(e) => setpreviewText41(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 3</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange42}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage42 && previewImage42 && (
                      <img src={URL.createObjectURL(previewImage42)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText42} onChange={(e) => setpreviewText42(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 4</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange43}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage43 && previewImage43 && (
                      <img src={URL.createObjectURL(previewImage43)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText43} onChange={(e) => setpreviewText43(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 5</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange44}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage44 && previewImage44 && (
                      <img src={URL.createObjectURL(previewImage44)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText44} onChange={(e) => setpreviewText44(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 6</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange45}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage45 && previewImage45 && (
                      <img src={URL.createObjectURL(previewImage45)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText45} onChange={(e) => setpreviewText45(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 7</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange46}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage46 && previewImage46 && (
                      <img src={URL.createObjectURL(previewImage46)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText46} onChange={(e) => setpreviewText46(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 8</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange47}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage47 && previewImage47 && (
                      <img src={URL.createObjectURL(previewImage47)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText47} onChange={(e) => setpreviewText47(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 9</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange48}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage48 && previewImage48 && (
                      <img src={URL.createObjectURL(previewImage48)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText48} onChange={(e) => setpreviewText48(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 10</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange49}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage49 && previewImage49 && (
                      <img src={URL.createObjectURL(previewImage49)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText49} onChange={(e) => setpreviewText49(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 11</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange50}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage50 && previewImage50 && (
                      <img src={URL.createObjectURL(previewImage50)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText50} onChange={(e) => setpreviewText50(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 12</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange51}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage51 && previewImage51 && (
                      <img src={URL.createObjectURL(previewImage51)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText51} onChange={(e) => setpreviewText51(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 13</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange52}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage52 && previewImage52 && (
                      <img src={URL.createObjectURL(previewImage52)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText52} onChange={(e) => setpreviewText52(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 14</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange53}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage53 && previewImage53 && (
                      <img src={URL.createObjectURL(previewImage53)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText53} onChange={(e) => setpreviewText53(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 15</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange54}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage54 && previewImage54 && (
                      <img src={URL.createObjectURL(previewImage54)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText54} onChange={(e) => setpreviewText54(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 16</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange55}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage55 && previewImage55 && (
                      <img src={URL.createObjectURL(previewImage55)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText55} onChange={(e) => setpreviewText55(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 17</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange56}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage56 && previewImage56 && (
                      <img src={URL.createObjectURL(previewImage56)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText56} onChange={(e) => setpreviewText56(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 18</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange57}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage57 && previewImage57 && (
                      <img src={URL.createObjectURL(previewImage57)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText57} onChange={(e) => setpreviewText57(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 19</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange58}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage58 && previewImage58 && (
                      <img src={URL.createObjectURL(previewImage58)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText58} onChange={(e) => setpreviewText58(e.target.value)} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Image 20</h5>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange59}

                  />
                  <div className="mt-3 imagedivf ">
                    {previewImage59 && previewImage59 && (
                      <img src={URL.createObjectURL(previewImage59)} className="img-fluid" alt="Image Preview" />
                    )}
                  </div>
                </div>
                <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" value={previewText59} onChange={(e) => setpreviewText59(e.target.value)} />
              </div>
            </section>
          </div>

        </>
      </section>


      {/* <div className='save-btnadd' onClick={handleSaveClick}>
          Save
        </div> */}
      <div className='save-btnadd' onClick={handleClick}>
        Save
      </div>
      <ToastContainer />
    </>

  )
}
export default Addproduct