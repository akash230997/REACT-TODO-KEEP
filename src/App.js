import React, { useState } from 'react'
import './App.css';
import Cards from './Cards';
import Footer from './Footer';
import Header from './Header';
// import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Videosbackground from './Ink - 67358.mp4';


function App() { 
  const [singleclk, setSingleclk] = useState(false);
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

  const edit = () =>{
    setSingleclk(true)
  }

  const bcktonor = () => {
    setSingleclk(false)
  }
  return (
    <>
      <Header/>
      <video src={Videosbackground} className='bgvideo' autoPlay muted loop></video>
      <div className="Mainbox" onDoubleClick={bcktonor}>
        
        <form action="">
          {singleclk?<input type="text" name='title' onChange={inputEvent} value={store.title} placeholder='Title' />:null}
          <textarea name="data" id="" onChange={inputEvent} value={store.data} placeholder='Write Your Note Here...' cols="" rows="" onClick={edit}></textarea>
          {singleclk?<span className='AddIcon' onClick={Addbtn}>
              <AddBoxIcon />
          </span>:null}
        </form>
      </div>
      {singleclk === false ? <div className='Show_ExtraSpace'><center><p>Click Here To Write📝...</p></center></div> : singleclk === true ? <div className='Hide_ExtraSpace'><center><p>Double Click To Hide</p></center></div>:null}
      
      
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
