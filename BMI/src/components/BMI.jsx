import React from 'react'
import { useState } from 'react'

const BMI = () => {

  const [Weight, setWeight] = useState();
  const [Height, setHeight] = useState();
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  
  const calBmi = (e) =>{
    
    event.preventDefault()
    console.log(event);

    // setHeight(Height = Height/100);

    if(Weight < 0 || Height <0){
      alert('Please Enter a valid Height and Weight')
    }
    else{
      let bmi = (Weight/(Height*Height));
      setBmi(bmi.toFixed(1))

      // message 
      if(bmi<18.5)setMessage('Underweight');
      else if(bmi<25)setMessage('Normal (Healthy Weight)');
      else if(bmi>25)setMessage('Obese');
    }
  }

// Relode
 let Relode =()=>{
  window.location.reload()
 }

  return (
    <div className='container'>
      <div className="heading"><h2>BMI Calculator</h2></div>
      <form onSubmit={calBmi}>
        
      <div className="inputs">
        <input type="text" placeholder='Weight in Kgs' name='Weight' value={Weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="text" placeholder='Height in Ms' name='Height' value={Height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="btns">
        <button className='btn'type='submit'>Calculate</button>
        <button onClick={Relode}>Relode</button>
      </div>
      </form>
      <div className="resutl">
        <h3>Your BMi is:{bmi}</h3>
        <h3>{message}</h3>
      </div>
    </div>
  )
}

export default BMI
