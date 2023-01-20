import React from "react";

const NewsItem= (props)=> {
    let { title, description, imageUrl, newsUrl, author, date,source } =
      props;
    return (
      <div>
        <div className="card">
          <div className = "d-flex justify-content-end position-absolute top-0 end-0">
          <span className="badge rounded-pill bg-danger">
              {source}
          </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.macrumors.com/t/mjGODmEzhkbBiHfFWc6bU9zy728=/1780x/article-new/2021/05/ipad-pro-m1-feature.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title fs-5"> 
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text my-1">
              <small className="text-danger">
                By {!author ? "Unknown" : author}
              </small>
            </p>
            <p className="card-text">
              <small className="text-danger">
                On {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More...{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default NewsItem;


