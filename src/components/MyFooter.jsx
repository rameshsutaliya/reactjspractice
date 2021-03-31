import React from "react";

//<footer className="App-footer">
//             <p>Author: Ramesh Sutaliya <br>
//                 <a href="mailto:rameshsutliya@example.com">rameshsutliya@example.com</a></p>
//         </footer>
class MyFooter extends React.Component{
    render() {return(
        <footer className="App-footer">
            <p>Author: Ramesh Sutaliya<br/>
                <a href="mailto:rameshsutliya@example.com">rameshsutliya@example.com</a>
            </p>
        </footer>
    )
    }
}
export default MyFooter;