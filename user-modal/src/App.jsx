import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  })
  const handleOpenForm = () => {
    setOpen(!open)
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.username && formData.email && formData.phone && formData.dob) {
      if(formData.phone.toString().length !== 10) {
        alert('Invalid phone number. Please enter a 10-digit phone number.');
      }
      else if(new Date(formData.dob) > new Date()) {
        alert('Invalid date of birth. Date of birth can not be in the future.');
      }
    }
  }
  const handleCloseBtn = () => {
    setOpen(!open)
  }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    if(e.target.name === 'username') {
      setFormData({
        ...formData,
        username: e.target.value
      })
    } else if(e.target.name === 'email') {
      setFormData({
        ...formData,
        email: e.target.value
      })
    } else if(e.target.name === 'phone') {
      setFormData({
        ...formData,
        phone: e.target.value
      })
    } else if(e.target.name === 'dob') {
      setFormData({
        ...formData,
        dob: e.target.value
      })
    }
  }

  return (
    <>
      <h1>User Details Modal</h1>
      <button onClick={() => setOpen(!open)}>Open Form</button>
      {open && (
        <div  className="modal-overlay">
          <div className="modal">
                <div className="modal-content">
                  <h2>Fill Details</h2>
                  <form method='POST' onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <label htmlFor='username'>Username:</label>
                      <input type='text' onChange={handleInputChange} id='username' name='username' placeholder='Enter Username' required/>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email'>Email Address:</label>
                      <input type='email' id='email' onChange={handleInputChange} name='email' placeholder='Enter Email' required/>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='password'>Phone Number:</label>
                      <input type='number' id='phone' onChange={handleInputChange} name='phone' placeholder='Enter Phone' required/>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='password'>Date of Birth:</label>
                      <input type='date' id='dob' onChange={handleInputChange} name='dob' placeholder='Date of Birth' required/>
                    </div>
                    <div style={{display: 'flex', gap:"10px",justifyContent:"center", marginTop: '20px'}}>
                      <button type="submit" className='submit-button' >Submit</button>
                      <button onClick={handleCloseBtn}>Close</button>
                    </div>
                  </form>
                </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
