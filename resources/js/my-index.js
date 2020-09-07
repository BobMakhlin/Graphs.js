import graphOptions from './data/graphs/test-graph-options.js';

import createGraph from './components/graph/renderer.js';
import initGraph from './components/graph/initializer.js';


const nContainer = document.querySelector('#main .container');


init();


function init() {
    let nGraph = createGraph(graphOptions, {
        colorClass: 'orange'
    });
    initGraph(nGraph, graphOptions);
    nContainer.append(nGraph);
}

