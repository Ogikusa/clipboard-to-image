import * as clippy from "https://deno.land/x/clippy@v1.0.0/mod.ts";
import { Config, configFilePath, ensureConfigFile } from "./config.ts";

await ensureConfigFile();
const configFile = await Deno.readFile(configFilePath);
const decoder = new TextDecoder();
const configText = decoder.decode(configFile);
const configJSON: Config = JSON.parse(configText);
const data = await clippy.readImage();

if (data.length === 0) Deno.exit();

const date = new Date();
await Deno.writeFile(
  `${configJSON.path}\\${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()}-${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}.png`,
  data
);
