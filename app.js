const heading = React.createElement("div",{id : "parent"},
[React.createElement("div",{id : "child"},[
    React.createElement("h1",{},"hello i am h1 tag child 1"),
    React.createElement("h2",{},"hello i am h2 tag child 2")
]),
React.createElement("div",{id : "child"},[
React.createElement("h1",{},"hello i am h1 tag"),
React.createElement("h2",{},"hello i am h2 tag")
]
)]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
    
