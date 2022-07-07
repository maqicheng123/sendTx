const Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-devnet.rei.network"));
let account = web3.eth.accounts.privateKeyToAccount("!!!!Enter the private key here!!!!");
function main() {
    sendTranscation();
}

async function sendTranscation() {
    let txCount = await web3.eth.getTransactionCount(account.address);
    await web3.eth.accounts.wallet.add({
        privateKey: account.privateKey,
        address: account.address
    });
    console.log("nonce : ", txCount)
    BatchSend(txCount, 1000);
}

async function BatchSend(nonce, count) {
    let data = "0x" + getHexString();
    for (let i = 0; i < count; i++) {
        console.log("transcation count: tx-", nonce)
        await web3.eth.sendTransaction({
            from: "0xFF96A3BfF24DA3d686FeA7BD4bEB5ccFD7868DdE",
            to: '0x7D8f270d34a2b78Ed7e64C173f82919aC1006374',
            value: '1',
            gas: 210000,
            gasPrice: '200',
            nonce: nonce,
            chainId: 23579,
            data: data
        });
        nonce++;
    }
}

function getHexString() {
    let result = "f";
    for (let i = 0; i < 1000; i++) {
        result += "f";
    }
    return result
}
main();