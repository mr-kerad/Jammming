import React from "react";

import "./Track.css";

export class Track extends React.Component {
renderAction() {
  if(this.props.isRemoval) {
    return <button className="Track-action">-</button>
} else {
  <button className="Track-action">+</button>
}
}

  render() {
  return (
    <div className="Track">
      <div class="Track-information">
        <h3></h3>
        <p></p>
      </div>
      {this.renderAction()}
    </div>
  );
}
}


