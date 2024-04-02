import styles from './styles.module.css'

import { formatTimeAgo } from "../../helpers/formatTimeAgo"
export const NewsItem = ({ item }) => {
    return (
        <li className={styles.item}>
            <div className={styles.wrraper} style={{ backgroundImage: `url(${item.image})` }}>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}

export default NewsItem