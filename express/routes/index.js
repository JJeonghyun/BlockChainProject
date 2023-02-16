import { Router } from "express";

import block from "./block.js";

const router = Router();

router.use("/block", block);

export default router;
