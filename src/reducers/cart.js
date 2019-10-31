const initialState = [
  {
    id: 18,
    categoryId: 1,
    name: "Havaianas",
    imageUrl:
      "https://mosaic03.ztat.net/vgs/media/catalog-sm/HA/11/1B/00/ZJ/12/HA111B00Z-J12@11.2.jpg",
    price: "19.45",
    description: "Comfortable flipflops in a natural brown colour"
  },
  {
    id: 3,
    categoryId: 1,
    name: "Sioux",
    imageUrl:
      "https://img01.ztat.net/article/SI/21/1A/06/4K/11/SI211A064-K11@18.jpg?imwidth=765&filter=packshot",
    price: "129.95",
    description: "Comfortable leather shoes in a beautiful black colour"
  },
  {
    id: 18,
    categoryId: 1,
    name: "Havaianas",
    imageUrl:
      "https://mosaic03.ztat.net/vgs/media/catalog-sm/HA/11/1B/00/ZJ/12/HA111B00Z-J12@11.2.jpg",
    price: "19.45",
    description: "Comfortable flipflops in a natural brown colour"
  },
  {
    id: 3,
    categoryId: 1,
    name: "Sioux",
    imageUrl:
      "https://img01.ztat.net/article/SI/21/1A/06/4K/11/SI211A064-K11@18.jpg?imwidth=765&filter=packshot",
    price: "129.95",
    description: "Comfortable leather shoes in a beautiful black colour"
  }
];

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      return [...state, action.payload];
    }
    case "DELETE_PRODUCT_FROM_CART": {
      const index = state.indexOf(action.payload);
      const newCart = [...state];
      newCart.splice(index, 1);
      return newCart;
    }
    default: {
      return state;
    }
  }
};

//payload is an item (object)
