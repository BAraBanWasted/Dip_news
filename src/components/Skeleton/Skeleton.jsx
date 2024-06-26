import styles from './styles.module.css'

export const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={
                    direction === 'column' ?
                        styles.columnlist : styles.rowList}>
                    {[...Array(count)].map((_, index) => (
                        <li key={index} className={type === 'banner' ? styles.banner : styles.item}>
                        </li>
                    ))}
                </ul>
            ) : (
                <li className={type === 'banner' ? styles.banner : styles.item}> </li>
            )}
        </>
    )
}

export default Skeleton