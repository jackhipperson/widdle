import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Keyboard from "./components/Keyboard"


function App() {

  return (
    <div className="h-screen flex flex-col flex-grow max-w-[500px] mx-auto">
      <Header />
      <GameBoard />
      <Keyboard />
    </div>
  )
}

export default App
