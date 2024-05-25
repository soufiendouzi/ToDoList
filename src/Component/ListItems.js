import React from 'react'

const ListItems = ({list , deleteItem}) => {
  return (
    <div>
    <h2>list of items</h2>
    {list.map((item, i) => {
      return (
        <ul key={item}>
          <li>  
            {item}
            <button className='removeBtn' onClick={() => deleteItem(i)}>
              delete
            </button>
          </li>
        </ul>
      );
    })}
  </div>
  )
}

export default ListItems
