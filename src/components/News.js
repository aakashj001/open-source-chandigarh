import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendCard from "./TrendCard";
import Loader from './Loader'

function News() {
  const [news, setNews] = useState({ news: [] });
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get("https://ak.iocoder.in/open/public/news", {})
        .then((res) => {
          setNews(res.data);
          setShow(false)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchNews();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container m-auto flex flex-col justify-center shadow-2xl md:my-10 px-4 md:px-24 py-12">
      <font className="text-3xl md:text-5xl md:px-2 pb-2 md:pb-4 border-b border-b-black">
        Latest in OpenSource
      </font>
      <div className="flex flex-row flex-wrap w-full justify-around mt-10">
        {show && <Loader />}
        {news.news?.map((ob) => (
          <TrendCard
            title={ob.title}
            link={ob.url}
            desc={
              ob.description
            }
            provider={ob.provider}
            key = {ob.id}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
