import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card" id="tarjeta" class="flex-container">
        <h1 className="name">{this.props.name}</h1>
        <img src={this.props.image} alt={this.props.imageAlt} id="avatar"/>
        <p className="" id="fecha">{this.props.date}</p>
        <p className="">{this.props.text}</p>
        <p className="" id="likes">{this.props.likes} <img src={this.props.likeImg} id="likesImg"/></p>
      </div>
    );
  }
}

export default Card;
