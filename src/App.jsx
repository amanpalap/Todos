import AddTodo from './components/AddTodo'
import Todos from './components/Todo'


function App() {
 
  
  return (
   <div className='flex flex-wrap justify-center bg-black'>
    <AddTodo/>
    <Todos/>

   </div>
  )
}

export default App
