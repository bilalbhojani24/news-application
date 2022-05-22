import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Card from '../components/Card';
import axios from 'axios';

const NewsPage = (props) => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(props.page);

  async function getTopheadlines() {
    setLoading(true);
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`
    );

    if (response.data.status === 'ok') {
      setLoading(false);
      setData(response.data.articles);
    } else {
      setLoading(false);
      setError(true);
    }
  }

  //   useEffect(() => {
  //     console.log('Component Mounted', counter);
  //   }, []); // useless

  //   useEffect(() => {
  //     // if else switch eatever conditions and based on that make API call, subscrubtion or perform side effects
  //     console.log('Component Updated', counter);
  //   }, [counter]);

  useEffect(() => {
    getTopheadlines();
  }, [page]);

  return (
    <Layout>
      {/* <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increement</button>
      <button onClick={() => setCounter(counter - 1)}>Decreement</button> */}
      <h1 style={{ textAlign: 'center', padding: '10px 0' }}>
        News for {props.category}
      </h1>
      {loading && data.length <= 0 && <h4>Loading...</h4>}
      <div className="buttons__nav">
        <Button
          buttonText="Previos"
          onClick={() => {
            setPage(1);
          }}
        />
        <Button
          buttonText="Next"
          onClick={() => {
            setPage(1);
          }}
        />
      </div>
      {!loading && data.length === 0 && (
        <h1 style={{ textAlign: 'center', padding: '10px 0' }}>
          No Data Found...
        </h1>
      )}
      <section className="cards__container">
        {data.map((n) => (
          <Card
            key={n.publishedAt}
            imgUrl={n.urlToImage}
            title={n.title}
            description={n.description}
            url={n.url}
          />
        ))}
      </section>
    </Layout>
  );
};

export default NewsPage;

// 1. With empty dependency array useEffect will run only once => reploicated as componentDidMount
// 2. With something in dependency array it will run once on mount AND whenever value of depeddency array is changed
// 1 & 2. With something in dependency array or empty dependency on mount useEffect will run once.

// [page = 1] => onMount
// prevVal = 1 && currVal = 1 ?? NO
