"use client";

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const rewards = ["奖品1", "奖品2", "奖品3", "奖品4", "奖品5","奖品6"];
const segmentAngle = 360 / rewards.length; // 每个部分的角度

const Wheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedReward, setSelectedReward] = useState('');

  useEffect(() => {
    if (!isSpinning) {
      // 计算旋转后选中的奖品
      const rewardIndex = Math.floor(rotation / segmentAngle) % rewards.length;
      setSelectedReward(rewards[rewardIndex]);
    }
  }, [isSpinning, rotation]);

  const spin = () => {
    // 生成新的旋转角度
    const newRotation = 1440 + Math.floor(Math.random() * 360); // 确保至少旋转4圈
    setRotation(rotation + newRotation);
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000); // 转动持续2秒
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg width="200" height="200" viewBox="0 0 200 200" className="relative">
        {rewards.map((reward, index) => (
          <g key={index} transform={`rotate(${segmentAngle * index}, 100, 100)`}>
            <path
              d={`M100,100 L100,0 A100,100 0 0,1 ${100 + 100 * Math.sin(segmentAngle * Math.PI / 180)},${100 - 100 * Math.cos(segmentAngle * Math.PI / 180)} Z`}
              fill={`hsl(${index * (360 / rewards.length)}, 70%, 50%)`}
            />
            <text
              x="100"
              y="15"
              fill="white"
              transform={`rotate(${segmentAngle / 2}, 100, 100)`}
              style={{ textAnchor: 'middle' }}
            >
              {reward}
            </text>
          </g>
        ))}
        <motion.polygon
          initial={{ rotate: 0 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 2, ease: "linear" }}
          points="100,30 95,90 105,90"
          fill="orange"
          style={{ originX: "100", originY: "100" }} // 设置旋转中心为SVG中心
        />
      </svg>
     
      <button onClick={spin} className="mt-8 px-6 py-3 bg-blue-400 text-white font-bold text-3xl rounded hover:bg-blue-600 transition-colors duration-150"
>
        Start
      </button>
      {/* {!isSpinning && selectedReward && (
        <div className="mt-5 text-lg font-bold">
          恭喜获得: {selectedReward}
        </div>
      )} */}
    </div>
  );
};

export default Wheel;
