
import './App.css'
import iconList from './assets/images/icon-list.svg';
import desktopImg from './assets/images/illustration-sign-up-desktop.svg';
import mobileImg from './assets/images/illustration-sign-up-mobile.svg';

export default function App() {
 
  return (
    <>
      <div className='form-container'>
        <form>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
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
        </form>
        <img className='desktop-img' src={ desktopImg } alt=''/>
      </div>
    </>
  )
}

