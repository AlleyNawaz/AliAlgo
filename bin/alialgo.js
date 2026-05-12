#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
const snippetsPath = path.join(__dirname, '../snippets/cpp.json');
const snippets = JSON.parse(fs.readFileSync(snippetsPath, 'utf8'));

const args = process.argv.slice(2);

function printBox(title, content) {
    const width = 62;
    console.log('╔' + '═'.repeat(width) + '╗');
    console.log('║' + title.padStart(Math.floor((width + title.length) / 2)).padEnd(width) + '║');
    console.log('╠' + '═'.repeat(18) + '╦' + '═'.repeat(width - 19) + '╣');
    console.log('║ PREFIX           ║ DESCRIPTION                               ║');
    console.log('╠' + '═'.repeat(18) + '╬' + '═'.repeat(width - 19) + '╣');
    
    let currentCategory = '';
    const categories = {
        'cpp-': 'BOILERPLATE',
        'll-': 'LINKED LISTS',
        'stack-': 'STACKS',
        'queue-': 'QUEUES',
        'tree-': 'TREES',
        'avl-': 'AVL TREE',
        'heap-': 'HEAPS',
        'graph-': 'GRAPHS',
        'trie-': 'TRIES',
        'dp-': 'DYNAMIC PROGRAMMING',
        'sort-': 'SORTING ALGORITHMS',
        'search-': 'SEARCHING',
        'math-': 'MATHEMATICAL UTILITIES'
    };

    const sortedPrefixes = Object.keys(snippets).sort();

    sortedPrefixes.forEach(prefix => {
        const catKey = Object.keys(categories).find(k => prefix.startsWith(k)) || 'OTHER';
        const category = categories[catKey];

        if (category !== currentCategory) {
            if (currentCategory !== '') {
                console.log('╠' + '═'.repeat(18) + '╬' + '═'.repeat(width - 19) + '╣');
            }
            const catHeader = `-- ${category} --`;
            console.log('║ ' + catHeader.padEnd(width - 2) + ' ║');
            currentCategory = category;
        }

        const desc = snippets[prefix].description || '';
        const truncatedDesc = desc.length > 40 ? desc.substring(0, 37) + '...' : desc;
        console.log(`║ ${prefix.padEnd(16)} ║ ${truncatedDesc.padEnd(width - 21)} ║`);
    });

    console.log('╚' + '═'.repeat(width) + '╝');
    console.log(`\nTotal: ${Object.keys(snippets).length} snippets across ${Object.keys(categories).length} categories.`);
    console.log('Usage: Type the PREFIX in any .cpp file in VS Code to expand.');
}

if (args.includes('--help')) {
    printBox('AliAlgo DSA C++ Snippets — Help');
} else if (args.includes('--version')) {
    console.log(`AliAlgo version ${packageJson.version}`);
} else if (args.includes('--list')) {
    const filter = args[args.indexOf('--list') + 1]?.toLowerCase();
    if (!filter) {
        console.log('Error: Please provide a category name. Example: alialgo --list trees');
        process.exit(1);
    }
    const filtered = Object.keys(snippets).filter(p => p.includes(filter));
    if (filtered.length === 0) {
        console.log(`No snippets found for category: ${filter}`);
    } else {
        console.log(`\nSnippets matching "${filter}":`);
        filtered.forEach(p => console.log(`- ${p.padEnd(20)} : ${snippets[p].description}`));
    }
} else {
    console.log('AliAlgo CLI Tool');
    console.log('Commands:');
    console.log('  --help     Show all snippets and descriptions');
    console.log('  --version  Show current version');
    console.log('  --list <cat> Filter snippets by category');
}
