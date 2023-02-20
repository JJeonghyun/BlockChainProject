import { Router } from "express";

import block from "./block.js";
import transaction from "./transaction.js";
import address from "./address.js";

const router = Router();

router.use("/block", block);
router.use("/transaction", transaction);
router.use("/address", address);

export default router;
