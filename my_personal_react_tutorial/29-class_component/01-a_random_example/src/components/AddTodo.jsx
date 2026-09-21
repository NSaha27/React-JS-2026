import { Component } from "react";

export default class AddTodo extends Component {
  constructor() {
    super();
    this.state.title = "";
    this.state.datetime = "";
    this.state.description = "";
  }
  handleInputChange(ev){
    const {name, value} = ev.target;
    this.state.title = name === "title" && value;
    this.state.datetime = name === "datetime" && value.length > 0 ? value : new Date().toLocaleString();
    this.state.description = name === "description" && value;
  }
  handleFormSubmit(ev){
    ev.preventDefault();
    this.context.TodoContext
  }

  render(){
    return <div className="">
      <p className="">*enter the following</p>
      <form action="" method="post" className="" onSubmit={this.handleFormSubmit}>
        <p className="">
          <label htmlFor="title" className="">Title</label><br />
          <input type="text" name="title" id="title" className="" value={this.state.title} onChange={this.handleInputChange} />
        </p>
        <p className="">
          <label htmlFor="datetime" className="">Date and Time</label><br />
          <input type="datetime-local" name="datetime" id="datetime" className="" value={this.state.datetime} onChange={this.handleInputChange} />
        </p>
        <p className="">
          <label htmlFor="description" className="">Description</label><br />
          <textarea name="description" id="description" className="" value={this.state.description} onChange={this.handleInputChange}></textarea>
        </p>
        <p className="">
          <button type="submit" className="">Add</button>
        </p>
      </form>
    </div>
  }
}
