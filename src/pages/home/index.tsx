import AddTaskInput from "@/components/AddTaskInput"
import TaskList from "@/components/TaskList"
import logo from '@/assets/logo.svg'

const Home: React.FC = () => {
  return (
    <div className="mobileS:w-[90%] lg:w-[40%] mx-auto my-10">
      <div className="">
        <img src={logo} className="w-[200px] select-none" />
      </div>
      <AddTaskInput />
      <TaskList />
    </div>
  )
}

export default Home