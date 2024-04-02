import styles from './styles.module.css'
//если нет картинки враппер будет растягиваться на место картинки
export const Image = ({ image }) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img src={image} alt="news" className={styles.image} /> : null}
        </div>
    )
}

export default Image