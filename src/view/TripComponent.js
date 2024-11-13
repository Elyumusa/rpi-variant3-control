import { createElement } from "../framework/render.js"


function createTripComponentTemplate(trip) {
    const {destination,date,notes}=trip

    return (
        `<div class="book">
        <h3>Destination: ${destination}</h2>
        <p>Date: ${date}</p>
        <p>Notes: ${notes}</p>
        <button class="delete-button">Delete Trip</button>
        </div>`
    )
}
//
export default class TripComponent{

    #handleDeleteClick=null
    #clickHandler=(evt)=>{
        evt.preventDefault()
        this.#handleDeleteClick()
    }
    constructor({trip, onDeleteClick}) {
        this.trip=trip;
        this.#handleDeleteClick=onDeleteClick
        this.getelement().addEventListener("click",this.#clickHandler)
    }

    get template(){
        return createTripComponentTemplate(this.trip)
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}