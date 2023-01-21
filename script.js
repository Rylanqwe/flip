// Get the element with the id "bet-form"
var form = document.getElementById("bet-form");

// Change the background color of the element
form.style.backgroundColor = "green";
import { Connection } from '@solana/web3.js';
import { Wallet } from '@solana/web3.js/src/wallet';

const connection = new Connection('https://testnet.solana.com');
const wallet = new Wallet();
async function placeBet(amount, side) {
  const programId = '<programId>';
  const contract = new Contract(connection, programId);
  const tx = await contract.placeBet(amount, side, {
    sender: wallet,
  });
  await connection.sendTransaction(tx);
}
function flipCoin() {
  const result = Math.random() < 0.5 ? "heads" : "tails";
  document.getElementById("result").innerHTML = result;
}
