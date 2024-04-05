import styles from './styles.module.css'
import NewsItem from "../NewsItem/NewsItem"
import withSkeleton from '../../helpers/hocs/withSkeleton'
//если нет картинки враппер будет растягиваться на место картинки
export const NewsList = ({ news }) => {
    return (
        <ul className={styles.list}>
            {news.map(item => {
                return <NewsItem key={item.id} item={item}/>
            })}
        </ul>
    )
}

const NewsListWithSkeleton = withSkeleton(NewsList,'item',10)

export default NewsListWithSkeleton