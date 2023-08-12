import './App.css';
import MainApp from './app/MainApp';
// import background from './img/background-fabric-fine-pink.jpg'

function App() {
  return (
    <div style={{margin: 0, padding: 0, backgroundSize: 'cover', minHeight: '100vh' }}>
    {/* <div style={{ backgroundImage: `url(${background})`, margin: 0, padding: 0, backgroundSize: 'cover', minHeight: '100vh' }}> */}
      <MainApp>

      </MainApp>
    </div>
  );
}

export default App;
