// Hooks
import {Routes, Route, Outlet} from 'react-router-dom';
// Pages
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Playroom from './pages/Playroom/Playroom';
// Components
import Header from './components/Header/Header';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import SignIn from './components/SignInForm/SignInForm';
import FoundItem from './components/FoundItem/FoundItem';
import Error404 from './components/Error404/Error404';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import Goodbye from './components/Goodbye/Goodbye';
import Footer from './components/Footer/Footer';
// Styles
import './App.css';



function App() {
  
  return (
    <>
    <header className="header">
      <Header />
    </header>

   <main className="main">
      <Outlet />
      <Routes>
        <Route path='*' element={<Error404/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store />} >
          <Route path=':name' element={<FoundItem />}/> 
        </Route>
        <Route path='/playroom' element={<Playroom />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/order-confirmation' element={<OrderConfirmation />} />
        <Route path='/welcome' element={<WelcomeMessage />} />
        <Route path='/bye' element={<Goodbye />} />
      </Routes> 
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
