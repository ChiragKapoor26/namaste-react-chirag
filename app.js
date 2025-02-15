const div = React.createElement('div',{id:'root'},
    React.createElement('div',{id:'parent'},
        [React.createElement('div',{id:'child'},[
            React.createElement('h1',{id:'grandchild'},"I am Grandchild 1 of child 1"),
            React.createElement('h1',{id:"grandchild1"},'I am Grandchild 2 of child 1')
        ]
        ),
        React.createElement('div',{id:'child2'},[
            React.createElement('h1',{id:'grandchild'},"I am Grandchild 1 of child 2"),
            React.createElement('h1',{id:"grandchild1"},'I am Grandchild 2 of child 2')
        ]
        )]
    )
)
console.log(div);

const body = ReactDOM.createRoot(document.querySelector('body'));
body.render(div);