import { useState } from "react";
import { Header, Button } from "./App";

export function YourInfo({ nextStep }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // move to next page here
      nextStep();
    }
  };

  return (
    <form className="section" onSubmit={handleSubmit}>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />

      <label>
        <span className="flex">
          Name
          {errors.name && <p className="error">{errors.name}</p>}
        </span>
        <input
          className={`input-field ${errors.name ? "error" : ""}`}
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className="flex">
          Email Address
          {errors.email && <p className="error">{errors.email}</p>}
        </span>
        <input
          className={`input-field ${errors.email ? "error" : ""}`}
          type="email"
          name="email"
          placeholder="e.g. stephenking@example.com"
          value={form.email}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className="flex">
          Phone Number
          {errors.phone && <p className="error">{errors.phone}</p>}
        </span>
        <input
          className={`input-field ${errors.phone ? "error" : ""}`}
          type="tel"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={form.phone}
          onChange={handleChange}
        />
      </label>

      <Button className="submit-button" type="submit">
        Next Step
      </Button>
    </form>
  );
}
