const ingToken = artifacts.require("ingToken");
const EthSwap = artifacts.require('EthSwap')

module.exports = async function (deployer) {
  try {
    deployer.deploy(ingToken); // tx1 ingToken 배포
    const token = await ingToken.deployed(); // 배포된 ingToken의 ca

    await deployer.deploy(EthSwap, token.address);
    const ethSwap = await EthSwap.deployed();

  } catch(e) {
    console.log(e.message)
  }
  
};
