import React, { useState, useEffect } from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";
import mockData from "./lib/mockData/comments";
import type { CommentWithReplies } from "./types";

// What will be longed and in what order?

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setCounter(5);
//     console.log(counter);
//   }, []);
//   console.log(counter);

//   return (
//     <div>
//       <p>Counter value: {counter}</p>
//     </div>
//   );
// };

// When you click counter fast why it display incorrect number and what is the solution?

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     // setCounter(5)
//     // setTimeout(() => {
//     //   setCounter(5);
//     // }, 1500);
//     console.log(counter)
//   }, []);
//   console.log(counter)

//   return (
//     <div>
//       <p>Counter value: {counter} </p>
//       <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
//     </div>
//   );
// };

// The solution is to pass updater function to the setter hook

// onClick={() => setTimeout(() => setCounter(counter + 1), 300)}

// Mouse tracker example where we are showcasing the usecase of a cleanup function. Remove the cleanup function and observer the logs.

// const MouseTracker = () => {
//   const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });

//   React.useEffect(() => {
//     const handleMouseMoving = (e) => {
//       console.log("mouse is moving");
//       setCoordinates({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMoving);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMoving);
//     };
//   }, []);

//   return (
//     <h1>
//       {coordinates.x} / {coordinates.y}
//     </h1>
//   );
// };

// const App = () => {
//   const [isTracker, setIsTracker] = React.useState(false);

//   return (
//     <>
//       <button onClick={() => setIsTracker(!isTracker)}>
//         Toggle Mouse Tracker
//       </button>
//       {isTracker && <MouseTracker />}
//     </>
//   );
// };

// export default App;
