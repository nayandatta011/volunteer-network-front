import React from 'react';

const AddEvent = () => {
    return (
        <div className='event__details'>
            <form className='add__event' action="">
                <div className="form__fields">
                    <div className='form__left'>
                        <label htmlFor="title">Event Title</label>
                        <input type="text" id='title' name='title' placeholder='Event Title' />
                        <label htmlFor="desc">Event Description</label>
                        <textarea name="desc" id="desc" cols="30" rows="5" placeholder='Event Description'></textarea>
                    </div>
                    <div>
                        <label htmlFor="date">Event Date</label>
                        <input type="date" name="date" id="date" />
                        <label htmlFor="banner">Banner</label>
                        <input type="file" name="banner" id="banner" />
                    </div>
                </div>
                <input type="submit" className='add__event__submit' value="Submit" />
            </form>
        </div>
    );
};

export default AddEvent;