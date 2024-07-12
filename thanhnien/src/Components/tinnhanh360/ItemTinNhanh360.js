import React from "react";
import parse from 'html-react-parser';
const ItemTinNhanh360 = ({stuff}) => {
    return (
        <div className='tinnhanh360-item'>
            {parse(stuff)}
        </div>
    )
}

export default ItemTinNhanh360;