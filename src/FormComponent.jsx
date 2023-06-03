export default function FormComponent() {

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
        <form onSubmit={handleSubmit} id='form' noValidate>
            <div className='input-labels'>
              <label htmlFor="email">Email address</label>
              <label id='error' className='error-text'>Valid email required</label>
            </div>
            <input type='email' id='email' placeholder='email@company.com'/>
            <button>Subscribe to monthly newsletter</button>
        </form>
    )
}