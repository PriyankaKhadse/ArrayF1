import React from "react";

class ObjArrFun extends React.Component {
  state = {
    items: [{ id: 5 }, { id: 5 }, { id: 5 }]
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <h4>ArrayObj using reduce</h4>
        <ul>
          {items.reduce((acc, id1) => {
            return acc + id1.id;
          }, 0)}
        </ul>
      </div>
    );
  }
}
export default ObjArrFun;
