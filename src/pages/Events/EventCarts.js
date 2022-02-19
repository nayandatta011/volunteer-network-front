import React, { useState } from 'react';
import Cart from './Cart';

const EventCarts = () => {
    const events = [
        {
            _id: 1,
            title: "Event number 1",
            img: "https://i.ibb.co/BKzfgJg/ITHelp.png"
        },
        {
            _id: 2,
            title: "Event number  2",
            img: "https://i.ibb.co/BKzfgJg/ITHelp.png"
        },
        {
            _id: 3,
            title: "Event number  3",
            img: "https://i.ibb.co/hZThy8b/refuse-Shelter.png"
        },
        {
            _id: 4,
            title: "Event number  4",
            img: "https://i.ibb.co/BKzfgJg/ITHelp.png"
        },
        {
            _id: 5,
            title: "Event number 1",
            img: "https://i.ibb.co/BKzfgJg/ITHelp.png"
        },
        {
            _id: 6,
            title: "Event number  2",
            img: "https://i.ibb.co/BKzfgJg/ITHelp.png"
        },
        {
            _id: 7,
            title: "Event number  3",
            img: "https://i.ibb.co/hZThy8b/refuse-Shelter.png"
        },
        {
            _id: 8,
            title: "Event number  4",
            img: "https://i.ibb.co/BKzfgJg/ITHelp.png"
        },
    ];

    return (
        <section className='events__wrapper'>
            <div className="container">
                <div className='cards__wrap grid'>
                    {
                        events.map(event => <Cart
                            key={event._id}
                            event={event} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default EventCarts;