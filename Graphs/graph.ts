
const Graph = {
    nodes: ['A', 'B', 'C', 'D'],
    
    A: {
        B: 2,
        D: 2
    },

    B: {
        C: 1,
        A: 2
    },

    C: {
        D: 2
    },

    D: {
        A: 1
    },

    doWithConnectedNodes: function (node: string, fn: Function) {
        var nodeDetails = Graph[node];
        return Object.keys(nodeDetails).forEach(function (key) {
            fn(key, nodeDetails[key]);        
        });
    }
};

export default Graph;