import data from "./data";

// api/trending
export default function handler(req, res) {
  const { Services } = data;
  if (Services) return res.status(200).json(Services);
  return res.status(404).json({ error: "Data Not Found" });
}
