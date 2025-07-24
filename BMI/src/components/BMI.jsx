import React from 'react'
import { useState } from 'react'

const BMI = () => {

  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  
  const calBmi = (e) =>{
    
    event.preventDefault()
    
    if(Weight < 0 || Height <0){
      alert('Please Enter a valid Height and Weight')
    }
    else{
      let bmi = (Weight/(Height*Height));
      setBmi(bmi.toFixed(1))
    }
  }

  return (
    <div className='container'>
      <div className="heading"><h2>BMI Calculator</h2></div>
      <form onSubmit={calBmi}>
        
      <div className="inputs">
        <p>Enter your weight (Kg)</p>
        <input type="text" placeholder='Weight' name='Weight' value={Weight} onChange={(e) => setWeight(e.target.value)} />
        <p>Enter your Height (ft)</p>
        <input type="text" placeholder='Height' name='Height' value={Height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="btns">
        <button className='btn'type='submit'>Calculate</button>
        <button >Relode</button>
      </div>
      </form>
      <div className="resutl">
        <h3>Your BMi is:{bmi}</h3>
      </div>
    </div>
  )
}

export default BMI
