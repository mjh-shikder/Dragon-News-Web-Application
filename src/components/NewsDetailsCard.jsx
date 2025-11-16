import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  // console.log(news);

  const {details, title, image_url, category_id } = news;

  return (
    <div className="p-4 rounded-lg bg-base-200">
      <img className="w-full rounded-lg mb-10 " src={image_url} alt="" />
      <h2 className="text-2xl font-semibold mb-5 ">{title}</h2>
          <p className="text-accent mb-10">{details} </p>
          <Link className="btn btn-secondary  " to={`/category/${category_id}`}>All News In this Category</Link>
    </div>
  );
};

export default NewsDetailsCard;
