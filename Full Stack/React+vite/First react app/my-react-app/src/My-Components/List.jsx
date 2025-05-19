import PropTypes from "prop-types";

export default function List(props){

    // APP file : 
    //     const fruits = [{id: 1,name: 'Apple', calories: 95}, 
    //                   {id: 2,name: 'Orange', calories: 45},
    //                   {id: 3,name: 'Banana', calories: 105}, 
    //                   {id: 4,name: 'Coconut', calories: 159}, 
    //                   {id: 5,name: 'Pinapple', calories: 37}];

    //   const vegetables = [{id: 6,name: 'Potatoes', calories: 110}, 
    //                     {id: 7,name: 'Celery', calories: 15},
    //                     {id: 8,name: 'Carrots', calories: 25}, 
    //                     {id: 9,name: 'Corn', calories: 63}, 
    //                     {id: 10,name: 'Broccoli', calories: 50}];
    // {fruits.length > 0 ? <List items={fruits} category="Fruits"/>: null}
    //       {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>} //short-circuiting

    // -----------------------------------------------

    // const fruits = [{id: 1,name: 'Apple', calories: 95}, 
    //                 {id: 2,name: 'Orange', calories: 45},
    //                 {id: 3,name: 'Banana', calories: 105}, 
    //                 {id: 4,name: 'Coconut', calories: 159}, 
    //                 {id: 5,name: 'Pinapple', calories: 37}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // Alphabetical
    // fruits.sort((a, b) => b.calories - a.calories); // Alphabetical

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //array
    
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map((item) => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b></li>)

    // const listItems = fruits.map((fruit) => <li key={fruit.id}>
    //                                                 {fruit.name}: &nbsp;
    //                                                 <b>{fruit.calories}</b></li>)

    // const listItems = lowCalFruits.map((lowCalFruit) => <li key={lowCalFruit.id}>
    //                                                 {lowCalFruit.name}: &nbsp;
    //                                                 <b>{lowCalFruit.calories}</b></li>)

    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    );
} 

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number,

    })),
}