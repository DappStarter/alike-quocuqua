require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strike rival rural huge imitate prison equal gas'; 
let testAccounts = [
"0x2b0adf13efcacc067cb4a2fc804935877d2dfde7893bcdcb2924bf26d7e97e47",
"0xec2f86befb21db1851dca10bda52a60229ba52add715b66151231127f2e74082",
"0xe1dff5e9ac92894f6b42c6927db47fbff81bb0db350c0c5d98c55638092f83f3",
"0x4ca4f59c558e2ae277e6d3bbc48e77ea592cc783f99fef1cd5fa63987cd24311",
"0x46d31913b9b843733dd1572d9422c2fa75579154b2608b4a13876420038e426b",
"0xddb3ea6a9e291c7848117d9d2d889c59bcbcf664a5805e65805a16cbf8291043",
"0xe4e857cf350bab99094b624d600d9a321659058bb9a6e65a04c8574c3ad22138",
"0x482ace52ae292083478473aa6b93229f90f260ee700b91509aed9f52ff3fb395",
"0x9481c9c72304b53d3d14605e4c962e95b6f6ee1ff21cf4799efb267147883149",
"0x22965a1678530e24b3d0620e6e58c29060cc655d276f049ced75db769055a4e6"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
