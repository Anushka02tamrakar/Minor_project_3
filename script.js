const foodData = [
    {
        "id": 1,
        "foodname": "Apple",
        "calorie": 95,
        "category": "Fruit",
        "protiens": 0.3,
        "cab": 25
      },
      {
        "id": 2,
        "foodname": "Banana",
        "calorie": 105,
        "category": "Fruit",
        "protiens": 1.3,
        "cab": 27
      },
      {
        "id": 3,
        "foodname": "Orange",
        "calorie": 62,
        "category": "Fruit",
        "protiens": 1.2,
        "cab": 15
      },
      {
        "id": 4,
        "foodname": "Pear",
        "calorie": 95,
        "category": "Fruit",
        "protiens": 0.5,
        "cab": 25
      },
      {
        "id": 5,
        "foodname": "Grapefruit",
        "calorie": 42,
        "category": "Fruit",
        "protiens": 1.1,
        "cab": 11
      },
      {
        "id": 6,
        "foodname": "Strawberry",
        "calorie": 46,
        "category": "Fruit",
        "protiens": 1.5,
        "cab": 10
      },
      {
        "id": 7,
        "foodname": "Blueberry",
        "calorie": 52,
        "category": "Fruit",
        "protiens": 1.1,
        "cab": 14
      },
      {
        "id": 8,
        "foodname": "Raspberry",
        "calorie": 52,
        "category": "Fruit",
        "protiens": 1.4,
        "cab": 15
      },
      {
        "id": 9,
        "foodname": "Broccoli",
        "calorie": 34,
        "category": "Vegetable",
        "protiens": 3.3,
        "cab": 5
      },
      {
        "id": 10,
        "foodname": "Cauliflower",
        "calorie": 25,
        "category": "Vegetable",
        "protiens": 2.6,
        "cab": 5
      },
      {
        "id": 11,
        "foodname": "Green Beans",
        "calorie": 31,
        "category": "Vegetable",
        "protiens": 2.4,
        "cab": 4
      },
      {
        "id": 12,
        "foodname": "Asparagus",
        "calorie": 20,
        "category": "Vegetable",
        "protiens": 2.2,
        "cab": 2
      },
      {
        "id": 13,
        "foodname": "Spinach",
        "calorie": 23,
        "category": "Vegetable",
        "protiens": 3.5,
        "cab": 4
      },
      {
        "id": 14,
        "foodname": "Kale",
        "calorie": 33,
        "category": "Vegetable",
        "protiens": 4.3,
        "cab": 7
      },
      {
        "id": 15,
        "foodname": "Sweet Potato",
        "calorie": 103,
        "category": "Vegetable",
        "protiens": 2,
        "cab": 27
      },
      {
        "id": 16,
        "foodname": "Potato",
        "calorie": 161,
        "category": "Vegetable",
        "protiens": 4.3,
        "cab": 37
      },
      {"id": 17,
        "foodname": "Carrot",
        "calorie": 41,
        "category": "Vegetable",
        "protiens": 0.9,
        "cab": 9
      },
      {
        "id": 18,
        "foodname": "Onion",
        "calorie": 40,
        "category": "Vegetable",
        "protiens": 1.4,
        "cab": 9
      },
      {
        "id": 19,
        "foodname": "Egg",
        "calorie": 77,
        "category": "Protein",
        "protiens": 6.3,
        "cab": 0.5
      },
      {
        "id": 20,
        "foodname": "Chicken Breast",
        "calorie": 165,
        "category": "Protein",
        "protiens": 31,
        "cab": 0
      },
      {
        "id": 21,
        "foodname": "Salmon",
        "calorie": 206,
        "category": "Protein",
        "protiens": 22,
        "cab": 0
      },
      {
        "id": 22,
        "foodname": "Tuna",
        "calorie": 179,
        "category": "Protein",
        "protiens": 39,
        "cab": 0
      },
      {
        "id": 23,
        "foodname": "Beef",
        "calorie": 250,
        "category": "Protein",
        "protiens": 26,
        "cab": 0
      },
      {
        "id": 24,
        "foodname": "Pork",
        "calorie": 242,
        "category": "Protein",
        "protiens": 26,
        "cab": 0
      },
      {
        "id": 25,
        "foodname": "Lamb",
        "calorie": 294,
        "category": "Protein",
        "protiens": 25,
        "cab": 0
      },
      {
        "id": 26,
        "foodname": "Shrimp",
        "calorie": 85,
        "category": "Protein",
        "protiens": 20,
        "cab": 0.2
      },
      {
        "id": 27,
        "foodname": "Quinoa",
        "calorie": 120,
        "category": "Grain",
        "protiens": 4.4,
        "cab": 21
      },
      {
        "id": 28,
        "foodname": "Brown Rice",
        "calorie": 216,
        "category": "Grain",
        "protiens": 4.5,
        "cab": 45
      },
      {
        "id": 29,
        "foodname": "Oats",
        "calorie": 389,
        "category": "Grain",
        "protiens": 16.9,
        "cab": 66
      },
      {
        "id": 30,
        "foodname": "Quinoa",
        "calorie": 120,
        "category": "Grain",
        "protiens": 4.4,
        "cab": 21
      },
      {
        "id": 31,
        "foodname": "Bread",
        "calorie": 265,
        "category": "Grain",
        "protiens": 9.4,
        "cab": 49
      },
      {
        "id": 32,
        "foodname": "Pasta",
        "calorie": 131,
        "category": "Grain",
        "protiens": 5.5,
        "cab": 26
      },
      {
        "id": 33,
        "foodname": "Milk",
        "calorie": 60,
        "category": "Dairy",
        "protiens": 3.2,
        "cab": 5.1
      },
      {
        "id": 34,
        "foodname": "Cheese",
        "calorie": 402,
        "category": "Dairy",
        "protiens": 25,
        "cab": 2.4
      },
      {
        "id": 35,
        "foodname": "Yogurt",
        "calorie": 59,
        "category": "Dairy",
        "protiens": 3.5,
        "cab": 5
      },
      {
        "id": 36,
        "foodname": "Butter",
        "calorie": 717,
        "category": "Dairy",
        "protiens": 0.9,
        "cab": 0.1
      },
      {
        "id": 37,
        "foodname": "Almonds",
        "calorie": 579,
        "category": "Nuts",
        "protiens": 21,
        "cab": 22
      },
      {
        "id": 38,
        "foodname": "Walnuts",
        "calorie": 654,
        "category": "Nuts",
        "protiens": 15,
        "cab": 14
      },
      {
        "id": 39,
        "foodname": "Peanuts",
        "calorie": 567,
        "category": "Nuts",
        "protiens": 26,
        "cab": 16
      },
      {
        "id": 40,
        "foodname": "Cashews",
        "calorie": 553,
        "category": "Nuts",
        "protiens": 18,
        "cab": 30
      }
]
//Function to list all food items
function ListAllFoodItems(data){
    return data.map(item => item.foodname);
}
//function to all the food items by categories
function listFoodItemsByCategory(data, category) {
    return data.filter(item => item.category.toLowerCase() === category.toLowerCase())
               .map(item => item.foodname);
}
//Function to list food items by calorie above and below 100

function listFoodItemsByCalorie(data, aboveThreshold = true, threshold = 100) {
    if (aboveThreshold) {
      return data.filter(item => item.calorie > threshold)
                 .map(item => item.foodname);
    } else {
      return data.filter(item => item.calorie < threshold)
                 .map(item => item.foodname);
    }
  }
//Function to all the food items with highest protien content to lowest
  function listFoodItemsByProtein(data) {
    return data.slice().sort((a, b) => b.protiens - a.protiens)
               .map(item => item.foodname);
  }

// Function to list food items by carb content (lowest to highest)
function listFoodItemsByCarb(data) {
    return data.slice().sort((a, b) => a.cab - b.cab)
               .map(item => item.foodname);
}

//Print all the results 

console.log("All food items", ListAllFoodItems(foodData));
console.log("Vegetables:", listFoodItemsByCategory(foodData, "Vegetable"));
console.log("Fruits:", listFoodItemsByCategory(foodData, "Fruit"));
console.log("Protien:", listFoodItemsByCategory(foodData, "Protein"));
console.log("Nuts:", listFoodItemsByCategory(foodData, "Nuts"));
console.log("Grains:", listFoodItemsByCategory(foodData, "Grain"));
console.log("Dairy:", listFoodItemsByCategory(foodData, "Dairy"));
console.log("Calorie above 100:", listFoodItemsByCalorie(foodData, true, 100));
console.log("Calorie below 100:", listFoodItemsByCalorie(foodData, false, 100));
console.log("Highest to lowest protein content:", listFoodItemsByProtein(foodData));
console.log("Lowest to highest carb content:", listFoodItemsByCarb(foodData));
