const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                React.createElement("h1", {}, "I'm an H1 Tag inside of #child"),
                React.createElement("h2", {}, "I'm an H2 Tag inside of #child")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I'm an H1 Tag inside of #child2"),
                React.createElement("h2", {}, "I'm an H2 Tag inside of #child2 ")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);