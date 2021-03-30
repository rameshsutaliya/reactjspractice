# React DOM and JSX:
- JSX is part of the react library. which is imported as React from "react". which provides the jsx features.
- Going to use ES6 rather than normal JS.

    ### ReactDOM.render() function:-    
    - it takes two arguments.
        > ReactDOM.render(what data to render, where to render)

        > Example: ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root")) 

        > We can't put two elements during the render but we can use the container to group these two elements. 

        > Example: ReactDOM.render(<p> Element 1</p> <h5> Element2</h5>, document.getElementById("root")) will not work, it will through an error.

        > Sending multiple Elements: ReactDOM.render(<div><p> Element 1</p> <h5> Element2</h5></div>,document.getElementById("root"))

// Try out this:

- Fill in the boilerplate React code required to render an unordered list(\<ul></ul>) to the page. The list should contain 3 list items(\<li></li>) with anything in them you want.

- Create a functional component called MyInfo that returns the following UI:
    - a. Your name in h1 tag. 
    - b. A paragraph as about section.
    - c. Ordered and unordered list of top 3 likes.


