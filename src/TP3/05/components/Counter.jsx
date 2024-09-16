import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function Conta(){
        setCount(count + 1);
    }

    function reset(){
        setCount(0);
    }

    return ( 
        <div>
            <p>Contagem: {count}</p>
            <button onClick={Conta}>Clique aqui</button>
            <button onClick={reset}>Resetar</button>
        </div>
    )
}

export default Counter