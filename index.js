
// dijkstra = require('./graphs/dijkstra/dijkstra.ts').dijkstra;
bfs = require('./graphs/search/bfs.ts').default;

// dijkstra('A', 'C');

bfs('A', function (node) {
    console.log(node + '>');
});