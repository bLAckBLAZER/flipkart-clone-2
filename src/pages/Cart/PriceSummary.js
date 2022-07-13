import { useData } from "../../context/DataContext";

export const PriceSummary = () => {
  const { userCart } = useData();

  const priceSummary = userCart.reduce(
    (acc, curr) => ({
      ...acc,
      totalItems: (acc.totalItems += curr.qty),
      subTotal: (acc.subTotal += curr.originalPrice * curr.qty),
      totalDiscount: (acc.totalDiscount +=
        (curr.originalPrice - curr.price) * curr.qty),
      totalAmount: (acc.totalAmount += curr.price * curr.qty),
    }),
    {
      totalItems: 0,
      subTotal: 0,
      totalDiscount: 0,
      totalDeliveryCharges: 0,
      totalAmount: 0,
    }
  );

  const {
    totalItems,
    subTotal,
    totalDiscount,
    totalDeliveryCharges,
    totalAmount,
  } = priceSummary;

  return (
    <section className="col-span-3 bg-white p-2 flex flex-col">
      <div className="py-2 border-b-2 border-black-600 ">PRICE DETAILS</div>
      <div className="border-b-2 border-black-600">
        <div className="flex justify-between py-2">
          <div>{`Price (${totalItems} items)`}</div>
          <div>{`₹${subTotal.toFixed(2)}`}</div>
        </div>
        <div className="flex justify-between py-2">
          <div>Discount</div>
          <div>{`-₹${totalDiscount.toFixed(2)}`}</div>
        </div>
        <div className="flex justify-between py-2">
          <div>Delivery Charges</div>
          <div>FREE</div>
        </div>
      </div>
      <div className="border-b-2 border-black-600">
        <div className="flex justify-between py-2">
          <strong>Total Amount</strong>
          <strong>{`₹${totalAmount.toFixed(2)}`}</strong>
        </div>
      </div>
      <div className="py-2">{`You will save ₹${totalDiscount.toFixed(
        2
      )} on this order`}</div>
    </section>
  );
};
