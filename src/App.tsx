import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="test"></Todo>
      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  );
}
