import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

class MyHeader extends React.Component{
    render() {return(
            <header className="App-header">
                <Logo />
                <Navbar />
            </header>
    )
    }
}
export default MyHeader;