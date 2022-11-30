import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import homeMain from './components/homeMain';
import Counter from './components/Counter';
import login from './components/login.Js';
import { Fragment } from 'react';
import forgetpassword from './components/forgetpassword';


function App() {
  return (
  <Fragment>
  <Header />
  <homeMain />
  <login />
  <forgetpassword />
  <Counter />
  <Footer />

  
  </Fragment>
  );
}

export default App;
