import {
  coal,
  cobblestone,
  diamond,
  diamondAxe,
  diamondBlock,
  diamondBoots,
  diamondChest,
  diamondHelmet,
  diamondHoe,
  diamondLeggings,
  diamondPickaxe,
  diamondShovel,
  diamondSword,
  goldBlock,
  goldIngot,
  ironBlock,
  ironIngot,
  ironPickaxe,
  ladder,
  oakDoor,
  oakFence,
  oakFenceGate,
  oakPlanks,
  oakTrapdoor,
  redstone,
  stick,
  string,
  wool,
} from "../assets/icons/iconImages";
import {
  bootstrapLogo,
  cssLogo,
  dockerLogo,
  expressLogo,
  flaskLogo,
  githubLogo,
  gitLogo,
  htmlLogo,
  javaLogo,
  jsLogo,
  mongoDBLogo,
  nextLogo,
  nodeJSLogo,
  pythonLogo,
  reactLogo,
  sqlLogo,
  tailwindLogo,
} from "../minecraft/images/skillsLogo";

export const items = [
  {
    id: 1,
    name: "Stick",
    icon: stick,
  },
  {
    id: 2,
    name: "Oak Planks",
    icon: oakPlanks,
  },
  {
    id: 3,
    name: "Cobblestone",
    icon: cobblestone,
  },
  {
    id: 4,
    name: "Coal",
    icon: coal,
  },
  {
    id: 5,
    name: "Redstone",
    icon: redstone,
  },
  {
    id: 6,
    name: "Diamond",
    icon: diamond,
  },
  {
    id: 7,
    name: "Iron Ingot",
    icon: ironIngot,
  },
  {
    id: 8,
    name: "Gold Ingot",
    icon: goldIngot,
  },
  {
    id: 9,
    name: "White Wool",
    icon: wool,
  },
  {
    id: 10,
    name: "String",
    icon: string,
  },
];

export const allReciepes = {
  "Diamond DiamondDiamondDiamondDiamondDiamondDiamondDiamond": {
    name: "Diamond Chestplate",
    icon: diamondChest,
  },
  "DiamondDiamondDiamond Stick  Stick ": {
    name: "Dimond Pickaxe",
    icon: diamondPickaxe,
  },
  "DiamondDiamondDiamondDiamond DiamondDiamond Diamond": {
    name: "Diamond Leggings",
    icon: diamondLeggings,
  },
  "DiamondDiamondDiamondDiamond Diamond   ": {
    name: "Diamond Helmet",
    icon: diamondHelmet,
  },
  "   DiamondDiamondDiamondDiamond Diamond": {
    name: "Diamond Helmet",
    icon: diamondHelmet,
  },
  "   Diamond DiamondDiamond Diamond": {
    name: "Diamond Boots",
    icon: diamondBoots,
  },
  "DiamondDiamond StickDiamond Stick  ": {
    name: "Diamond Axe",
    icon: diamondAxe,
  },
  " DiamondDiamond StickDiamond Stick ": {
    name: "Diamond Axe",
    icon: diamondAxe,
  },
  "Diamond  Diamond  Stick  ": {
    name: "Diamond Sword",
    icon: diamondSword,
  },
  " Diamond  Diamond  Stick ": {
    name: "Diamond Sword",
    icon: diamondSword,
  },
  "  Diamond  Diamond  Stick": {
    name: "Diamond Sword",
    icon: diamondSword,
  },
  "Diamond  Stick  Stick  ": {
    name: "Diamond Shovel",
    icon: diamondShovel,
  },
  " Diamond  Stick  Stick ": {
    name: "Diamond Shovel",
    icon: diamondShovel,
  },
  "  Diamond  Stick  Stick": {
    name: "Diamond Shovel",
    icon: diamondShovel,
  },
  " DiamondDiamond Stick  Stick ": {
    name: "Diamond Hoe",
    icon: diamondHoe,
  },
  "DiamondDiamond Stick  Stick  ": {
    name: "Diamond Hoe",
    icon: diamondHoe,
  },
  "Stick StickStickStickStickStick Stick": {
    name: "Ladder",
    icon: ladder,
  },
  "StickOak PlanksStickStickOak PlanksStick   ": {
    name: "Oak Fence",
    icon: oakFence,
  },
  "   StickOak PlanksStickStickOak PlanksStick": {
    name: "Oak Fence",
    icon: oakFence,
  },
  "   Oak PlanksStickOak PlanksOak PlanksStickOak Planks": {
    name: "Oak Fencegate",
    icon: oakFenceGate,
  },
  "Oak PlanksStickOak PlanksOak PlanksStickOak Planks   ": {
    name: "Oak Fencegate",
    icon: oakFenceGate,
  },
  "Oak PlanksOak PlanksOak PlanksOak PlanksOak PlanksOak Planks   ": {
    name: "Oak Trapdoor",
    icon: oakTrapdoor,
  },
  "   Oak PlanksOak PlanksOak PlanksOak PlanksOak PlanksOak Planks": {
    name: "Oak Trapdoor",
    icon: oakTrapdoor,
  },
  "Oak PlanksOak Planks Oak PlanksOak Planks Oak PlanksOak Planks ": {
    name: "Oak Door",
    icon: oakDoor,
  },
  " Oak PlanksOak Planks Oak PlanksOak Planks Oak PlanksOak Planks": {
    name: "Oak Door",
    icon: oakDoor,
  },
  DiamondDiamondDiamondDiamondDiamondDiamondDiamondDiamondDiamond: {
    name: "Block of Diamond",
    icon: diamondBlock,
  },
  "Iron IngotIron IngotIron IngotIron IngotIron IngotIron IngotIron IngotIron IngotIron Ingot":
    {
      name: "Block of Iron",
      icon: ironBlock,
    },
  "Gold IngotGold IngotGold IngotGold IngotGold IngotGold IngotGold IngotGold IngotGold Ingot":
    {
      name: "Block of Gold",
      icon: goldBlock,
    },
};

export const allSkills = [
  {
    skill: "ReactJS",
    icon: reactLogo,
    craft: "Diamond Helmet",
    craftIcon: diamondHelmet,
  },
  {
    skill: "NextJS",
    icon: nextLogo,
    craft: "Diamond Chestplate",
    craftIcon: diamondChest,
  },
  {
    skill: "MongoDB",
    icon: mongoDBLogo,
    craft: "Diamond Leggings",
    craftIcon: diamondLeggings,
  },
  {
    skill: "ExpressJS",
    icon: expressLogo,
    craft: "Diamond Boots",
    craftIcon: diamondBoots,
  },
  {
    skill: "Docker",
    icon: dockerLogo,
    craft: "Block of Diamond",
    craftIcon: diamondBlock,
  },
  {
    skill: "BootstrapCSS",
    icon: bootstrapLogo,
    craft: "Diamond Sword",
    craftIcon: diamondSword,
  },
  {
    skill: "TailwindCSS",
    icon: tailwindLogo,
    craft: "Diamond Axe",
    craftIcon: diamondAxe,
  },
  {
    skill: "NodeJS",
    icon: nodeJSLogo,
    craft: "Diamond Pickaxe",
    craftIcon: diamondPickaxe,
  },
  {
    skill: "Git",
    icon: gitLogo,
    craft: "Diamond Shovel",
    craftIcon: diamondShovel,
  },
  {
    skill: "Pyhton",
    icon: pythonLogo,
    craft: "Diamond Hoe",
    craftIcon: diamondHoe,
  },
  {
    skill: "Flask",
    icon: flaskLogo,
    craft: "Ladder",
    craftIcon: ladder,
  },
  {
    skill: "Java",
    icon: javaLogo,
    craft: "Oak Fence",
    craftIcon: oakFence,
  },
  {
    skill: "GitHub",
    icon: githubLogo,
    craft: "Oak Fencegate",
    craftIcon: oakFenceGate,
  },
  {
    skill: "SQL",
    icon: sqlLogo,
    craft: "Oak Trapdoor",
    craftIcon: oakTrapdoor,
  },

  {
    skill: "HTML",
    icon: htmlLogo,
    craft: "Oak Door",
    craftIcon: oakDoor,
  },
  {
    skill: "JavaScript",
    icon: jsLogo,
    craft: "Block of Iron",
    craftIcon: ironBlock,
  },
  {
    skill: "CSS",
    icon: cssLogo,
    craft: "Block of Gold",
    craftIcon: goldBlock,
  },
];
