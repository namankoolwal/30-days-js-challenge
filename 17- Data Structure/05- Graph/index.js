// Task 9: Implement a Graph class with methods to add vertices, add edges, and a breadth-first search (BFS).

// =============================this is ChatGPT generated=======================================

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // For undirected graph
        }
    }

    // Perform a breadth-first search (BFS)
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.bfs("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]




// Task 10: Use the Graph class to represent a sirnple network and BFS to find the shortest path between two nodes.


// =============================this is ChatGPT generated=======================================


class Graph2 {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // For undirected graph
        }
    }

    // Perform a breadth-first search (BFS) to find the shortest path
    bfsShortestPath(start, end) {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start);

        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.length - 1];

            if (node === end) {
                return path;
            }

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    const newPath = path.concat(neighbor);
                    queue.push(newPath);
                }
            }
        }

        return null; // If no path is found
    }
}

// Example usage:
const graph2 = new Graph2();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");

graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("C", "E");
graph2.addEdge("D", "E");
graph2.addEdge("D", "F");
graph2.addEdge("E", "F");

const shortestPath = graph2.bfsShortestPath("A", "F");
console.log(shortestPath); // Output: [ 'A', 'B', 'D', 'F' ]
