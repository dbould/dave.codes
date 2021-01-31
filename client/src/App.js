import banner from './img/cropped-benjiBanner5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from "./blog/main";
import Jumbotron from "./jumbotron/main";
import MainNav from "./main-nav/main";

function App() {
  return (
    <div className="App">

        <MainNav></MainNav>
        <Jumbotron></Jumbotron>
        <Blog></Blog>

    </div>
  );
}

export default App;
