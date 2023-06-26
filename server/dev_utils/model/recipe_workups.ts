class Product {
    name: string;

    constructor (
        name: string
    ) {
        this.name = name;
    }
}

class IngredientUnit {
    name: string;

    constructor (
        name: string
    ) {
        this.name = name;
    }
}

class Ingredient {
    product: Product;
    unit: IngredientUnit;
    base_amount: number;
    optional: boolean;

    constructor(
        product: Product,
        unit: IngredientUnit,
        base_amount: number,
        optional: boolean = false
    ) {
        this.product = product;
        this.unit = unit;
        this.base_amount = base_amount;
        this.optional = optional;
    }
    scaled_amount(scale){
        return this.base_amount * scale;
    }
}

class ComponentPart {
    title: string;
    ingredients: Ingredient[];
}

class Tool {

}

class Step {

}

class Recipe {
    name: string;
    type: string;
    tags: string[];
    creating_user: string;
    date_created: Date;
    date_last_edited: Date;
    portions: number;
    component_parts: ComponentPart[];
    tools_needed: Tool[];
    steps: Step[];
    chefs_notes: string;
    comments: any[];

    scale: number;

    constructor(
        name: string,
        type: string,
        tags: string[],
        creating_user: string,
        date_created: Date = new Date(),
        date_last_edited: Date = new Date(),
        portions: number,
        component_parts: any[],
        tools_needed: any[],
        steps: any[],
        chefs_notes: string = "",
        comments: any[] = []
    ) {
        this.name = name;
        this.type = type;
        this.tags = tags;
        this.creating_user = creating_user;
        this.date_created = date_created;
        this.date_last_edited = date_last_edited;
        this.portions = portions;
        this.component_parts = component_parts;
        this.tools_needed = tools_needed;
        this.steps = steps;
        this.chefs_notes = chefs_notes;
        this.comments = comments;

        this.scale = 1;
    }

    scale_up_or_down(scale: number) {
        if (scale < 0) {
            throw Error();
        }
        this.scale = scale;
    }
}

let sample_recipe_01 = {
    name: "esterhazy torte",
    type: "dessert",
    tags: ["cake", "hungary", "austria"],
    creating_user: "Vadim",
    date_created: Date.now(),
    date_last_edited: Date.now(),
    portions: 16,  // Default amount
    component_parts: [
        {
            title: "sponge layers",
            ingredients: [
                {
                    product: "wgg whites",
                    unit: "piece",
                    base_amount: 8,
                    optional: false,
                },
                {
                    product: "walnuts",
                    unit: "gram",
                    base_amount: 200,
                    optional: false,
                },
                {
                    product: "sugar",
                    unit: "gram",
                    base_amount: 100,
                    optional: false,
                },
                {
                    product: "cinnamon",
                    unit: "pinch",
                    base_amount: 1,
                    optional: true,
                },
                {
                    product: "salt",
                    unit: "pinch",
                    base_amount: 1,
                    optional: false,
                },
                {
                    product: "flour",
                    unit: "tablespoon",
                    base_amount: 3,
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
                    base_amount: 250,
                    optional: false,
                },
                {
                    product: "egg yolk",
                    unit: "piece",
                    base_amount: 8,
                    optional: false,
                },
                {
                    product: "sugar",
                    unit: "gram",
                    base_amount: 100,
                    optional: false,
                },
                {
                    product: "butter",
                    unit: "gram",
                    base_amount: 200,
                    optional: false,
                },
                {
                    product: "cognac",
                    unit: "tablespoon",
                    base_amount: 3,
                    optional: true,
                },
                {
                    product: "vanilla sugar",
                    unit: "teaspoon",
                    base_amount: 3,
                    optional: false,
                },
                {
                    product: "flour",
                    unit: "tablespoon",
                    base_amount: 1,
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
                    base_amount: null,  // "null" means "to taste"
                    optional: false,
                },
                {
                    product: "white chocolate",
                    unit: "gram",
                    base_amount: 200,
                    optional: false,
                },
                {
                    product: "cream", // (TODO): Think of a way to handle substitutions, i.e. using milk+butter instead of cream
                    unit: "tablespoon",
                    base_amount: 2, // This is not exact amount. Have an "inexact" boolean flag?
                    optional: false,
                },
                {
                    product: "black chocolate",
                    unit: "gram",
                    base_amount: 50,
                    optional: true, // this is decorative, not essential to the taste, but it's key to the iconic look appearance. Add "comment" field?
                },
                {
                    product: "almond flakes",
                    unit: "gram",
                    base_amount: null, /* again, decoration. Can't just interpret "base_amount: null" as "to taste", since it's not about taste, plus it's actually 
                    quite a bit for this recipe - maybe as much as 2/3 of a cup and the amount depends on how much can stick to the sides of the cake, so ¯\_(ツ)_/¯ */
                    optional: true,
                },
                {
                    product: "coconut flakes",
                    unit: "gram",
                    base_amount: null, // substitution for the above, all the same concerns apply
                    optional: true,
                },

            ],
        },
        
    ],
    tools_needed: [],
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

