import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './styles.module.css'

export const NewsFiltres = ({ filters, changeFilters }) => {
    const { data: dataCategoties } = useFetch(getCategories);
    return (
        <div className={styles.filters}>
            {dataCategoties ?
                <Categories
                    categories={dataCategoties.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) => changeFilters('category', category)}
                /> : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilters('keywords', keywords)}
            />
        </div>
    )
}

export default NewsFiltres