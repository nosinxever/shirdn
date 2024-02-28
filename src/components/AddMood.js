"use client"

import React, { useState } from 'react';

const AddMood = () => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postContent);
    setPostContent(''); // Reset the content after submission
  };

  return (
    <div className="mx-auto w-full my-5 md:w-96">
      <form onSubmit={handleSubmit} className="flex items-end space-x-4">
        <textarea
          type="text"
          className="w-full p-2 border border-gray-200 shadow-md rounded-md focus:border-gray-100 focus:ring-0"
          placeholder="请尽情表达你的不满和满意。。。"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          style={{ height: '72px',resize: 'none' }} // Set fixed height for textarea

        />
        <button
          type="submit"
          className="flex items-center justify-center p-3 rounded-md hover:bg-blue-300"
          style={{ height: '72px' }} // Ensure button height matches textarea
        >
        <SvgIcon />
        </button>
      </form>
    </div>
  );
};



const SvgIcon = () => (
    <svg className="svg-icon" style={{width: '24px', height: '100%', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden'}} viewBox="0 0 1126 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M330.4572 793.294494l147.188774 85.964302-54.920658 144.723596z m502.280153 212.269491L483.016542 817.629329 951.858307 172.210338l-612.772982 568.012381L0 558.046016 1126.938818 0.017608l-294.060598 1005.440727z" />
    </svg>
  );

export default AddMood;
