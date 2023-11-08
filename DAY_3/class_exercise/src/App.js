import Form from './components/BasicForm';
import Counter from './components/counter';
import Toogle from './components/ToogleMessage';
import { useState } from 'react';
import './App.css';


function App() {
  const [app,setApp] = useState('default');

  if(app === 'BasicForm')
  {
    return (
      <>
        <Form />
        <button onClick={() => setApp('default')}>Back</button>
      </>
    )
  }
  else if(app === 'Counter')
  {
    return (
      <>
        <Counter />
        <button onClick={() => setApp('default')}>Back</button>
      </>
    )
  }
  else if(app === 'Toogle')
  {
    return (
      <>
        <Toogle />
        <button onClick={() => setApp('default')}>Back</button>
      </>
    )
  }
  else if(app === 'default')
  {
    return (
      <>
        <h1>Select the App to Render</h1>
        <hr />
        <select onChange={(e) => setApp(e.target.value)}>
          <option value='default'>Select--one</option>
          <option value='BasicForm'>Basic Form</option>
          <option value='Counter'>Counter</option>
          <option value='Toogle'>Toogle Message</option>
        </select>
        <hr />
      </>
    );
  }
}

export default App;