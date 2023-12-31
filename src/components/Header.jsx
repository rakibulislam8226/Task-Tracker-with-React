import PropTypes from 'prop-types';

import Button from "./Button";


const Header = ({ title, onAdd, showAdd }) => {

    return (

        <header className="header">
            <h2>{title}</h2>
            <Button colour={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}


export default Header