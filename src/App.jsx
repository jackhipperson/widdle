import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import GameProvider from "./components/store/GameProvider";
import Toast from "./components/Toast";

function App() {
  return (
    <GameProvider>
      <Toast />
      <div className="h-screen flex flex-col flex-grow max-w-[500px] mx-auto">
        <Header />
        <GameBoard />
        <Keyboard />
      </div>
    </GameProvider>
  );
}

export default App;
