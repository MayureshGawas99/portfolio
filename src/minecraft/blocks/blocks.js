import {
  cobbleStone,
  dirtImg,
  glassImg,
  grassSide,
  moss,
  mossyCobblestone,
  oakLog,
  oakPlanks,
  obsidianImg,
  stone,
} from "../images/images";
import {
  dirtTexture,
  grassTopTexture,
  grassSideTexture,
  stoneTexture,
  oakPlanksTexture,
  oakLogTexture,
  oakLogTopTexture,
  cobbleStoneTexture,
  mossyCobblestoneTexture,
  mossTexture,
  glassTexture,
  obsidianTexture,
} from "../images/textures";
import {
  dirtPlace1,
  dirtPlace2,
  dirtPlace3,
  dirtPlace4,
  glassPlace1,
  glassPlace2,
  glassPlace3,
  grassPlace1,
  grassPlace2,
  grassPlace3,
  grassPlace4,
  mossPlace1,
  mossPlace2,
  mossPlace3,
  mossPlace4,
  mossPlace5,
  stonePlace1,
  stonePlace2,
  stonePlace3,
  stonePlace4,
  woodPlace1,
  woodPlace2,
  woodPlace3,
  woodPlace4,
} from "../sounds/sounds";

export const blocks = {
  dirt: {
    placed: [dirtPlace1, dirtPlace2, dirtPlace3, dirtPlace4],
    breaks: [dirtPlace1, dirtPlace2, dirtPlace3, dirtPlace4],
    right: dirtTexture,
    left: dirtTexture,
    top: dirtTexture,
    bottom: dirtTexture,
    front: dirtTexture,
    back: dirtTexture,
    image: dirtImg,
  },
  grass_block: {
    placed: [grassPlace1, grassPlace2, grassPlace3, grassPlace4],
    breaks: [grassPlace1, grassPlace2, grassPlace3, grassPlace4],
    right: grassSideTexture,
    left: grassSideTexture,
    top: grassTopTexture,
    bottom: dirtTexture,
    front: grassSideTexture,
    back: grassSideTexture,
    image: grassSide,
  },
  stone: {
    placed: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    breaks: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    right: stoneTexture,
    left: stoneTexture,
    top: stoneTexture,
    bottom: stoneTexture,
    front: stoneTexture,
    back: stoneTexture,
    image: stone,
  },
  oak_plank: {
    placed: [woodPlace1, woodPlace2, woodPlace3, woodPlace4],
    breaks: [woodPlace1, woodPlace2, woodPlace3, woodPlace4],
    right: oakPlanksTexture,
    left: oakPlanksTexture,
    top: oakPlanksTexture,
    bottom: oakPlanksTexture,
    front: oakPlanksTexture,
    back: oakPlanksTexture,
    image: oakPlanks,
  },
  oak_log: {
    placed: [woodPlace1, woodPlace2, woodPlace3, woodPlace4],
    breaks: [woodPlace1, woodPlace2, woodPlace3, woodPlace4],
    right: oakLogTexture,
    left: oakLogTexture,
    top: oakLogTopTexture,
    bottom: oakLogTopTexture,
    front: oakLogTexture,
    back: oakLogTexture,
    image: oakLog,
  },
  cobblestone: {
    placed: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    breaks: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    right: cobbleStoneTexture,
    left: cobbleStoneTexture,
    top: cobbleStoneTexture,
    bottom: cobbleStoneTexture,
    front: cobbleStoneTexture,
    back: cobbleStoneTexture,
    image: cobbleStone,
  },
  mossy_cobblestone: {
    placed: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    breaks: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    right: mossyCobblestoneTexture,
    left: mossyCobblestoneTexture,
    top: mossyCobblestoneTexture,
    bottom: mossyCobblestoneTexture,
    front: mossyCobblestoneTexture,
    back: mossyCobblestoneTexture,
    image: mossyCobblestone,
  },
  moss: {
    placed: [mossPlace1, mossPlace2, mossPlace3, mossPlace4, mossPlace5],
    breaks: [mossPlace1, mossPlace2, mossPlace3, mossPlace4, mossPlace5],
    right: mossTexture,
    left: mossTexture,
    top: mossTexture,
    bottom: mossTexture,
    front: mossTexture,
    back: mossTexture,
    image: moss,
  },
  glass: {
    placed: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    breaks: [glassPlace1, glassPlace2, glassPlace3],
    right: glassTexture,
    left: glassTexture,
    top: glassTexture,
    bottom: glassTexture,
    front: glassTexture,
    back: glassTexture,
    image: glassImg,
  },
  obsidian: {
    placed: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    breaks: [stonePlace1, stonePlace2, stonePlace3, stonePlace4],
    right: obsidianTexture,
    left: obsidianTexture,
    top: obsidianTexture,
    bottom: obsidianTexture,
    front: obsidianTexture,
    back: obsidianTexture,
    image: obsidianImg,
  },
};