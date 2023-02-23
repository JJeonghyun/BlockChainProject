import { Router } from "express";
import Web3 from "web3";

import db from "../models/index.js";

const web3 = new Web3("ws://localhost:8888");

const router = Router();

router.get("/", async (req, res) => {
  const blocks = await db.Block.findAll();
  res.send({ length: blocks.length });
});

router.get("/accounts", async (req, res) => {
  const tempAccounts = await web3.eth.getAccounts();
  res.send({ msg: "gdgd", accounts: tempAccounts });
});

router.get("/list", async (req, res) => {
  const blocks = await db.Block.findAll({
    order: [["number", "desc"]],
    limit: 50,
  });
  res.send({ blockList: blocks });
});

router.post("/latestBlocks", async (req, res) => {
  const tempBlock = await db.Block.findOne({
    where: { number: web3.eth.getBlock(0) },
  });
  if (tempBlock) {
    const tempLatestBlock = await web3.eth.getBlock("latest");
    const maxBlock = await db.Block.max("number");
    if (tempLatestBlock.number !== maxBlock) {
      for (let i = maxBlock + 1; i <= tempLatestBlock.number; i++) {
        web3.eth.getBlock(i, false, (err, block) => {
          db.Block.create(
            {
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
              gasUsed: block.gasUsed,
              gasLimit: block.gasLimit,
            },
            { ignoreDuplicates: true }
          );
        });
      }
    }

    web3.eth.subscribe("newBlockHeaders", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      web3.eth.getBlock(result.number, false, async (error, block) => {
        db.Block.create(
          {
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
            gasUsed: block.gasUsed,
            gasLimit: block.gasLimit,
          },
          { ignoreDuplicates: true }
        );
      });
    });
    const listUp = await db.Block.findAll({
      order: [["number", "desc"]],
      limit: 6,
    });
    res.send({ msg: "Add new Block", list: listUp });
  } else {
    const tempLatestBlock = await web3.eth.getBlock("latest");
    for (let i = 0; i <= tempLatestBlock.number; i++) {
      web3.eth.getBlock(i, false, (error, block) => {
        db.Block.create(
          {
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
            gasUsed: block.gasUsed,
            gasLimit: block.gasLimit,
          },
          { ignoreDuplicates: true }
        );
      });
    }
    const listUp = await db.Block.findAll({
      order: [["number", "desc"]],
      limit: 6,
    });
    res.send({ msg: "Sucessed", list: listUp });
  }
});

router.post("/addTx", async (req, res) => {
  web3.eth.getBlockNumber((err, number) => {
    for (let i = 1; i <= number; i++) {
      web3.eth.getBlockTransactionCount(i, true, (err, count) => {
        if (count > 0) {
          for (let j = 0; j < count; j++) {
            web3.eth.getTransactionFromBlock(i, j, async (err, tx) => {
              const tempBlock = await db.Block.findOne({
                where: { number: tx.blockNumber },
              });
              if (tempBlock) {
                const checkTx = await db.Transaction.findOne({
                  where: { blockHeight: tempBlock.number },
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
  res.send({ msg: "ok", list: checkList });
});

router.post("/blocksList", async (req, res) => {
  const blockList = await db.Block.findAll({
    order: [["number", "desc"]],
  });
  res.send({ msg: "sucessed list", list: blockList });
});

router.post("/detail", async (req, res) => {
  const { number } = req.body;
  const detailBlock = await db.Block.findOne({ where: { number: number } });
  res.send({ msg: "sucessed list", block: detailBlock });
});

export default router;
