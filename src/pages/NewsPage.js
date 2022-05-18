import React, { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Card from '../components/Card';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: false,
    };
  }

  async getTopheadlines() {
    this.setState({ loading: true });
    const response = await axios({
      method: 'get',
      url: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b88999ab17c4c6289caa9b161453153`,
    });

    if (response.data.status === 'ok')
      this.setState({
        loading: false,
        data: response.data.articles,
        error: false,
      });
    else
      this.setState({
        loading: false,
        data: [],
        error: true,
      });
  }

  async componentDidMount() {
    this.getTopheadlines();
    document.title = this.props.category;
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps !== this.props) {
  //     this.getTopheadlines();
  //     document.title = this.props.category;
  //   }
  // }

  render() {
    const { category } = this.props;

    return (
      <Layout>
        <h1 style={{ textAlign: 'center', padding: '15px' }}>
          News For {category}
        </h1>
        {this.state.loading && (
          <h4 style={{ textAlign: 'center', padding: '15px' }}>Loading...</h4>
        )}
        <section className="news__card__container">
          {!this.state.loading &&
            this.state.data.map((n) => {
              return (
                <Card
                  key={n.publishedAt}
                  title={n.title}
                  author={n.author}
                  imgUrl={n.urlToImage}
                  url={n.url}
                />
              );
            })}
        </section>
      </Layout>
    );
  }
}

export default News;
