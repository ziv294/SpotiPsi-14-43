import Header from "./components/Header/Header"
import MainSection from './components/MainSection/MainSection.tsx'
import './App.css'
import MediaPlayer from "./components/MediaPlayer/MediaPlayer.tsx"

function App() {
  return (
    <>
      <Header />
      <MainSection/>
      <MediaPlayer />
    </>
  )
}

export default App