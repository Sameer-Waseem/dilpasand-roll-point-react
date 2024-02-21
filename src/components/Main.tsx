import useProducts from "../hooks/useProducts";

const Main = () => {
  const { products, error } = useProducts();

  return products.map((product) => (
    <div style={{ backgroundColor: "green", border: "5px solid black" }}>
      {product.name}
    </div>
  ));
};

export default Main;
