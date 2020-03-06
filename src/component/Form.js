import React from "react";

class Form extends React.Component {
  render () {
    return(
        <form onSubmit={this.props.Method}>
        <input type="text" name="city" placeholder="Город"/>
        <button>Поиск</button>
        </form>
    );
  }
}

export default Form;
