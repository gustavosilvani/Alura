export class MenssagemView {
    element;
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    templete(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        const templete = this.templete(model);
        this.element.innerHTML = templete;
    }
}
