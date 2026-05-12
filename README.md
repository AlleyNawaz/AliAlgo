# AliAlgo: Data Structures and Algorithms for C++

AliAlgo is a beginner-friendly VS Code extension providing high-quality C++ snippets for essential data structures and algorithms. Every snippet is implemented from scratch using clean, readable C++ classes and standard iostream.

Unlike complex libraries, AliAlgo focuses on "easier codes"—straightforward logic that is easy to learn and modify. Every snippet is a complete, standalone file that you can compile and run instantly.

## Core Features

### Class-Based Implementations
All data structures like Linked Lists, Stacks, and Queues are implemented using C++ classes for better organization and clarity.

### Easier Logic
We use simple, readable code patterns to ensure students and beginners can understand the core mechanics of each algorithm without getting lost in advanced syntax.

### Complete Standalone Files
Every snippet generates a full C++ program including necessary headers like iostream and a main function. You can copy the generated code, compile it with any standard C++ compiler, and it will run immediately.

### Integrated Demonstrations
The main function of each snippet contains a working demonstration. For example, the linked list snippets include code to create a list, insert values, and print the results. This makes it easy to understand how to use the data structure in a real-world scenario.

### Built-in CLI Tool
The extension includes a command-line interface called alialgo. This tool allows you to browse the entire snippet library, filter by category, and check version details directly from your terminal.

## Installation

### VS Code Extension Marketplace
1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking the square icon on the left sidebar or pressing Ctrl+Shift+X.
3. Search for "AliAlgo".
4. Click Install.

### Manual Installation
1. Download the alialgo-1.0.0.vsix file.
2. In VS Code, go to the Extensions view.
3. Click the "..." menu at the top right of the sidebar.
4. Select "Install from VSIX..." and choose the downloaded file.

## Snippet Catalog

The snippets are organized by prefixes to help you find what you need quickly. Below is a summary of the available categories:

| Category | Prefix | Examples |
|----------|--------|----------|
| Boilerplate | cpp- | Main template with fast I/O, debug macros |
| Linked Lists | ll- | Singly/Doubly nodes, reverse, cycle detection, merge sorted |
| Stacks | stack- | Array/LL implementations, balanced parentheses, min stack |
| Queues | queue- | Circular queues, priority queues, sliding window maximum |
| Trees | tree- | BST operations, traversals (inorder, level-order, zigzag), LCA |
| AVL Trees | avl- | Balanced insertion, left/right rotations, balance factors |
| Heaps | heap- | Max/Min heaps, Kth largest element, merge K sorted arrays |
| Graphs | graph- | BFS, DFS, Dijkstra, Bellman-Ford, MST (Prim/Kruskal), DSU |
| Tries | trie- | Full trie implementation with search and prefix matching |
| Dynamic Programming | dp- | Knapsack, LCS, LIS, Coin Change, Matrix Chain Multiplication |
| Sorting | sort- | Quick sort, Merge sort, Radix sort, Counting sort |
| Searching | search- | Binary search (iterative/recursive), Rotated array search |
| Mathematical Utilities | math- | Sieve of Eratosthenes, GCD/LCM, Modular exponentiation |

## Command Line Interface

If you have the extension installed globally, you can use the alialgo command to explore the library.

### Show All Snippets
Use the help command to see a formatted table of all available snippets and their descriptions.
```bash
alialgo --help
```

### Filter by Category
You can filter the library to see only snippets related to a specific topic.
```bash
alialgo --list trees
```

### Check Version
```bash
alialgo --version
```

## Contributing and Development

If you would like to contribute to AliAlgo or set up a local development environment, follow these steps:

1. Clone the repository:
   git clone https://github.com/AlleyNawaz/AliAlgo.git

2. Install dependencies:
   npm install

3. Compile the source code:
   npm run compile

4. Link the CLI tool globally for testing:
   npm install -g .

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
