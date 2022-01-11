# Inquisitor

Script to query on chain data.

## Run locally

```bash
# Navigate to inquisitor directory, if not already there
cd inquisitor/

# Install dependencies
yarn

# Edit config.json
vim config.json

# Run script
yarn start
```

Outputs a `config.json`, in the following format:

```json
{
  "decimals": 18,
  "airdrop": {
    "0x016C8780e5ccB32E5CAA342a926794cE64d9C364": 10,
    "0x109f93893af4c4b0afc7a9e97b59991260f98313": 100,
    ...
  }
}

```
