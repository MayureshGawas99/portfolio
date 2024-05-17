import { NearestFilter, TextureLoader } from "three";
import {
  bootstrapLogo,
  cssLogo,
  dockerLogo,
  expressLogo,
  flaskLogo,
  gitLogo,
  githubLogo,
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
} from "./skillsLogo";

const reactTexture = new TextureLoader().load(reactLogo);
reactTexture.magFilter = NearestFilter;

const nextTexture = new TextureLoader().load(nextLogo);
nextTexture.magFilter = NearestFilter;

const mongoDBTexture = new TextureLoader().load(mongoDBLogo);
mongoDBTexture.magFilter = NearestFilter;

const expressTexture = new TextureLoader().load(expressLogo);
expressTexture.magFilter = NearestFilter;

const nodeJSTexture = new TextureLoader().load(nodeJSLogo);
nodeJSTexture.magFilter = NearestFilter;

const bootstrapTexture = new TextureLoader().load(bootstrapLogo);
bootstrapTexture.magFilter = NearestFilter;

const tailwindTexture = new TextureLoader().load(tailwindLogo);
tailwindTexture.magFilter = NearestFilter;

const gitTexture = new TextureLoader().load(gitLogo);
gitTexture.magFilter = NearestFilter;

const flaskTexture = new TextureLoader().load(flaskLogo);
flaskTexture.magFilter = NearestFilter;

const pythonTexture = new TextureLoader().load(pythonLogo);
pythonTexture.magFilter = NearestFilter;

const javaTexture = new TextureLoader().load(javaLogo);
javaTexture.magFilter = NearestFilter;

const githubTexture = new TextureLoader().load(githubLogo);
githubTexture.magFilter = NearestFilter;

const dockerTexture = new TextureLoader().load(dockerLogo);
dockerTexture.magFilter = NearestFilter;

const sqlTexture = new TextureLoader().load(sqlLogo);
sqlTexture.magFilter = NearestFilter;

const htmlTexture = new TextureLoader().load(htmlLogo);
htmlTexture.magFilter = NearestFilter;

const cssTexture = new TextureLoader().load(cssLogo);
cssTexture.magFilter = NearestFilter;

const jsTexture = new TextureLoader().load(jsLogo);
jsTexture.magFilter = NearestFilter;

export {
  reactTexture,
  nextTexture,
  mongoDBTexture,
  expressTexture,
  nodeJSTexture,
  bootstrapTexture,
  tailwindTexture,
  gitTexture,
  flaskTexture,
  pythonTexture,
  javaTexture,
  githubTexture,
  dockerTexture,
  sqlTexture,
  htmlTexture,
  cssTexture,
  jsTexture,
};
