import React from"react";
import AboutUserClass from "./AboutUserClass";
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor Called")
    }
    componentDidMount() {
        console.log("Parent Component did Mount")
    }
    render() {
        console.log("Parent Render Called")
        return(
            <div className="about-div"> 
                <h1>About us Page</h1>
                <AboutUserClass name={"Chirag Kapoor Web developer"}/>
                <AboutUserClass name={"Chirag Kapoor Web developer"}/>
            </div>
        )
    }
}
export default About;