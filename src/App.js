import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [height,setheight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBMI = (e)=>{
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }

  }
  let Reload = ()=>{
    window.location.Reload();
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <div>
          <form onSubmit={calcBMI}>
            <div>
            <label>Weight (kgs)</label>
            <input type="text" placeholder="Enter the Weight in kgs" onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <div>
            <label>Height in inches</label>
            <input
              type="text"
              placeholder="Enter the height in inches"
              onChange={(e)=>{setheight(e.target.value)}}
            />
            </div>
            <div>
            <button className="btn" type="submit" >
              Submit
            </button>
            </div>
            <div>
            <button className="btn" type="submit" onClick={Reload}>
              Reload
            </button>
            </div>
           
          </form>
          <div className='center'>
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
