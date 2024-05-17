import { NearestFilter, TextureLoader, RepeatWrapping } from "three";

import {
  dirtImg,
  grassTop,
  grassSide,
  stone,
  oakPlanks,
  oakLog,
  oakLogTop,
  cobbleStone,
  mossyCobblestone,
  moss,
  glassImg,
  obsidianImg,
  netherrack,
} from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
dirtTexture.magFilter = NearestFilter;

const grassTopTexture = new TextureLoader().load(grassTop);
grassTopTexture.magFilter = NearestFilter;

const grassSideTexture = new TextureLoader().load(grassSide);
grassSideTexture.magFilter = NearestFilter;

const stoneTexture = new TextureLoader().load(stone);
stoneTexture.magFilter = NearestFilter;

const oakPlanksTexture = new TextureLoader().load(oakPlanks);
oakPlanksTexture.magFilter = NearestFilter;

const oakLogTexture = new TextureLoader().load(oakLog);
oakLogTexture.magFilter = NearestFilter;

const oakLogTopTexture = new TextureLoader().load(oakLogTop);
oakLogTopTexture.magFilter = NearestFilter;

const cobbleStoneTexture = new TextureLoader().load(cobbleStone);
cobbleStoneTexture.magFilter = NearestFilter;

const mossyCobblestoneTexture = new TextureLoader().load(mossyCobblestone);
mossyCobblestoneTexture.magFilter = NearestFilter;

const mossTexture = new TextureLoader().load(moss);
mossTexture.magFilter = NearestFilter;

const glassTexture = new TextureLoader().load(glassImg);
glassTexture.magFilter = NearestFilter;

const obsidianTexture = new TextureLoader().load(obsidianImg);
obsidianTexture.magFilter = NearestFilter;

const groundTexture = new TextureLoader().load(grassTop);
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

const netherGroundTexture = new TextureLoader().load(netherrack);
netherGroundTexture.magFilter = NearestFilter;
netherGroundTexture.wrapS = RepeatWrapping;
netherGroundTexture.wrapT = RepeatWrapping;

export {
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
  groundTexture,
  netherGroundTexture,
};
