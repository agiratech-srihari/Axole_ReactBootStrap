import './App.css';
import Router from './RouteLayout'
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {

    return (
      <ParallaxProvider>
        <Router/>
      </ParallaxProvider>
    );

}

export default App;
