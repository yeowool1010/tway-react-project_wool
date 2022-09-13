import HeaderNav from './components/navigation/components/HeaderNav';
import SideNav from './components/navigation/components/SideNav'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main-nav">
        
        <HeaderNav/>
      </header>
      <div className="side-nav">
        <SideNav/>
      </div>
    </div>
  );
}

export default App;
