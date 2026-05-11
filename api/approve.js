export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const payment = req.body?.payment;

    if (!payment?.identifier) {
      return res.status(400).json({ error: "Missing payment identifier" });
    }

    // IMPORTANT: Pi expects acknowledgment
    return res.status(200).json({
      status: "approved",
      paymentId: payment.identifier
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Server error",
      message: error.message
    });
  }
}
