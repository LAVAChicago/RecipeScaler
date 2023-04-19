let sample_recipe_01 = {
    name: "esterhazy torte",
    type: "dessert",
    tags: ["cake", "hungary", "austria"],
    creating_user: "Vadim",
    date_created: Date.now(),
    date_last_edited: Date.now(),
    component_parts: [
        {
            title: "sponge layers",
            ingredients: [
                {
                    product: "wgg whites",
                    unit: "piece",
                    amount: 8,
                    optional: false,
                },
                {
                    product: "walnuts",
                    unit: "gram",
                    amount: 200,
                    optional: false,
                },
                {
                    product: "sugar",
                    unit: "gram",
                    amount: 100,
                    optional: false,
                },
                {
                    product: "cinnamon",
                    unit: "pinch",
                    amount: 1,
                    optional: true,
                },
                {
                    product: "salt",
                    unit: "pinch",
                    amount: 1,
                    optional: false,
                },
                {
                    product: "flour",
                    unit: "tablespoon",
                    amount: 3,
                    optional: false,
                },
            ],
        },
        {
            title: "cream",
            ingredients: [
                {
                    product: "milk",
                    unit: "gram",
                    amount: 250,
                    optional: false,
                },
                {
                    product: "egg yolk",
                    unit: "piece",
                    amount: 8,
                    optional: false,
                },
                {
                    product: "sugar",
                    unit: "gram",
                    amount: 100,
                    optional: false,
                },
                {
                    product: "butter",
                    unit: "gram",
                    amount: 200,
                    optional: false,
                },
                {
                    product: "cognac",
                    unit: "tablespoon",
                    amount: 3,
                    optional: true,
                },
                {
                    product: "vanilla sugar",
                    unit: "teaspoon",
                    amount: 3,
                    optional: false,
                },
                {
                    product: "flour",
                    unit: "tablespoon",
                    amount: 1,
                    optional: false,
                },
            ],
        },
        {
            title: "glaze",
            ingredients: [
                {
                    product: "apricot jam",
                    unit: "tablespoon",
                    amount: null,  // "null" means "to taste"
                    optional: false,
                },
                {
                    product: "white chocolate",
                    unit: "gram",
                    amount: 200,
                    optional: false,
                },
                {
                    product: "cream", // (TODO): Think of a way to handle substitutions, i.e. using milk+butter instead of cream
                    unit: "tablespoon",
                    amount: 2, // This is not exact amount. Have an "inexact" boolean flag?
                    optional: false,
                },
                {
                    product: "black chocolate",
                    unit: "gram",
                    amount: 50,
                    optional: true, // this is decorative, not essential to the taste, but it's key to the iconic look appearance. Add "comment" field?
                },
                {
                    product: "almond flakes",
                    unit: "gram",
                    amount: null, /* again, decoration. Can't just interpret "amount: null" as "to taste", since it's not about taste, plus it's actually 
                    quite a bit for this recipe - maybe as much as 2/3 of a cup and the amount depends on how much can stick to the sides of the cake, so ¯\_(ツ)_/¯ */
                    optional: true,
                },
                {
                    product: "coconut flakes",
                    unit: "gram",
                    amount: null, // substitution for the above, all the same concerns apply
                    optional: true,
                },

            ],
        },
        
    ],
    steps: {
        component_parts: [

        ],
        assembly: [

        ]
    },
    chefs_notes: [

    ],
    comments: [
        
    ]

};