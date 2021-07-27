import './App.css';
import Header from "./mycreation/Header";
import Footer from "./Footer";
// import Service from "./mycreation/Service";
import Middle from "./mycreation/middle_page/Middle";
import About from "./mycreation/About";
import 'aos/dist/aos.css';
import AOS from 'aos'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  AOS.init({duration:2000});
  return (
   <>
   <Router>
   <Header/>
   <Switch>
   <Route exact path="/reactweb">
    <Middle/>
   </Route>
   <Route exact path="/reactweb/about">
    <About/>
   </Route>
   <Route exact path="/">
    <Middle/>
   </Route>
   <Route exact path="/about">
    <About/>
   </Route>
   </Switch>
   <Footer/>
   </Router>
  </>
  );
}
export default App;
