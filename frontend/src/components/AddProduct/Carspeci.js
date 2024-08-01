import React, { useState, useEffect, useRef  } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Carspeci = () => {
  const [text, setText] = useState('');
  const [pro, setPro] = useState('');
  const [con, setCon] = useState('');

  // console.log(value);
  return (
    <>
      <div className='h2 mt-3'>Additional <span>Car Data</span></div>
      <div className='carcardssection'>

        <div className="form-group justify-content-evenly d-flex mb-3">
          <div className="d-flex justify-content-center align-items-center  mt-3">
            <label className="form-check-label">Upcoming Car</label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className='reactquiltext'>
            <label for="">ⓘ text</label>
            <ReactQuill type="text" className="form-control" id="text-areas" placeholder="ⓘ text" required rows="3" value={text} onChange={setText} />
          </div>
          <div>
              <label for="">Car Brochure</label>
              <input className="form-control" type="file" id="formFile" />
            </div>
        </div>
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
      <ReactQuill type="text" className="form-control" id="text-areas" placeholder="Con’s" required column="7" value={con} onChange={setCon} />
    </div>
  </div>
</div>

{/* <div className='h2 mt-3'>Car <span>Mileage</span></div>

<div className='carcardssection'>
<div className="form-group d-flex justify-content-evenly mb-3">

<div className='pro-cons'>
      <label for="">Spec's 1</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>
    <div className='pro-cons'>
      <label for="">Spec's 2</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>
    <div className='pro-cons'>
      <label for="">Spec's 3</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>
    <div className='pro-cons'>
      <label for="">Spec's 4</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>      
</div>
<div className="form-group d-flex justify-content-evenly mb-3">

<div className='pro-cons'>
      <label for="">Spec's 5</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>
    <div className='pro-cons'>
      <label for="">Spec's 6</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>
    <div className='pro-cons'>
      <label for="">Spec's 7</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>
    <div className='pro-cons'>
      <label for="">Spec's 8</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Title" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Company Claimed" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Real World" required   />
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Highway" required   />
    </div>      
</div>
</div> */}
<div className='save-btnadd'>
          Save
        </div>
    </>
  )
}

export default Carspeci