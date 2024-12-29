import { useState } from "react";

function BookNowPage() {
  const [formData, setFormData] = useState({ name: "", class: "", date: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Class booked for ${formData.name} on ${formData.date}`);
  };

  return (
    <div>
      <h1>Book a Class</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} />
        <input name="class" placeholder="Class Name" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookNowPage;
