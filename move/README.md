# NFT Smart Contract - APTOS

## Deployed Contract

[0xfc1acad6ac59c8a1c44dd930e9a55f4d3a5ba5a560e59b27651d4a70649191bf](https://explorer.aptoslabs.com/account/0xfc1acad6ac59c8a1c44dd930e9a55f4d3a5ba5a560e59b27651d4a70649191bf?network=devnet)

## Screenshots



### How to publish?

```
aptos move create-resource-account-and-publish-package --seed [seed] --address-name mint_nft --profile default --named-addresses source_addr=[default account's address]
```

### Test Functions

```
aptos init --profile nft-receiver
```

```
aptos move run --function-id 46253fce25e30892b97f6ccd8db1fa93b2015b58c103d13c4bda75f8c979048e::create_nft_with_resource_account::mint_event_ticket --profile nft-receiver
```
