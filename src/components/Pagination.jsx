import React from 'react'

const Pagination = ({length, elementsPage, setCurrentPage}) => {
    console.log(length, elementsPage)
    let pages = []
    for (let index = 1 ; index <= Math.ceil(length/elementsPage); index++) {
        pages.push(index)
        
    }
    console.log(pages)


  return (
    <div className='pages'>
        {
          pages.map((page, index)=>{
            return <button key={index} onClick={()=>{setCurrentPage(page)}}>{page}</button>
          })
        }
    </div>
  )
}

export default Pagination