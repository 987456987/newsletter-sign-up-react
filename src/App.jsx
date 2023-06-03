
import './App.css'
import iconList from './assets/images/icon-list.svg'
import desktopImg from './assets/images/illustration-sign-up-desktop.svg'
import mobileImg from './assets/images/illustration-sign-up-mobile.svg'

export default function App() {

  

  function handleSubmit(e) {
    e.preventDefault();
  
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("error");
  
    if (emailInput.validity.valid) {
      emailInput.classList.remove('error-input')
      emailError.classList.remove('error-text-display')
      e.target.reset();
    } else {
      emailInput.classList.add('error-input')
      emailError.classList.add('error-text-display')
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <img className='mobile-img' src={mobileImg}/>
        <div className='form-container'>
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
          <form onSubmit={handleSubmit} id='form' noValidate>
            <div className='input-labels'>
              <label htmlFor="email">Email address</label>
              <label id='error' className='error-text'>Valid email required</label>
            </div>
            <input type='email' id='email' placeholder='email@company.com'/>
            <button>Subscribe to monthly newsletter</button>
          </form>
        </div>
        <img className='desktop-img' src={ desktopImg } alt=''/>
      </div>
    </div>
  )
}

