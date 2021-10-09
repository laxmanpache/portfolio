import React from 'react'
import '../PageHeader/PageHeader.css';
const PageHeader = (props) => {
    return (
        <div className="container">
            <hr/>
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default PageHeader
