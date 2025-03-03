import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ users: ["Alice", "Bob", "Charlie"] });
});

export default router;
