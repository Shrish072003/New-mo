import React, { useState } from 'react';
import CardData from './AddProduct/Cardata';

const Addproduct = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const calculateProgress = () => {
    const percentage = (currentStep - 0) * 100;
    return `${percentage}%`;
  };

  return (
    <>
      <div className="progress addproductdata">
        <div
          className="progress-bar bg-danger-new"
          role="progressbar"
          style={{ width: calculateProgress() }}
          aria-valuenow={calculateProgress()}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {calculateProgress()}
        </div>
      </div>

      <section className="main-container-full cardata">
        <div className={`main-container-fullm${currentStep === 4 ? ' slide-left' : ''}`}>
          <div className="step">
            {currentStep === 1 && <CardData />}
          </div>
          {/* <div className="step">
            {currentStep === 2 && <Carspeci />}
          </div>
          <div className="step">
            {currentStep === 3 && <Carfact />}
          </div>
          <div className="step">
            {currentStep === 4 && <CardImages />}
          </div> */}
        </div>
      </section>
{/* 
      {currentStep < 4 && (
        <div className='next-btnadd' onClick={nextStep}>
          Next
        </div>
      )}

      {currentStep > 1 && (
        <div className='previous-btnadd' onClick={prevStep}>
          Previous
        </div>
      )} */}
    </>
  );
};

export default Addproduct;
