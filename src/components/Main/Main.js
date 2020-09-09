import React, { useState } from 'react';
import './Main.css'
import fakeData from '../../fakeData/courses';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart';
const Main = () => {
    //console.log(fakeData);
    const first15=fakeData.slice(0,15);
    const [cart,setCart]=useState([]);
    const handleCourses=(course)=>{
        //console.log('clicked',course);
        const id=course.id;
        if(cart.find(cart=>cart.id===id)){
            setCart(cart);
        }
        else{
            const newCart=[...cart,course];
            setCart(newCart);
        }
        
    }
    return (
        <div className="main">
            <div className="course-container">
                {
                    first15.map(course=><Course 
                        course={course}
                        handleCourses={handleCourses}
                    ></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;