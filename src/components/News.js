import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendCard from "./TrendCard";

function News() {
  const [news, setNews] = useState({ news: [] });

  useEffect(() => {
    const fetchNews = () => {
      axios
        .get("https://ak.iocoder.in/open/public/news", {})
        .then((res) => {
          setNews(res.data);
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
        <TrendCard 
          title={"Open Source Community Involvement"}
          link = {"https://www.ibm.com/opensource/community-involvement/"}
          desc = {"IBM partners with most of the major open source communities that today's businesses.Our developers are collaborators and committers, encouraging open governance, contibuting code, helping with licensing, and pushing the technology forward."}
          provider = {"IBM"}
        />
      </div>
    </div>
  );
}

export default News;
