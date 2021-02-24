
function lentele(selector, menuo, pinigai) {
    const DOM = document.querySelector(selector);



    let HTML = '';

    for (let i=0; i<menuo.length;i++) {
        let monthsData = menuo[i];
        let accountData = pinigai[i];
        if (accountData.income === undefined) {
            accountData.income = 0;
        }
        if  (accountData.expense === undefined) {
            accountData.expense = 0;
        }
        

        HTML += `<div class="table-row">
                    <div class="cell">${accountData.month}</div>
                    <div class="cell">${monthsData.name}</div>
                    <div class="cell">${accountData.income}</div>
                    <div class="cell">${accountData.expense}</div>
                    <div class="cell">${(accountData.income - accountData.expense)}</div>
                </div>`
            

    
}
    DOM.innerHTML = HTML;
}

export { lentele }