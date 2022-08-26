import React from 'react';


function ProductsList({productsList}) {
  return (
    <div>
      <ul>
        {productsList.map((product,key) => <li key={key}>{product}</li>)}
      </ul>
    </div>
  );
}

export default ProductsList;