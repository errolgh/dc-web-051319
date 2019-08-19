let idTracker = 1;
let randomTracker = 1;

export default function manageBand(state = { bands: [] }, action){
    switch (action.type) {
        case 'ADD_BAND':
            let band = { id: idTracker, img_url: `https://loremflickr.com/320/240?random=${randomTracker}''`, name: action.payload.name, genre: action.payload.genre }
            idTracker++
            randomTracker++
            console.log(band)
            return {...state, bands: [...state.bands, band]}
        case 'DELETE_BAND':
            let filteredBands = state.bands.filter(band => band.id !== action.payload)
            return {...state, bands: filteredBands }
        default:
            return state
    }
}