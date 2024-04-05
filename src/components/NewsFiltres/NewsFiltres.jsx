import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css'

export const NewsFiltres = ({ filters, changeFilters }) => {
    const { data: dataCategoties } = useFetch(getCategories);
    return (
        <div className={styles.filters}>
            {dataCategoties ? (
                <Slider>
                    <Categories
                        categories={dataCategoties.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => changeFilters('category', category)}
                    />
                </Slider>
            ) : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilters('keywords', keywords)}
            />
        </div>
    )
}

export default NewsFiltres