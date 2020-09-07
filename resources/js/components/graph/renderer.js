import { getPercentage } from '../../helpers/percents.js';


export default function createGraph(model, { colorClass = 'orange' } = {}) {

    let container = document.createElement('div');
    container.className = 'graph ' + colorClass;

    const curPeriod = model.periods[model.curPeriodIndex];
    const curPeriodWidth = getPercentage(curPeriod.value, model.maxValue);


    container.innerHTML = `
        <p class="graph__name graph__title">${model.header}</p>

        <div class="graph__sliders">
            <span class="fas fa-chevron-left cursor-pointer graph__prev-period"></span>
            <span class="fas fa-chevron-right cursor-pointer graph__next-period"></span>
        </div>

        <div class="progress-line">
            <div class="progress-line__inner" style="width: ${curPeriodWidth}%"></div>
        </div>

        <div class="cur-period" style="left: ${curPeriodWidth}%">
            <p class="cur-period__name">${curPeriod.title}</p>
            <p class="cur-period__value">${curPeriod.value}/${model.maxValue}</p>
        </div>
    `;

    return container;

}
