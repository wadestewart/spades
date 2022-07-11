// import React, { useRef } from "react";

// const CameraAndMicAccess = () => {
//     const videoRef = useRef(null);

//     const getVideo = () => {
//         navigator.mediaDevices
//             .getUserMedia({ video: { width: 300 } })
//             .then(stream => {
//                 let video = videoRef.current;
//                 video.srcObject = stream;
//                 video.play();
//             })
//             .catch(err => {
//                 console.error("error:", err);
//             });
//     };

//     return (
//         <div>
//             <div>
//                 <button>Take a photo</button>
//                 <video ref={videoRef} />
//             </div>
//         </div>
//     );
// };

// export default CameraAndMicAccess;
