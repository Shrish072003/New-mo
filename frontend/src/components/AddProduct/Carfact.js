import React, { useState, useEffect, useRef  } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Carfact = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

  return (
    <>
            <div className='h2 mt-3'>Fact <span>File</span></div>

<div className='carcardssection'>

  <div className='h2 mt-3 inside-block'>SUMMARY/REVIEW/<span>ASLI TEST</span></div>
  <div className="form-group d-flex justify-content-evenly mb-3">
    <div>
      <label for="">Header</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Header" required />
    </div>
    <div className='reactquiltext'>
      <label for="">Summary</label>
      <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={value1} onChange={setValue1} />

      {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
    </div>
  </div>
  <hr></hr>
  <div className='h2 mt-3 inside-block'><span>Engine</span></div>
  <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Header</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='pro-cons'>
      <label for="">Header 2</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='reactquiltext'>
      <label for="">Summary</label>
      {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
      <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={value2} onChange={setValue2} />
    </div>
  </div>

  <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Automatic <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">iMT <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">Manual <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" />
    </div>
  </div>
  <hr></hr>
  <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Header</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='pro-cons'>
      <label for="">Header 2</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='reactquiltext'>
      <label for="">Summary</label>
      <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={value3} onChange={setValue3} />

      {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
    </div>
  </div>

  <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Automatic <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">iMT <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">Manual <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" />
    </div>
  </div>
  <hr></hr>
  <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Header</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='pro-cons'>
      <label for="">Header 2</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='reactquiltext'>
      <label for="">Summary</label>
      <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={value4} onChange={setValue4} />

      {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
    </div>
  </div>

  <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Automatic <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">iMT <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">Manual <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" />
    </div>
  </div>
  <hr></hr>          <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Header</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='pro-cons'>
      <label for="">Header 2</label>
      <input type="Name" className="form-control" placeholder="Header" required />
    </div>
    <div className='reactquiltext'>
      <label for="">Summary</label>
      {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
      <ReactQuill type="text" className="form-control" id="text-areas" required rows="3" value={value5} onChange={setValue5} />

    </div>
  </div>

  <div className="form-group d-flex justify-content-evenly mb-3">
    <div className='pro-cons'>
      <label for="">Automatic <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Automatic" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">iMT <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="iMT" required maxLength="90" />
    </div>
    <div className='pro-cons'>
      <label for="">Manual <sup>Max Character 90</sup></label>
      <textarea type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Manual" required maxLength="90" />
    </div>
  </div>
  <hr></hr>



  <hr></hr>
  <div className='h2 mt-3 inside-block'>Warranty & <span>Service</span></div>
  <div className="form-group d-flex justify-content-evenly mb-3">
    <div>
      <label for="">Standard</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Standard Warranty" required />
    </div>
    <div>
      <label for="">Extended Warranty</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Extended Warranty" required />
    </div>
    <div>
      <label for="">Service Interval</label>
      <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Service Interval" required />
    </div>
  </div>
</div>
<div className='save-btnadd'>
          Save
        </div>
    </>
  )
}

export default Carfact