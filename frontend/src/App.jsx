import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import './styles/globalStyles.css';
// import Product from './pages/Product';

function App() {
  return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path='/checkout' element={<Checkout />}></Route>
      { /* <Route path='/product' element={<Product />}></Route> */ }
			</Routes>
		</Router>
  )
}

export default App;
