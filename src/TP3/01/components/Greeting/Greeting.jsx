
import PropTypes from "prop-types";

export default function Greeting({name}){
    return (
      <div>
        <h1>Olá, {name}!</h1>
      </div>
    );
  }
  
Greeting.PropTypes = {name: PropTypes.string.isRequired};
