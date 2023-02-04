/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: goerli,
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://eth-goerli.g.alchemy.com/v2/O8SxEhFsWlwdk7KM_aJKSjG73nAuanZI',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
      
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};