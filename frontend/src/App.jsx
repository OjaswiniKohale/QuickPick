import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Profile from './pages/Profile';
import CartPage from './pages/CartPage';

function App() {
  return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path='/checkout' element={<Checkout />}></Route>
      			<Route path='/product' element={<Product />}></Route> 
      			<Route path='/profile' element={<Profile/>}></Route> 
      			<Route path='/cart' element={<CartPage/>}></Route> 
			</Routes>
		</Router>
  )
}

export default App;
