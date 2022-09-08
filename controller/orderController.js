const { NotFoundError, BadRequestError } = require("../errors");
const orders = require("../mock-response.json");

const fetchAllOrders = (req, res) => res.status(200).json(orders);

const fetchOrder = (req, res) => {
  const { customerId } = req.params;
  const order = orders.find((order) => order.customerId === customerId) || [];
  if (!order) {
    throw new NotFoundError(
      `No order found with  customer Id :- ${customerId}`
    );
  }
  res.status(200).json(order);
};

const updateOrderDetails = (req, res) => {
  const { customerId } = req.params;
  const { customerName } = req.body;
  const order = orders.find((order) => order.customerId === customerId) || [];
  if (!customerName) {
    throw new BadRequestError(`Please provide customer name`);
  }
  if (!order) {
    throw new NotFoundError(
      `No order found with  customer Id :- ${customerId}`
    );
  }
  order.customerName = customerName;
  res.status(200).send({ msg: "Order updated successfully!!!" });
};

module.exports = {
  fetchAllOrders,
  fetchOrder,
  updateOrderDetails,
};
