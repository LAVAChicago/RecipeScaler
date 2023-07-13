import express from "express";
import { ObjectController } from "../controller/generic.object.controller";

import * as models from "../model/model.index";

const router = express.Router();
const ingredientController = new ObjectController(models.Recipe);

router.get("/", (req, res) => {
    ingredientController.getAll().then(data => res.json(data));
});

router.get("/:ingredientid", (req, res) => {
    ingredientController.getByID(req.params.ingredientid).then(data => res.json(data));
});

router.post("/", (req, res) => {
    ingredientController.create(req.body.ingredient).then(data => res.json(data));
});

router.put("/", (req, res) => {
    ingredientController.update(req.body.ingredient).then(data => res.json(data));
});

router.delete("/:ingredientid", (req, res) => {
    ingredientController.delete(req.params.ingredientid).then(data => res.json(data));
});

export const ingredientRouter = router;