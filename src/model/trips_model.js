import { trips } from "../mock/trips.js";


export default class TripsModel{
    #trips=trips
    #observers=[]
    get trips(){
        return this.#trips
    }

    addTrip(trip){
        const length=this.#trips.push(trip)
        console.log(`Length of trips list: ${length}`)
        this._notifyObservers();
        return trip;
    }
    deleteTrip(trip_id){
        this.#trips=this.#trips.filter((trip)=>trip.id!==trip_id)
        this._notifyObservers();
    }
    _notifyObservers(){
        this.#observers.forEach((observer)=>observer());
    }
    addObserver(observer){
        this.#observers.push(observer);
    }
}