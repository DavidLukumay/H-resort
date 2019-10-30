import React from 'react'
import Title from './Title'
import {useContext} from 'react'
import {RoomContext} from '../context'
// import createReactContext from 'mini-create-react-context'

// get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange,type,capacity,price,minPrice,maxPrice,
    minSize,maxSize,breakfast,pets} = context
    //  get unique types
    let types = getUnique(rooms,'type');
    // add all
    types = ['all',...types];
    // map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select
                     name='type' 
                     id='type' 
                     value={type}
                     className='form-control'
                     onChange={handleChange} 
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* guest */}
                <div className='form-group'>
                    <label htmlFor='capacity'>guest</label>
                    <select
                     name='capacity' 
                     id='capacity' 
                     value={capacity}
                     className='form-control'
                     onChange={handleChange} 
                    >
                        {people}
                    </select>
                </div>
                {/* end guest */}
                {/* room price */}
                <div className='form-group'>
                    <label htmlFor='price'>
                        room price ${price}
                    </label>
                    <input type='range' name='price' min={minPrice}
                    max={maxPrice} id='price' value={price} 
                    onChange={handleChange} className='form-control'/>
                </div>
                {/* end of room price */}
                {/* size */}
                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' id='size'
                        onChange={handleChange} className='size-input' value={minSize}/>
                        <input type='number' name='maxSize' id='size'
                        onChange={handleChange} className='size-input' value={maxSize}/>
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast'
                        id='breakfast' checked={breakfast}
                        onChange={handleChange} />
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets'
                        id='pets' checked={pets}
                        onChange={handleChange} />
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
