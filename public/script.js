// Get video grid element
const videoGrid = document.getElementById('video-grid');

// Create video element
const myVideo = document.createElement('video');
myVideo.muted = true;

// Creating video stream
//let myVideoStream;
// Getting user media, audio and video
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
}).then(stream => {
  //myVideoStream = stream;
  addVideoStream(myVideo, stream);
})

// Adding video stream
function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  });
  // Add video
  videoGrid.append(video);
}