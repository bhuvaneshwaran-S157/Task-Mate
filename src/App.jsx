
import './App.css'
import HabitInput from './Components/HabitInput'
import HabitList from './Components/HabitList'
function App() {
  return (
   <div className="min-h-screen bg-black px-4 py-10 flex flex-col items-center">
  <h1 className="text-4xl font-bold mb-8 text-blue-700  ">HabitMate</h1>
  <HabitInput />
  <HabitList />
</div>

  );
}

export default App
