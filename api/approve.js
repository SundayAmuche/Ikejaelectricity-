export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const paymentId = req.body.payment.identifier;

    console.log("Approving payment:", paymentId);

    return res.status(200).json({
      approved: true
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: error.message
    });
  }
}
