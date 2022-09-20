import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    
    super();
    this.state = {
      articles: [],
      loading:false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=917c9951691f4713b97d7cea7591d650";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Top News</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3 my-3" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
          
        </div>
      </div>
    )
  }
}

export default News
