import React from 'react';
import AddButton from './AddButton';
import { root, desc } from './styles/Item';

const Item = ({product, onClick}) => (
  <div>
    <div style={root}>
      {product.name}
      <div style={desc}>
        {product.desc}<br />
        ${product.price}
      </div>
      <AddButton onClick={() => onClick(product.id)} stock={1} />
    </div>
  </div>
)

export default Item;
