"use client"

import { useState } from "react";

const AddWish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo"); // Default status set to "Todo"
  const [color, setColor] = useState("green");
  const [tags, setTags] = useState([]);

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/wishs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, status, tags, color }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    setMessage(`${data.message}, ${data.postId}`);
  };

  return (
    <div className="space-y-4 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900">Add Wish</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        />
        {/* <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          >
            <option value="Todo">Todo</option>
            <option value="Done">Done</option>
            <option value="Discard">Discard</option>
          </select> */}
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        >
          <option className="bg-pink-200	" value="pink">pink</option>
          <option className="bg-green-200	" value="green">green</option>
          <option className="bg-cyan-200	" value="cyan">cyan</option>
          <option className="bg-orange-200 " value="orange">orange</option>
          <option className="bg-lime-200 " value="lime">lime</option>
          <option className="bg-emerald-200 " value="emerald">emerald</option>
          <option className="bg-teal-200 " value="teal">teal</option>
          <option className="bg-blue-200 " value="blue">blue</option>
          <option className="bg-purple-200 " value="purple">purple</option>
          <option className="bg-rose-200 " value="rose">rose</option>

        </select>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(","))} // Split by space instead of comma
          placeholder="Tags (英文逗号隔开)"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          Add Wish
        </button>
      </form>
      {message && <p className="text-green-600">{message}</p>}
    </div>
  );
};


export default AddWish;