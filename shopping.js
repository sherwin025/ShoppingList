Const = shoppingListArray = [
{
    item: "Milk",
    price: 2,
    id: 1 

},
{
    item: "Eggs",
    price: 1,
    id: 2 
},
{
    Item: "Pizza Rolls",
    price: 3.49,
    id: 3 
},
{
    Item: "Chicken",
    price: 13.59,
    id: 4 
},
{
    Item: "Bananas",
    price: 2.10,
    id: 5 
},
{
    Item: "bread",
    price: 3.49,
    id: 6 
},
{
    Item: "Ketchup",
    price: 1.59,
    id: 7 
}
]


const addIdandDateToItemThenPush = (item) => {
    const date = new Date();
    item.dateCreated = date 

    const arrayIndex = shoppingListArray.length -1;
    const lastIndex = shoppingListArray[arrayIndex];
    const lastId = lastIndex.id
    const maxId = lastId + 1
    item.id = maxId

    shoppingListArray.push(item)
}

const kiwi = 
{
   Item: "Kiwi",
   price: 4
}

const pizza = 
{
   Item: "Pizza",
   price: 15
}

const steak = 
{
   Item: "Steak",
   price: 8
}

const lemon = 
{
   Item: "Lemons",
   price: 5
}

const shrimp = 
{
   Item: "shrimp",
   price: 11
}

addIdandDateToItemThenPush(kiwi)
addIdandDateToItemThenPush(pizza)
addIdandDateToItemThenPush(steak)
addIdandDateToItemThenPush(lemon)
addIdandDateToItemThenPush(shrimp)

//  console.log(shoppingListArray)

for (item of shoppingListArray){
    const date = new Date();
    item.dateCreated = date 
}

for (item of shoppingListArray) {
    if (item.price > 8){
        console.log(item)
    }
}