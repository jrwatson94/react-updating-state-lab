// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }
    changeBitRate = () => {
        this.state.settings.bitrate = 12;
        console.log(this.state.settings)
    }
    changeResolution = () => {
        this.state.settings.video.resolution = '720p'
        console.log(this.state.settings.video)
    }

    render(){
        return (
            <div>
                <button onClick={this.changeBitRate} className="bitrate">Change Bitrate</button>
                <button onClick={this.changeResolution} className="resolution">Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;