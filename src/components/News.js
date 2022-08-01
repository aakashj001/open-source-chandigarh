import React, { useState, useEffect } from 'react'
import axios from "axios";


function News() {
    
  const [news, setNews] = useState({ news: [] });

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get("https://ak.iocoder.in/open/public/news", {})
        .then((res) => {
          setNews(res.data);
          console.log(news.news);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchNews();
    // eslint-disable-next-line
  }, []);
  return (
    <div>News</div>
  )
}

export default News