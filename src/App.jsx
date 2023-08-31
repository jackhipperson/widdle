import GameBoard from "./components/gameboard/GameBoard";
import Header from "./components/ui/Header";
import Keyboard from "./components/keyboard/Keyboard";
import Modal from "./components/ui/Modal";
import GameProvider from "./components/store/GameProvider";
import Toast from "./components/ui/Toast";

function App() {
  return (
    <GameProvider>
      <Modal />
      <Toast />
      <div className="max-h-[100VH] flex flex-col justify-between flex-grow mx-auto">
        <Header />
        <GameBoard />
        <Keyboard />
      </div>
    </GameProvider>
  );
}

export default App;
