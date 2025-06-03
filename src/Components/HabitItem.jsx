import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeHabit, toggleDay } from '../Store/habitSlice';
import Lottie from 'lottie-react';
import sparkleAnimation from '../assets/Animation - 1748960740817.json'
import deleteIcon from '../assets/icons8-delete-30.png';

const HabitItem = (props) => {
  const [showSparke, setShowSparkle] = useState(false);
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

  useEffect(() => {
    if (percentage === 100) {
      setShowSparkle(true);
      const timeout = setTimeout(() => setShowSparkle(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [percentage])
  return (
    <div className="bg-white p-4 rounded-md shadow-md space-y-4">
      {
        showSparke && (
          <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-full h-24 z-10">
            <Lottie animationData={sparkleAnimation} loop={false} />
          </div>
        )
      }
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{props.title}</h2>
          <p className="text-[12px] text-white rounded-2xl p-1 bg-gray-400 text-center mt-2">{props.category}</p>
        </div>
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-3 py-1 flex justify-between  items-center rounded hover:bg-red-600 cursor-pointer"
        >
          <img src={deleteIcon} alt="" />
          {/* <span className='hidden sm:inline'>Delete</span> */}
        </button>
      </div>

      <div className="flex flex-wrap gap-8 bg-blue-950 p-4 rounded-2xl">
        {Object.entries(props.week).map(([day, checked]) => (
          <>
            <label key={day} className="flex flex-wrap items-center gap-1">
              <input
                type="checkbox"
                checked={!!checked}
                onChange={() => handleToggle(day)}
                className="w-10 h-10 bg-white cursor-pointer appearance-none checked:bg-blue-500 rounded-2xl border-2 border-gray-400"
              />

            </label>
          </>

        ))}
        <div className="flex flex-col items-center ">
          <div className="relative w-15 h-15 rounded-full transition-all" style={{ background: `conic-gradient(#3b82f6 0% ${percentage}%, #d1d5db ${percentage}% 100%) `, transition: "all" }}>
            {/* Inner circle to create border effect */}
            <div className="absolute top-2 left-2 w-11 h-11 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">{percentage}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Circular Progress */}

    </div>
  )
}

export default HabitItem
