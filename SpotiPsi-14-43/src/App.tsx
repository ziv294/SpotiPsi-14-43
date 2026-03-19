import Header from "./components/Header/Header"
import MainSection from './components/MainSection/MainSection.tsx'
import './App.css'
import MediaPlayer from "./components/MediaPlayer/MediaPlayer.tsx"
import { AudioPlayerProvider } from "./components/CustomHooks/AudioPlayerContext.tsx"

function App() {
  return (
    <>
      <Header />
      <AudioPlayerProvider>
        <MainSection/>
        <MediaPlayer />
      </AudioPlayerProvider>
    </>
  )
}

export default App