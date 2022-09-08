const router = require("express").Router();
const {
  fetchAllOrders,
  fetchOrder,
  updateOrderDetails,
} = require("../controller/orderController");

router.route("/").get(fetchAllOrders);
router.route("/:customerId").get(fetchOrder).patch(updateOrderDetails);

module.exports = router;
