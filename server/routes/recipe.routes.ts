import express from "express";
import { ObjectController } from "../controller/generic.object.controller";

import * as models from "../model/model.index";

const router = express.Router();
const recipeController = new ObjectController(models.Recipe);

router.get("/", (req, res) => {
    recipeController.getAll().then(data => res.json(data));
});

router.get("/:recipeid", (req, res) => {
    recipeController.getByID(req.params.recipeid).then(data => res.json(data));
});

router.post("/", (req, res) => {
    recipeController.create(req.body.recipe).then(data => res.json(data));
});

router.put("/", (req, res) => {
    recipeController.update(req.body.recipe).then(data => res.json(data));
});

router.delete("/:recipeid", (req, res) => {
    recipeController.delete(req.params.recipeid).then(data => res.json(data));
});

export const recipeRouter = router;