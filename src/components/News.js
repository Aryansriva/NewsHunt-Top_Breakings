import React, { useState,useEffect } from "react";
import NewsItem from "../NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
 
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  

  const updateNews = async(page)=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = ` NewsHunt-${capitalize(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  },[])

  // const handleNextClick = async () => {
  //   setState({
  //     page: state.page + 1,
  //   });

  //   updateNews();
  //   // }
  // };
  // const handlePrevClick = async () => {
  //   console.log("Next");
  //   setState({
  //     page: state.page - 1,
  //   });
  //   updateNews();
  // };

   const fetchMoreData = async () => {
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
     setPage(page+1); 
    // setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
    return (
      <>
        <h1 className="text-center" style={{margin : '35px 0px' , marginTop : '80px'}}>
          Top Headlines - {capitalize(props.category)}
        </h1>
        {loading && <Spiner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spiner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((article,index) => {
                return (
                  <div className="col-md-4 my-3" key={index}>
                    <NewsItem
                      title={article.title?.slice(0, 50)}
                      description={article.description?.slice(0, 88)}
                      imageUrl={article.urlToImage}
                      newsUrl={article.url}
                      author={article.author}
                      date={article.publishedAt}
                      source={article.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }


News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;