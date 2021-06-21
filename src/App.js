import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { Footer, Blocks } from './components/Blocks';
import Sign from './components/Sign';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="row" >
        <div className="col-sm-1"></div>
        <div className="col-sm-2"><Blocks /></div>
        <div className="col-sm-6"><Main /></div>
        <div className="col-sm-2"><Sign /></div>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
