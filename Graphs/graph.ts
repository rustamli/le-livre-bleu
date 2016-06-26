
const Graph = {
    nodes: ['A', 'B', 'C'],
    
    A: {
        B: 2,
        C: 4
    },

    B: {
        C: 1,
        A: 2
    },

    doWithConnectedNodes: function (node: string, fn: Function) {
        var nodeDetails = Graph[node];
        return Object.keys(nodeDetails).forEach(function (key) {
            fn(key, nodeDetails[key]);        
        });
    }
};

export default Graph;