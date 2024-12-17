
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useSelector } from 'react-redux';

const RescheduleAppointment = () => {
  const Api = useSelector((state)=>state.serverurl)
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [appointmentTime, setAppointmentTime] = useState(new Date());
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDateChange = (date) => setAppointmentDate(date);
  const handleTimeChange = (time) => setAppointmentTime(time);

  // let booking_id = "e041f6f0-75b6-4a5e-ab2a-8fb3d57d894e"

  const formatDateTime = () => {
    const formattedDate = appointmentDate.toISOString().split('T')[0]; 
    const formattedTime = appointmentTime.toTimeString().split(' ')[0].slice(0, 5); 
    return { date: formattedDate, time: formattedTime };
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const { date, time } = formatDateTime(); 
      const response = await fetch(`${Api.url}/bookings/reschedule`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, time }), 
      });
       console.log(response ,data , time)
      let data = await response.json();
       console.log(data)
      if (response.ok) {
        setMessage(`Appointment successfully rescheduled to: ${date} at ${time}`);
      } else {
        setMessage('Failed to reschedule appointment. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred while rescheduling. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow p-4 col-md-6">
        <h2 className="text-center mb-4">Reschedule Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="appointmentDate">Select New Date</label>
            <DatePicker
              id="appointmentDate"
              selected={appointmentDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="appointmentTime">Select New Time</label>
            <DatePicker
              id="appointmentTime"
              selected={appointmentTime}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="form-control"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Rescheduling...' : 'Reschedule Appointment'}
            </button>
          </div>
        </form>
        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </div>
    </div>
  );
};

export default RescheduleAppointment;