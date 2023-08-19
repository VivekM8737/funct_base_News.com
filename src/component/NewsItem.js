import React from 'react'

const NewsItem =(props)=> {
        let { title, description, imageUrl, newsUrl, author, date }=props
        return (

            <div>
                <div className="card my-2">
                    <img src={!imageUrl ? "https://static.vecteezy.com/system/resources/previews/001/826/301/original/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem