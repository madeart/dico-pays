import React from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Data from "./data/data";

import "./styles.css";

const App = () => {
  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
};

export default App;
