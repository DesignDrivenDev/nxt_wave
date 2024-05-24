import React from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({
  resource = {
    icon_url: "",
    title: "",
    category: "",
    link: "",
    description: "",
    tag: "",
  },
}) => {
  return (
    <div className="border-2 p-4 rounded-md">
      <div className="flex gap-3 items-center">
        <div className="border-2 p-1 rounded">
          <img
            width={40}
            height={40}
            src={resource?.icon_url}
            alt={resource?.title}
            className="w-12 h-12"
          />
        </div>
        <div>
          <h2 className="font-semibold">{resource?.title}</h2>
          <p className="text-gray-400 text-sm">{resource?.tag}</p>
          <p className="text-gray-400 text-sm">{resource?.category}</p>
        </div>
      </div>

      <div className="text-blue-500 !py-2">
        <Link to={resource?.link}>{resource?.link}</Link>
      </div>
      <p className="text-gray-400 text-sm line-clamp-3">
        {resource?.description}
      </p>
    </div>
  );
};

export default ResourceCard;
