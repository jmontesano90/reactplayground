import React from 'react';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'

function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter count={123} step={4} />
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={8} />
    </main>
  );
}

export default App;