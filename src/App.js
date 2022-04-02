import logo from './logo.svg';
import './App.css';
import GetSubscription from './components/subscription';
import Plus from './components/plus';
import { Routes ,Route } from 'react-router-dom';
import { Payment } from './components/payment';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path='/' element={<GetSubscription/>}></Route>
      <Route path='/Plus' element={<Plus/>}></Route>
      <Route path ="/payment" element={<Payment/>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
