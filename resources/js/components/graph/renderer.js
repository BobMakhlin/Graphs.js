
export default function createGraph(model) {

    let container = document.createElement('div');
    container.className = 'graph';

    const curPeriod = model.periods[model.curPeriodIndex];
    const curPeriodWidth = curPeriod.value / model.maxValue * 100;


    container.innerHTML = `
        <p class="graph__name">${model.header}</p>

        <div class="graph__line">
            <div class="progress-line">
                <div class="progress-line__inner" style="width: ${curPeriodWidth}%"></div>
            </div>

            <p class="graph__cur-value">${curPeriod.value}</p>
        </div>
    `;

    return container;

}
