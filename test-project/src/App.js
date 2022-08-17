import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import MainPage from './component/mainpage';


// const PrivateRoute = () => {
//   return(
//     <>
//     <Header />
//     </>
//   )
// }

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
