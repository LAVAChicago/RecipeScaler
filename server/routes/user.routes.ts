import express from "express";
import { ObjectController } from "../controller/generic.object.controller";
import { User } from "../model/user.model";

const router = express.Router();
const userController = new ObjectController(User);

router.get("/", (req, res) => {
    userController.getAll().then(data => res.json(data));
});

router.get("/:userid", (req, res) => {
    userController.getByID(req.params.userid).then(data => res.json(data));
});

router.post("/", (req, res) => {
    userController.create(req.body.user).then(data => res.json(data));
});

router.put("/", (req, res) => {
    userController.update(req.body.user).then(data => res.json(data));
});

router.delete("/:userid", (req, res) => {
    userController.delete(req.params.userid).then(data => res.json(data));
});

export const userRouter = router;