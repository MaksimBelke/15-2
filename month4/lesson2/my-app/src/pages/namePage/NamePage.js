
import React from "react";
import classes from './namePage.module.css'

class NamePage extends React.Component {

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

export default NamePage