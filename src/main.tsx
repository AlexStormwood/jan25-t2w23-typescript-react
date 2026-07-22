import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PokemonDataProvider } from './providers/PokemonDataProvider.tsx'


// type Fruit = {
//   name?: string;
//   relatedFruit?: Fruit[];
//   // getLatestFruitFirmware: Promise<string>;
// }

// let banana: Fruit = {
//   name: "cavendish"
// }

// if (banana.name){
//   // blah blah 
// }

// console.log(banana!.name );

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonDataProvider>
      <App />
    </PokemonDataProvider>
    
  </StrictMode>,
)
