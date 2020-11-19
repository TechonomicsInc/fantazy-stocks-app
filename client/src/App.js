import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navigation from './Static_Components/Navigation'
import Footer from './Static_Components/Footer'
import Home from './Page_Components/home/Home'
import Trade from './Page_Components/trade/Trade'
import Report from './Page_Components/report/Report'

function App() {
  return (
    <Router>
      <div className="app" id="app-container">
        <Navigation />
        <main id="main-container">
          <Route path="/" exact component={Home} />
          <Route path="/trade" component={Trade} />
          <Route path="/report" component={Report} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
