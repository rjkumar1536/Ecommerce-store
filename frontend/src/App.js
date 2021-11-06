import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import Homescreen from "./screens/Homescreen";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productscreen from "./screens/Productscreen";
import CartScreen from "./screens/CartScreen";
import {useSelector} from "react-redux";
import Loader from './components/Loader';
import Message from './components/Message';


function App() {
  const {isError, isLoading, errorMessage} = useSelector(state => ({isError : state.error.isError, errorMessage:  state.error.errorMessage,isLoading : state.loader.isLoading}));
  return (
    <Router>
       <Header />
        <main className='py-3'>
          <Container>
          {isError && <Message variant = 'danger' children={errorMessage} />}
            <Switch>
              <Route exact={true} path = '/' component={Homescreen}  />
              <Route path = '/products/:id' component={Productscreen} />
              <Route path = '/cart/:id?' component={CartScreen}/>
            </Switch>
            { isLoading && <Loader /> }
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;