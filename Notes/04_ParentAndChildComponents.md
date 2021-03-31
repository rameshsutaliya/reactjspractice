Entry point of the jsx file will be like this:

    import React from "react"
    import ReactDOM from "react-dom"
    
    ReactDOM.render("What to render", "Where to render")

> We have App as the Entry point in our entire application.

> We will use the App in the index.js file which is directly connected to the index.html page.

> React Components will be capitalized as naming part.

> Now for any Component, we always use: import React from "react" (first line) and export default \<ComponentName> (last line).

## App Structure:
- App is the main entry for the index.html page. So we wil be add the components into the App.


    \App
        |
        | <MyHeader>
            |-  <Logo />
            |-  <NavBar />
        | <Main />
            |-  <MyInfo />
        | <MyFooter />