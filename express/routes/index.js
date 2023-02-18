import { Router } from "express";

import block from "./block.js";
import transaction from "./transaction.js";

const router = Router();

router.use("/block", block);
router.use("/transaction", transaction);

export default router;
