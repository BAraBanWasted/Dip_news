import styles from './styles.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getCategories, getNews } from '../../api/apiNews'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import NewsList from "../../components/NewsList/NewsList"
import Pagination from '../../components/Pagination/Pagination'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'
import { TOTAL_PAGES } from '../../constants/constants'
import { PAGE_SIZE } from '../../constants/constants'
import { useFilters } from '../../helpers/hooks/useFilters'


export const Main = () => {
    const { filters, changeFilters } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })
    const debouncedKeywords = useDebounce(filters.keywords, 1500)
    const { data, isLoading } = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    })

    const { data: dataCategoties } = useFetch(getCategories);

    //переключение страницы по кнопкам < ,>

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilters('page_number', filters.page_number + 1)
        }
    }

    const handlePreviosPage = () => {
        if (filters.page_number > 1) {
            changeFilters('page_number', filters.page_number - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        changeFilters('page_number', pageNumber)
    }

    return (
        <main className={styles.main}>
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

            <NewsBanner
                isLoading={isLoading}
                item={data && data.news && data.news[0]}
            />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
            <NewsList
                isLoading={isLoading}
                news={data?.news}
            />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
        </main>
    )
}

export default Main;
