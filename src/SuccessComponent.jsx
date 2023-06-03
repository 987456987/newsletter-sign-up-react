import iconList from './assets/images/icon-list.svg'

export default function SuccessComponent({ inputValue }) {
    const success = document.getElementById('success')
    const container = document.getElementById('container')

    const handleClick = () => {
        success.classList.remove("container-block")
        container.classList.remove("container-hidden")
    }

     return (
        <div className='success-container' id="success">
            <img src={iconList} width={'65px'} style={{marginBottom: '2em'}}/>
            <h1>Thanks for subscribing!</h1>
            <p style={{ padding: '1.5em 0' }}>
                A confirmation email has been sent to <b>{inputValue}</b>. 
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={handleClick} >Dismiss message</button>
      </div>
     )
}