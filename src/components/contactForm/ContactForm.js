import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

const handleNameChange = (event)=>{
  setName(event.target.value)
}

const handlePhoneChange = (event)=>{
  setPhone(event.target.value)
}

const handleEmailChange = (event)=>{
  setEmail(event.target.value)
}


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
      type='text' 
      Placeholder='Name' 
      name='Name'
      value={name} 
      onChange={handleNameChange}
      />
      <input
      type='tel' 
      Placeholder='Phone Number' 
      name='Phone'
      value={phone} 
      onChange={handlePhoneChange}
      />
      <input
      type='email' 
      Placeholder='Email' 
      name='Email'
      value={email} 
      onChange={handleEmailChange}/>
      <input type='submit' value='Add Contact'/>
    </form>
    </div>
  );
};
