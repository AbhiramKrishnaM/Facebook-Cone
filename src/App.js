import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header />
      
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </div> 
    </div>
  );
}

export default App;
