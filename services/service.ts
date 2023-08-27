const EARTHQUAKE_URL_GLOBAL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
const EARTHQUAKE_URL_IDN = "https://cuaca-gempa-rest-api.vercel.app/quake";

// earch quakes api
export const earthQuake = async () => {
  const response = await fetch(EARTHQUAKE_URL_IDN);
  const data = await response.json();
  return data;
};

export const randomUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data;
};

export const activity = async () => {
  const response = await fetch("https://www.boredapi.com/api/activity");
  const data = await response.json();
  return data;
};

