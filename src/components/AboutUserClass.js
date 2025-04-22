// Creating the class based component for the AboutUser Card
import React from "react";
class AboutUserClass extends React.Component {
    constructor(props){
        super(props);
        console.log("Child Constructor Called")
        this.state = {
            count :0,
        }
    }
    componentDidMount() {
        console.log("Child Component Did Mount")
    }
    render() {
        console.log("Child Render")
        const{name} = this.props; 
        const{count} = this.state;        
        return (
            <div className="user-card border-[2px] border-solid border-white p-[1rem] mt-[0.5rem] rounded-[2rem] bg-[#f4900c] text-black flex flex-col items-center justify-center">
                <h2>Name:{name}</h2>
                <h2>Count:{count}</h2>
                <button onClick={()=> {
                    this.setState(
                        {
                            count:count + 1
                        }
                    );
                }}>Add</button>
                <h3>Location: Jalandhar</h3>
                <h4>Contact:chiragkapoor80@gmail.com</h4>
            </div>
        )
    }
}
export default AboutUserClass;