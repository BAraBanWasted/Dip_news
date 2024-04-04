import styles from './styles.module.css'

const Categories = ({ categories, setSelectedCategory, selectedCategoty }) => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => {
                return (
                    <button 
                    onClick={() => setSelectedCategory(category)}
                     className={
                        selectedCategoty === category ? styles.active : styles.item }
                        key={category}
                        >
                            {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories