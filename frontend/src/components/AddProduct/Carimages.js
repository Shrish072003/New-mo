import React, { useState, useEffect, useRef  } from 'react';
// import { IoCaretDown } from "./react-i1cons/io5";


const CarImages = () => {
    const [previewImage, setPreviewImage] = useState('');
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
    const [previewImage20, setPreviewImage20] = useState('');
    const [previewImage21, setPreviewImage21] = useState('');
    const [previewImage22, setPreviewImage22] = useState('');
    const [previewImage23, setPreviewImage23] = useState('');
    const [previewImage24, setPreviewImage24] = useState('');
    const [previewImage25, setPreviewImage25] = useState('');
    const [previewImage26, setPreviewImage26] = useState('');
    const [previewImage27, setPreviewImage27] = useState('');
    const [previewImage28, setPreviewImage28] = useState('');
    const [previewImage29, setPreviewImage29] = useState('');
    const [previewImage30, setPreviewImage30] = useState('');
    const [previewImage31, setPreviewImage31] = useState('');
    const [previewImage32, setPreviewImage32] = useState('');
    const [previewImage33, setPreviewImage33] = useState('');
    const [previewImage34, setPreviewImage34] = useState('');
    const [previewImage35, setPreviewImage35] = useState('');
    const [previewImage36, setPreviewImage36] = useState('');
    const [previewImage37, setPreviewImage37] = useState('');
    const [previewImage38, setPreviewImage38] = useState('');
    const [previewImage39, setPreviewImage39] = useState('');
    const [previewImage40, setPreviewImage40] = useState('');
    const [previewImage41, setPreviewImage41] = useState('');
    const [previewImage42, setPreviewImage42] = useState('');
    const [previewImage43, setPreviewImage43] = useState('');
    const [previewImage44, setPreviewImage44] = useState('');
    const [previewImage45, setPreviewImage45] = useState('');
    const [previewImage46, setPreviewImage46] = useState('');
    const [previewImage47, setPreviewImage47] = useState('');
    const [previewImage48, setPreviewImage48] = useState('');
    const [previewImage49, setPreviewImage49] = useState('');
    const [previewImage50, setPreviewImage50] = useState('');
    const [previewImage51, setPreviewImage51] = useState('');
    const [previewImage52, setPreviewImage52] = useState('');
    const [previewImage53, setPreviewImage53] = useState('');
    const [previewImage54, setPreviewImage54] = useState('');
    const [previewImage55, setPreviewImage55] = useState('');                   
    const [previewImage56, setPreviewImage56] = useState('');
    const [previewImage57, setPreviewImage57] = useState('');
    const [previewImage58, setPreviewImage58] = useState('');
    const [previewImage59, setPreviewImage59] = useState('');
    const [previewImage60, setPreviewImage60] = useState('');
  
    const createImageChangeHandler = (setPreviewImage) => (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewImage('');
      }
    };
    const handleImageChange = createImageChangeHandler(setPreviewImage);
    const handleImageChange1 = createImageChangeHandler(setPreviewImage1);
    const handleImageChange2 = createImageChangeHandler(setPreviewImage2);
    const handleImageChange3 = createImageChangeHandler(setPreviewImage3);
    const handleImageChange4 = createImageChangeHandler(setPreviewImage4);
    const handleImageChange5 = createImageChangeHandler(setPreviewImage5);
    const handleImageChange6 = createImageChangeHandler(setPreviewImage6);
    const handleImageChange7 = createImageChangeHandler(setPreviewImage7);
    const handleImageChange8 = createImageChangeHandler(setPreviewImage8);
    const handleImageChange9 = createImageChangeHandler(setPreviewImage9);
    const handleImageChange10 = createImageChangeHandler(setPreviewImage10);
    const handleImageChange11 = createImageChangeHandler(setPreviewImage11);
    const handleImageChange12 = createImageChangeHandler(setPreviewImage12);
    const handleImageChange13 = createImageChangeHandler(setPreviewImage13);
    const handleImageChange14 = createImageChangeHandler(setPreviewImage14);
    const handleImageChange15 = createImageChangeHandler(setPreviewImage15);
    const handleImageChange16 = createImageChangeHandler(setPreviewImage16);
    const handleImageChange17 = createImageChangeHandler(setPreviewImage17);
    const handleImageChange18 = createImageChangeHandler(setPreviewImage18);
    const handleImageChange19 = createImageChangeHandler(setPreviewImage19);
    const handleImageChange20 = createImageChangeHandler(setPreviewImage20);
    const handleImageChange21 = createImageChangeHandler(setPreviewImage21);
    const handleImageChange22 = createImageChangeHandler(setPreviewImage22);
    const handleImageChange23 = createImageChangeHandler(setPreviewImage23);
    const handleImageChange24 = createImageChangeHandler(setPreviewImage24);
    const handleImageChange25 = createImageChangeHandler(setPreviewImage25);
    const handleImageChange26 = createImageChangeHandler(setPreviewImage26);
    const handleImageChange27 = createImageChangeHandler(setPreviewImage27);
    const handleImageChange28 = createImageChangeHandler(setPreviewImage28);
    const handleImageChange29 = createImageChangeHandler(setPreviewImage29);
    const handleImageChange30 = createImageChangeHandler(setPreviewImage30);
    const handleImageChange31 = createImageChangeHandler(setPreviewImage31);
    const handleImageChange32 = createImageChangeHandler(setPreviewImage32);
    const handleImageChange33 = createImageChangeHandler(setPreviewImage33);
    const handleImageChange34 = createImageChangeHandler(setPreviewImage34);
    const handleImageChange35 = createImageChangeHandler(setPreviewImage35);
    const handleImageChange36 = createImageChangeHandler(setPreviewImage36);
    const handleImageChange37 = createImageChangeHandler(setPreviewImage37);
    const handleImageChange38 = createImageChangeHandler(setPreviewImage38);
    const handleImageChange39 = createImageChangeHandler(setPreviewImage39);
    const handleImageChange40 = createImageChangeHandler(setPreviewImage40);
    const handleImageChange41 = createImageChangeHandler(setPreviewImage41);
    const handleImageChange42 = createImageChangeHandler(setPreviewImage42);
    const handleImageChange43 = createImageChangeHandler(setPreviewImage43);
    const handleImageChange44 = createImageChangeHandler(setPreviewImage44);
    const handleImageChange45 = createImageChangeHandler(setPreviewImage45);
    const handleImageChange46 = createImageChangeHandler(setPreviewImage46);
    const handleImageChange47 = createImageChangeHandler(setPreviewImage47);
    const handleImageChange48 = createImageChangeHandler(setPreviewImage48);
    const handleImageChange49 = createImageChangeHandler(setPreviewImage49);
    const handleImageChange50 = createImageChangeHandler(setPreviewImage50);
    const handleImageChange51 = createImageChangeHandler(setPreviewImage51);
    const handleImageChange52 = createImageChangeHandler(setPreviewImage52);
    const handleImageChange53 = createImageChangeHandler(setPreviewImage53);
    const handleImageChange54 = createImageChangeHandler(setPreviewImage54);
    const handleImageChange55 = createImageChangeHandler(setPreviewImage55);
    const handleImageChange56 = createImageChangeHandler(setPreviewImage56);
    const handleImageChange57 = createImageChangeHandler(setPreviewImage57);
    const handleImageChange58 = createImageChangeHandler(setPreviewImage58);
    const handleImageChange59 = createImageChangeHandler(setPreviewImage59);
    const handleImageChange60 = createImageChangeHandler(setPreviewImage60);
  
    return (

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
                  onChange={handleImageChange }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage && (
            <img src={previewImage} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 2</h5>
        <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange1}

                />
                        <div className="mt-3 imagedivf ">
          {previewImage1 && (
            <img src={previewImage1} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 3</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange2 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage2 && (
            <img src={previewImage2} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 4</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange3 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage3 && (
            <img src={previewImage3} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 5</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange4 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage4 && (
            <img src={previewImage4} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 6</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange5 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage5 && (
            <img src={previewImage5} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 7</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange6 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage6 && (
            <img src={previewImage6} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 8</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange7 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage7 && (
            <img src={previewImage7} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 9</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange8 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage8 && (
            <img src={previewImage8} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 10</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange9 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage9 && (
            <img src={previewImage9} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 11</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange10 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage10 && (
            <img src={previewImage10} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 12</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange11 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage11 && (
            <img src={previewImage11} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 13</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange12 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage12 && (
            <img src={previewImage12} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 14</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange13 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage13 && (
            <img src={previewImage13} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 15</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange14 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage14 && (
            <img src={previewImage14} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 16</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange15 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage15 && (
            <img src={previewImage15} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 17</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange16 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage16 && (
            <img src={previewImage16} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 18</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange17 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage17 && (
            <img src={previewImage17} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 19</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange18 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage18 && (
            <img src={previewImage18} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 20</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange19 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage19 && (
            <img src={previewImage19} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
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
                  onChange={handleImageChange20 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage20 && (
            <img src={previewImage20} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 2</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange21 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage21 && (
            <img src={previewImage21} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 3</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange22 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage22 && (
            <img src={previewImage22} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 4</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange23 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage23 && (
            <img src={previewImage23} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 5</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange24 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage24 && (
            <img src={previewImage24} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 6</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange25 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage25 && (
            <img src={previewImage25} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 7</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange26 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage26 && (
            <img src={previewImage27} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 8</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange27 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage27 && (
            <img src={previewImage27} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 9</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange28 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage28 && (
            <img src={previewImage28} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 10</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange29 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage29 && (
            <img src={previewImage29} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 11</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange30 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage30 && (
            <img src={previewImage30} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 12</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange31 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage31 && (
            <img src={previewImage31} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 13</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange32 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage32 && (
            <img src={previewImage32} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 14</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange33 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage33 && (
            <img src={previewImage33} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>











    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 15</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange34 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage34 && (
            <img src={previewImage34} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 16</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange35 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage35 && (
            <img src={previewImage35} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 17</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange36 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage36 && (
            <img src={previewImage36} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 18</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange37 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage37 && (
            <img src={previewImage37} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 19</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange38 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage38 && (
            <img src={previewImage38} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 20</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange39 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage39 && (
            <img src={previewImage39} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
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
                  onChange={handleImageChange40 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage40 && (
            <img src={previewImage40} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 2</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange41 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage41 && (
            <img src={previewImage41} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 3</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange42 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage42 && (
            <img src={previewImage42} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 4</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange43 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage43 && (
            <img src={previewImage43} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 5</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange44 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage44 && (
            <img src={previewImage44} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 6</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange45 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage45 && (
            <img src={previewImage45} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 7</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange46 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage46 && (
            <img src={previewImage46} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 8</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange47 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage47 && (
            <img src={previewImage47} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 9</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange48 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage48 && (
            <img src={previewImage48} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 10</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange49 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage49 && (
            <img src={previewImage49} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 11</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange50 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage50 && (
            <img src={previewImage50} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 12</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange51 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage51 && (
            <img src={previewImage51} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 13</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange52 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage52 && (
            <img src={previewImage52} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 14</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange53 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage53 && (
            <img src={previewImage53} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 15</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange54 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage54 && (
            <img src={previewImage54} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 16</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange55 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage55 && (
            <img src={previewImage55} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 17</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange56 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage56 && (
            <img src={previewImage56} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 18</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange57 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage57 && (
            <img src={previewImage57} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 19</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange58 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage58 && (
            <img src={previewImage58} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Image 20</h5>
          <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleImageChange59 }

                />
                        <div className="mt-3 imagedivf ">
          {previewImage59 && (
            <img src={previewImage59} className="img-fluid" alt="Image Preview" />
          )}
        </div>
      </div>
      <input type="Name" class="form-control information-form" id="exampleFormControlInput1" placeholder="Information" required />
    </div>
  </section>
</div>
<div className='d-flex mt-3 justify-content-center'>
  {/* <div

    class="btn btn-lg active bg-danger-new text-white add-brand"
    role="button"
    aria-pressed="true"
  >
    Save
  </div> */}
</div>
<div className='save-btnadd'>
          Save
        </div>
</>
)
}
export default CarImages