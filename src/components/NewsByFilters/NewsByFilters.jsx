import styles from './styles.module.css'
import NewsList from '../NewsList/NewsList'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import NewsFiltres from '../NewsFiltres/NewsFiltres'
import { useFilters } from '../../helpers/hooks/useFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getNews } from '../../api/apiNews'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'

export const NewsByFilters = () => {
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
        <section className={styles.section}>
            <NewsFiltres changeFilters={changeFilters} filters={filters} />


            <PaginationWrapper
                top
                bottom
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}>
                <NewsList
                    isLoading={isLoading}
                    news={data?.news}
                />
            </PaginationWrapper>

        </section>
    )
}

export default NewsByFilters