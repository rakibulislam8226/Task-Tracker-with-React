import PropTypes from 'prop-types';


const Button = ({ colour, text, onClick }) => {
    return (
        <div>
            <button onClick={onClick} style={{ backgroundColor: colour }} className="btn">{text}</button>
        </div>
    );
};

Button.defaultProps = {
    colour: "red",
}

Button.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;