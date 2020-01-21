import React, { Component } from "react";
import introVideo from "../assets/intro_page.mp4";
import PropTypes from "prop-types";
import "./FrontPage.css";

class VideoUpload extends Component {
    state = {
        selectedFile: null
    }
    
    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    fileUploadHandler = () => {
        
    }

  render() {
    return (
      <div>
          <input type="file" onChange={this.fileSelectedHandler}/>
          <button onClick={this.fileUploadHandler()}>Upload</button>
      </div>
    );
  }
}

export default VideoUpload;
