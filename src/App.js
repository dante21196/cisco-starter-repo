
import './App.css';
import Dashboard from './Components/Dashboard';
import Latency from './Components/Latency';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <Latency/>
    </div>
  );
}

export default App;
