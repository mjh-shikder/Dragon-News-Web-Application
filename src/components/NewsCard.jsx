import React from "react";
import { FaStar, FaRegEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, id } = news;

 

  return (
    <div>
      <div className="card bg-base-100 shadow-md border border-gray-200">
        {/* Author Info */}
        <div className="flex justify-between bg-base-200 items-center px-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-gray-800">{author.name}</h2>
              <p className="text-sm text-gray-500">
                {new Date(author.published_date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </div>
          </div>
          <div className="space-x-1.5 ">
            <button className="btn btn-ghost btn-sm text-gray-500">
              <FaShareAlt className="text-lg" />
            </button>
            <button className="btn btn-ghost btn-sm text-gray-500">
              <FaRegBookmark></FaRegBookmark>
            </button>
          </div>
        </div>

        {/* News Content */}
        <Link to={`/news-details/${id}`}>
        <div className="card-body pt-2">
          <h3 className="card-title text-lg font-bold text-gray-800">
            {title}
          </h3>

          <figure className="mt-3 mb-3">
            <img
              src={thumbnail_url}
              alt={title}
              className="rounded-xl w-full h-48 object-cover"
            />
          </figure>

          <p className="text-gray-600 text-sm">
            {details.slice(0, 180)}...
            <span className="text-primary font-medium cursor-pointer">
              
              Read More
            </span>
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200  ">
            <div className="flex items-center gap-2 text-orange-500">
              <FaStar />
              <span className="font-semibold">{rating.number}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <FaRegEye />
              <span>{total_view}</span>
            </div>
          </div>
          </div>
          </Link>
      </div>
    </div>
  );
};

export default NewsCard;
