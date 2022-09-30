import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {

    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=917c9951691f4713b97d7cea7591d650&page=1&pageSize=12";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=917c9951691f4713b97d7cea7591d650&page=${this.state.page - 1}&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    }
    )
  }

  handleNextClick = async () => {
    console.log("Next");
    {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=917c9951691f4713b97d7cea7591d650&page=${this.state.page + 1}&pageSize=12`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>Top News</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3 my-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 65) : ""} description={element.description ? element.description.slice(0, 96) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <button disabled={this.state.page <= 1} className="btn btn-dark m-3" onClick={this.handlePrevClick}>Prev</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} className="btn btn-dark m-3" onClick={this.handleNextClick}>Next</button>
      </div>
    )
  }
}

export default News
