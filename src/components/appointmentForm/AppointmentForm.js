import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker.js'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleTitleChange = (event)=>{
    setTitle(event.target.value)
  }

  const handleTimeChange = (event)=>{
    setTime(event.target.value)
  }

  const handleDateChange = (event)=>{
    setDate(event.target.value)
  }

  const  handleContactChange = (event)=>{
    setContact(event.target.value)
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div onSubmit={handleSubmit}>
    <form>
      <label>
      <input 
      type='text'
      Placeholder= 'Title'
      value={title}
      onChange = {handleTitleChange}
      />
      </label>
      <label>
      <input 
      type='date'
      Placeholder= 'Date'
      value={date}
      onChange = {handleDateChange}
      min = {getTodayString}
      />
      </label>
      <label>
      <input 
      type='time'
      Placeholder= 'Time'
      value={time}
      onChange = {handleTimeChange}
      />
      </label>
      <label>
      <ContactPicker contact = {contact} handleContactChange={handleContactChange} 
      contacts={contacts} />
      </label>
      <label>
      <input type ='submit' value='Add Appointment' />
      </label>
    </form>
    </div>
  );
};
