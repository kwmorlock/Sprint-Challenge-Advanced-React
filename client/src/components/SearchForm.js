import React, { useState } from "react";
import { useForm } from "../Hooks/UseForm";
import { useDarkMode } from "../Hooks/useDarkMode";
export function SearchForm(props) {


  const [darkMode, setDarkMode] = useDarkMode("isDark");
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const [form, handleChange] = useForm();
  const handleSubmit = e => {
    e.preventDefault();
    props.handleSearch(form.search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div onClick={toggleMode} data-testid="pinkmode" id="pinkmode">Pink Mode</div>
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
