import { useEffect, useState } from 'react'
import { Button } from "@nextui-org/react"
import { data } from 'autoprefixer'

const Content = () => {
   const [count,setCount]=useState(1)
   const [article,setArticle]=useState("")

   
function nexPage (){
    setCount(count + 1)
}
function pervewPage(){
    setCount(count - 1)
}
useEffect(()=>{
    fetch('https://dummyjson.com/post/'+ count ).then((res=>res.json())).then(data=>setArticle(data))
},[count])

return(
        <>
        <main>
            <article>
                <header className='pb-8'>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                   
                </header>
                <div className='flex justify-between pb-30 mb-20'>
                <Button onClick={pervewPage} color="danger">pervew page</Button>
                <p>{count}</p>
                <Button onClick={nexPage} color="primary">next page</Button>
                </div>
               
            </article>
        </main>
        </>

)


}

export default Content