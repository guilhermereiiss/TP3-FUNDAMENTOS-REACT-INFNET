import PropType from "prop-types";

const List = ({ numbers }) => {
    if (numbers.length === 0) {
      return <p>A lista está vazia.</p>;
    }
  
    return (
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    );
  };
  
  List.prototype = {
    numbers: PropType.arrayOf(PropType.number)
  }
  export default List;
  