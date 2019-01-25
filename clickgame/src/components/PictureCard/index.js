import React from "react";
import "./style.css";

function handleButtonClick() {
  this.render();
}

function PictureCard(props) {
  return (
    <div className="card" onClick={this.handleButtonClick.bind(this)}>
      <div className="img-container" onClick={() => props}>
        <img alt={props.name} src={props.image} />
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default PictureCard;