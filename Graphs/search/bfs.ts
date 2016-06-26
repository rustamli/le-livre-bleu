
import Graph from '../graph.ts';
import * as Collections from 'typescript-collections';

export default function bfs(startNode: string, visit: Function) {
    
    var visited = new Collections.Set<string>(),
        queue = new Collections.Queue<string>();

    visit(startNode);
    visited.add(startNode);
    queue.enqueue(startNode);

    while (!queue.isEmpty()) {
        let node = queue.dequeue();

        Graph.doWithConnectedNodes(node, function (connectedNode: string) {
            if (!visited.contains(connectedNode)) {
                visit(connectedNode);
                visited.add(connectedNode);
                queue.enqueue(connectedNode);
            }
        });
    }
}