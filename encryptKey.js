const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encryptedJSONkey = await wallet.encrypt(
        process.env.PRIVATE_KEY,
        process.env.PASS_ENCRYPT
    )
    console.log(encryptedJSONkey);
    fs.writeFileSync("./.encryptedKey.json", encryptedJSONkey);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
