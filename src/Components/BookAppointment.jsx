import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const BookAppointment = () => {
      const Api = useSelector((state)=>state.serverurl)
    const navigate = useNavigate();
    const userid = useSelector((state) => state.users);
    const location = useLocation();
    const { designid, artistid } = location.state || {};
    const [formdata, setformdata] = useState({
        user_id: userid ? userid._id : null,
        design_id: designid ? designid : "",
        artist_id: artistid ? artistid : "",
        email: "",
        phone: "",
        date: "",
        time: "",
    });

    useEffect(() => {
        console.log(userid);
    }, [userid]);

    const [successMessage, setSuccessMessage] = useState("");

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value,
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");

        try {
            const response = await fetch(`${Api.url}/bookings/booking`, {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
            });

            console.log("booking api", response);

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage("Your appointment has been successfully booked!");
                navigate("/bookings");
            } else {
                setSuccessMessage("Something went wrong. Please try again.");
            }
            console.log(data);
        } catch (error) {
            console.log(error);
            setSuccessMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="w-100" style={{ maxWidth: "600px" ,marginTop:'50px'}}>
                <form onSubmit={handlesubmit} className="bg-light p-4 rounded shadow-sm">
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                            value={formdata.email}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Enter your phone"
                            required
                            value={formdata.phone}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">New Date</label>
                        <input
                            type="date"
                            name="date"
                            className="form-control"
                            required
                            value={formdata.date}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">New Time</label>
                        <div className="input-group">
                            <input
                                type="number"
                                name="hour"
                                className="form-control"
                                placeholder="HH"
                                min="1"
                                max="12"
                                required
                                value={formdata.hour}
                                onChange={handlechange}
                                style={{ width: "60px" }}
                            />
                            <span className="input-group-text">:</span>
                            <input
                                type="number"
                                name="minute"
                                className="form-control"
                                placeholder="MM"
                                min="0"
                                max="59"
                                required
                                value={formdata.minute}
                                onChange={handlechange}
                                style={{ width: "60px" }}
                            />
                            <select
                                name="ampm"
                                className="form-select"
                                value={formdata.ampm}
                                onChange={handlechange}
                                style={{ width: "80px" }}
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Book Appointment
                    </button>
                </form>

                {/* Display success or error message */}
                {successMessage && (
                    <div className="alert alert-success mt-3 text-center">
                        {successMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookAppointment;
