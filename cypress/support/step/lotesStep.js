import lotesPage from "../page/lotesPage";

const lotes = new lotesPage()

Given(/^que estou na home da aplicação$/, () => {
    lotes.accessSite()
});

When(/^clico no botao proximos eventos$/, () => {
    lotes.accessAllEvent()
});

When(/^escolho um evento que contenha lotes disponíveis$/, () => {
    lotes.acessLote()
});

Then(/^valido o lote selecionado$/, () => {
  lotes.validateLote()
});