import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './styles/Nav.css';
import './styles/Footer.css';
import './styles/HomePage.css';
import './styles/NosotrosPage.css';
import './styles/ServiciosPage.css';
import './styles/ContactoPage.css';
import './styles/NovedadesPage.css';

/* import Header from "./components/layouts/Header"; */
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from "./pages/ServiciosPage";
import NovedadesPage from "./pages/NovedadesPage";



function App() {
  return (
    <div className="app">
      <Router>
        {/* <Header/> */}
        <Nav/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/nosotros' exact component={NosotrosPage} />
          <Route path='/servicios' exact component={ServiciosPage} />
          <Route path='/contacto' exact component={ContactoPage} />
          <Route path='/novedades' exact component={NovedadesPage}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
