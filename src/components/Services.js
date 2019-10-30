import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur'
                
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hicking",
                info:'lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:'lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item,index) => {
                        return(
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
