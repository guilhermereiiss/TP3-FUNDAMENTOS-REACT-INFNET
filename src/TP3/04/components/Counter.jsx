import { useState } from "react";
import DisplayCount from "./displayCount"


const Counter = () => {
    const [count, setCount] = useState(0);

    function Conta(){
        setCount(count + 1);

    }

    return ( 
        <div>
            <DisplayCount count={count}/>
            <button onClick={Conta}>Clique aqui</button>
        </div>
    )
}

export default Counter