const router = require("express").Router();
const razorpay = require("razorpay");

const instance = new razorpay({
    key_id: "rzp_test_9a27cdz6Cw8U4d",
    key_secret: "JvhluxwNYEQOSroeHwNOayu9"
});

router.get("/", (req, res) => {
    res.send("get route");
});

router.post("/", async (req, res) => {
    instance.orders
        .create({
            amount: req.body.total,
            currency: "INR",
            receipt: req.body.orderId,
            payment_capture: "1"
        })
        .then(result => res.json({ messege: result }))
        .catch(err => console.log(err));
});

module.exports = router;
