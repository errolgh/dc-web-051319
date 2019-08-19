import React from 'react';
import Bands from './Bands';
import { shallow } from 'enzyme';
import Band from './Band';

describe ('Bands', ()=>{
    it ('renders bands as Band Components', ()=>{
        let mockProps = {
            bands: [
                { id: 1, img_url: null, name: 'The Monkeys', genre: 'pop' },
            { id: 2, img_url: null, name: 'The Tempations', genre: 'R&B' }
            ]
        }
        let wrapper = shallow(<Bands {...mockProps} />)
        expect(wrapper.find(Band).length).toBe(mockProps.bands.length)
    })
})