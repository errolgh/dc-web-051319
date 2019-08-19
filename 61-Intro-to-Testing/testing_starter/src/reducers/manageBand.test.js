import React from 'react';
import manageBand from './manageBand';

describe('manageBand reducer', ()=>{
    it ('handles @@INIT', ()=>{
        let action = { type: '@@INIT'}
        expect(manageBand(undefined, action)).toEqual({ bands: []})
    })
    it ('handles ADD_BAND', ()=>{
        let action = { type: 'ADD_BAND', payload: { name: 'The All Stars', genre: 'punk rock'} }
        let result = manageBand({bands: []}, action)
        expect(result.bands).toBeDefined()
        expect(result.bands.length).toBe(1)
    })
    it ('handles DELETE_BAND', ()=>{
        let mockState = {
            bands: [
                { id: 1, img_url: null, name: 'The Monkeys', genre: 'pop' },
                { id: 2, img_url: null, name: 'The Tempations', genre: 'R&B' }
            ]
        }
        let action = { type: 'DELETE_BAND', payload: mockState.bands[0].id }
        let result = manageBand(mockState, action)
        expect(result.bands).toBeDefined()
        expect(result.bands.length).toBe(mockState.bands.length - 1)
    })
})
