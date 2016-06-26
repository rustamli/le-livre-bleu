
dijkstra = require('./_graphs/search/dijkstra.ts').dijkstra;
bfs = require('./_graphs/search/bfs.ts').default;
dfs = require('./_graphs/search/dfs.ts').default;

// dijkstra('A', 'C');

bfs('A', function (node) {
    console.log(node + '>');
});

console.log('---');


dfs('A', function (node) {
    console.log(node + '>');
});