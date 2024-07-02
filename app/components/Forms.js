"use client";
import React, { useState } from "react";

const Forms = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setMainTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setMainTask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };

 const deleteHandler =(i)=>{
      const copy =[...maintask]
      copy.splice(i,1)
      setMainTask(copy)
 }
  
  let rendertask=<h2 className="text-white ml-[45vw] mt-[10vw]">No task Available</h2>

  if(maintask.length>0){
    rendertask = maintask.map((t,i)=>{
    return(
        <div className="flex text-[20px] mt-5 ">
        <div className="title flex w-full border-b-[2px] border-[#555555]">
            <p className="mt-[7px] ml-[2vw] w-[23vw] overflow-auto">{t.title}</p>
            <p className="d mt-[7px] ml-[5vw] w-[55vw] overflow-auto">{t.desc}</p>
          {/* <button className="bg-yellow-400 p-2 ml-[1vw] rounded-lg text-black mb-3">Edit</button> */}
          <button 
          onClick={()=>deleteHandler(i)}
          className="bg-red-600 p-2 ml-[1vw] mb-3 rounded-lg">Delete</button>
        </div>
          </div>         
    )
 })
}
  return (
    <>
      <div className="h-screen">
        <div className="relative">
          <form onSubmit={submithandler}>
            <div className="text-black ml-[3vw] mt-[3vw] w-[90vw] flex gap-10">
              <textarea
                placeholder="Title..."
                className="text h-[10vw]"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                required
              ></textarea>
              <textarea
                placeholder="Description..."
                className="text h-[20svw]"
                value={desc}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <button className=" border-[2px] border-black bg-[#4EFFD8] text-black p-3 text-xl absolute top-[15vw] left-[15vw]">
              Add Task
            </button>
          </form>
        </div>
        <div className="mt-[3vw] w-full mr-[3vw]">
            <div className="flex">
                <h1 className="text-2xl tracking-[5px] ml-[6vw]">Title</h1>
                <h1 className=""></h1>
                <h1 className="text-2xl tracking-[5px] ml-[25vw]">Description</h1>
            </div>
        <hr />
        <ul>{rendertask}</ul>
        </div>
      </div>
    </>
  );
};

export default Forms;
