"use client"

import { useState } from "react";

const AddWish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("green");
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable the button during submission

  // Function to check if the form has been modified (to enable the submit button)
  const isFormModified = () => title !== "" || description !== "" || tags.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button to prevent multiple submissions

    const response = await fetch('/api/wishs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, status: "Todo", tags, color }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsSubmitting(false); // Re-enable the button in case of an error
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      // Clear inputs and show the message
      setTitle("");
      setDescription("");
      setColor("green");
      setTags([]);
      setMessage(`${data.message}, ${data.postId}`);
      setIsSubmitting(false); // Re-enable the button after successful submission
    }
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
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        >
          {/* Color options */}
          <option className="bg-pink-200" value="pink">pink</option>
          <option className="bg-green-200" value="green">green</option>
          <option className="bg-cyan-200" value="cyan">cyan</option>
          <option className="bg-orange-200" value="orange">orange</option>
          <option className="bg-lime-200" value="lime">lime</option>
          <option className="bg-emerald-200" value="emerald">emerald</option>
          <option className="bg-teal-200" value="teal">teal</option>
          <option className="bg-blue-200" value="blue">blue</option>
          <option className="bg-purple-200" value="purple">purple</option>
          <option className="bg-rose-200" value="rose">rose</option>
        </select>
        <input
          type="text"
          value={tags.join(", ")} // Display tags as a comma-separated string
          onChange={(e) => setTags(e.target.value.split(", ").map(tag => tag.trim()))} // Split and trim tags
          placeholder="Tags (separate with commas)"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
        />
        <button
          type="submit"
          disabled={!isFormModified() || isSubmitting} // Button is disabled if form hasn't changed or is submitting
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 ease-in-out disabled:bg-blue-300"
        >
          Add Wish
        </button>
      </form>
      {message && <p className="text-green-600">{message}</p>}
    </div>
  );
};

export default AddWish;
