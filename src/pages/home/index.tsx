import AddTaskInput from "@/components/AddTaskInput"
import TaskList from "@/components/TaskList"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className="mobileS:w-[90%] lg:w-[40%] mx-auto my-10">
      <h1 className="text-blue-500 font-bold text-2xl text-center">Todo App by <Link to={"https://github.com/zemtsow"} target="_blank" className="underline">zemtsow</Link></h1>
      <AddTaskInput />
      <TaskList />
    </div>
  )
}

export default Home