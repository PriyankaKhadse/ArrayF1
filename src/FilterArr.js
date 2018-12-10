import React from "react";

class FilterArr extends React.Component {
  state = { names: ["asd", "asdf", "aa", "a"] };
  render() {
    const { names } = this.state;

    return (
      <div>
        <h1>hello</h1>
        {names.filter(name => {
          return name.length >= 4;
        })}
      </div>
    );
  }
}
export default FilterArr;
