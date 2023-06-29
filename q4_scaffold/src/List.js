import { Component } from "react";
import Course from "./components/Course";
import { courses } from "./data";
import {ListMenu} from './reusable.styled'



class List extends Component {

  render() {
    const {isCourseinBag,handleAddToBag,handleRemoveFromBag,toggleBagCount} = this.props;
    return (
      <ListMenu>
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            onAdd={handleAddToBag}
            onRemove={handleRemoveFromBag}
            isInBag={isCourseinBag(v.id)}
            toggleBagCount={()=>toggleBagCount(v.id)}
          />
        ))}
      </ListMenu>
    );
  }
}

export default List;
