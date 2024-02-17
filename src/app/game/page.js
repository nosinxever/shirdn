"use client";

import { Fragment } from 'react';
import Head from 'next/head';

import DiceGame from '../components/DiceGame';
import Wheel from '../components/Wheel';
export default function Game() {
 
  return (
    <Fragment>
      <Head>
        <title>Game</title>
        <meta name="description" content="Dice Game" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>

      <DiceGame/>
      <Wheel />
 
    </Fragment>
  );
}
