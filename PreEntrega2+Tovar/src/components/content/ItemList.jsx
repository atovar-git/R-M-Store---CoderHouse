import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    return (
        <>
            <section className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2 g-md-3'>

                {props.products.map((item, i) => <Item key={i} {...item} />)}

            </section>
        </>
    );
}

export default ItemList;
