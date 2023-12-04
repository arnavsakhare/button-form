import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('blue');

  const handleButtonClick = () => {
    const newColor = buttonColor === 'blue' ? 'red' : 'blue';
    setButtonColor(newColor);
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    padding: '10px',
    cursor: 'pointer', 
  };

  //.....................xxxxxx........................

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  //.................xxxxxxxxx.......................

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  
  useEffect(() => {
    const initialData = {
      name: 'Arnav Sakhare',
      phoneNumber: '1234567890',
      email: 'xyz@gmail.com',
    };

    
    setName(initialData.name);
    setPhoneNumber(initialData.phoneNumber);
    setEmail(initialData.email);
  }, []);

  return (
    <div>
      <button style={buttonStyle} onClick={handleButtonClick}>Click me to change color</button>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
    </form>
      </div>
    </div>
  );
}

export default App;
