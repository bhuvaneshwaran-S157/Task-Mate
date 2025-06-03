import React from 'react'
import { useDispatch } from 'react-redux';
import { removeHabit, toggleDay } from '../Store/habitSlice';
import Lottie from 'lottie-react';
import sparkleAnimation from '../assets/Animation - 1748960740817.json'
const HabitItem = (props) => {
  const dispatch = useDispatch();
  const handleToggle = (day) => {
    dispatch(toggleDay({ habitId: props.id, day }))
  }
  const handleRemove = () => {
    dispatch(removeHabit(props.id));
  }

  let count = 0;
  Object.entries(props.week).forEach(([day, checked]) => {
    if (checked) count++;
  });

  const percentage = Math.round((count / 7) * 100);

  return (
    <div className="bg-white p-4 rounded-md shadow-md space-y-4">
      {
        percentage===100 && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-54 z-10">
            <Lottie animationData={sparkleAnimation} loop={false}/>
          </div>
        )
      }
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{props.title}</h2>
          <p className="text-[12px] text-white rounded-2xl p-1 bg-gray-400 text-center">{props.category}</p>
        </div>
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-3 py-1 flex justify-between  items-center rounded hover:bg-red-600 cursor-pointer"
        >
          <img src="../src/assets/icons8-delete-30.png" alt="" />
          <span className='hidden sm:inline'>Delete</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-1 justify-between">
        {Object.entries(props.week).map(([day, checked]) => (
          <>
            <label key={day} className="flex flex-wrap items-center gap-1">
              <input
                type="checkbox"
                checked={!!checked}
                onChange={() => handleToggle(day)}
                className="w-4 h-4"
              />
              <span>{day}</span>
            </label>

          </>

        ))}
        <div className="flex flex-col items-center mt-3">
          <div className="relative w-20 h-20 rounded-full transition-all" style={{ background: `conic-gradient(#3b82f6 0% ${percentage}%, #d1d5db ${percentage}% 100%) `, transition: "all" }}>
            {/* Inner circle to create border effect */}
            <div className="absolute top-2 left-2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-lg">{percentage}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Progress */}

    </div>
  )
}

export default HabitItem
