import styles from './styles.module.css'
import Pagination from '../Pagination/Pagination'
import NewsList from '../NewsList/NewsList'
import { TOTAL_PAGES } from '../../constants/constants'
import NewsFiltres from '../NewsFiltres/NewsFiltres'

export const NewsByFilters = ({ filters, changeFilters, isLoading, news }) => {
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

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
            
            <NewsList
                isLoading={isLoading}
                news={news}
            />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
        </section>
    )
}

export default NewsByFilters