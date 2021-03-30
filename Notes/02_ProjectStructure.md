# Creating React Web Application:
- create-react-app <appname>  : it will create the base project with a sample files.

    ## Understanding the application structure:
    - node_modules: required/used module in our application.
    - public: basically html files or global data.
    - public/index.html:- starting point, all the data will load at this page.
    - src: all the components, style sheets, tests etc. will stay in this folder. It's the main directory.
    - src/index.js:- The entry point of the project, this the file which is sending the data to the index.html file.
    - src/App.js:- Here we have our App data or collection of component(s).
 
    ## Basic file structure which can be use:
        /src
            │
            ├── assets
            │   └── ...
            │
            ├── components
            │   └── ...
            │
            ├── containers
            │   └── ...
            │
            ├── core
            │   └── ...
            │
            ├── app.js
            ├── index.js
            └── router.js

    ### The Assets folder
    - contains images, icons, fonts, and more.
    - If an asset, used only in a specific container, it belongs to a folder with the container’s name.
    ###### 
        /assets
          │
          ├── auth // ◀️ Assets specific to the auth container
          │   ├── connected.mp3
          │   └── background.png
          │
          ├── fonts
          │   └── ...
          │
          ├── ionicon // ◀️ An icon Library
          │   └── ...
          │
          ├── profile // ◀️ Assets specific to the profile container
          │   └── background.png
          │
          ├── logo.svg
          └── ...

    ## The components and containers folders:
    - How should you group your components? A lot of different tastes here. React’s documentation suggests two solutions:
    - A. Group files by feature or routes.
    - B. Or group files by type (CSS, components, tests, etc.).
           
          /src
            │
            ├── components
            │   └── ...
            │
            ├── containers
            │   └── ...  
            └── and so on...
    - In order for a React component to earn its place in the ./components folder, it must obey two rules:
    - It must be a Presentational component, which means that it is not connected to the app’s state and certainly doesn’t fetch or post data.
      It can interact with the parent container (by triggering a function that was passed in Props, for example). I am fine with that, but that’s all.
    - It must be used across multiple components or containers.
    - `Components make things look good, while containers make things work`

    - > Containers are stateful, which means that they can:
    - > Subscribe to the store.
    - > Trigger side effects, (interact with the store, fetch or post data, etc.).
    - > Handle the dispatching of analytics events.
    - > Provide state, data, and actions to child components via props.

    ### The core folder — the heart of the app
    - This core folder could also be named Commons or Shared. It contains everything that is used across the app.
    ######
        /core
          │
          ├── models
          │   ├── notification.model.js
          │   ├── user.model.js
          │   └── ...
          │
          ├── services
          │   ├── notification.js
          │   ├── notification.test.js
          │   ├── user.js
          │   ├── user.test.js
          │   └── ...
          │
          ├── store
          │   ├── middlewares
          │   │   └── ...
          │   │
          │   ├── auth
          │   │   ├── actions.js
          │   │   ├── epics
          │   │   │   ├── some-side-effect.js
          │   │   │   ├── fetch-stuff.js
          │   │   │   └── ...
          │   │   │
          │   │   ├── reducer.js
          │   │   └── selectors.js
          │   │
          │   ├── index.js
          │   └── state.js
          │
          └── theme
              ├── animations.js
              ├── global-state.js
              └── index.js
        
    ### Structure of a component folder:
        /my-component
          │
          ├── components // ◀️ Only for a Container!
          │   ├── sub-componentA
          │   │   ├── index.test.jsx
          │   │   ├── index.jsx
          │   │   └── styled.js
          │   │
          │   └── sub-componentB
          │       └── ...
          │
          ├── service // ◀️ Optional, mostly for Containers
          │   ├── index.test.jsx
          │   └── index.js
          │
          ├── index.test.jsx
          ├── index.jsx
          └── styled.js
        
  ### Overall structure
                
        /src
          │
          ├── assets
          │   ├── auth
          │   │   │
          │   │   ├── connected.mp3
          │   │   └── background.png
          │   │
          │   ├── fonts
          │   │   └── ...
          │   │
          │   ├── ionicon
          │   │   └── ...
          │   │
          │   ├── profile
          │   │   └── background.png
          │   │
          │   ├── logo.svg
          │   └── ...
          │
          ├── components
          │   ├── componentA
          │   │   ├── service
          │   │   │   ├── index.test.jsx
          │   │   │   └── index.js
          │   │   │   
          │   │   ├── index.test.jsx
          │   │   ├── index.jsx
          │   │   └── styled.js
          │   └── ...
          │   
          ├── containers
          │   ├── containerA
          │   │   ├── components
          │   │   │   ├── sub-componentA
          │   │   │   │   ├── index.test.jsx
          │   │   │   │   ├── index.jsx
          │   │   │   │   └── styled.js
          │   │   │   │
          │   │   │   └── sub-componentB
          │   │   │       └── ...
          │   │   │
          │   │   ├── service
          │   │   │   ├── index.test.jsx
          │   │   │   └── index.js
          │   │   │   
          │   │   ├── index.test.jsx
          │   │   ├── index.jsx
          │   │   └── styled.js
          │   │
          │   └── ...
          │
          ├── core
          │   ├── models
          │   │   ├── notification.model.js
          │   │   ├── user.model.js
          │   │   └── ...
          │   │
          │   ├── services
          │   │   ├── notification.js
          │   │   ├── notification.test.js
          │   │   ├── user.js
          │   │   ├── user.test.js
          │   │   └── ...
          │   │   
          │   ├── store
          │   │   ├── middlewares
          │   │   │   └── ...
          │   │   │   
          │   │   ├── auth
          │   │   │   ├── actions.js
          │   │   │   ├── epics
          │   │   │   │   ├── some-side-effect.js
          │   │   │   │   ├── fetch-stuff.js
          │   │   │   │   └── ...
          │   │   │   │
          │   │   │   ├── reducer.js
          │   │   │   └── selectors.js
          │   │   │   
          │   │   ├── index.js
          │   │   └── state.js
          │   │
          │   └── theme
          │       ├── animations.js
          │       ├── global-state.js
          │       └── index.js
          │
          ├── app.jsx
          ├── index.jsx
          └── router.jsx
