import React from"react";
import AboutUserClass from "./AboutUserClass";
import userContext from "./utils/userContext";
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
            <div className="about-div bg-[rgb(64,40,88)] h-[90vh] text-white flex flex-col justify-center items-center text-center "> 
                <h1 className="text-lg font-semibold">About us Page</h1>
                <div>
                    <span className="text-xl font-bold">LoggedInUser</span>
                    <userContext.Consumer>
                        {
                            ({loginUser}) => (
                                <h1 className="text-2xl font-bold">{loginUser}</h1>
                            )
                        }
                    </userContext.Consumer>
                </div>
                <AboutUserClass name={"Chirag Kapoor Web developer"}/>
            </div>
        )
    }
}
export default About;