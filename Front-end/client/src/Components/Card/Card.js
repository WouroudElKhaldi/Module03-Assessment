import styles from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({title , image , auther , date , first , id}) => { 
    const time = new Date(date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", timeZone: "GMT"}) 

    return(
        <section >
            <Link to={`/newsletterDetails/${id}`} className={`${styles.Link}`}>
            <figure className={styles.Figure}>
                <img src={`http://localhost:4500/${image}`} alt="Card img" className={styles.Img}/>
            </figure>  
            <span className={styles.Span}>
                <p className={styles.Time}>{time}</p>           
                <h2 className={styles.H2}>{title}</h2>
            </span>   

        </Link>
        </section>
    )
}
export default Card ;