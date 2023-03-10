import React from 'react'
import {Avatar} from "@mui/material";
import "./ChannelRow.css";
import VerifiedIcon from '@mui/icons-material/CheckCircleRounded';

function ChannelRow({image ,channel ,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelRow">
           <Avatar className="channelRow__logo" alt={channel} src={image}/>
           <div className="channelRow__text">
               <h4>{channel} {verified && <VerifiedIcon/>}</h4>
               <p>{subs} subscribers • {noOfVideos} videos</p>
               <p>{description}</p>
           </div>

        </div>
    )
}

export default ChannelRow
