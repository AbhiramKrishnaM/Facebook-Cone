import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Login from './Components/Login';
import './Css/App.css';
import Widgets from './Components/Widgets';
function App() {
  const user = null;
  return (
    // BEM naming convention
    <div className="App">
      {!user ? ( <Login />):(
        <>
        <Header />
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div> 
      </>
      )}
     
    </div>
  );
}

export default App;
