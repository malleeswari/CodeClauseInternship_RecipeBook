// script.js
const defaultRecipes = [
  {
    id: "1",
    title: "Pancakes",
    ingredients: ["1 cup flour", "1 cup milk", "1 egg", "2 tbsp sugar", "2 tsp baking powder"],
    steps: `1. Sift dry ingredients together in large bowl
2. In separate bowl, whisk milk and egg
3. Make well in dry ingredients, pour in wet mixture
4. Stir until just combined (lumps are okay)
5. Heat lightly greased griddle to medium (375°F)
6. Pour 1/4 cup batter for each pancake
7. Cook until bubbles form and edges look dry (2-3 mins)
8. Flip and cook other side until golden (1-2 mins)
9. Serve immediately with maple syrup`,
    prepTime: "10 mins",
    cookTime: "15 mins",
    image: "pancake.png",
    category: "breakfast"
  },
  {
    id: "2",
    title: "Grilled Cheese Sandwich",
    ingredients: ["2 slices bread", "2 slices cheddar", "1 tbsp butter"],
    steps: `1. Butter one side of each bread slice
2. Heat skillet over medium-low heat
3. Place one slice butter-side down
4. Add cheese slices evenly
5. Top with second slice, butter-side up
6. Cook 3-4 mins until golden brown
7. Flip carefully with spatula
8. Cook other side 2-3 mins until golden
9. Press down lightly to help melt cheese
10. Remove and let rest 1 min before cutting`,
    prepTime: "5 mins",
    cookTime: "8 mins",
    image: "gcs.png",
    category: "lunch"
  },
  {
    id: "3",
    title: "Spaghetti Bolognese",
    ingredients: ["8 oz spaghetti", "1/2 lb ground beef", "1 cup tomato sauce", "1/2 onion", "2 garlic cloves"],
    steps: `1. Cook spaghetti al dente (8-10 mins), reserve 1/2 cup pasta water
2. Dice onion, mince garlic
3. Brown beef in skillet over medium heat
4. Add onions, cook until translucent (3 mins)
5. Add garlic, cook 30 seconds until fragrant
6. Stir in tomato sauce, simmer 15 mins
7. Season with salt, pepper, Italian herbs
8. Toss pasta with sauce, adding pasta water as needed
9. Garnish with parmesan and parsley`,
    prepTime: "15 mins",
    cookTime: "25 mins",
    image: "sphag.png",
    category: "dinner"
  },
  {
    id: "4",
    title: "Caesar Salad",
    ingredients: ["1 romaine heart", "1/2 cup croutons", "1/4 cup parmesan", "3 tbsp dressing"],
    steps: `1. Wash and dry lettuce thoroughly
2. Tear into bite-sized pieces
3. Make dressing: whisk 1 minced garlic, 2 anchovies, 1 egg yolk, 1 tbsp lemon juice
4. Slowly drizzle in 1/4 cup olive oil while whisking
5. Add 2 tbsp parmesan, salt, pepper
6. Toss lettuce with dressing to coat lightly
7. Add croutons and remaining parmesan
8. Serve immediately`,
    prepTime: "15 mins",
    cookTime: "0 mins",
    image: "salad.png",
    category: "lunch"
  },
  {
    id: "5",
    title: "Omelette",
    ingredients: ["2 eggs", "1/4 cup diced onion", "1/4 cup diced tomato", "1/4 cup shredded cheese"],
    steps: `1. Beat eggs with 1 tbsp water, salt, and pepper
2. Heat nonstick skillet over medium, add 1 tsp butter
3. Sauté onions 2 mins, add tomatoes 1 min
4. Pour in eggs, let set 30 seconds
5. Gently push edges toward center, tilting pan
6. When mostly set but still moist, add cheese
7. Fold one side over, slide onto plate
8. Garnish with fresh herbs`,
    prepTime: "5 mins",
    cookTime: "5 mins",
    image: "omlette.png",
    category: "breakfast"
  },
  {
    id: "6",
    title: "Chicken Curry",
    ingredients: ["1 lb chicken", "1 onion", "2 tomatoes", "1 tbsp curry powder", "1/2 cup coconut milk"],
    steps: `1. Cut chicken into bite-sized pieces
2. Sauté diced onion until golden
3. Add minced garlic and ginger, cook 1 min
4. Add curry powder, toast 30 seconds
5. Add diced tomatoes, cook until soft
6. Add chicken, brown on all sides
7. Pour in coconut milk, simmer 15-20 mins
8. Season with salt, garnish with cilantro`,
    prepTime: "15 mins",
    cookTime: "25 mins",
    image: "chickencu.png",
    category: "dinner"
  },
  {
    id: "7",
    title: "French Toast",
    ingredients: ["4 bread slices", "2 eggs", "1/2 cup milk", "1 tsp cinnamon", "1 tbsp sugar"],
    steps: `1. Whisk eggs, milk, cinnamon, sugar in shallow dish
2. Heat griddle or skillet over medium
3. Dip bread slices in egg mixture 30 secs per side
4. Cook on greased griddle 2-3 mins per side
5. Flip when golden brown
6. Serve with maple syrup and powdered sugar
7. Keep warm in 200°F oven if making batches`,
    prepTime: "10 mins",
    cookTime: "10 mins",
    image: "french.png",
    category: "breakfast"
  },
  {
    id: "8",
    title: "Veggie Burger",
    ingredients: ["1 burger bun", "1 veg patty", "lettuce", "tomato", "onion", "sauce"],
    steps: `1. Toast bun lightly
2. Cook patty according to package (usually 3-4 mins per side)
3. Spread sauce on bottom bun
4. Layer lettuce, tomato slices, onion rings
5. Place hot patty on top
6. Add top bun
7. Secure with toothpick if needed
8. Serve with sweet potato fries`,
    prepTime: "5 mins",
    cookTime: "8 mins",
    image: "veggie.png",
    category: "lunch"
  },
  {
    id: "9",
    title: "Fish Fry",
    ingredients: ["1 lb fish fillets", "1/2 cup cornmeal", "1 tsp paprika", "1/2 tsp salt", "oil for frying"],
    steps: `1. Pat fish dry with paper towels
2. Mix cornmeal, paprika, salt in shallow dish
3. Heat 1/2 inch oil to 375°F
4. Dredge fish in cornmeal mixture
5. Fry 3-4 mins per side until golden
6. Drain on paper towels
7. Serve with lemon wedges and tartar sauce
8. Best served immediately`,
    prepTime: "10 mins",
    cookTime: "8 mins",
    image: "fish.png",
    category: "dinner"
  },
  {
    id: "10",
    title: "Fruit Salad",
    ingredients: ["1 apple", "1 banana", "1/2 cup grapes", "1 orange", "1 tbsp honey"],
    steps: `1. Wash all fruits thoroughly
2. Core and dice apple
3. Peel and slice banana
4. Halve grapes
5. Peel and segment orange
6. Combine all fruits in large bowl
7. Drizzle with honey
8. Toss gently to combine
9. Chill 30 mins before serving`,
    prepTime: "15 mins",
    cookTime: "0 mins",
    image: "fruitsalad.png",
    category: "breakfast"
  },
  {
    id: "11",
    title: "Veg Fried Rice",
    ingredients: ["2 cups cooked rice", "1/2 cup carrots", "1/2 cup peas", "2 tbsp soy sauce", "1 egg"],
    steps: `1. Heat wok or large skillet over high heat
2. Add 1 tbsp oil, scramble egg, remove and set aside
3. Add diced carrots, stir-fry 2 mins
4. Add peas, cook 1 min
5. Add rice, break up clumps
6. Pour soy sauce around edges
7. Return egg, toss everything together
8. Cook 2 mins until heated through
9. Garnish with green onions`,
    prepTime: "10 mins",
    cookTime: "10 mins",
    image: "vegfried.png",
    category: "lunch"
  },
  {
    id: "12",
    title: "Mutton Biryani",
    ingredients: ["1 lb mutton", "2 cups basmati rice", "1 onion", "1 tbsp biryani masala", "1/2 cup yogurt"],
    steps: `1. Marinate mutton in yogurt and spices for 2 hours
2. Soak rice for 30 mins, then parboil
3. Caramelize sliced onions in ghee
4. Layer mutton, rice, and onions in heavy pot
5. Seal with dough or tight lid
6. Cook on low heat 40 mins (dum style)
7. Let rest 10 mins before opening
8. Fluff gently with fork to mix layers`,
    prepTime: "30 mins (+marinating)",
    cookTime: "50 mins",
    image: "muttonbir.png",
    category: "dinner"
  },
  {
    id: "13",
    title: "Masala Dosa",
    ingredients: ["2 cups dosa batter", "1 cup potato filling", "1/2 cup chutney"],
    steps: `1. Heat cast iron griddle to medium-high
2. Spread 1/2 cup batter in circular motion
3. Drizzle oil around edges
4. Cook until golden and crisp (2-3 mins)
5. Add potato filling in center
6. Fold dosa over filling
7. Serve with coconut chutney and sambar
8. Best eaten immediately while crispy`,
    prepTime: "10 mins",
    cookTime: "15 mins",
    image: "dosa.png",
    category: "breakfast"
  },
  {
    id: "14",
    title: "Rajma Chawal",
    ingredients: ["1 cup kidney beans", "1 cup rice", "1 onion", "2 tomatoes", "1 tbsp rajma masala"],
    steps: `1. Soak beans overnight, pressure cook until tender
2. Cook rice separately
3. Sauté onions until golden
4. Add ginger-garlic paste, cook 1 min
5. Add tomatoes, cook until mushy
6. Add spices and cooked beans
7. Simmer 15 mins for flavors to blend
8. Serve hot with steamed rice and lemon wedges`,
    prepTime: "15 mins (+soaking)",
    cookTime: "45 mins",
    image: "rajma.png",
    category: "lunch"
  },
  {
    id: "15",
    title: "Pizza Margherita",
    ingredients: ["1 pizza base", "1/2 cup tomato sauce", "1 cup mozzarella", "fresh basil"],
    steps: `1. Preheat oven to highest temperature (usually 500°F)
2. Spread sauce evenly over base
3. Add cheese, leaving small gaps
4. Bake 10-12 mins until crust is golden
5. Add fresh basil leaves after baking
6. Drizzle with olive oil
7. Let cool 2 mins before slicing
8. Serve with chili flakes and oregano`,
    prepTime: "10 mins",
    cookTime: "12 mins",
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400&h=300&fit=crop",
    category: "dinner"
  },
  {
    id: "16",
    title: "Idli Sambar",
    ingredients: ["4 idlis", "1 cup sambar", "1/4 cup coconut chutney"],
    steps: `1. Steam idlis in idli cooker for 10 mins
2. Heat sambar until bubbling
3. For chutney: grind coconut, chana dal, green chilies
4. Temper with mustard seeds and curry leaves
5. Place hot idlis on plate
6. Pour sambar over or serve on side
7. Serve with chutney and ghee
8. Best eaten fresh and hot`,
    prepTime: "10 mins",
    cookTime: "15 mins",
    image: "idlysambar.png",
    category: "breakfast"
  },
  {
    id: "17",
    title: "Chicken Wrap",
    ingredients: ["1 tortilla", "1/2 cup grilled chicken", "1/4 cup lettuce", "2 tbsp sauce"],
    steps: `1. Warm tortilla slightly
2. Spread sauce in center
3. Layer lettuce and chicken
4. Add any additional veggies
5. Fold bottom edge up
6. Fold sides inward
7. Roll tightly from bottom
8. Cut diagonally and serve
9. Can be wrapped in foil for portability`,
    prepTime: "5 mins",
    cookTime: "2 mins",
    image: "chickenwrap.png",
    category: "lunch"
  },
  {
    id: "18",
    title: "Pulao",
    ingredients: ["1 cup basmati rice", "1/2 cup mixed veggies", "1 tbsp ghee", "whole spices"],
    steps: `1. Wash and soak rice for 20 mins
2. Heat ghee, temper whole spices
3. Sauté onions until translucent
4. Add vegetables, cook 2 mins
5. Drain rice, add to pot
6. Add 2 cups water and salt
7. Cook covered on low heat 15 mins
8. Let rest 5 mins before fluffing
9. Garnish with fried onions`,
    prepTime: "15 mins",
    cookTime: "20 mins",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    category: "dinner"
  },
  {
    id: "19",
    title: "Aloo Paratha",
    ingredients: ["2 cups wheat flour", "2 boiled potatoes", "1 tsp ajwain", "1/2 tsp red chili powder"],
    steps: `1. Knead soft dough with flour, water, salt
2. Mash potatoes with spices
3. Divide dough and filling into equal portions
4. Roll dough ball, stuff with filling
5. Seal and roll out carefully
6. Cook on hot tawa with ghee
7. Flip when golden spots appear
8. Cook both sides until fully done
9. Serve with yogurt and pickle`,
    prepTime: "20 mins",
    cookTime: "15 mins",
    image: "alooparatha.png",
    category: "breakfast"
  },
  {
    id: "20",
    title: "Paneer Butter Masala",
    ingredients: ["200g paneer", "1 cup tomato puree", "1/4 cup cream", "1 tbsp kasoori methi"],
    steps: `1. Soak paneer in warm water 10 mins
2. Sauté onions, ginger-garlic paste
3. Add tomato puree, cook until oil separates
4. Add spices and cashew paste
5. Stir in cream and paneer cubes
6. Simmer 5 mins on low heat
7. Crush kasoori methi between palms, add
8. Finish with butter and fresh cream
9. Garnish with coriander leaves`,
    prepTime: "15 mins",
    cookTime: "20 mins",
    image: "paneerbm.png",
    category: "dinner"
  }
];

localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
  
  localStorage.setItem("recipes", JSON.stringify(defaultRecipes));

  
  function displayRecipes() {
    const list = document.getElementById("recipes");
    const data = JSON.parse(localStorage.getItem("recipes")) || [];
    const keyword = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
  
    list.innerHTML = "";
    data.filter(r => 
      (category === "all" || r.category === category) &&
      r.title.toLowerCase().includes(keyword)
    ).forEach(r => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <h3>${r.title}</h3>
        ${r.image ? `<img src="${r.image}" alt="${r.title}" />` : ""}
        <p><strong>Ingredients:</strong> ${r.ingredients.join(", ")}</p>
        <p>${r.steps}</p>
        <button class="edit-btn" onclick="editRecipe('${r.id}')">Edit</button>
        <button class="delete-btn" onclick="deleteRecipe('${r.id}')">Delete</button>
      `;
      list.appendChild(card);
    });
  }
  
  function addRecipe() {
    const title = document.getElementById("title").value;
    const ingredients = document.getElementById("ingredients").value.split(',');
    const steps = document.getElementById("steps").value;
    const image = document.getElementById("image").value;
    const category = document.getElementById("category").value;
  
    const recipe = {
      id: Date.now().toString(),
      title,
      ingredients,
      steps,
      image,
      category
    };
  
    const data = JSON.parse(localStorage.getItem("recipes")) || [];
    data.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(data));
    displayRecipes();
  }
  
  function deleteRecipe(id) {
    const data = JSON.parse(localStorage.getItem("recipes")) || [];
    const updated = data.filter(r => r.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updated));
    displayRecipes();
  }
  
  function editRecipe(id) {
    const data = JSON.parse(localStorage.getItem("recipes")) || [];
    const recipe = data.find(r => r.id === id);
  
    if (recipe) {
      document.getElementById("title").value = recipe.title;
      document.getElementById("ingredients").value = recipe.ingredients.join(',');
      document.getElementById("steps").value = recipe.steps;
      document.getElementById("image").value = recipe.image;
      document.getElementById("category").value = recipe.category;
  
      deleteRecipe(id);
    }
  }
  
  function toggleForm(formId) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById(formId).style.display = 'flex';
  }
  
  function signup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup successful! You can now login.");
    toggleForm('loginForm');
  }
  
  function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.email === email && user.password === password) {
      alert("Login successful!");
      document.getElementById("loginForm").style.display = "none";
    } else {
      alert("Invalid credentials!");
    }
  }
  
  document.getElementById("search").addEventListener("input", displayRecipes);
  document.getElementById("categoryFilter").addEventListener("change", displayRecipes);
  displayRecipes();