import React from 'react'
import parse from 'html-react-parser';
const Item24h = ({stuff}) =>{
    return (
        <div className='item-24h'>
            {parse(stuff)}
        </div>
    );
};

export default Item24h;