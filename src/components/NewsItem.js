import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/09/20/1600x900/IMG_1854_1657624860852_1663675268644_1663675268644.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
