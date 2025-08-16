import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log(formData, "ddd");
    

    try {
      const res = await axios.post(
        "https://be75b5kev9.execute-api.eu-north-1.amazonaws.com/prod",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send. Please try again.");
    }
  };

  return (
    <div id="contact" className="bg-secondary min-h-60 w-full px-5 py-10 border-t-4">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-primary text-center text-xl font-bold uppercase mb-8 tracking-widest">
          CONTACT
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full rounded shadow-lg bg-white my-2 px-6 py-4 flex flex-col items-stretch"
        >
          <label htmlFor="yourname" className="font-secondary">Name:</label>
          <input
            type="text"
            name="name"
            id="yourname"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name..."
            required
            className="border-2 border-gray-200 rounded p-2 w-full mb-3"
          />

          <label htmlFor="youremail" className="font-secondary">Email:</label>
          <input
            type="email"
            name="email"
            id="youremail"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email..."
            required
            className="border-2 border-gray-200 rounded p-2 w-full mb-3"
          />

          <label htmlFor="yourmessage" className="font-secondary">Message:</label>
          <textarea
            name="message"
            id="yourmessage"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
            required
            className="border-2 border-gray-200 rounded p-2 w-full mb-3"
          />

          <button
            type="submit"
            className="hover:text-black uppercase font-bold text-base tracking-wide hover:bg-white border-2 border-primary transition-all duration-200 ease-in hover:border-gray-200 bg-primary text-white rounded p-2 w-full"
          >
            SEND
          </button>

          {status && <p className="text-center mt-2 text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
