import React from 'react'

const Signuppage = () => {
  return (
    <div>
      
    <div>
       <section className="main-section">
        <div className="content-left">
          <p className="section-title">Strategic intelligence for decision making </p>
          <h1 className="section-description">
          *Stop flying blind in your decisions. Unleash the power of GenAI with Chanakya AI.*
          </h1>
          <p className="section-description">
          Our enterprise-grade platform empowers you to make data-driven choices with confidence. Analyze both structured and unstructured data and gain **hidden insights** that would normally remain unseen. 
          </p>
          <p className="section-description">
          *Ready to make smarter decisions? Start your free trial of Chanakya AI today!*
           
          </p>
        </div>
        <div className="content-right">
          <div className="image-conatainer">
          <h2>Sign Up</h2>
      <form >
        <div>
          <input type="text" id="firstName" name="firstName" placeholder='first name'  />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder='lastname'/>
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder='emailAddress'/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='pick up password'  />
          <p>Use at least one letter, one numeral, and seven characters.</p>
        </div>
        <div>
          <button type="submit">Sign Up for Chanukya AI </button>
        </div>
      </form>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Signuppage
