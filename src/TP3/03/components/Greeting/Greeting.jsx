
import PropTypes from "prop-types";

export default function Greeting({name, age}){
    return (
      <div>
        <h1>Olá, {name}! Você tem {age} anos.</h1>
      </div>
    );
  }
  
Greeting.PropTypes = {name: PropTypes.string.isRequired};
Greeting.PropTypes = {age: PropTypes.number.isRequired};
