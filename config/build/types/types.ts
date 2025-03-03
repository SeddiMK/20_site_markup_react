export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
  public: string;
}

export type BuildMode = "development" | "production";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
