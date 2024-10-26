import {
  blackstoneBricks,
  bucket,
  cryingObsidian,
  ghastTears,
  goldIngot,
  milkBucket,
  netherBrick,
  netheriteBoots,
  netheriteChest,
  netheriteHoe,
  netherrackBlock,
  netherStar,
} from "../../assets/icons/iconImages";
export const netherInitialNodes = [
  {
    id: "1",
    data: {
      img: netherrackBlock,
      title: "Nether",
      description: "Enter the Coding Dimension",
    }, // Replace with your image path
    position: { x: 50, y: 200 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "2",
    data: {
      img: blackstoneBricks,
      title: "Those Were the Days",
      description: "Started Coding Journey with easy Problems on GFG",
    }, // Replace with your image path
    position: { x: 150, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "3",
    data: {
      img: netherBrick,
      title: "A Terrible Fortress",
      description: "Started Competitive Programming on Codechef",
    }, // Replace with your image path
    position: { x: 250, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "4",
    data: {
      img: cryingObsidian,
      title: "Who is Cutting Onions?",
      description: "Cry over DP and Graphs Problems",
    }, // Replace with your image path
    position: { x: 350, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "5",
    data: {
      img: netheriteChest,
      title: "Cover Me in Debris",
      description: "Solved Over 900 Problems on GFG",
    }, // Replace with your image path
    position: { x: 450, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "6",
    data: {
      img: netheriteBoots,
      title: "Hot Tourist Destinations",
      description: "Explored all Data Structures and Algorithms",
    }, // Replace with your image path
    position: { x: 550, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "7",
    data: {
      img: goldIngot,
      title: "Oh Shiny",
      description: "Start with Basic of Web Development",
    }, // Replace with your image path
    position: { x: 150, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "8",
    data: {
      img: ghastTears,
      title: "Uneasy Alliance",
      description: "Practice DSA and Web Development Simultaneously",
    }, // Replace with your image path
    position: { x: 250, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "9",
    data: {
      img: milkBucket,
      title: "A Furious Cocktail",
      description:
        "Practice DSA, Competitive Programming and Web Development Simultaneously",
    }, // Replace with your image path
    position: { x: 350, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "10",
    data: {
      img: netherStar,
      title: "Withering Heights",
      description: "Earned 1 star on Codechef",
    }, // Replace with your image path
    position: { x: 150, y: 250 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "11",
    data: {
      img: netherStar,
      title: "Withering Heights",
      description: "Earned 2 stars on Codechef",
    }, // Replace with your image path
    position: { x: 250, y: 250 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "12",
    data: {
      img: netherStar,
      title: "Withering Heights",
      description: "Earned 3 stars on Codechef",
    }, // Replace with your image path
    position: { x: 350, y: 250 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "13",
    data: {
      img: netherStar,
      title: "Withering Heights",
      description: "Earned 4 stars on Codechef",
    }, // Replace with your image path
    position: { x: 450, y: 250 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "14",
    data: {
      img: bucket,
      title: "How Did We Get Here?",
      description: "Completed 1 year Streak on GFG problem of the day",
    }, // Replace with your image path
    position: { x: 150, y: 350 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "15",
    data: {
      img: netheriteHoe,
      title: "Serious Dedication",
      description:
        "Completed 900+ Competitive Programming Problems on Codechef",
    }, // Replace with your image path
    position: { x: 250, y: 350 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
];

export const netherInitialEdges = [
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
    id: "5-6",
    source: "5",
    target: "6",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "1-7",
    source: "1",
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
    id: "8-9",
    source: "8",
    target: "9",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "1-10",
    source: "1",
    target: "10",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "10-11",
    source: "10",
    target: "11",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "11-12",
    source: "11",
    target: "12",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "12-13",
    source: "12",
    target: "13",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "1-14",
    source: "1",
    target: "14",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "14-15",
    source: "14",
    target: "15",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
];
