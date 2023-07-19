import React from 'react'

const Gradient = () => {
  return (
<div className='mx-auto max-w-[1201px] rounded-xl '>
    <div className='bg-red-00 w-full h-[223px]    rounded-[17px] flex flex-row-reverse'>
        <div className='bg-main-green to-transparent trans w-[40%] h-full'></div>
    <div className='w-[60%] h-full bg-hello bg-no-repeat bg-cover relative'>
        <div className='z-5 absolute inset-0 bg-gradient-to-r  from-main-green from-[0%] to-transparent to-[90%]'></div>
    </div>
    </div>

</div>

  )
}

export default Gradient

// <div className="relative">
//     <div
//       className="absolute w-full inset-0  left-12   bg-gradient-to-r from-main-green form-[10%]  via-main-green via-[10%]"
//       style={{ zIndex: 1 }}
//     />
//     <div
//       className="bg-hello bg-cover bg-no-repeat"
//       style={{ height: '200px', zIndex: 0 }}
//     />
//   </div>