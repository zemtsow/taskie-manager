import AddTaskInput from "@/components/AddTaskInput"
import TaskList from "@/components/TaskList"

const Home: React.FC = () => {
  return (
    <div className="lg:w-[40%] mx-auto my-10">
      <h1 className="text-blue-500 font-bold text-2xl text-center">TODO APP by zemtsow</h1>
      <AddTaskInput />
      <TaskList />
    </div>
  )
}

export default Home