import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ThankYou from './Components/ThankYou';
import RegistrationForm from './Components/RegistrationForm';


function App() {
  return (
   <div className='appbg'>
     <Header/>
     {/* <Registration /> */}
     <RegistrationForm />
     {/* <ThankYou /> */}
     
   </div>
  );
}

export default App;
