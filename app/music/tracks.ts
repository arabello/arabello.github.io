export type Track = {
  type: "youtube" | "soundcloud";
  url: string;
};

export const tracks: Track[] = [
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/OCVFwHA7v8k",
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/CltZsjic5OA",
  },
  {
    type: "soundcloud",
    url: "https://soundcloud.com/matteo-pellegrino/airwaves-0",
  },
  {
    type: "soundcloud",
    url: "https://soundcloud.com/matteo-pellegrino/alienated-0",
  },
  {
    type: "soundcloud",
    url: "https://soundcloud.com/matteo-pellegrino/void-0",
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/vXzJ7-Dq8RM",
  },
];
