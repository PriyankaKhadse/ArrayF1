import React from "react";

class RedCon extends React.Component {
  state = {
    items: [[1, 5], [1, 3], [1, 2]]
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <h4>Array flatenning</h4>
        {/* <ul>
          {items.reduce((acc, id1) => {
            return acc.concat(id1), [];
          })}
        </ul> */}

        {items.reduce((accumulator, currentValue) => {
          console.log(currentValue);
          return accumulator.concat(currentValue);
        })}
      </div>
    );
  }
}
export default RedCon;
