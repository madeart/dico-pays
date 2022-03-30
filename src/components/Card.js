import React from 'react';


const Card = (props) => {
    console.log(props.img)
    return (
      <div className="card">
        {props.openSpots && props.openSpots === 0 ? (
          <div className="card--badge">SOLD OUT</div>
        ) : (
          <div className="card--badge">ONLINE</div>
        )}
        <img src={`/images/${props.img}`} alt="" className="card--image" />
        <div className="card--stats">
          <img src="images/Star 1.png" alt="" className="card--star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) *</span>
          <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold card--price">From ${props.price} / </span>
          person
        </p>
      </div>
    );
};

export default Card;