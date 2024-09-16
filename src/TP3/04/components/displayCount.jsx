import PropTypes from "prop-types"

const DisplayCount = ({count}) => {
    return(
        <p>Contagem: {count}</p>
    )
}


DisplayCount.PropTypes = {count: PropTypes.number.isRequired};
export default DisplayCount