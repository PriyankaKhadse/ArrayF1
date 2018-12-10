import React from "react";

class MapArr extends React.Component {
  state = {
    items: [{ name: "abc" }, { name: "asas" }, { name: "asas" }]
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <h4>ArrayObj using map</h4>
        <ul>
          {items.map((item, index) => {
            return (
              <li>
                {index}-{item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default MapArr;
