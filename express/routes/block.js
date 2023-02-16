import { Router } from "express";
import Web3 from "web3";
import db from "../models/index.js";
import { Block } from "../models/index.js";
const web3 = new Web3("ws://localhost:8888");

const router = Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

router.post("/latest", async (req, res) => {
  console.log(req.body);
  res.send("latest");
});

router.post("/getBlock", (req, res) => {
  console.log(req.body);
  // web3.eth.subscribe("newBlockHeaders", (err, result) => {
  //   console.log(err);
  //   if (!err) console.log("result", result);
  // });
  const { number } = req.body;
  for (let i = 0; i <= number; i++) {
    web3.eth.getBlock(i, false, (err, block) => {
      if (err) return console.log(err);
      // db.Block.create({
      //   hash: block.hash,
      //   nonce: block.nonce,
      //   number: block.number,
      //   parentHash: block.parentHash,
      //   receiptRoot: block.receiptRoot,
      //   size: block.size,
      //   time: block.timestamp,
      //   transactionRoot: block.transactionRoot,
      // });
      console.log(block);
    });
  }
  res.send("okok");
});

export default router;
