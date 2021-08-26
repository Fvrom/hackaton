import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import "../../assets/fonts/Roboto-Regular.woff2";

const Card = (props) => {
  return (
    <section className="card-wrapper">
      <img className="card-img" src={props.image} alt={props.name} />
      <article className="card">
        <div className="card-content">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          {/* mailto:   */}
          {/* <a href="mailto:".{props.email}>Kontakta mig</a> */}
        </div>
      </article>
    </section>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  email: PropTypes.string,
};

export default Card;
