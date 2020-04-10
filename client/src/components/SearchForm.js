import React, { useState } from "react";

export function SearchForm(props) {
  const [form, setForm] = useState("");
  // console.log(form);
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.handleSearch(form.search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        placeholder="Search"
        onChange={handleChange}
        value={form.search}
      />
      <button type="submit">Submit</button>
    </form>
  );
}