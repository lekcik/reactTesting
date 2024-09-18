import '../css/Card.css'

function Card(props) {
    return(
        <section className="planCard">
            <h2>{props.title}</h2>
            <h3>{props.price}$ per month</h3>
            <p>{props.description}</p>
        </section>
    );
}

export default Card