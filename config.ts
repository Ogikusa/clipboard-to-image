export const configFilePath = "./config.json";

export interface Config {
  path: string;
}

export const defaultConfig: Config = {
  path: "./",
};

export async function ensureConfigFile() {
  try {
    await Deno.stat(configFilePath);
    return;
  } catch {
    const encoder = new TextEncoder();
    await Deno.writeFile(configFilePath, encoder.encode(JSON.stringify(defaultConfig)));
  }
}
