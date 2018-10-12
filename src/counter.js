import React from "react";
import Header from "./header/header";

const Counter = (props) => {
    return (
        <div>
            <div>Counter Value: {props.count}</div>
            <Header headerText={"this is header"} />
        </div>
    )
}

export default Counter;