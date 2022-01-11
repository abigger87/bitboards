# bitboards  • [![tests](https://github.com/abigger87/bitboards/actions/workflows/tests.yml/badge.svg)](https://github.com/abigger87/bitboards/actions/workflows/tests.yml) [![lints](https://github.com/abigger87/bitboards/actions/workflows/lints.yml/badge.svg)](https://github.com/abigger87/bitboards/actions/workflows/lints.yml) ![GitHub](https://img.shields.io/github/license/abigger87/bitboards) ![GitHub package.json version](https://img.shields.io/github/package-json/v/abigger87/bitboards)

**Fungible** rewards for our developooors.


Steps:

1. Query for all addresses that deployed a contract using the [inquisitor](./inquisitor).
2. Using the `config.json` output from step 1, Generate Merkle tree of recipients by following README in [generator/](./generator)
3. Setup and deploy MerkleClaimERC20 contracts by following README in [contracts/](./contracts)
4. Setup and deploy front-end by following README in [frontend/](./frontend)

## Acknowledgements

- [Anish Agnhihotri Airdrop Starter](https://github.com/Anish-Agnihotri/merkle-airdrop-starter)
- [Astrodrop](https://astrodrop.xyz/)—Simpler way to spin up a airdrop with claim page, given existing token
- [Uniswap Merkle Distributor](https://github.com/Uniswap/merkle-distributor)—Uniswap's merkle distribution smart contracts

## License

[GNU Affero GPL v3.0](https://github.com/Anish-Agnihotri/merkle-airdrop-starter/blob/master/LICENSE)

## Disclaimer

_These smart contracts are being provided as is. No guarantee, representation or warranty is being made, express or implied, as to the safety or correctness of the user interface or the smart contracts. They have not been audited and as such there can be no assurance they will work as intended, and users may experience delays, failures, errors, omissions or loss of transmitted information. Andreas Bigger is not liable for any of the foregoing. Users should proceed with caution and use at their own risk._
