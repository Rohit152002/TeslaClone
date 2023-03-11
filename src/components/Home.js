import React from 'react'
import './Home.css'
import Section from './Section'
function Home() {
  return (
    <div>
        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroungImg='model-s.jpg'
        leftbtnText='Custom order'
        rightbtnText='Existing inventory'
        />
        <Section
         title="Model Y"
         description="Order Online for Touchless Delivery"
         backgroungImg='model-y.jpg'
         leftbtnText='Custom order'
         rightbtnText='Existing inventory'
        />
        <Section
         title="Model 3"
         description="Order Online for Touchless Delivery"
         backgroungImg='model-3.jpg'
         leftbtnText='Custom order'
         rightbtnText='Existing inventory'/>
        <Section
         title="Model X"
         description="Order Online for Touchless Delivery"
         backgroungImg='model-x.jpg'
         leftbtnText='Custom order'
         rightbtnText='Existing inventory'/>
    </div>
  )
}

export default Home
