import { Router } from "express";
import db from "../models/index.js";
import Web3 from "web3";

const web3 = new Web3("ws://localhost:8888");

const router = Router();

router.post("/txList", async (req, res) => {
  if (!req.body.number) {
    const txList = await db.Transaction.findAll({
      include: [
        {
          model: db.Block,
        },
      ],
    });
    res.send({ msg: "sucessed list", list: txList });
  } else {
    const txList = await db.Transaction.findAll({
      where: { blockNumber: req.body.number },
      include: [
        {
          model: db.Block,
        },
      ],
    });
    res.send({ msg: "sucessed list", list: txList });
  }
});

router.post("/detail", async (req, res) => {
  const { txHash } = req.body;
  const detailTx = await db.Transaction.findOne({
    where: { hash: txHash },
    include: [
      {
        model: db.Block,
      },
    ],
  });
  res.send({ msg: "sucessed list", tx: detailTx });
});

export default router;
