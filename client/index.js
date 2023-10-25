const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const merkleTree = new MerkleTree(niceList);
  const name = "Mrs. Shelia Welch";
  const index = niceList.findIndex((n) => n === name);
  const proof = merkleTree.getProof(index);
  await axios
    .post(`${serverUrl}/gift`, {
      params: { proof: proof, name: name },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

main();
