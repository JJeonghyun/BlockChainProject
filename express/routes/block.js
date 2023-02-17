import { Router } from "express";
import Web3 from "web3";
import db from "../models/index.js";
import { Block } from "../models/index.js";

// const web3 = new Web3("ws://localhost:8888");

const router = Router();

router.post("/", (req, res) => {
  res.send("ok");
});

router.post("/latestBlocks", async (req, res) => {
  const tempBlock = await db.Block.findOne({
    where: { number: web3.eth.getBlock(0) },
  });
  if (tempBlock) {
    const listUp = await db.Block.findAll({
      order: [["number", "desc"]],
      limit: 6,
    });
    res.send({ msg: "genesis is exist", list: listUp });
  } else {
    web3.eth.getBlockNumber((err, number) => {
      if (err) console.log(err);
      for (let i = 0; i <= number; i++) {
        web3.eth.getBlock(i, false, async (error, block) => {
          db.Block.create({
            hash: block.hash,
            nonce: block.nonce,
            number: block.number,
            parentHash: block.parentHash,
            receiptsRoot: block.receiptsRoot,
            size: block.size,
            time: block.timestamp,
            transactionsRoot: block.transactionsRoot,
          });
        });
      }
    });
    const listUp = await db.Block.findAll({
      order: [["number", "desc"]],
      limit: 6,
    });
    res.send({ msg: "Sucessed", list: listUp });
  }
});

router.post("/sendTx", async (req, res) => {
  const accounts = await web3.eth.getAccounts();
  // 트랜잭션 보내자!
  res.send("sendTx");
});

export default router;

// geth --datadir ~/myGeth --http --http.addr "0.0.0.0" --http.port 8080 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 --ws --ws.port 8888 --ws.origins "*" console
// geth --datadir ~/myGeth --http --http.addr "0.0.0.0" --http.port 8080 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50
