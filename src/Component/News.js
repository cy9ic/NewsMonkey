import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const News = (props)=>{
 
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [totalResults, setResults] = useState(0)
const [page, setPage] = useState(0)
 
 let word = props.category.charAt(0).toUpperCase() + props.category.slice(1);
    document.title = `${word} - NewsMonkey`;
  

  const updateNews = async ()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(50);
    console.log(parseddata);
    setArticles(parseddata.articles)
    setLoading(false)
    setResults(parseddata.totalResults)

    // setState({articles: parseddata.articles,totalResults:parseddata.totalResults,loading:false});

    props.setProgress(100);

  }
 useEffect(() => {
   updateNews();
  //  eslint-disable-next-line
 }, [])


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    
    setArticles(articles.concat(parseddata.articles))
    setLoading(false)
    setResults(parseddata.totalResults)



  };
    

    return (
      <>

      

        {/* Three flexboxes added at the top */}
        
          <h1 className="text-center" style={{margin:'37px 0px',marginTop:'80px'}}>NewsMonkey - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines </h1>
          {/* {loading && <Spinner/> } */}
          
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading?<Spinner/>:null}
          >
            <div className="container">
            <div className="row" >
         {articles.map((element,index)=>{
            // console.log(element)
            return <div className="col-md-4" key={index}>
              {/* <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} /> */}
              <NewsItem title={element.title?element.title:""} description={element.description?element.description.slice(0,88):"Read more at"} imgurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={!element.author?"Unknown":element.author} source={element.source.name} />
            </div> 
            })}
          </div>
          </div>
            </InfiniteScroll>
           {/* The buttons added at the end */}
           {/* <div className="container d-flex justify-content-between">
           <button disabled={page<=1} type="button" className="btn btn-dark" onClick={prevhandler}> &larr; Previous</button>
           <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={nexthandler}>Next &rarr;</button>
           </div> */}
           
        
      </>
    );
          
          
          }
          News.defaultProps  = {
  country: 'in',
  pageSize: 15,
  category:'general'

}


 News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
