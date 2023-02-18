import { Router } from "express";
import db from "../models/index.js";
import Web3 from "web3";

const web3 = new Web3("ws://localhost:8888");

const router = Router();

router.post("/txList", async (req, res) => {
  const txList = await db.Transaction.findAll({
    include: [
      {
        model: db.Block,
      },
    ],
  });
  res.send({ msg: "sucessed list", list: txList });
});

export default router;
