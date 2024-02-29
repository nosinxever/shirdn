//AddMood.js

"use client"
import { useState } from "react";

const SvgIcon = () => (
    <svg className="svg-icon" style={{width: '24px', height: '100%', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden'}} viewBox="0 0 1126 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M330.4572 793.294494l147.188774 85.964302-54.920658 144.723596z m502.280153 212.269491L483.016542 817.629329 951.858307 172.210338l-612.772982 568.012381L0 558.046016 1126.938818 0.017608l-294.060598 1005.440727z" />
    </svg>
  );


const AddMood = ({ onNewMoodAdded }) => {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormModified = () => title !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('/api/mood', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      setIsSubmitting(false);
      console.error(`HTTP error! status: ${response.status}`);
    } else {
      const newMood = await response.json();
      onNewMoodAdded(newMood); // Update parent state
      setTitle("");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full my-5 md:w-96">
      <form onSubmit={handleSubmit} className="flex items-end space-x-4">
        <textarea
          type="text"
          className="w-full p-2 border border-gray-200 shadow-md rounded-md focus:border-gray-100 focus:ring-0"
          placeholder="Please express your feelings..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ height: '72px', resize: 'none' }}
        />
        <button
          type="submit"
          disabled={!isFormModified() || isSubmitting}
          className="flex items-center justify-center p-3 rounded-md hover:bg-blue-300"
          style={{ height: '72px' }}
        >
           <SvgIcon />
        </button>
      </form>
    </div>
  );
};


export default AddMood;
