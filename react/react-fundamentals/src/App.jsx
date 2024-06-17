
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from "./components/Counter";
import TodoCard from './components/TodoCard'


function App() {
  

  return (
    <>
     {/* <Header/> */}
     <TodoCard day="Monday" numberOfActivity={1}/>
     <TodoCard day="Tuesday" numberOfActivity={2}/>
     <TodoCard day="Wednesday" numberOfActivity={3}/>
     <Counter/>
     {/* <Footer massage="Hello Dunia"/> */}
     
    </>
  )
}

export default App
