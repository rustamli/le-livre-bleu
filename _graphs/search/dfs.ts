
import Graph from '../graph.ts';
import * as Collections from 'typescript-collections';

export default function dfs(startNode: string, visit: Function) {
    
    var visited = new Collections.Set<string>(),
        search = (node: string) => {
            Graph.doWithConnectedNodes(node, function (connectedNode: string) {
                if (!visited.contains(connectedNode)) {
                    visit(connectedNode);
                    visited.add(connectedNode);
                    search(connectedNode);
                }
            });
        };

    visit(startNode);
    visited.add(startNode);
    search(startNode);
}