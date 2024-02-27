"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

import Footer from '@/components/Footer';


export default function Home() {
  const [sinceMet, setSinceMet] = useState('');

  useEffect(() => {
    const metDate = new Date('2024-02-08');
    const timer = setInterval(() => {
      setSinceMet(formatDistanceToNow(metDate, { addSuffix: false }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Twinkle Star.svg')" }}>
      <Head>
        <title>We Met</title>
        <meta name="description" content="Counting the days since we met." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8  max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-500 mb-4">We Met</h1>

          <p className="text-6xl font-bold text-pink-500 mb-4">{sinceMet}</p>
          <p className="text-lg text-gray-700">It feels like a journey of a lifetime, and it's just the beginning. 💖</p>
          <p className="text-md text-gray-500 mt-5">农历年二十九 | 华贸绿茶</p>
          <p className="text-md text-gray-500 ">Since Feb 8 2024</p>

        </div>
      </main>
      <Footer/>
    </div>
  );
}
