import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import Homescreen from "./screens/Homescreen";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productscreen from "./screens/Productscreen";


function App() {
  return (
    <Router>
       <Header />
        <main className='py-3'>
          <Container>
          <Switch>
            <Route exact={true} path = '/' component={Homescreen}  />
            <Route path = '/product/:id' component={Productscreen} />
          </Switch>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;