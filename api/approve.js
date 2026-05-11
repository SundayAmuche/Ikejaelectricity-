export default async function handler(req, res) {
  try {

    const { payment } = req.body;

    console.log("APPROVING:", payment.identifier);

    // IMPORTANT: validate payment exists
    if (!payment || !payment.identifier) {
      return res.status(400).json({ error: "Invalid payment" });
    }

    // In real Pi apps, you would verify payment here

    return res.status(200).json({
      status: "approved"
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
