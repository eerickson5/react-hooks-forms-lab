import React from "react";

function ItemForm({onItemFormSubmit}) {

  const [formData, setFormData] = React.useState({
    name: "",
    category: "Produce"
  })

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleFormSubmit(event) {
    console.log(event)
    event.preventDefault()
    onItemFormSubmit({
      ...formData,
      id: formData.name
    })

    setFormData({
      name: "",
      category: "Produce",
    })
  }
  
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={handleFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
