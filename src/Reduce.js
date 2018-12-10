import React from "react";

class Reduce extends React.Component {
  state = {
    items: [1, 2, 3, 4]
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <h4>array using reduce</h4>
        <ul>
          {items.reduce((acc, id1) => {
            return acc + id1;
          }, 0)}
        </ul>
      </div>
    );
  }
}
export default Reduce;
