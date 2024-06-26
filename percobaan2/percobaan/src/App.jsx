
import { Toaster } from "sonner"
import SignUpPage from "./pages/SignUpPage"
import TestingAxios from "./pages/TestingAxios"
import WishListPage from "./pages/WishlistPage"
import Content from "./components/Content"
import TodoCard from "./components/TodoCard"
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {

  return(
    <>
     {/* <SignUpPage/> */}
     {/* <WishListPage/> */}
     {/* <Toaster/> */}
     {/* <TestingAxios/> */}
      {/* <Content/> */}
      <Header/> 
      <TodoCard day="Tuesday" numberOfActivities={5}/>
      <br />
      <TodoCard day="Sunday" numberOfActivities={3}/>
      <Footer message="Hello Footer"/>
    </>
  )


}

export default App
