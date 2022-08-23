import Task from "components/Task/Task";
import "./Column.scss";

const Column = () => {
  return (
    <div className="column">
      <header>Động não đi</header>
      <ul className="task-list">
        <Task />
        <li className="task-item">Items 1</li>
        <li className="task-item">Items 2</li>
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
