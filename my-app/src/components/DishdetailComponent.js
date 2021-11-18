import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      const coms = dish.comments.map((com) => {
        return (
          <li key={com.id} className="unstyled">
            <p> {com.comment}</p>

            <p>
              -- {com.author}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(com.date)))}
            </p>
          </li>
        );
      });
      return coms;
    } else return <div></div>;
  }
  render() {
    return (
      <div className="row mw-100">
        <div className="col-sm-12 col-12 col-md-6 col-xl-6">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-sm-12 col-12 col-md-6 col-xl-6">
          <h4>Comments</h4>
          <ul>{this.renderComments(this.props.dish)}</ul>
        </div>
      </div>
    );
  }
}

export default DishDetail;
