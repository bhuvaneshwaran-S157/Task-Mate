import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addHabit } from '../Store/habitSlice';

const HabitInput = () => {
    const[title,setTitle]=useState('');
    const [category,setCategory]=useState('');
    const dispatch=useDispatch();
    const handleAdd=()=>{
        if(title.trim()==='') return ;
        dispatch(addHabit({title,category}));
        setTitle('');
        setCategory('');
    }
  return (
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
  <input
    type="text"
    placeholder="Habit Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="flex-1 px-4 py-2 rounded-md border bg-blue-50 border-gray-500"
  />
  <input
    type="text"
    placeholder="Category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="flex-1 px-4 py-2 rounded-md border bg-blue-50 border-gray-500"
  />
  <button
    onClick={handleAdd}
    className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
  >
    Add Habit
  </button>
</div>

  )
}

export default HabitInput
