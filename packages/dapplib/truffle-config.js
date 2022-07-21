require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember attitude inner nation force slab'; 
let testAccounts = [
"0xd4dec4ef6c3ad55435c00a191032671fb52ed292e4f970e8aa1ee2def6fea470",
"0x1dc81b972ab0d27cb265063bf49563bfe6268d18929500e7d276701e078614cd",
"0xef48f242f40a82d2a77d6fd91d613d3a5faabe8a824b04529a7014923b7d5672",
"0x94f1770ebaf1c85c61ba5268004c6da37cc7c00f118b45d044d9ac95610f0347",
"0xb06c33e058928101b07a31942ce1b54356233b3389c6048f47da657552bac668",
"0x31ed4f3f0b2ceca83a59579d27616e66b4c4da76f104ec15da1662a54dd6f536",
"0x3ca087445ef14d02a9bfbac40f9f721fe4e4ff4e496d24b0b2e1081558c7559c",
"0xdbe0394637a7ed486e801367ad3485b1600ac4d7ac6a45da2927dd25dd7a2c88",
"0x0ed4c4fe21e393045fbee9ff007bff01663af50b6aae703f283385896963414c",
"0x31db1583fe32590a6fd9440853675f617c6a4313eb120e39beaa81a5e68d0472"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

