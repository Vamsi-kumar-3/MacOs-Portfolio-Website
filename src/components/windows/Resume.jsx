import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'
const Resume = ({windowName,setwindowState}) => {
  return (
    <div>
      <MacWindow windowName={windowName}  setwindowState={setwindowState}>
        <div className="resume-window">
            <iframe src="/vamsi.pdf" frameborder="0"></iframe>
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
