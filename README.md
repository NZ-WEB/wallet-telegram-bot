# Wallet telegram - bot
## Telegram bot was written on telegraf framework with Typescript
## Installation:
```
npm i
```
# Run
```
npm run dev
```

## Arch tree:
```

├── environument.d.ts
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app.ts
│   ├── commands
│   │   ├── commandBuilder
│   │   │   └── command.builder.ts
│   │   ├── preStart
│   │   │   └── preStart.command.ts
│   │   ├── start
│   │   │   └── start.command.ts
│   │   └── wallet
│   │       ├── addWallet.command.ts
│   │       └── getWallet.command.ts
│   └── core
│       ├── context
│       │   └── IWalletContext.ts
│       ├── keyboards
│       │   └── keyboards.ts
│       ├── scenes
│       │   ├── index.ts
│       │   ├── startController
│       │   │   └── startController.scene.ts
│       │   ├── types
│       │   │   ├── MySceneSession.interface.ts
│       │   │   └── walletSceneSession.interface.ts
│       │   └── wallet
│       │       ├── amount.scene.ts
│       │       └── currency.scene.ts
│       ├── sessions
│       │   └── IWalletSession.ts
│       └── wallet
│           ├── wallet.interface.ts
│           └── wallet.ts
├── tree.txt
└── tsconfig.json

15 directories, 23 files

