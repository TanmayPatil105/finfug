import { useState } from 'react'
import './App.css';
import MainApp from './app/MainApp';
import EnterRoom from './components/EnterRoom';

function App() {
   
  const [notJoin, setNotJoin] = useState(true);

  return (
    <div style={{margin: 0, padding: 0, backgroundSize: 'cover', minHeight: '100vh' }}>
      <MainApp />
      <EnterRoom />
    </div>
  );
}

export default App;
