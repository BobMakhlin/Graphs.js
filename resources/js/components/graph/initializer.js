import { getPercentage } from '../../helpers/percents.js';


export default function initGraph(component, model) {

    const nProgressBar = component.querySelector('.progress-line__inner');
    const nCurPeriod = component.querySelector('.cur-period');
    const nCurPeriodName = component.querySelector('.cur-period__name');
    const nCurPeriodValue = component.querySelector('.cur-period__value');

    const nSelectPrevPeriod = component.querySelector('.graph__prev-period');
    const nSelectNextPeriod = component.querySelector('.graph__next-period');


    nSelectPrevPeriod.addEventListener('click', () => {
        if (model.curPeriodIndex <= 0) return;


        model.curPeriodIndex--;
        updateGraph(nProgressBar, nCurPeriod, nCurPeriodName, nCurPeriodValue, model);
    });

    nSelectNextPeriod.addEventListener('click', () => {
        if (model.curPeriodIndex >= model.periods.length - 1) return;

        model.curPeriodIndex++;
        updateGraph(nProgressBar, nCurPeriod, nCurPeriodName, nCurPeriodValue, model);
    });

}

function updateGraph(nProgressBar, nCurPeriod, nCurPeriodName, nCurPeriodValue, model) {
    let period = model.periods[model.curPeriodIndex];
    let periodWidth = getPercentage(period.value, model.maxValue);

    nProgressBar.style.width = `${periodWidth}%`;

    nCurPeriod.style.left = `${periodWidth}%`;
    nCurPeriodName.innerText = period.title;
    nCurPeriodValue.innerText = `${period.value}/${model.maxValue}`;
}
