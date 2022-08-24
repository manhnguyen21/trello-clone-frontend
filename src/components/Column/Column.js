import Card from "components/Card/Card";
import { mapOrder } from "utilities/sort";
import "./Column.scss";

const Column = ({ column }) => {
  const cards = mapOrder(column.cards, column.cardOrder);
  return (
    <div className="column">
      <header>{column?.title}</header>
      <ul className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
