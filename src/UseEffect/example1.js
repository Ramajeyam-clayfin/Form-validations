// import React, { useState, useEffect } from "react";

// const EffectHookExample = () => {
//     const [counter1, setcounter1] = useState(0)
//     const [counter2, setcounter2] = useState(0)
//      const [effect1, seteffect1] = useState(0)
//      const [effect2, seteffect2] = useState(0)
//      const [mount, setmount] = useState(0)
//     //  let render=0;
  
//     useEffect(() => {
//         console.log('I called for mounting and updating hooks')
//     });

//     useEffect(() => {
//         setmount(mount +1)
//       },[]);

//     useEffect(() => {
//         seteffect1(effect1 +1)
//       },[counter1]);

//     useEffect(() => {
//         seteffect2(effect2 +1)
//       },[counter2]);  

    
//     return (
//       <div>
//         <p>Counter 1 : {counter1}</p>
//         <p>Counter 2 : {counter2}</p>
//         <button onClick={() => setcounter1(counter1 + 1)}>
//           Counter 1
//         </button>
//         <button onClick={() => setcounter2(counter2 + 1)}>
//           Counter 1
//         </button>
//         <p>You Called useEffect for Mounting Hook  {mount} Times</p>
//         <p>You Called useEffect for Counter 1 Hook  {effect1} Times</p>
//         <p>You Called useEffect for Counter 2 Hook  {effect2} Times</p>
//         {/* <p>You Called useEffect for Mounting and updating Hook  {render} Times</p> */}
//       </div>
//     )
//   }

//   export default EffectHookExample;