import React from 'react'
import { useSelector } from 'react-redux'
import HabitItem from './HabitItem';

const HabitList = () => {
    const habits = useSelector((state) => state.habits);
    return (
     <div className="w-full max-w-2xl mt-6 space-y-4">
  {habits.length === 0 ? (
    <div className="text-gray-600 text-center bg-white p-4 rounded-md shadow-md">
      No habits yet. Add One!
    </div>
  ) : (
    habits.map((item) => (
      <HabitItem
        key={item.id}
        id={item.id}
        title={item.title}
        category={item.category}
        week={item.week}
      />
    ))
  )}
</div>

    )
}

export default HabitList
