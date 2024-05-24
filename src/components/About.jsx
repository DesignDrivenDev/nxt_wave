import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7586175&lng=80.9141368&is-seo-homepage-enabled=true"
    );
    const data = await response.json();
    setData(data);
    console.log(data, "data response");
  };

  console.log(data, "usestaedata");

  useEffect(() => {
    fetchData();
  }, []);
  return <div>About</div>;
};

export default About;
