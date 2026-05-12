# AliAlgo — DSA C++ Snippets

A production-ready VS Code extension providing 100+ high-quality, standalone, and compilable C++ snippets for Data Structures and Algorithms.

## 🚀 Features

- **100+ Snippets**: Covering everything from Basic Boilerplate to Advanced Graphs and Dynamic Programming.
- **Standalone Files**: Every snippet is a complete `.cpp` file. Just trigger, and you have a runnable program.
- **Integrated Demos**: Every `main()` function includes a working demonstration of the algorithm or data structure.
- **CLI Support**: Comes with a built-in CLI tool `alialgo` to explore snippets from your terminal.

## 🛠 Installation

1. Open **VS Code**.
2. Go to **Extensions** (Ctrl+Shift+X).
3. Search for **AliAlgo** (if published) or install the `.vsix` file.

## 💻 CLI Usage

Once installed globally, you can use the `alialgo` command:

```bash
# Show all snippets in a formatted table
alialgo --help

# Filter snippets by category
alialgo --list trees

# Check version
alialgo --version
```

## 📚 Snippet Categories

| Category | Prefix | Snippets |
|----------|--------|----------|
| **Boilerplate** | `cpp-` | Main Template, Debug Macros |
| **Linked Lists**| `ll-`  | Insert, Delete, Reverse, Cycle Detection, Middle, Merge |
| **Stacks**      | `stack-`| Array/LL/STL, Balanced Parentheses, Next Greater, Min Stack |
| **Queues**      | `queue-`| Array/LL/STL, Deque, Priority Queue, Sliding Window |
| **Trees**       | `tree-` | BST (Insert/Search/Delete), Traversals (BFS/DFS/Zigzag), LCA, Height |
| **AVL Trees**   | `avl-`  | Rotations, Balanced Insertion |
| **Heaps**       | `heap-` | Manual Max Heap, STL Min Heap, Kth Largest, Merge K Sorted |
| **Graphs**      | `graph-`| BFS/DFS, Cycle Detection, Dijkstra, Bellman-Ford, Floyd-Warshall, MST |
| **Tries**       | `trie-` | Full Trie Implementation |
| **DP**          | `dp-`   | Knapsack, LCS, LIS, Coin Change, Matrix Chain |
| **Sorting**     | `sort-` | Bubble, Selection, Insertion, Merge, Quick, Counting, Radix |
| **Searching**   | `search-`| Binary Search, Lower/Upper Bound, Rotated Search |
| **Math**        | `math-` | GCD, LCM, Sieve, Fast Pow, Modular Exp, IsPrime |

## 🏗 Development

```bash
# Clone the repo
git clone https://github.com/alinawaz/AliAlgo.git

# Install dependencies
npm install

# Compile the extension
npm run compile

# Link CLI globally for testing
npm install -g .
```

## 📄 License

MIT
