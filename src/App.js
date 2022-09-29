import React, { useState } from 'react'
import './App.css';
import Cards from './Cards';
import Footer from './Footer';
import Header from './Header';
// import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

function App() { 
  const [store, setStore] = useState({
    title:"",
    data:""
  })
  const [Val, setVal] = useState([])
  const inputEvent = (event) =>{
    console.log(event.target.value)
    const {value, name} = event.target;
    setStore((previousVal)=>{
      return {
        ...previousVal,
         [name]:value
      }
    })
  }

  const Addbtn = () => {
    setVal((PreviousVal)=>{
      return [...PreviousVal,store]
    })
    console.log(store)
    setStore({
      title:"",
      data:""
    });
    // alert('This is Add Function')
  }

  const deleteI = (id) =>{
    console.log(id)
    setVal((prev)=>{
      return prev.filter((Elem,index)=>{
        return  index !== id;
      })
    })

  }
  return (
    <>
      <Header/>
      <div className="Mainbox">
        <form action="">
          <input type="text" name='title' onChange={inputEvent} value={store.title} placeholder='Title' />
          <textarea name="data" id="" onChange={inputEvent} value={store.data} placeholder='Write Your Note Here...' cols="" rows=""></textarea>
          <span className='AddIcon' onClick={Addbtn}>
            {/* <Button variant="outlined" className='btnpro'> */}
              <AddBoxIcon />
            {/* </Button> */}
          </span>
        </form>
      </div>
      <div className="Mid">
        {Val.map((Elem, index) => {
          return <Cards key={index} id={index} title={Elem.title} data={Elem.data} deleteItem ={deleteI}/>
        })}
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
