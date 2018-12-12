import React, {Component} from 'react'

class YouTubeDebugger extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
          }
        }
      }
  }

  handleBitrate = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {
      ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  handleResolution = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.handleBitrate}></button>
        <button className='resolution' onClick={this.handleResolution}></button>
      </div>
    )
  }

}

export default YouTubeDebugger
