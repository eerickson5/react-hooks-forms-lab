import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items"

function ShoppingList() {
  const [items, setItems] = useState(itemData)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  // console.log(items)

  function handleItemFormSubmit(newItem){
    setItems(
      [
        ...items,
        newItem
      ]
    )
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    setSearch(event.target.value)
  }

  const filterBySearch = (item) => {
    if(search === "") return true;
    return item.name.toLowerCase().includes(search.toLowerCase());
  }

  const filterByCategory = (item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }

  const itemsToDisplay = items.filter((item) => {
    return (filterBySearch(item) && filterByCategory(item))
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
