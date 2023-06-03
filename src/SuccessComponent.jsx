import iconList from './assets/images/icon-list.svg'

export default function SuccessComponent() {
     return (
        <div className='success-container'>
            <img src={iconList} width={'65px'} style={{marginBottom: '3em'}}/>
            <h1>Thanks for subscribing!</h1>
            <p style={{ padding: '1.5em 0' }}>
                A confirmation email has been sent to ash@loremcompany.com. 
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button>Dismiss message</button>
      </div>
     )
}