const FormatPrice = (props) => {
  const num = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(props.price / 100);

  return num;
};

export default FormatPrice;
