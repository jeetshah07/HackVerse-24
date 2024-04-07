## NFT Smart Contract - APTOS

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
