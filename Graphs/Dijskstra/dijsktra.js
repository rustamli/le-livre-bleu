
const INFINITY = 100000;

const Graph = {

    nodes: ['A', 'B', 'C'],
    
    A: {
        B: 2,
        C: 4
    },

    B: {
        C: 56,
        A: 2
    },

    doWithConnectedNodes: function (node, fn) {
        var nodeDetails = Graph[node];
        return Object.keys(nodeDetails).forEach(function (key) {
            fn(key, nodeDetails[key]);        
        });
    }
};

function dijkstra(source, target) {

    var unvisited = new Set(),
        dist = {},
        prev = {};

    Graph.nodes.forEach(function (node) {
        dist[node] = INFINITY;
        prev[node] = null;

        unvisited.add(node);
    });


    dist[source] = 0;
    var currentNode = source,
        pathExists = true;

    while (currentNode != target) {

        unvisited.delete(currentNode);

        Graph.doWithConnectedNodes(currentNode, function (node, weight) {
            var distFromCurrentNode = dist[currentNode] + weight;
            if (dist[node] > distFromCurrentNode) {
                dist[node] = distFromCurrentNode;
                prev[node] = currentNode;
            }    
        });

        currentNode = null;
        unvisited.forEach(function (node) {
            if (!currentNode || dist[currentNode] > dist[node]) {
                currentNode = node;
            }
        });

        if (dist[currentNode] === INFINITY) {
            console.log('No path was found');
            pathExists = false;
            break;
        }
    }

    if (pathExists) {
        while (currentNode != source) {
            console.log(currentNode);
            currentNode = prev[currentNode];
        }
        console.log(source);
    }
}


dijkstra('A', 'C');

