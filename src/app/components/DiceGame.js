"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DiceGame() {
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  const rollDice = () => {
    setRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6));
      count += 1;
      if (count >= 40) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 100);
  };

  const diceVariants = {
    rolling: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 0.1,
        repeat: 40,
        ease: 'linear'
      }
    },
    stopped: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2" style={{ fontFamily: 'VT323, monospace' }}>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
          <h1 className="text-6xl font-bold text-slate-500">For Shirdn</h1>
          <motion.div
            className="mt-6 text-9xl text-slate-500 md:text-[10rem] font-bold"
            animate={rolling ? 'rolling' : 'stopped'}
            variants={diceVariants}
          >
            {diceFaces[diceValue]}
          </motion.div>
          <motion.button
            className="mt-8 px-6 py-3 bg-blue-400 text-white font-bold text-3xl rounded hover:bg-blue-600 transition-colors duration-150"
            onClick={rollDice}
            disabled={rolling}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start
          </motion.button>
        </main>
      </div>
  );
}
