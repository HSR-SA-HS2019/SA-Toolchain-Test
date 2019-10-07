import React from 'react';
import Graph from "react-graph-vis";

class Topologygraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        ;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
        var nodesCopy = this.graph.nodes.slice(); // this will create a copy with the same items
        nodesCopy.push({id: 8, label: this.state.value});
        this.graph.nodes = nodesCopy;
    }

    handleSubmit(event) {
        for (const f of this.graph.nodes) {

            console.log(f.id, f.label);
        }

        event.preventDefaul();
    }


    graph = {
        nodes: [
            {id: 1, label: 'Node 1'},
            {id: 2, label: 'Node 2'},
            {id: 3, label: 'Node 3'},
            {id: 4, label: 'Node 4'},
            {id: 5, label: 'Node 5'},
            {id: 6, label: 'Node 6'}
        ],
        edges: [
            {from: 1, to: 2},
            {from: 1, to: 3},
            {from: 2, to: 4},
            {from: 2, to: 5},
            {from: 6, to: 1},
            {from: 6, to: 4}
        ]
    };

    options = {
        autoResize: true,
        height: '100%',
        width: '100%',
        layout: {
            hierarchical: false
        },
        edges: {
            color: 'black',
            arrows: {
                to: {
                    enabled: false
                }
            }
        }
    };

    events = {
        select: function (event) {
            var {nodes, edges} = event;
        }
    };

    style = {
        height: "800px",
        width: `100%`
    }

    render() {
        return (
            <div>
                <Graph
                    graph={this.graph}
                    options={this.options}
                    events={this.events}
                    style={this.style}
                />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


export default Topologygraph;