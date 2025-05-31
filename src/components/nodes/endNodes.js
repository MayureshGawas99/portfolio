import {
  dodas,
  db,
  structureBlock,
  elytra,
  lightningRod,
  beacon,
  observer,
  book_quill,
  honeyBlock,
  emptyMap,
  chest,
  wheat,
  wheatSeeds,
  redstoneRepeater,
  enderEye,
  carvedPumpkin,
  netherStar,
} from "../../assets/icons/iconImages";

export const endInitialNodes = [
  {
    id: "1",
    data: {
      img: dodas,
      title: "Internship at DODAS",
      description: "Full Stack Developer Intern",
    }, // Replace with your image path
    position: { x: 50, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },

  {
    id: "2",
    data: {
      img: structureBlock,
      title: "Architects of Air and Logic",
      description: "Built responsive and functional web apps.",
    }, // Replace with your image path
    position: { x: 200, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "3",
    data: {
      img: elytra,
      title: "Sonic Silk Roads",
      description: "Improved performance and scalability",
    }, // Replace with your image path
    position: { x: 200, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "4",
    data: {
      img: observer,
      title: "The Nether Mirror",
      description: "Reviewed code for quality and consistency.",
    }, // Replace with your image path
    position: { x: 200, y: 250 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "5",
    data: {
      img: beacon,
      title: "Whispers in the Beacon",
      description: "Shared regular project updates.",
    }, // Replace with your image path
    position: { x: 200, y: 350 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "6",
    data: {
      img: lightningRod,
      title: "Lightning in a Cauldron",
      description: "Proposed creative, effective solutions.",
    }, // Replace with your image path
    position: { x: 200, y: 450 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "7",
    data: {
      img: book_quill,
      title: "Scrolls of the Overworld",
      description: "Wrote and updated technical docs.",
    },
    position: { x: 200, y: 550 },
    type: "custom",
    style: { width: "50px", height: "50px" },
  },
  {
    id: "8",
    data: {
      img: db,
      title: "Deutsche Bank",
      description: "Graduate Analyst",
    }, // Replace with your image path
    position: { x: 400, y: 50 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },

  {
    id: "9",
    data: {
      img: netherStar,
      title: "Crown of the Realm",
      description:
        "Recognized for outstanding performance and excellence in the RFT department.",
    }, // Replace with your image path
    position: { x: 550, y: 150 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "10",
    data: {
      img: honeyBlock,
      title: "Sticky Situation",
      description: "Installed and configured build agents for CI/CD workflows.",
    }, // Replace with your image path
    position: { x: 550, y: 250 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "11",
    data: {
      img: emptyMap,
      title: "Subspace Bubble",
      description:
        "Successfully moved jobs to new agents with minimal downtime.",
    }, // Replace with your image path
    position: { x: 550, y: 350 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "12",
    data: {
      img: wheat,
      title: "The Parrots and Bats",
      description:
        "Revamped the UI for better user experience and performance.",
    }, // Replace with your image path
    position: { x: 550, y: 450 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "13",
    data: {
      img: chest,
      title: "War Pigs",
      description:
        "Improved backend performance and implemented access controls.",
    }, // Replace with your image path
    position: { x: 550, y: 550 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },

  {
    id: "14",
    data: {
      img: redstoneRepeater,
      title: "Redstone Whispers",
      description: "Automated repetitive tasks using custom scripts.",
    }, // Replace with your image path
    position: { x: 550, y: 650 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "15",
    data: {
      img: carvedPumpkin,
      title: "The Golem Protocol",
      description:
        "Built a system to manage and monitor services independently.",
    }, // Replace with your image path
    position: { x: 550, y: 750 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "16",
    data: {
      img: enderEye,
      title: "Eyes of the End",
      description: "Showcased project at the highest leadership level.",
    }, // Replace with your image path
    position: { x: 550, y: 850 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
  {
    id: "17",
    data: {
      img: wheatSeeds,
      title: "A Seedy Place",
      description: "Installed and configured SSL certificates securely.",
    }, // Replace with your image path
    position: { x: 550, y: 950 },
    type: "custom", // Use custom type
    style: { width: "50px", height: "50px" }, // Set desired size
  },
];

export const endInitialEdges = [
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
    id: "1-3",
    source: "1",
    target: "3",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "1-4",
    source: "1",
    target: "4",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "1-5",
    source: "1",
    target: "5",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "1-6",
    source: "1",
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
    id: "8-10",
    source: "8",
    target: "10",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "8-11",
    source: "8",
    target: "11",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "8-12",
    source: "8",
    target: "12",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "8-13",
    source: "8",
    target: "13",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "8-14",
    source: "8",
    target: "14",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "8-15",
    source: "8",
    target: "15",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "8-16",
    source: "8",
    target: "16",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
  {
    id: "8-17",
    source: "8",
    target: "17",
    type: "step",
    style: {
      stroke: "#fff", // Line color
      strokeWidth: 5, // Width of the line
      border: "2px solid black", // Border (adjust if needed)
    },
  },
];
