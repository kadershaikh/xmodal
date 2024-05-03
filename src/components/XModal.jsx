import React, { useState } from "react";
import './XModal.css'

function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.phone || !formData.dob) {
      alert("Please fill out all fields.");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    const dob = new Date(formData.dob);
    const today = new Date();
    if (dob > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    setIsOpen(false);
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form data
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: ""
    });
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;
