import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function Conta(){
        setCount(count + 1);

    }

    return ( 
        <div>
            <p>Contagem: {count}</p>
            <button onClick={Conta}>Clique aqui</button>
        </div>
    )
}

export default Counter