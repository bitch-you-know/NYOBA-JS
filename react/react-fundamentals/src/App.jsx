
import Header from './components/Header'
import Footer from './components/Footer'
// import Counter from "./components/Counter";
import TodoCard from './components/TodoCard'
import { Button, Input } from '@nextui-org/react';
import { useRef, useState } from 'react';


function App() {
  // const refInput=useRef()

  const [wishlistInput, setWishlistInput] = useState("")
  const [itemsWishlist, setWishList] = useState([""])
  



  const addWishList = () => {
    //  const newWishList=refInput.current.value;
    //  const newWishList=wishlistInput.current.value;
     setWishList([...itemsWishlist,wishlistInput]);
     setWishlistInput("")
     
  }




  return (
    <>
      <div className='flex justifity-center text-center'>
        <Input onChange={(event) => {

          setWishlistInput(event.target.value)
        }} color='secondary' label="WishList" />
        <Button onClick={addWishList} color='primary' className="mt-2 text-center">Add</Button>

      </div>
      <p className='text-center'>{wishlistInput}</p>

      <ul className='text-center' >
        {itemsWishlist.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </>
  )
}

export default App
