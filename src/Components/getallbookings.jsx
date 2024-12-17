import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";

const Getallbookings = () => {
  const Api = useSelector((state) => state.serverurl);
  const [allbookingss, setallbookings] = useState([]);
  const userdetails = useSelector((state) => state.users);

  const getallbookingshistory = async () => {
    let response = await fetch(`${Api.url}/bookings/bookings/${userdetails._id}`);
    let data = await response.json();
    if (data.message === "success") {
      setallbookings(data.data);
    }
  };

  useEffect(() => {
    if (userdetails) {
      getallbookingshistory();
    }
  }, [userdetails]);

  const handleReschedule = async (booking) => {
    const { value: formValues } = await Swal.fire({
      title: "Reschedule Appointment",
      html: `
        <div style="text-align: left; margin-bottom: 10px;">
          <label for="reschedule-date" style="font-weight: bold;">New Date:</label>
          <input type="date" id="reschedule-date" class="swal2-input" required>
        </div>
        <div style="text-align: left;">
          <label for="reschedule-time" style="font-weight: bold;">New Time:</label>
          <input type="time" id="reschedule-time" class="swal2-input" required>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Reschedule",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const date = document.getElementById("reschedule-date").value;
        const time = document.getElementById("reschedule-time").value;
        if (!date || !time) {
          Swal.showValidationMessage("Please select both date and time.");
        }
        return { date, time };
      },
    });

    if (formValues) {
      const { date, time } = formValues;
      try {
        const response = await fetch(`${Api.url}/bookings/${booking.booking_id}/reschedule`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date, time }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to reschedule appointment");
        }

        Swal.fire("Success!", `Appointment rescheduled to ${date} at ${time}`, "success");
        getallbookingshistory();
      } catch (error) {
        Swal.fire("Error", error.message, "error");
      }
    }
  };

  const handleCancel = async (booking) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to cancel this appointment.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handlecancelappoinment(booking);
      }
    });
  };

  const handlecancelappoinment = async (booking) => {
    try {
      let booking_id = booking.booking_id;
      const response = await fetch(`${Api.url}/bookings/${booking_id}/cancel`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to cancel appointment");
      }
      Swal.fire("Cancelled!", "Appointment has been cancelled.", "success");
      getallbookingshistory();
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>All Bookings</h2>
      {allbookingss.map((booking, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%", flexWrap: "wrap" }}>
            <img
              src={booking.designDetails.image}
              alt="Design"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "20px",
                marginBottom: "10px",
                flex: "0 0 150px",
              }}
            />
            <div style={{ flex: "1", minWidth: "200px" }}>
              <h3 style={{ margin: "5px 0", color: "#333", fontSize: "16px" }}>
                {booking.designDetails.name}
              </h3>
              <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
                Price: ${booking.designDetails.price}
              </p>
              <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
                Date: {new Date(booking.date).toLocaleDateString()}
              </p>
              <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>Time: {booking.time}</p>
            </div>
          </div>
          <div style={{ textAlign: "right", width: "100%", marginTop: "10px" }}>
            {booking.status === "booked" ? (
              <div>
                <button
                  onClick={() => handleReschedule(booking)}
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Reschedule
                </button>
                <button
                  onClick={() => handleCancel(booking)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <h3 style={{ color: "#28a745", fontSize: "16px" }}>{booking.status}</h3>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getallbookings;
