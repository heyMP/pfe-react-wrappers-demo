import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtomComponent } from './Button.js';
import { SwitchComponent } from './Switch.js';

function App() {
  const [isWarning, setIsWarning] = React.useState(false);
  const [isLarge, setIsLarge] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label>
          isWarning
          <SwitchComponent onChange={() => setIsWarning(!isWarning)}></SwitchComponent>
        </label>
        <label>
          isLarge
          <SwitchComponent onChange={() => setIsLarge(!isLarge)}></SwitchComponent>
        </label>
        <ButtomComponent warning={isWarning} size={isLarge ? 'large' : 'small'}>Click me</ButtomComponent>
      </header>
    </div>
  );
}

export default App;
