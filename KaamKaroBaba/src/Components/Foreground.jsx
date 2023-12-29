import React, { useRef } from 'react'

import Card from './Card';
function Foreground() {
    const ref=useRef(null)
    const Data = [
        {
            desc: "lorem7 kunal", time: "9 Hour", complete: true, tag: { isOpen: true, tagTitle: "Completed", tagcolor: "#FD531D" },
        },
        {
            desc: "lorem8 kunal", time: "9 Hour", complete: true, tag: { isOpen: true, tagTitle: "Completed", tagcolor: "blue" },
        },
        {
            desc: "lorem9 kunal", time: "9 Hour", complete: true, tag: { isOpen: true, tagTitle: "Completed", tagcolor: "#FD531D" },
        },
    ];
    return (
        <>

            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-6'>
              {Data.map((item,index)=>(
                <Card Data={item} reference={ref}/>
              ))}

            </div>

        </>
    )
}

export default Foreground