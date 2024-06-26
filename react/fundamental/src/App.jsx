import TodoList from "./components/TodoList"
import SignPage from "./pages/SignPage"
import WIshListPage from "./pages/WishListPage"


function App() {
 

  return (
    <>
        {/* <WIshListPage/> */}
        {/* <SignPage/> */}
        <TodoList day="Sunday" typeOfNmuber={3}/>
    </>
  )
}

export default App
