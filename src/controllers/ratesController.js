import rates from "../models/ratesModel";

const getRates = async (req, res, next) => {
  const { currencies } = req.params;
  const result = {};
  currencies.split(",").forEach((curr) => (result[curr] = rates[curr]));
  res.status(200).json({
    status: "success",
    rates: result,
  });
};

export default getRates;
