import React from "react";

class RedCounter extends React.Component {
  state = {
    items: ["abc", "asd", "aaa", "asd"]
  };
  render() {
    const { items } = this.state;
    const name = items.reduce((allitem, item) => {
      if (item in allitem) {
        allitem[item]++;
      } else {
        allitem[item] = 1;
      }
      return allitem;
    }, {});
    console.log(name);
    return (
      <div>
        <h5>hello</h5>
        {Object.keys(name).map((item, index) => {
          return (
            <div key={index}>
              {item} {name[item]}
            </div>
          );
        })}
      </div>
    );
  }
}
export default RedCounter;
