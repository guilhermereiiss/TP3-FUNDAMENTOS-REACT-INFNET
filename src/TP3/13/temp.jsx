

const temperatura = ({temp}) => {
    return (
        <div>
            {temp > 25 ? <p>Está quente!</p> : <p>Está frio!</p>}
        </div>
    )
}

export default temperatura