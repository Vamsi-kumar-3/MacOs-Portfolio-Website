import React,{useEffect, useState} from 'react'
import Markdown from 'react-markdown'//Markdown text into HTML/React elements but not used
import MacWindow from './MacWindow'
import './note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Note = ({windowName,setwindowState}) => {
  const [markdown, setMarkdown] = useState(null)
  useEffect(()=>{
    fetch("/note.txt")
    .then(res=>res.text())
    .then(text=>setMarkdown(text))
  },[])
  return (
    <MacWindow windowName={windowName}  setwindowState={setwindowState}>
      <div className="note-window">
        {markdown ? <SyntaxHighlighter language='javascript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
      </div>
    </MacWindow>
  )
}

export default Note
