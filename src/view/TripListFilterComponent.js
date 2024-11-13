import { createElement } from "../framework/render.js"

function createTripListFilterTemplate() {
    return (`
        <label for="date-filter">Фильтр по дате:</label>
            <input type="date" id="date-filter" />
            <label><input type="checkbox" id="completed-filter" /> Показывать только завершенные поездки</label>
        `)
}

export default class TripListFilterComponent{
    #handleSubmit=null
    #submitHandler=(evt)=>{
        evt.preventDefault()
        console.log(`WHats up`)
        this.#handleSubmit()
    }

    constructor({onSubmit}){
        this.#handleSubmit=onSubmit
        this.getelement().addEventListener('submit',this.#submitHandler)
    }
    get template(){
        return createTripListFilterTemplate()
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}