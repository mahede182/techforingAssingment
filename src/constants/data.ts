import { Tresult } from "../types/Data";
import { TOptionData } from "../types/Data";
import { TExerptData } from "../types/Data";
export const result: Tresult[] = [
  {
    id: 0,
    title: "Malicious Website",
    output: 0,
  },
  {
    id: 1,
    title: "Ad Blocked",
    output: 13,
  },
  {
    id: 2,
    title: "Unwanted codes in QR",
    output: 6,
  },
  {
    id: 3,
    title: "Phishing/Scam",
    output: 1,
  },
];

export const OptionData: TOptionData[] = [
  {
    id: 0,
    imgSource: require("../assets/settingIcon/connect.png"),
    title: "Monitor Connection",
    exerpt: "Real Time monitoring",
  },
  {
    id: 1,
    imgSource: require("../assets/settingIcon/melicious.png"),
    title: "Malicious Website Blocker",
    exerpt: "Protection against malicous website",
  },
  {
    id: 2,
    imgSource: require("../assets/settingIcon/adBlocker.png"),
    title: "Ad Blocker",
    exerpt: "Black any unwanted Ads",
  },
  {
    id: 3,
    imgSource: require("../assets/settingIcon/Block.png"),
    title: "Block Persistent & Distracting Ads",
    exerpt: "Black distracting Ads",
  },
  {
    id: 4,
    imgSource: require("../assets/settingIcon/phising.png"),
    title: "Phishing / Scam Detection",
    exerpt: "Detect phising and scam attempts",
  },
  {
    id: 5,
    imgSource: require("../assets/settingIcon/qr.png"),
    title: "QR Code Scanner",
    exerpt: "Scan any unwanted codes before take you in",
  },
  {
    id: 6,
    imgSource: require("../assets/settingIcon/adBlocker.png"),
    title: "Ad Blocker",
    exerpt: "Black any unwanted Ads",
  },
];
export const exerptData: TExerptData[] = [
  { id: 0, lExerpt: "Wifi Name", rExerpt: "TechForing", color: "#F6DB56" },
  { id: 1, lExerpt: "Network", rExerpt: "Monitoring", color: "#FAFAFA" },
  { id: 2, lExerpt: "Firewall", rExerpt: "Active", color: "#FAFAFA" },
  { id: 3, lExerpt: "Network Type", rExerpt: "Public", color: "#F6DB56" },
  { id: 4, lExerpt: "Protect", rExerpt: "WPA", color: "#FAFAFA" },
];
