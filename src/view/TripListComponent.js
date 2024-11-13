import { createElement } from "../framework/render.js"

function createTripListComponent(){
    return (`
        <div class="trip-list">
        </div>
        `)
}

export default class TripListComponent{

    get template(){
        return createTripListComponent()
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}