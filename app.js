import React from "react";
import ReactDOM from "react-dom/client";
const div = React.createElement('div',{id:'root'},
    React.createElement('div',{id:'parent'},
        [React.createElement('div',{id:'child'},[
            React.createElement('h1',{id:'grandchild'},"I am Grandchild 1 of child 1"),
            React.createElement('h1',{id:"grandchild1"},'Hello React I am Chirag')
        ]
        ),
        React.createElement('div',{id:'child2'},[
            React.createElement('h1',{id:'grandchild'},"I am Grandchild 1 of child 2"),
            React.createElement('h1',{id:"grandchild1"},'React is Beautiful Library')
        ]
        )]
    )
)
console.log(div);

const body = ReactDOM.createRoot(document.querySelector('body'));
body.render(div);