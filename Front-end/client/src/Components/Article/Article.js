import styles from './Article.module.css'

const ArticleDetails = ({title , author , date , image , desc , links}) => {
    return(

        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1 className={styles.H1}>
                    {title}
                </h1>
                <p className={styles.Caption}>
                    {author}
                </p>
            </div>
            <div className={styles.Desc}>
                <img src={`http://localhost:5000/${image}`} alt={"img"} className={styles.Img}/>
                <p className={styles.P}>
                    {desc}
                </p>
            </div>
            <div className={styles.Links}>
                <h2 className={styles.H2} >
                    Category
                </h2>
                <p className={styles.P}>{links}</p>
            </div>
        </div>
    )
}

export default ArticleDetails