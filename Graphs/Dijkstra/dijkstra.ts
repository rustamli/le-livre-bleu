
const INFINITY = 100000;

import Graph from '../graph.ts';
import * as Collections from 'typescript-collections';

function dijkstra(source, target) {

    var unvisited = new Collections.Set(),
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

        unvisited.remove(currentNode);

        Graph.doWithConnectedNodes(currentNode, function (node, weight) {
            var distFromCurrentNode = dist[currentNode] + weight;
            if (dist[node] > distFromCurrentNode) {
                dist[node] = distFromCurrentNode;
                prev[node] = currentNode;
            }    
        });

        currentNode = null;
        unvisited.forEach(function (node: string) {
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

