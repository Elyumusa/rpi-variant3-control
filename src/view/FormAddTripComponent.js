import { createElement } from "../framework/render.js"

function createFormAddTripTemplate() {
    return (`
        <form id="trip-form">
                <label for="trip-destination">Путешествие:</label>
                <input type="text" id="trip-destination" placeholder="Destination" required />
                <label for="trip-date">Дата:</label>
                <input type="date" id="trip-date" required />
                <label for="trip-notes">Заметки:</label>
                <textarea id="trip-notes" placeholder="Notes" rows="3"></textarea>

                <fieldset>
                    <legend>Статус поездки:</legend>
                    <label><input type="radio" name="trip-status" value="Planned" required /> Запланировано</label>
                    <label><input type="radio" name="trip-status" value="Completed" required /> Выполнено</label>
                </fieldset>

                <button type="submit">Добавить поездку</button>
            </form>
        `)
}

export default class FormAddTripComponent{
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
        return createFormAddTripTemplate()
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}