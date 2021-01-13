import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import './Css/App.css';
function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header />
      
      <div className="app__body">
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </div> 
    </div>
  );
}

export default App;
