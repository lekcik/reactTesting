import '../css/Card.css'

function Card(props) {
    return (
        <section className="card">
            <img src={props.iconUrl} alt="Card Icon" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </section>
    );
}

export default Card