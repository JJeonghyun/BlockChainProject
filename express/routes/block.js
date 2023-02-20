import { Router } from "express";
import Web3 from "web3";

import db from "../models/index.js";
import { Block } from "../models/index.js";

const web3 = new Web3("ws://localhost:8888");

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
            difficulty: block.difficulty,
            miner: block.miner,
            txs: block.transactions.length,
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

router.post("/addTx", async (req, res) => {
  web3.eth.getBlockNumber((err, number) => {
    for (let i = 0; i <= number; i++) {
      web3.eth.getBlockTransactionCount(i, true, (err, count) => {
        if (count > 0) {
          for (let j = 0; j < count; j++) {
            web3.eth.getTransactionFromBlock(i, j, async (err, tx) => {
              const tempBlock = await db.Block.findOne({
                where: { number: tx.blockNumber },
              });
              const checkTx = await db.Transaction.findOne({
                where: { blockHeight: tempBlock?.number },
              });
              if (!checkTx) {
                const txAdd = await db.Transaction.create({
                  blockHash: tx.blockHash,
                  blockNumber: tx.blockNumber,
                  from: tx.from,
                  to: tx.to,
                  hash: tx.hash,
                  nonce: tx.nonce,
                  transactionIndex: tx.transactionIndex,
                  r: tx.r,
                  s: tx.s,
                  v: tx.v,
                  value: tx.value,
                });
                tempBlock.addTransaction(txAdd);
              }
            });
          }
        }
      });
    }
  });
  const checkList = await db.Transaction.findAll({
    order: [["blockHeight", "desc"]],
    limit: 6,
    include: [
      {
        model: db.Block,
        attributes: ["time", "parentHash"],
      },
    ],
  });

  // 트랜잭션 보내자!
  res.send({ msg: "ok", list: checkList });
});

router.post("/blocksList", async (req, res) => {
  const blockList = await db.Block.findAll();
  res.send({ msg: "sucessed list", list: blockList.reverse() });
});

router.post("/detail", async (req, res) => {
  const { number } = req.body;
  const detailBlock = await db.Block.findOne({ where: { number: number } });
  res.send({ msg: "sucessed list", block: detailBlock });
});

export default router;

// geth --datadir ~/myGeth --http --http.addr "0.0.0.0" --http.port 8080 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 --ws --ws.port 8888 --ws.origins "*" console
// geth --datadir ~/myGeth --http --http.addr "0.0.0.0" --http.port 8080 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50
