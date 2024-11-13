import { render } from "../framework/render.js";
import TripComponent from "../view/TripComponent.js";
import TripListComponent from "../view/TripListComponent.js";


export default class TripListPresenter{
    #triplistComponent= new TripListComponent();
    #tripListContainer=null;
    #tripsModel=null;
    constructor({tripListContainer, tripsModel}){
        this.#tripListContainer=tripListContainer;
        this.#tripsModel=tripsModel
       this.#tripsModel.addObserver(this.#handleModelChange.bind(this))
    }
    init(){
        console.log(`WTFFFF`)
        render(this.#triplistComponent,this.#tripListContainer)
        this.#renderTripslist();
    }
    //This function renders and displays the our html elements on the html doc
    #renderTripslist(){
        for (let index = 0; index < this.#tripsModel.trips.length; index++) {
            const trip=this.#tripsModel.trips[index]
            //Create book component
            console.log(`${trip.destination}`)
            const tripComponent= new TripComponent({trip:trip,onDeleteClick:()=>this.deleteTrip(trip)})//,onDeleteClick:()=>this.deleteBook(b)})
            //Display
            render(tripComponent,this.#triplistComponent.element)
            
        }
    }
    #handleModelChange(){
        this.#clearTripListSection()
        this.#renderTripslist();
    }
    #clearTripListSection(){
        this.#triplistComponent.getelement().innerHTML='';
    }
    deleteTrip(trip){
        console.log(`Reacehed herer: ${trip.id} ${this.#tripsModel.trips.length}`)
        this.#tripsModel.deleteTrip(trip.id)
    }
    addTrip(){
        const destination=document.querySelector('#trip-destination');
        const date=document.querySelector('#trip-date');
        const notes=document.querySelector('#trip-notes');
        console.log(`Showing`)
        if(!destination||!date||!notes){
            console.log(`Showing`)
            return
        }
        console.log('Reached hhhh')
        this.#tripsModel.addTrip({'id':Math.floor(Math.random()*99),'destination':destination.value,'date':date.value,'notes':notes.value})
        document.querySelector('#trip-destination').value=''
        document.querySelector('#trip-date').value=''
        document.querySelector('#trip-notes').value=''
    }
}