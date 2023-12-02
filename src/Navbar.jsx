import React from 'react'

function Navbar({data}) {
    console.log(data)
  return (
    <div className='bg  '>
      {data.map((item)=>{
        return <li className='fs-5 list-unstyled px-4 py-2 z-1 '>{item}</li>
      })}
    </div>
  )
}

export default Navbar
