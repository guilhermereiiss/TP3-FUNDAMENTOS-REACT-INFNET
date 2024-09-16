import PropTypes from "prop-types";
import "./main.css"

const Product = ({ nome, preco, descricao }) => {
    return (
        <div>
            <h2>{nome}</h2>
            <p>Preço: R$ {preco}</p>
            <p>{descricao ? descricao : "Descrição não disponível"}</p>
        </div>
    );
};

Product.PropTypes = {nome: PropTypes.string.isRequired};
Product.PropTypes = {preco: PropTypes.number.isRequired};
Product.PropTypes = {descricao: PropTypes.string.isRequired};

export default Product;