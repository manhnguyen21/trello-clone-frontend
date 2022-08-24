import { initialData } from "actions/initialData";
import Column from "components/Column/Column";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { mapOrder } from "utilities/sort";
import "./BoardContent.scss";

const BoardContent = () => {
  const [board, setBoard] = useState();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardFromDb = initialData.boards.find(({ id }) => id === "board-1");

    if (boardFromDb) {
      const { columns, columnOrder } = boardFromDb;
      const sortedColumns = mapOrder(columns, columnOrder);
      setBoard(boardFromDb);
      setColumns(sortedColumns);
    }
  }, []);

  if (isEmpty(board)) {
    return <div className="not-found">board not found</div>;
  }

  return (
    <div className="board-content">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
};

export default BoardContent;
