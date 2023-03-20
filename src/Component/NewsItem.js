import React from "react";

const NewsItem = (props)=>{
  
    let { title, description, imgurl, newsurl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}  >
          <span className=" badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img
            src={!imgurl? "https://images.moneycontrol.com/static-mcnews/2023/03/sensexdown_niftydown-1-770x433.jpg": imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {author} on {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem

