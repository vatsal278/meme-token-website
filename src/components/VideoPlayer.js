// import React from 'react';
// import Player from 'react-player';

// export const VideoPlayer = ({ show }) => {
//   return (
//     <div className={`flex justify-center items-center h-screen bg-black transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
//       <Player
//         url="/video.mp4" // Update with the correct path to your video file
//         controls={false} // Hide controls if needed
//         autoPlay = {true}
//         muted ={true}// Optional: mute the video if you don't want sound from it
//         width="640px" // Adjust width as desired
//         height="360px" // Adjust height as desired
//       />
//     </div>
//   );
// };
// import React from 'react';

// export const VideoPlayer = ({ show }) => {
//   return (
//     <div style={{ display: show ? 'block' : 'none' }}>
//       <video autoPlay muted loop>
//         <source src="/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };


import React from 'react';

export const VideoPlayer = ({ show }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <video autoPlay muted loop>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio autoPlay once>
        <source src="/audio.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};
// import React from 'react';

// export const VideoPlayer = ({ show }) => {
//   return (
//     <div style={{ display: show ? 'block' : 'none' }}>
//       <video autoPlay loop style={{ width: '100%' }}>
//         <source src="your-video-file.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <audio autoPlay loop>
//         <source src="/audio.mp3" type="audio/mp3" />
//         Your browser does not support the audio tag.
//       </audio>
//     </div>
//   );
// };
