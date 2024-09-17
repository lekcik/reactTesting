import PropTypes from 'prop-types'
import '../css/Card.css'

function Card(props) {

    const validatedName = typeof props.name === 'string' ? props.name : Card.defaultProps.name;

    return (
        <section className="card">
            <img src={props.iconUrl} alt="Card Icon" />
            <h2>{validatedName}</h2>
            <p>{props.description}</p>
        </section>
    );
}

Card.propTypes = {
    iconUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    iconUrl: '../src/assets/cardIconDev.png',
    name: 'Anonymous',
    description: 'No description provided'
}

export default Card