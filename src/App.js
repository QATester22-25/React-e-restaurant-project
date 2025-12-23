/* eslint-disable no-unused-vars */
import NavBar from "./Component/Nav";
import Heading from "./Component/Header";
import Category from "./Component/Category";
import ItemsList from "./Component/ItemsList";
import { foodArray } from "./data";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(foodArray);
  const [allItems] = useState(foodArray);

  const AllCategory = [
    "All",
    ...new Set(allItems.map((item) => item.Category)),
  ];

  const filterByCategory = (Cat) => {
    if (Cat === "All") {
      setItems(allItems);
    } else {
      const newArray = allItems.filter((item) => item.Category === Cat);
      setItems(newArray);
    }
  };

  const filterBySearch = (word) => {
    if (!word) {
      setItems(allItems);
      return;
    }

    const mappedCategories = allItems.map((category) => ({
      ...category,
      food: category.food.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      ),
    }));

    const filteredCategories = mappedCategories.filter(
      (category) => category.food.length > 0
    );

    setItems(filteredCategories);
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Heading />
        <Category
          filterByCategory={filterByCategory}
          AllCategory={AllCategory}
        />
        <ItemsList items={items} />
      </Container>
    </div>
  );
}

export default App;
