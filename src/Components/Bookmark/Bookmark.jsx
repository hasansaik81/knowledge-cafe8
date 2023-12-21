import React from 'react';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-white my-5 p-5 rounded-2xl'>
            <h3 className='text-xl md:text-xl lg:text-2xl font-bold'>{title}</h3>
        </div>
    );
};


export default Bookmark;