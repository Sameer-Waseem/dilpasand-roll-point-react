import burgerImage from "../assets/burger.jpg";
import pizzaImage from "../assets/pizza.jpg";
import sandwichImage from "../assets/sandwich.jpg";
import coldDrinkImage from "../assets/cold-drink.jpg";
import broastImage from "../assets/broast.jpg";
import friesImage from "../assets/fries.jpg";
import rollImage from "../assets/roll.jpg";
import tikkaImage from "../assets/tikka.jpg";
import defaultImage from "../assets/default.jpg";

const useImages = (productName: string) => {
  switch (true) {
    case productName.includes("burger"):
      return burgerImage;

    case productName.includes("pizza"):
      return pizzaImage;

    case productName.includes("sandwich"):
      return sandwichImage;

    case productName.includes("coldDrink"):
      return coldDrinkImage;

    case productName.includes("broast"):
      return broastImage;

    case productName.includes("fries"):
      return friesImage;

    case productName.includes("roll"):
      return rollImage;

    case productName.includes("tikka"):
      return tikkaImage;

    default:
      return defaultImage;
  }
};

export default useImages;
