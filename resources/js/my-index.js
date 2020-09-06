import graphOptions from './data/test-graph-options.js';

import createGraph from './components/graph/renderer.js';


const nContainer = document.querySelector('#main .container');


init();


function init() {
    let nGraph = createGraph(graphOptions);
    nContainer.append(nGraph);
}

