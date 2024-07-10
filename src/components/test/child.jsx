import React from 'react'

function Child(dad) {
    const {handleChangeName}=dad;
  return (


    <div>
      {/* child &nbsp;{name} */}
      <button onClick={()=>handleChangeName('rahul')}>change</button>

    </div>
  )
}

export default Child
