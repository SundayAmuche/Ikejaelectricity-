export default async function handler(req, res) {
  try {

    const { payment } = req.body;

    console.log("COMPLETING:", payment.identifier);

    if (!payment || !payment.identifier) {
      return res.status(400).json({ error: "Invalid payment" });
    }

    // Here you would normally:
    // - credit electricity token
    // - update user balance
    // - confirm transaction

    return res.status(200).json({
      status: "completed"
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
