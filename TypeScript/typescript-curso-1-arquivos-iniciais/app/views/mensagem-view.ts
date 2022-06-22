export class MenssagemView {
    
    private element: HTMLElement;
    constructor(seletor: string){
        this.element = document.querySelector(seletor);
    }

    templete(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }

    update(model: string): void {
        const templete = this.templete(model);
        this.element.innerHTML = templete;
    }
}