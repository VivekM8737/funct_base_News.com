import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './loding'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
// import newsItems from './newsItems'


const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const upadate = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsdata = await data.json();
    props.setProgress(70);
    setloading(false);
    setarticles(parsdata.articles);
    settotalResults(parsdata.totalResults);
    props.setProgress(100);
  }
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    setloading(true);
    let data = await fetch(url);
    let parsdata = await data.json();
    setarticles(articles.concat(parsdata.articles));
    settotalResults(parsdata.totalResults);
    setloading(false)
  }
  useEffect(() => {
    upadate();
    // eslint-disable-next-line
  }, [])
  const tocapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className='container my-3'>
      <h1 style={{marginTop:'80px'}}>Today's Top {tocapital(props.category)} Headlines</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !==totalResults}
        loader={loading && <Loading />}

      >
        <div className='row' >
          {loading && <Loading />}
          {articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} author={element.author} date={element.publishedAt} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />

            </div>
          })}
        </div>
      </InfiniteScroll>
    </div>
  )

}
News.defaultProbs = {
  country: 'in',
  pageSize: 9,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;