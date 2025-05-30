import React from 'react'
import { useDispatch } from 'react-redux'
import { removeHabit, toggleDay } from '../Store/habitSlice';

const HabitItem = (props) => {
    const dispatch = useDispatch();
    const handleToggle = (day) => {
        dispatch(toggleDay({ habitId: props.id, day }))
    }
    const handleRemove = () => {
        dispatch(removeHabit(props.id));
    }
    let count=0;
    Object.entries(props.week).forEach(([day,checked])=>{
        if(checked) count++;
    });
const percentage=Math.round((count/7)*100,2);
    return (
    <div className="bg-white p-4 rounded-md shadow-md space-y-4">
  <div className="flex justify-between items-center">
    <div>
      <h2 className="text-xl font-semibold">{props.title}</h2>
      <p className="text-sm text-gray-500">{props.category}</p>
    </div>
    <button
      onClick={handleRemove}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer" 
    >
      Delete
    </button>
  </div>

  <div className="flex flex-wrap gap-3">
    {Object.entries(props.week).map(([day, checked]) => (
      <label key={day} className="flex items-center gap-1">
        <input
          type="checkbox"
          checked={!!checked}
          onChange={() => handleToggle(day)}
          className="w-4 h-4"
        />
        <span>{day}</span>
      </label>
    ))}
  </div>

  <div className="w-full bg-gray-200 rounded-full h-3">
    <div
      className="bg-blue-500 h-3 rounded-full transition-all"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
  <p className="text-right text-sm text-gray-600">{percentage}% completed</p>
</div>

    )
}

export default HabitItem
