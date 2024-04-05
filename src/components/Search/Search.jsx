import styles from './styles.module.css'

export const Search = ({ keywords, setKeywords }) => {
    return (
        <div className={styles.search}>
            <input 
            type='text' 
            value={keywords} 
            className={styles.input}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder='search' 
            />
        </div>
    );
};

export default Search