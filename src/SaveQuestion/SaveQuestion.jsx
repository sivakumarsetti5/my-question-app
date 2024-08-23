"use client"
import React,{useState} from 'react'
import axios from 'axios'
export const SaveQuestion = () => {
    const[question,setQuestion] = useState('')

    const handleSaveQuestion = async() =>{
        try{
            if(question){
            const response = await axios.post('http://localhost:2024/que/add-que',{question})
            console.log(response?.data)
            const{affectedRows} = response?.data
            if(affectedRows>0){
                alert('success')
                setQuestion('')
            }
            else{
                alert('not inserted')
            }}
            else{
                alert('give some inputs')
            }
        }catch(ex){

        }            
    }
    return (
      <div>
        <h3>Add Questions to mysql database</h3>
        <p><b>Question:</b><textarea value={question} onChange={(event)=>setQuestion(event.target.value)}/></p>
        <p><button onClick={handleSaveQuestion}>Add Question</button></p>
      </div>
    )
}


