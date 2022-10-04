import './styles/main.css';


import logo from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {

  return (

    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-5xl text-white fonte-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> está aqui.
      </h1>


      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
        <GameBanner bannerUrl="/game-2.png" title="Dota 2" adsCount={2} />
        <GameBanner bannerUrl="/game-3.png" title="CS GO" adsCount={3} />
        <GameBanner bannerUrl="/game-4.png" title="Apex Legends" adsCount={5} />
        <GameBanner bannerUrl="/game-5.png" title="Fortnite" adsCount={6} />
        <GameBanner bannerUrl="/game-6.png" title="World of Warcraft" adsCount={1} />

      </div>

      <CreateAdBanner />
    </div>

  )

}

export default App
