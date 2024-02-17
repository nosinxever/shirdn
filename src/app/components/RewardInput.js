"use client";

import React, { useState } from 'react';

const RewardInput = ({ onAddReward }) => {
  const [rewardText, setRewardText] = useState('');

  const handleInputChange = (event) => {
    setRewardText(event.target.value);
  };

  const handleAddReward = () => {
    if (rewardText.trim() !== '') {
      onAddReward(rewardText.trim());
      setRewardText('');
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="输入奖品..."
        value={rewardText}
        onChange={handleInputChange}
        className="mr-2 py-1 px-2 border border-gray-300 rounded"
      />
      <button onClick={handleAddReward} className="py-1 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
        添加奖品
      </button>
    </div>
  );
};

export default RewardInput;
