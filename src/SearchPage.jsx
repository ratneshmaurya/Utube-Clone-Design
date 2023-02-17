import React from 'react'
import "./SearchPage.css";
import TuneSharpIcon from '@mui/icons-material/TuneSharp'; 
import ChannelRow from './ChannelRow'; //first component , its channel name that matches with the searched item
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneSharpIcon/>
                <h2>FILTER</h2>
            </div>
            
            <hr/>

            <ChannelRow
                image="https://avatars.githubusercontent.com/u/59445236?v=4"
                channel="Ratnesh Utube"
                verified
                subs="66k"
                noOfVideos={300}
                description="The best coding channel here , come and let's do it and crack it together"
            />

            <hr/>

            <VideoRow
                views="1.0M"
                subs="659k"
                description="The best coding channel here , come and let's do it and crack it together"
                timestamp="59sec ago"
                channel="Ratnesh Utube"
                title="Let's buils some webappa !!!!"
                image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            />

            <VideoRow
                views="1.0M"
                subs="659k"
                description="The best coding channel here , come and let's do it and crack it together"
                timestamp="59sec ago"
                channel="Ratnesh Utube"
                title="Let's buils some webappa !!!!"
                image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            />
            <VideoRow
                views="1.0M"
                subs="659k"
                description="The best coding channel here , come and let's do it and crack it together"
                timestamp="59sec ago"
                channel="Ratnesh Utube"
                title="Let's buils some webappa !!!!"
                image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            />
            <VideoRow
                views="1.0M"
                subs="659k"
                description="The best coding channel here , come and let's do it and crack it together"
                timestamp="59sec ago"
                channel="Ratnesh Utube"
                title="Let's buils some webappa !!!!"
                image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            />
            <VideoRow
                views="1.0M"
                subs="659k"
                description="The best coding channel here , come and let's do it and crack it together"
                timestamp="59sec ago"
                channel="Ratnesh Utube"
                title="Let's buils some webappa !!!!"
                image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            />

        </div>
    )
}
 
export default SearchPage
