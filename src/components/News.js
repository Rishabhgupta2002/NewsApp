import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super();
    this.state = {
      article: [],
      page: 1,
      totalresult: 0
    }
    // {props.category==='general'?;}
    if (props.category != 'general') {
      document.title = `NewsToday - ${props.category}`
    }
    else {
      document.title = `NewsToday`
    }


  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=192ca5a526424dfa8014d8ab023cfddd&page=1`)
      .then((response) => response.json())
      .then(responsejson => {
        this.setState({ article: responsejson.articles, totalresult: responsejson.totalResults });
      });
  }
  fetchMoreData = () => {

    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=192ca5a526424dfa8014d8ab023cfddd&page=${this.state.page + 1}`)
      .then((response) => response.json())
      .then(responsejson => {
        this.setState({ article: this.state.article.concat(responsejson.articles), totalresult: responsejson.totalResults, page: this.state.page + 1 });
      });
  };

  render() {
    return (
      <div>
        <h1 className='text-center ' style={{ marginTop: "90px" }}>Top Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalresult}
          loader={this.hasmore && <h4 className='text-center'>Loading...</h4>}
        >
          <div className='container my-1'>
            <div className="row">
              {this.state.article.map((element) => {
                return <div className="col-md-4 " key={element.url}>
                  <NewsItem title={element.title} description={element.description ? element.description.slice(0, 45) : ""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                </div>
              })}
            </div>
          </div>

        </InfiniteScroll>
      </div>
    )
  }
}



//   apikey:192ca5a526424dfa8014d8ab023cfddd