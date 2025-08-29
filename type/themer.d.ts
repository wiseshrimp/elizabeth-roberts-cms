// types/themer-remote.d.ts
declare module "https://themer.sanity.build/*" {
  export const theme: import("sanity").StudioTheme;
  const mod: { theme: import("sanity").StudioTheme };
  export default mod;
}
