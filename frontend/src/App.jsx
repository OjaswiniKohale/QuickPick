import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';

function App() {
  return (
		<Router>
			<Routes>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path='/checkout' element={<Checkout />}></Route>
			</Routes>
		</Router>
  )
}

export default App;
