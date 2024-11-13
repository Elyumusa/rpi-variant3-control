import { render } from "./framework/render.js"
import TripsModel from "./model/trips_model.js"
import TripListPresenter from "./presenter/TripListPresenter.js"
import FormAddTripComponent from "./view/FormAddTripComponent.js"
import TripListFilterComponent from "./view/TripListFilterComponent.js"


const tripsModel=new TripsModel()
const tripListContainer=document.querySelector('.trip-list')
const tripListPresenter=new TripListPresenter({tripListContainer,tripsModel})
const formAddTripComponent=new FormAddTripComponent({onSubmit:handleNewTripCreated})
const formContainer=document.querySelector('.trip-form')
const filtertripListContainer=document.querySelector('.trip-filter')
const triplistfilterComponent=new TripListFilterComponent({onSubmit:()=>{}})
render(formAddTripComponent,formContainer)
render(triplistfilterComponent,filtertripListContainer)
tripListPresenter.init()


function handleNewTripCreated(){
    console.log('Reached hhhh')
    tripListPresenter.addTrip()
}