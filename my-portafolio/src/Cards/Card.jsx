import styles from './Card.module.css';

function Card() {
    return (
        <div className={styles.card}>
            <img 
                className={styles['card-image']} 
                src="https://imgs.search.brave.com/tJSj0A69W0KuVno5IGwlgPekQ2nKavaC7VwWCFafBbQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2VjcmV0LXNlZHVj/dGlvbi10ZWNobmlx/dWUtYnktcnl1dW5l/LXYwLWVyaWxoMXFj/Y3phZDEuanBlZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz1hMWZi/ZGE4MTRiMTUyZDhh/OGVkMjU1M2QyZDI1/NjhhNTdjYTJiZGEy" 
                alt="Profile picture of Yadiel Cruzado" 
            />
            <h2 className={styles['card-title']}>Yadiel Cruzado</h2>
            <p className={styles['card-text']}>I am looking for a job in coding</p>
        </div>
    );
}

export default Card;