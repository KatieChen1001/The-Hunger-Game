import React, { Component } from "react";
import "./ImgRoundOne.css";

class ImgRoundOne extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.name, this.props.label);
  }

  render() {
    const { size, onClick } = this.props;
    let activeWeaponCard = this.props.activeWeaponCard
      ? "weaponCardActive"
      : " ";
    let imgClasses = "svgImg";
    if (size) imgClasses += " " + size;
    let classes = "ImgRoundOneWrapper";
    if (activeWeaponCard) classes += " " + activeWeaponCard;

    return (
      <div className={classes} onClick={this.onClick}>
        <img
          className={imgClasses}
          src={"./assets/" + this.props.label + ".svg"}
          alt={this.props.name}
        />
        <span className={this.props.name}>{this.props.description}</span>
        <span className="bonus">{this.props.bonus}</span>
      </div>
    );
  }
}

export default ImgRoundOne;
