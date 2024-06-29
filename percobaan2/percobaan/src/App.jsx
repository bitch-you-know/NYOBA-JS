
import { Toaster } from "sonner"
import SignUpPage from "./pages/SignUpPage"
import TestingAxios from "./pages/TestingAxios"
import WishListPage from "./pages/WishlistPage"
// import CountPage from "./pages/CountPage"
import Content from "./components/Content"
import TodoCard from "./components/TodoCard"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Routes,Route} from 'react-router-dom'
import {lazy,Suspense} from 'react'


const CounterPage = lazy(()=>import("./pages/CountPage"))



function App() {

  return(
     <Routes>
         <Route element={<WishListPage/>} path="/wishlist"/>
         <Route element={<SignUpPage/>} path="/auth/sign-up"  />
         <Route element={
          <Suspense fallback={<p>loding ...</p>}>
            <CounterPage/>
          </Suspense>
         } path="/"  />

     </Routes>
  )


}

export default App
