
import React from "react";
import classes from "./agePage.module.css"


class AgePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ul className={classes.name}>
          <li>{this.props.items.name}</li>
          <li>{this.props.items.age}</li>
        </ul>
      </>
    )
  }
}
export default AgePage