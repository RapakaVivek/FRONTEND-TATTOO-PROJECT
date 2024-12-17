

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const CancelAppointment = () => {
  const Api = useSelector((state)=>state.serverurl)
  const [isCancelled, setIsCancelled] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  
  const [appointmentDate, setAppointmentDate] = useState("");

 
  const [hours, setHours] = useState("12");
  const [minutes, setMinutes] = useState("00");
  const [amPm, setAmPm] = useState("PM");  
  let booking_id = "e041f6f0-75b6-4a5e-ab2a-8fb3d57d894e"
  
  const cancelAppointment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      
      const response = await fetch(`${Api.url}/bookings/${booking_id}/cancel`, {
        method: 'delete', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appointmentDate: appointmentDate,
          appointmentTime: formatTimeWithAmPm(),
        }),
      });
      let data = await response.json()
      console.log(data)
      if (!response.ok) {
        throw new Error('Failed to cancel appointment');
      }

    
      setIsCancelled(true);
      console.log("Appointment has been cancelled.");
    } catch (error) {
      
      setError(error.message);
      console.error("Error cancelling appointment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  
  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  
  const handleHourChange = (event) => {
    setHours(event.target.value);
  };

  
  const handleMinuteChange = (event) => {
    setMinutes(event.target.value);
  };

  
  const handleAmPmChange = (event) => {
    setAmPm(event.target.value);
  };

  
  useEffect(() => {
    const defaultDate = new Date();
    const defaultDateString = defaultDate.toISOString().slice(0, 10); 
    setAppointmentDate(defaultDateString);
    setHours("12"); 
    setMinutes("00"); 
    setAmPm("PM"); 
  }, []);

  
  const formatTimeWithAmPm = () => {
    let formattedHours = parseInt(hours);
    if (amPm === "PM" && formattedHours < 12) {
      formattedHours += 12;  
    } else if (amPm === "AM" && formattedHours === 12) {
      formattedHours = 0;  
    }

    const formattedTime = `${String(formattedHours).padStart(2, '0')}:${minutes}`;
    return formattedTime;
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container mt-4">
        <h1 className="mb-4 text-center">Appointment Details</h1>

        
        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">Select your appointment date: </label>
          <input 
            type="date" 
            id="appointmentDate" 
            className="form-control" 
            value={appointmentDate} 
            onChange={handleDateChange} 
          />
        </div>

        
        <div className="mb-3">
          <label htmlFor="appointmentTime" className="form-label">Select your appointment time: </label>
          <div className="d-flex justify-content-center">
           
            <select 
              className="form-select" 
              value={hours} 
              onChange={handleHourChange}
              aria-label="Hour"
            >
              {[...Array(12).keys()].map((i) => (
                <option key={i} value={String(i + 1).padStart(2, '0')}>
                  {String(i + 1).padStart(2, '0')}
                </option>
              ))}
            </select>

           
            <select 
              className="form-select ms-2" 
              value={minutes} 
              onChange={handleMinuteChange}
              aria-label="Minutes"
            >
              {['00', '15', '30', '45'].map((minute) => (
                <option key={minute} value={minute}>{minute}</option>
              ))}
            </select>

            
            <select 
              className="form-select ms-2" 
              value={amPm} 
              onChange={handleAmPmChange}
              aria-label="AM/PM"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {appointmentDate && hours && minutes && (
          <p className="mt-3 text-center">Your appointment is scheduled for: <strong>{appointmentDate} {formatTimeWithAmPm()}</strong></p>
        )}

        
        {!isCancelled ? (
          <div className="text-center">
            <button 
              onClick={cancelAppointment} 
              className="btn btn-danger mt-3"
              disabled={isLoading} 
            >
              {isLoading ? 'Cancelling...' : 'Cancel Appointment'}
            </button>
          </div>
        ) : (
          <div className="mt-3 text-center" style={{color:'green'}}>
            <p>Your appointment has been cancelled.</p>
          </div>
        )}

       
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default CancelAppointment;