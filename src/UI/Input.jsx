import React from 'react'

const Input = ({label, textarea,ref, ...props}) => {
  const classes = "outline-none bg-stone-200 border-b-2 border-stone-700 text-lg p-1"
  return (
    <p className='flex flex-col ml-10'>
    <label className='uppercase text-sm font-bold '>{label}</label>
    {!textarea && <input ref={ref} className={classes} {...props} />}
    {textarea && <textarea ref={ref} className={classes}></textarea>}
  </p>
  )
}

export default Input