import burgerImage from "../assets/burger.jpg";
import pizzaImage from "../assets/pizza.jpg";
import sandwichImage from "../assets/sandwich.jpg";
import drinkImage from "../assets/drink.jpg";
import broastImage from "../assets/broast.jpg";
import friesImage from "../assets/fries.jpg";
import rollImage from "../assets/roll.jpg";
import tikkaImage from "../assets/tikka.jpg";
import defaultImage from "../assets/default.jpg";

const useImages = (category: string) => {
  switch (category) {
    case "Burger":
      return burgerImage;

    case "Pizza":
      return pizzaImage;

    case "Sandwich":
      return sandwichImage;

    case "Drink":
      return drinkImage;

    case "Broast":
      return broastImage;

    case "Fries":
      return friesImage;

    case "Roll":
      return rollImage;

    case "Tikka":
      return tikkaImage;

    default:
      return defaultImage;
  }
};

export default useImages;
