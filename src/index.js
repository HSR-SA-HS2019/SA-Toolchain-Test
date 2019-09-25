import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis"


var graph = {
    nodes: [
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ],
    edges: [
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]
};

var options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000"
    }
};

var events = {
    select: function(event) {
        var { nodes, edges } = event;
    }
}







const rootElement = document.getElementById("root");
ReactDOM.render(<Graph graph={graph} options={options} events={events} style = {{height: "640px" }}/>, rootElement);
// ReactDOM.render(<Game />, rootElement);m
//ReactDOM.render(<App />, rootElement);
