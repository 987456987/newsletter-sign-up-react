
export default function FormComponent({ onInputChange }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const emailInput = document.getElementById('email')
    const emailError = document.getElementById('error')
    const success = document.getElementById('success')
    const container = document.getElementById('container')

    if (emailInput.validity.valid && emailInput.value != '') {
      emailInput.classList.remove('error-input')
      emailError.classList.remove('error-text-display')
      success.classList.add('container-block')
      container.classList.add('container-hidden')
      emailInput.value = ''
    } else {
      emailInput.classList.add('error-input')
      emailError.classList.add('error-text-display')
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value
    onInputChange(value)
  };

  return (
    <form onSubmit={handleSubmit} id="form" noValidate>
      <div className="input-labels">
        <label htmlFor="email">Email address</label>
        <label id="error" className="error-text">
          Valid email required
        </label>
      </div>
      <input
        type="email"
        id="email"
        placeholder="email@company.com"
        onChange={handleInputChange}
      />
      <button>Subscribe to monthly newsletter</button>
    </form>
  );
}
