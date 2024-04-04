import styles from './styles.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'




export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const pageSize = 10


    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews(currentPage, pageSize)
            setNews(response.news);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    // срабатывает при изменении currentPage
    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage]);
    //переключение страницы по кнопкам < ,>
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }


    const handlePreviosPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type={'banner'} count={1} />
            )}
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type={'item'} count={10} />
            )}
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </main>
    )
}

export default Main;
