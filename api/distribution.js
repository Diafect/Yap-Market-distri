export default async function handler(req, res) {
  const url = "https://api.yap.market/api/public/kaito-distribution";
  const token = process.env.YAP_TOKEN; // token is hidden in Vercel

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch Yap Market API" });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
