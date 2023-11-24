import './App.css';
import { Landing } from './Components/Landing/Landing';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='main-container'>
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
