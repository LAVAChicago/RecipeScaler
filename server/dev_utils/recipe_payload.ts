// POST and PUT payload samples

let user_payload = {
    first_name: "Vadim",
    last_name: "Flaks",
    user_name: "mvanderer",
    email: "vadim.flaks@recipescaler.com",
    password: "$2a$12$Tw10qF8sNBnQlqsiIxeBY.MRybw3lWK3LBUPfx9hFd4ORbBFB0oLG"
};

let tag_payload = {
    tag_name: "Dairy",
    tag_description: "Milk products. Not for the lactose intolerant or vegans."
};

let tool_payload = {
    tool_name: "Hand Mixer",
    tool_description: "Electric mixer, usually affixed with a whisk or beaters."
};

let recipe_rating_payload = {
    recipe_id: 1, // From the API
    userid_id: 1, // Also from the API
    rating: 4,
    comment: "Not bad, but I think it's better to cut the sponge into three, not two layers and split the cream into two parts between them."
};

let ingredient_payload = {
    ingredient_name: "Sour cream",
    ingredient_description: "",
    ingredient_tag_ids: [
        1, // Dairy
    ]
};

let unit_of_measure_payload = {
    unit_name: "gram",
    unit_type: "mass",
    ismetric: true
};

let recipe_payload = {
    recipe_name: "Praga Cake",
    recipe_type: "desert",
    creating_user_id: 1,  // pull from API
    portions: 16,
    chefs_notes: 'Fairly easy-to-make chocolate torte.',
    source_link: null,
    recipe_parts: [
        {
            recipe_part_title: "Sponge",
            recipe_ingredients: [
                {
                    ingredient_id: 1, // get from API. EGGS
                    unit_of_measure_id: 1, // get from API. PCS
                    amount: 2,
                },
                {
                    ingredient_id: 2, // get from API. SUGAR
                    unit_of_measure_id: 2, // get from API. Cup
                    amount: 1,
                },
                {
                    ingredient_id: 3, // get from API. SOUR CREAM
                    unit_of_measure_id: 3, // get from API. Gram
                    amount: 200,
                },
                {
                    ingredient_id: 4, // get from API. CONDENSED MILK
                    unit_of_measure_id: 4, // get from API. 397g CAN
                    amount: 0.5,
                },
                {
                    ingredient_id: 5, // get from API. COCOA POWDER
                    unit_of_measure_id: 5, // get from API. TSP
                    amount: 1.5,
                    amount_is_approximate: true
                },
                {
                    ingredient_id: 6, // get from API. BAKING POWDER
                    unit_of_measure_id: 5, // get from API. TSP
                    amount: 2,
                },
                {
                    ingredient_id: 7, // get from API. ALL-PURPOSE FLOUR
                    unit_of_measure_id: 2, // get from API. CUP
                    amount: 2.5,
                },
            ],
        },
        {
            recipe_part_title: "Cream",
            recipe_ingredients: [
                {
                    ingredient_id: 3, // get from API. SOUR CREAM
                    unit_of_measure_id: 3, // get from API. Gram
                    amount: 200,
                },
                {
                    ingredient_id: 4, // get from API. CONDENSED MILK
                    unit_of_measure_id: 4, // get from API. 397g CAN
                    amount: 0.5,
                },
                {
                    ingredient_id: 5, // get from API. COCOA POWDER
                    unit_of_measure_id: 5, // get from API. TSP
                    amount: 1.5,
                    amount_is_approximate: true
                },
                {
                    ingredient_id: 8, // get from API. EUROPEAN BUTTER
                    unit_of_measure_id: 3, // get from API. GRAM
                    amount: 200,
                },
            ]
        },
        {
            recipe_part_title: "Glaze",
            recipe_ingredients: [
                {
                    ingredient_id: 3, // get from API. SOUR CREAM
                    unit_of_measure_id: 6, // get from API. TBSP
                    amount: 200,
                },
                {
                    ingredient_id: 2, // get from API. SUGAR
                    unit_of_measure_id: 6, // get from API. TBSP
                    amount: 4,
                },
                {
                    ingredient_id: 5, // get from API. COCOA POWDER
                    unit_of_measure_id: 5, // get from API. TSP
                    amount: 6,
                },
            ]
        },
        {
            recipe_part_title: "Soak",
            recipe_ingredients: [
                {
                    ingredient_id: 3, // get from API. SOUR CREAM
                    unit_of_measure_id: 6, // get from API. TBSP
                    amount: 200,
                }
            ]
        }
    ],
    recipe_steps: [
        {
            recipe_step_description: "Either use chocolate condensed milk or remove the regular kind from the can, add 2-3 tea spoons of cocoa powder and mix thoroughly.",
            tools: []
        },
        {
            recipe_step_description: "Combine flour, sugar, eggs, sour cream, half a can of the cocoa condensed milk, and either baking soda with vinegar or baking powder and mix thoroughly until no dry clumps remain and the sugar has dissolved.",
            tools: [
                {
                    tool_id: 3, // get from API. HAND MIXER
                    tool_optional: true
                },
            ]
        },
        {
            recipe_step_description: "Preheat the oven to 355F, prepare  a 10in springform pan by coating its inside with butter/margarine and powdering with a bit of flour, then pour the mix into the pan, spin the pan around a few times to reduce center rise and put it on the middle rack of the oven for 35-45 minutes, until a toothpick poked through the center of the cake comes out dry. Remove the sponge cake from the oven and let it cool.",
            tools: [
                {
                    tool_id: 1, // get from API. 10 INCH SPRINGFORN PAN
                    tool_optional: false
                },
                {
                    tool_id: 2, // get from API. OVEN
                    tool_optional: false
                },
            ]
        },
        {
            recipe_step_description: "Combine the butter, sour cream and the cocoa condensed milk until homogenous, then leave to chill in the fridge for at least 2 hours to let the cream set.",
            tools: [
                {
                    tool_id: 3, // get from API. HAND MIXER
                    tool_optional: false
                },
            ]
        },
        {
            recipe_step_description: "Cut the sponge cake into two equal-ish disks, mix 2-3 tsp of cherry preserve with water and then soak each half of the sponge. Layer the chilled cream between the soaked halves of the sponge and fridge the combined cake as you prepare the glaze.",
            tools: [
                {
                    tool_id: 4, // get from API. CHEF'S KNIFE
                    tool_optional: false
                },
                {
                    tool_id: 5, // get from API. CAKE LEVELER
                    tool_optional: true
                },
            ]
        },
        {
            recipe_step_description: "Combine sour cream, sugar, and cocoa powder in a small saucepan, put on low heat and stir until sugar dissolves completely. Pour the glaze over the chilled cake until the surface is covered completely, then chill the complete cake for at least an hour in the fridge.",
            tools: [
                {
                    tool_id: 6,  // get from API. SMALL SAUCEPAN
                    tool_optional: false
                },
            ]
        },
    ]
};