import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from "./blog/main";
import Banner from "./banner/main";
import MainNav from "./main-nav/main";

function App() {
  return (
    <div className="App">

        <MainNav></MainNav>
        <Banner></Banner>
        <Blog></Blog>

    </div>
  );
}

export default App;
