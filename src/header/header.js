import React, {Component } from "react";

class Header extends Component {

    render(){
        const {headerText} = this.props;
        const headerStyle={'background':'blue'}
        return(
            <header>
                <h1 style={headerStyle}>{headerText}</h1>
            </header>
        )
    }
}

export default Header;