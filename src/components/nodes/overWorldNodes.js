import {
  grassBlock,
  diamond,
  diamondChest,
  enchantedBook,
  flintSteel,
  ironChest,
  ironIngot,
  ironPickaxe,
  lavaBucket,
  obsidian,
  shield,
  stonePickaxe,
  woodenPickaxe,
} from "../../assets/icons/iconImages";
export const overWorldInitialNodes = [
  {
    id: "1",
    data: {
      img: grassBlock,
      title: "Minecraft",
      description: "Spawned in Overworld on 02-11-2002",
    }, // Replace with your image path
    position: { x: 50, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "2",
    data: {
      img: woodenPickaxe,
      title: "Stone Age",
      description: "Completed SSC in Aug 2018 with 93.40% XP!",
    }, // Replace with your image path
    position: { x: 150, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "3",
    data: {
      img: stonePickaxe,
      title: "Getting an Upgrade",
      description: "Got into VJTI for Diploma in Electronics",
    }, // Replace with your image path
    position: { x: 250, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "4",
    data: {
      img: ironIngot,
      title: "Acquire Hardware",
      description: "Completed Diploma in 2021 & Acquired 95.05% XP!",
    }, // Replace with your image path
    position: { x: 350, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "5",
    data: {
      img: ironPickaxe,
      title: "Isn't It Iron Pick",
      description: "Started Btech in EXTC from SPIT (2021)",
    }, // Replace with your image path
    position: { x: 450, y: 300 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "6",
    data: {
      img: lavaBucket,
      title: "Hot Stuff",
      description: "Got the Diploma Certificate in Electronics (2021)",
    }, // Replace with your image path
    position: { x: 450, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "7",
    data: {
      img: ironChest,
      title: "Suit Up",
      description: "Protect Yourself from the COVID-19",
    }, // Replace with your image path
    position: { x: 450, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "8",
    data: {
      img: shield,
      title: "Not Today, Thank You",
      description: "Deflect the Covid-19 with the Vaccine",
    }, // Replace with your image path
    position: { x: 550, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "9",
    data: {
      img: obsidian,
      title: "Ice Bucket Challenge",
      description: "3D in the Bucket (Degree, DSA, Development)",
    }, // Replace with your image path
    position: { x: 550, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "10",
    data: {
      img: flintSteel,
      title: "We Need to Go Deeper",
      description: "Started DP, Graphs, ReactJS and NextJS",
    }, // Replace with your image path
    position: { x: 650, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "11",
    data: {
      img: diamondChest,
      title: "Cover Me with Diamonds",
      description: "Secured Placement in DB (Deutsche Bank)",
    }, // Replace with your image path
    position: { x: 650, y: 250 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "12",
    data: {
      img: enchantedBook,
      title: "Enchanter",
      description: "Got the Degree in Btech in EXTC",
    }, // Replace with your image path
    position: { x: 650, y: 350 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "13",
    data: {
      img: diamond,
      title: "Diamonds!",
      description: "Completed my first Internship at DODAS!",
    }, // Replace with your image path
    position: { x: 550, y: 300 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
];

export const overWorldInitialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    type: "step",
    style: {
      stroke: "#ffffff", // Line color
      strokeWidth: 4, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "4-5",
    source: "4",
    target: "5",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "4-6",
    source: "4",
    target: "6",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "4-7",
    source: "4",
    target: "7",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "7-8",
    source: "7",
    target: "8",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "6-9",
    source: "6",
    target: "9",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "9-10",
    source: "9",
    target: "10",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "5-13",
    source: "5",
    target: "13",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "13-11",
    source: "13",
    target: "11",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "13-12",
    source: "13",
    target: "12",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
];
