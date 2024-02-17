"use client";


import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import RewardInput from './RewardInput';

const Wheel = () => {
  const [rewards, setRewards] = useState(["奖品1", "奖品2", "奖品3", "奖品4", "奖品5"]);
  const segmentAngle = 360 / rewards.length; // 每个部分的角度

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedReward, setSelectedReward] = useState('');

  useEffect(() => {
    if (!isSpinning) {
      // 计算旋转后选中的奖品
      const rewardIndex = Math.floor(rotation / segmentAngle) % rewards.length;
      setSelectedReward(rewards[rewardIndex]);
    }
  }, [isSpinning, rotation, rewards, segmentAngle]);

  const spin = () => {
    // 生成新的旋转角度
    const newRotation = 1440 + Math.floor(Math.random() * 360); // 确保至少旋转4圈
    setRotation(rotation + newRotation);
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000); // 转动持续2秒
  };

  const addReward = (newReward) => {
    setRewards([...rewards, newReward]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg width="350" height="350" viewBox="0 0 200 200" className="relative"> {/* 尺寸调整为350x350 */}
        {rewards.map((reward, index) => (
          <g key={index} transform={`rotate(${segmentAngle * index}, 100, 100)`}>
            <path
              d={`M100,100 L100,0 A100,100 0 0,1 ${100 + 100 * Math.sin(segmentAngle * Math.PI / 180)},${100 - 100 * Math.cos(segmentAngle * Math.PI / 180)} Z`}
              fill={`hsl(${index * (360 / rewards.length)}, 70%, 50%)`}
            />
            <text
              x="100"
              y="15" // 根据需要调整文本位置
              fill="white"
              transform={`rotate(${segmentAngle / 2}, 100, 100)`}
              style={{ textAnchor: 'middle', fontSize: '8px' }} // 可能需要根据视觉效果调整字体大小
            >
              {reward}
            </text>
          </g>
        ))}
        <motion.path
          initial={{ rotate: 0 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 2, ease: "linear" }}
          d="M98,95 L102,95 L102,20 L98,20 Z" // 绘制一个类似钟表指针的形状
          fill="orange"
          style={{ originX: "100", originY: "100" }} // 设置旋转中心为SVG中心
        />
      </svg>
     
      <button onClick={spin} className="mt-5 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
        点击转动
      </button>

      <RewardInput onAddReward={addReward} />
    </div>
  );
};

export default Wheel;
