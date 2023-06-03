
import './App.css'
import FormComponent from './FormComponent';
import ListComponent from './ListComponent';
import SuccessComponent from './SuccessComponent';
import desktopImg from './assets/images/illustration-sign-up-desktop.svg'
import mobileImg from './assets/images/illustration-sign-up-mobile.svg'

export default function App() {

  return (
    <div className='App'>
      <div className='main'>
        <div className='container'>
          <img className='mobile-img' src={mobileImg}/>
          <div className='form-container'>
            <h1>Stay updated!</h1>
            <p style={{ padding: '1.5em 0' }}>Join 60,000+ product managers receiving monthly updates on:</p>
            <ListComponent />
            <FormComponent />
          </div>
          <img className='desktop-img' src={ desktopImg } alt=''/>
        </div>
        <SuccessComponent />
      </div>
    </div>
  )
}

