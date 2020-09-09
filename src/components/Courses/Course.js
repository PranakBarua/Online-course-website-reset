import React from 'react';
import './Course.css'
const Course = (props) => {
    const { name, price, img } = props.course;
    return (
            <div className="course" >
                <img src={img} alt=""/>
                <h5>Title : {name}</h5>
                <p>Price : {price}</p>
                <button class="btn btn-primary" onClick={()=>props.handleCourses(props.course)}>Enroll Now</button>
            </div>
    );
};

export default Course;