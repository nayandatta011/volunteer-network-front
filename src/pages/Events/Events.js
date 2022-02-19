import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import EventCarts from './EventCarts';

const Events = () => {
    return (
        <>
            <div className='container'>
                <NavBar />
                <p className=' my-3'>Events going on...</p>
                <EventCarts />
            </div>

            <Footer />
        </>
    );
};

export default Events;