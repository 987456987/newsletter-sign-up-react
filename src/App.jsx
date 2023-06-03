
import './App.css'
import iconList from './assets/images/icon-list.svg';
import desktopImg from './assets/images/illustration-sign-up-desktop.svg';
import mobileImg from './assets/images/illustration-sign-up-mobile.svg';

export default function App() {
 
  return (
    <div className='App'>
      <div className='container'>
        <div className='form-container'>
          <img className='mobile-img' src={mobileImg}/>
          <h1>Stay updated!</h1>
          <p style={{ padding: '1.5em 0' }}>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <img src={ iconList } alt="check mark" />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <img src={ iconList } alt="check mark" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
              <img src={ iconList } alt="check mark" />
              <p>And much more!</p>
            </li>
          </ul>
          <form>
            <label htmlFor="email">Email address</label>
            <input type='email' id='email' />
            <button>Subscribe to monthly newsletter</button>
          </form>
        </div>
        <img className='desktop-img' src={ desktopImg } alt=''/>
      </div>
    </div>
  )
}

