// import React from "react";
// import { useNavigate } from "react-router-dom";
// import buttonSound from "../../assets/sounds/minecraft_click.mp3";
// import { useGameContext } from "../../context/GameContext";
// import useMenu from "../hooks/useMenu";

// const Options = () => {
//   const navigate = useNavigate();
//   const playButtonSound = () => {
//     const audio = new Audio(buttonSound);
//     audio.play();
//   };
//   const [actions, setActions] = useMenu();
//   const { openMenu } = actions;

//   return (
//     <div className=" absolute bottom-10 left-5 flex flex-col gap-2 z-20">
//       {/* <button
//         onClick={(e) => {
//           e.stopPropagation();
//           playButtonSound();
//           navigate("/");
//         }}
//         type="button"
//         className="minecraft-btn w-[10rem] text-white"
//       >
//         <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
//           <span>Quit</span>
//         </div>
//       </button> */}
//       {!actions.openMenu && (
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             playButtonSound();
//             setActions({ openMenu: !openMenu });
//           }}
//           type="button"
//           className="minecraft-btn w-[10rem] text-white"
//         >
//           <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 h-full flex justify-center">
//             <span>Menu</span>
//           </div>
//         </button>
//       )}
//     </div>
//   );
// };

// export default Options;
