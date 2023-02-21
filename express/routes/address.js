import { Router } from "express";
import Web3 from "web3";
import { Op } from "sequelize";

import db from "../models/index.js";
const web3 = new Web3("ws://localhost:8888");

const router = Router();

router.post("/info", async (req, res) => {
  const { address } = req.body;
  const detailAddr = await db.Transaction.findAll({
    where: { [Op.or]: [{ from: address }, { to: address }] },
    include: [
      {
        model: db.Block,
      },
    ],
  });

  res.send({ msg: "sucessed list", addrList: detailAddr });
});

router.post("/balance", async (req, res) => {
  const balance = await web3.eth.getBalance(req.body.address);
  res.send({ msg: "return balacnce", balance });
});

export default router;
