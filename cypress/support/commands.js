let NameList = []
let PriceList = []
Cypress.Commands.add('setGlobalName', (value) => {
    NameList.push(value);
});

Cypress.Commands.add('getGlobalName', () => {
    return NameList;
});

Cypress.Commands.add('setGlobalPrice', (value) => {
    PriceList.push(value);
});

Cypress.Commands.add('getGlobalPrice', () => {
    return PriceList;
});