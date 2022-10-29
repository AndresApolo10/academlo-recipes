const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')

const initModels = () => {
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)

    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)
}


module.exports = initModels