import cardIcon from '../assets/cardIconDev.png'
import '../css/Card.css'

function Card() {
    return (
        <section className="card">
            <img src={cardIcon} alt="Card Icon" />
            <h2>Vladyslav</h2>
            <p>Web Solutions Architect, frontend developer, React engineer</p>
        </section>
    );
}

export default Card