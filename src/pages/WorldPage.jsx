import React, { useContext } from "react";
import Slide from "../components/Slide";
import house from "../models/house.glb"; // Adjust the path as needed
import butcher_house from "../models/butcher_house.glb"; // Adjust the path as needed
import fishermen_house from "../models/fishermen_house.glb"; // Adjust the path as needed
import cartographer_house from "../models/cartographer_house.glb"; // Adjust the path as needed
import armorer_house from "../models/armorer_house.glb"; // Adjust the path as needed
import toolsmith_house from "../models/toolsmith_house.glb"; // Adjust the path as needed
import cleric_house from "../models/cleric_house.glb"; // Adjust the path as needed
import trading_hall from "../models/trading_hall.glb"; // Adjust the path as needed
import nether_portal from "../models/nether_portal.glb"; // Adjust the path as needed
import iron_farm from "../models/iron_farm.glb"; // Adjust the path as needed
import bee_farm from "../models/bee_farm.glb"; // Adjust the path as needed
import beacon from "../models/beacon.glb"; // Adjust the path as needed
import potato_farm from "../models/potato_farm.glb"; // Adjust the path as needed
import villager_breeder from "../models/villager_breeder.glb"; // Adjust the path as needed
import { AppContext } from "../context/AppContext";
import buttonSound from "../assets/sounds/minecraft_click.mp3";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    text: "This is the first build I created in my Minecraft world, and I’m really proud of how it turned out! It features a grand clock tower, intricate wooden details, and cozy balconies decorated with flowers. The mix of wood and stone gives it a medieval charm, while the warm lighting adds a welcoming feel. This build was a fun challenge, and it’s the perfect start to my Minecraft creations!",
    model: house,
    position: [0, 25, 200],
  },
  {
    text: "The next build I created in my Minecraft world was a villager trading hall, designed for both function and aesthetics. It features a grand central dome, wooden framework, and lush vines creeping along the walls, giving it a rustic, lived-in feel. The spacious layout ensures easy access to all villagers, while large windows bring in natural light. This build makes trading efficient while adding a medieval charm to my world!",
    model: trading_hall,
    position: [0, 25, -200],
  },
  {
    text: "The next build I created in my Minecraft world was a Nether portal, designed to blend seamlessly with the environment while adding a mystical touch. It features a tall, elegant structure made of stone and wood, with vines creeping along the sides for a natural look. The glowing portal is framed by detailed architecture and surrounded by a lush garden with vibrant flowers and soft lighting. This build serves as a magical gateway to the Nether while enhancing the beauty of my world!",
    model: nether_portal,
    position: [0, 25, 100],
  },
  {
    text: "The next build in my Minecraft world was an iron farm, designed with both efficiency and aesthetics in mind. It features a towering medieval-style structure with stone and wood elements, topped with a flag for a grand look. The farm includes a water system and a drop chute for collecting iron efficiently. With its fortress-like design and functional layout, this build not only provides a steady supply of iron but also adds a strong, industrial feel to my world!",
    model: iron_farm,
    position: [150, 25, 0],
  },
  {
    text: "The next build in my Minecraft world was a bee farm, designed to be both functional and visually appealing. It features a cozy cottage-style structure with a sloped, plant-covered roof that blends beautifully into nature. The warm wooden tones, lantern lighting, and vibrant flowers surrounding the entrance create a peaceful atmosphere for bees to thrive. This build not only provides a steady supply of honey and wax but also adds a charming, eco-friendly touch to my world!",
    model: bee_farm,
    position: [0, 10, 80],
  },
  {
    text: "The next build in my Minecraft world was a beacon tower, designed to stand tall as a powerful landmark. Built with a mix of wood and stone, the structure has a medieval-inspired design with layered balconies and sturdy supports. The beacon at its core shines brightly, casting its effects across the land. This build not only serves as a functional boost for my world but also adds a grand, towering presence to the skyline!",
    model: beacon,
    position: [0, 10, 80],
  },
  {
    text: "The next build in my Minecraft world was a potato farm, designed as a charming windmill to blend functionality with beauty. The towering wooden structure features a large rotating windmill, detailed balconies, and lush greenery climbing its sides. The base is surrounded by vibrant flowers and farmland, creating a peaceful countryside feel. This build not only provides a steady supply of potatoes but also adds a picturesque, rustic charm to my world!",
    model: potato_farm,
    position: [0, 25, -150],
  },
  {
    text: "The next build in my Minecraft world was a villager breeder, designed as a cozy medieval-style house. Featuring a mix of stone and wood, the structure has a charming sloped roof, a small tower, and lush greenery adding life to the build. Warm lantern lighting and flower boxes create a welcoming atmosphere for the villagers inside. This build ensures a steady supply of new villagers while maintaining the rustic beauty of my world!",
    model: villager_breeder,
    position: [0, 10, -80],
  },
  {
    text: "The next build in my Minecraft world was the cleric's house, designed with a mystical and medieval touch. Featuring a tall, pointed roof and a cozy brick chimney, the structure exudes an enchanting charm. The warm glow from the fireplace and lanterns enhances the magical feel, while the surrounding flowers add a peaceful atmosphere. This build serves as a home for my cleric villagers, providing easy access to potion trades and mystical goods!",
    model: cleric_house,
    position: [-80, 10, 0],
  },
  {
    text: "The next build in my Minecraft world was the toolsmith's house, a cozy yet functional workshop for crafting the finest gear. Built with a mix of stone, wood, and brick, the house features a sturdy chimney and a rustic outdoor workspace. The windows and flower accents bring warmth to the design, making it feel like a true blacksmith's retreat. This build provides a perfect place for trading high-quality tools and weapons with my toolsmith villagers!",
    model: toolsmith_house,
    position: [80, 10, 0],
  },
  {
    text: "The next build in my Minecraft world was the armorer's house, a compact yet detailed forge where the finest armor is crafted. The combination of wood, stone, and brick gives it a sturdy, blacksmith-style aesthetic. A functional outdoor workstation and a cozy entrance make this a great spot for trading high-quality armor with my armorer villagers. The lanterns and flower decorations add a nice rustic charm to the build!",
    model: armorer_house,
    position: [80, 10, 0],
  },
  {
    text: "The next build in my Minecraft world was the cartographer's house, a charming and cozy home perfect for a villager who specializes in maps. With its rustic wooden design, brick chimney, and flower-lined entrance, it blends beautifully into the village. This build provides the perfect spot for trading maps and unlocking new adventures across the world!",
    model: cartographer_house,
    position: [-80, 10, 0],
  },
  {
    text: "The next build in my Minecraft world was the fisherman’s house, a peaceful waterside retreat perfect for a villager who makes a living from the sea. Built with a cozy wooden and stone design, a small dock, and a warm brick chimney, this home feels right at place near the water. It's the ideal spot for trading fish, barrels, and other oceanic goods!",
    model: fishermen_house,
    position: [80, 10, 0],
  },
  {
    text: "The butcher's house in my Minecraft world is a cozy, rustic home perfect for a villager who provides fresh meats to the community. Built with a combination of wood, brick, and stone, the house has a warm and inviting look. Barrels and crates line the exterior, giving it a market-like feel where meats are prepared and stored. It's a perfect blend of practicality and charm!",
    model: butcher_house,
    position: [80, 10, 0],
  },
];
const WorldPage = () => {
  const { currentSlide } = useContext(AppContext);
  const navigate = useNavigate();
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  return (
    <div className="flex flex-col h-screen bg-dirt">
      <div className="relative h-screen bg-black/50">
        <button
          onClick={() => {
            playButtonSound();
            navigate("/");
          }}
          type="button"
          className="minecraft-btn w-[6rem] text-white absolute top-6 right-6 z-50"
        >
          <div className="border-[3px] border-b-[4px] border-b-[#585858] border-r-[#585858] border-t-[#A8A8A8] border-l-[#A8A8A8] w-full py-1 px-2 h-full flex justify-center items-center">
            <span>Back</span>
          </div>
        </button>
        <Slide data={slides[currentSlide]} size={slides.length} />
      </div>
    </div>
  );
};

export default WorldPage;
