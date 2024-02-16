"use client";

import { useState, useEffect } from 'react';


export default function Home() {
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  const rollDice = () => {
    setRolling(true);
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6)); // 更新点数
    }, 100); // 每100毫秒更新一次点数

    setTimeout(() => {
      clearInterval(interval); // 停止点数变化
      setRolling(false); // 停止动画
      setDiceValue(Math.floor(Math.random() * 6)); // 最终点数
    }, 4000); // 总动画时间
  };

  useEffect(() => {
    return () => {
      setRolling(false); // 确保组件卸载时动画停止
    };
  }, []);

  return (
  
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className="text-6xl font-bold" >Shirdn 专用</h1>
        <div className="mt-6">
          <div className={`text-9xl md:text-[10rem] font-bold ${rolling ? 'animate-roll' : ''}`}>
            {diceFaces[diceValue]}
          </div>
          <button
            className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded hover:bg-blue-700 transition-colors duration-150"
            onClick={rollDice}
            disabled={rolling}>
            摇骰子
          </button>
        </div>
      </main>
    </div>

  );
}
