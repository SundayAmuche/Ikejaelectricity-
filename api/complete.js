export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(200).json({ ok: true });
  }

  console.log("COMPLETE HIT:", req.body);

  return res.status(200).json({
    status: "completed"
  });
}
