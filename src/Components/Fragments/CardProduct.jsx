import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-72 bg-zinc-800 border-zinc-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    // Header
    <a href="">
      <img src={image} alt="product" className="p-5 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    //  Body
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)} ...</h5>
        <p className="text-base text-white">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    //  Footer
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-emerald-600" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
