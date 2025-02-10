import styles from './card.module.css';

type CardTypes = {
    name: string;
    polite: boolean;
    sex: "male" | "female";
};

export default function Card(props: CardTypes) {
    return (
        <div className={styles.card}>
            <h1>Sup {props.name}</h1>
            <p>{props.sex == "male" ? 'Whats up dude?' : ''}{props.sex == "female" ? 'Whats up dudette?' : ''}</p>
            <button onClick={() => alert("Whatup Whatup!!")}>{props.polite ? 'Props!' : 'Go away!'}</button>
        </div>
    );
}