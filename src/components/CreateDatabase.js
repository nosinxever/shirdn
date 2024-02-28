"use client";
import { useState } from "react";


const CreateDatabase = () => {
  const [parentId, setParentId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const response = await fetch("/api/create-mood-database", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ parentId }),
    });

    const data = await response.json();
    setMessage(
      response.ok ? `${data.message}, ${data.databaseId}` : data.message
    );
  };

  return (
    <div className="space-y-4 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900">Create Wishs Database</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
          placeholder="Enter parent page ID"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          Create Database
        </button>
      </form>
      {message && <p className="text-green-600">{message}</p>}
    </div>
  );
};

  
export default CreateDatabase;