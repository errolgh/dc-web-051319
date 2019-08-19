import React from 'react'
import { createStore } from 'redux';
import manageBand from '../reducers/manageBand';
import Band from './Band';
import renderer from 'react-test-renderer';
import { jsxElement, exportAllDeclaration } from '@babel/types';

let mockStore = createStore(manageBand)

let mockProps = {
    band: {
        id: 1,
        img_url: null,
        name: 'The Smiths',
        genre: 'brit pop',
        props: jest.fn()
    }
}

describe ('Band', ()=>{
    it ('renders correctly', () => { 
        const tree = renderer
        .create(<Band {...mockProps} store={mockStore} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})



