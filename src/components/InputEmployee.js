import React, { useState } from "react";

export default function InputEmployee() {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/employee", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <h1 className="text-center mt-5">Project List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}
