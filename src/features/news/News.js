import React from "react"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './News.css'
function News() {
    const newsArticle=(heading,subtitle)=>(
        <div className="news-article">
            <div className="article-left">
            <FiberManualRecordIcon/>

            </div>
            <div className="article-right">
                <h2>{heading}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
        
    )
  return (
    <div className="news">
        <div className="news-header">
            <h1>LinkedIn News</h1>
            <InfoIcon/>
        </div>
        {newsArticle('Lets build the LinkedIn Clone','Top News-1000 readers')}
        {newsArticle('Using ReactJS','Top News-800 readers')}
        {newsArticle('Firebase Authentication','Top News-600 readers')}
        {newsArticle('React Hooks','Top News-20 readers')}
        
    </div>
    
  )
}
export default News