import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
// import ShoppingList from './components/ShoppingList';
// import ItemModal from './components/ItemModal';
import FrontPage from './components/FrontPage/FrontPage';
import ExplorePage from './components/ExplorePage/ExplorePage';
import Footer from './components/Footer';
// import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
  
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    {console.log(store.getState().auth);}
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <FrontPage />
          <ExplorePage />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
