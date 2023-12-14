import { atom } from "recoil";

export const displayResolution = atom<string>({
    key: "DisplayResolution",
    default: "web",
});
