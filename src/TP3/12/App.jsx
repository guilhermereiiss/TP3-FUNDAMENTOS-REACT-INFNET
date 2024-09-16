import List from './List';

function App() {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1>Números:</h1>
            <List numbers={numbers} />
        </div>
    );
}

export default App;