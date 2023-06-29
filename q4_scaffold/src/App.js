import "./styles.css";
import List from "./List";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Component } from "react";
import { courses } from "./data";



class App extends Component{
  constructor(props) {
    super(props);
    this.state = { bagItems: [] , bagCount:0 , isInBag:false};
  }

  isCourseinBag = (id) => {
    return !!this.state.bagItems.find((c) => c.id === id);
  };

  handleAddToBag = (id) => {
    const course = courses.find((c) => c.id === id);
    this.setState({ bagItems: [course, ...this.state.bagItems] });
  };

  handleRemoveFromBag = (id) => {
    const filteredCourses = this.state.bagItems.filter((c) => c.id !== id);
    this.setState({ bagItems: filteredCourses });
  };

  toggleBagCount = (id) => {
    this.setState((prevState) => {
      const { bagItems, isInBag } = prevState;
      const updatedBagItems = [...bagItems];
      const courseIndex = updatedBagItems.findIndex((c) => c.id === id);
  
      if (courseIndex !== -1) {
        updatedBagItems.splice(courseIndex, 1);
        return {
          bagItems: updatedBagItems,
          bagCount: prevState.bagCount - 1,
          isInBag: false,
        };
      } else {
        const course = courses.find((c) => c.id === id);
        updatedBagItems.unshift(course);
        return {
          bagItems: updatedBagItems,
          bagCount: prevState.bagCount + 1,
          isInBag: true,
        };
      }
    });
  };
  

  render(){
    return (
      <div className="App">
        <Navbar bagCount={this.state.bagCount} />
        <h3>CodeTube Catalog</h3>
        <div className="container">
          <List isCourseinBag={this.isCourseinBag} handleAddToBag={this.handleAddToBag} handleRemoveFromBag={this.handleRemoveFromBag} toggleBagCount={this.toggleBagCount}/>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default  App;



