import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import GameProvider from "./components/store/GameProvider";
import Toast from "./components/Toast";

function App() {
  return (
    <GameProvider>
      <Modal />
      <Toast />
      <div className="h-[100%] flex flex-col flex-grow max-w-[500px] mx-auto">
        <Header />
        <GameBoard />
        <Keyboard />
      </div>
    </GameProvider>
  );
}

export default App;
