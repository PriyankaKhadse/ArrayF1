import React from "react";
class GroupByFun extends React.Component {
  state = {
    peoples: [
      { name: "aaa", age: 12 },
      { name: "aaa", age: 12 },
      { name: "abc", age: 16 }
    ]
  };

  groupBy = (arr, age) => {
    const grpArry = this.state.peoples.reduce((acc, people) => {
      if (!acc[people.name]) {
        return { ...acc, [people.name]: [people] };
      } else {
        return { ...acc, [people.name]: [...acc[people.name], people] };
      }
    }, {});
    console.log(grpArry);
  };
  render() {
    const { peoples } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.groupBy(peoples, "name");
          }}
        >
          click me..!
        </button>
      </div>
    );
  }
}
export default GroupByFun;
