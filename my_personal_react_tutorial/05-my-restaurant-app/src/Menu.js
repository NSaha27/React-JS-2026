import Item from "./Item";

function Menu(props){
  return <div className="menu">
    {
      props.foods.map(item => {
        return (
          <Item
            imgFileName={item.imgFileName}
            itemName={item.itemName}
            ingrediants={item.ingrediants}
            price={item.price}
            itemID={item.ID}
          />
        );
      })
    }
  </div>
}

export default Menu;