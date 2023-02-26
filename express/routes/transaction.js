import { Router } from "express";
import db from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  const txs = await db.Transaction.findAll({
    order: [["blockNumber", "desc"]],
    limit: 40,
  });
  res.send({ txlistUp: txs });
});

router.post("/txList", async (req, res) => {
  if (!req.body.number) {
    const txList = await db.Transaction.findAll({
      order: [["blockNumber", "desc"]],
      include: [
        {
          model: db.Block,
        },
      ],
    });
    res.send({ list: txList });
  } else {
    const txList = await db.Transaction.findAll({
      where: { blockNumber: req.body.number },
      include: [
        {
          model: db.Block,
        },
      ],
    });
    res.send({ list: txList });
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
  res.send({ tx: detailTx });
});

router.post("/findTx", async (req, res) => {
  const { address } = req.body;
  const lastTx = await db.Transaction.findOne({
    where: { from: address },
    order: [["blockNumber", "desc"]],
    include: [
      {
        model: db.Block,
        attributes: ["time"],
      },
    ],
  });
  const firstTx = await db.Transaction.findOne({
    where: { from: address },
    order: [["blockNumber", "asc"]],
    include: [
      {
        model: db.Block,
        attributes: ["time"],
      },
    ],
  });
  res.send({ lastTx: lastTx, firstTx: firstTx });
});

export default router;
