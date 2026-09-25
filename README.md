# CRM Bitrix24-inspired platform

A modern CRM system inspired by Bitrix24 with a strong focus on sales, customer management, tasks, and business workflows.

## Goals

- Manage contacts, companies, and pipelines
- Track deals and sales stages
- Support sales and support teams
- Provide a dashboard for daily CRM operations
- Prepare a scalable architecture for future modules

## Tech Stack

- Frontend: React + Vite + TypeScript
- Backend: Node.js + Express + TypeScript
- Shared types: monorepo package
- Build tool: npm workspaces

## Project structure

```text
crm-bitrix24-inspired/
├── apps/
│   ├── api/
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/
│       ├── src/
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── packages/
│   └── shared/
│       └── src/
├── .gitignore
├── package.json
└── README.md
```

## Getting started

```bash
npm install
npm run dev
```

This starts:
- API: http://localhost:4000
- Web app: http://localhost:5173

## Planned modules

- Contacts
- Companies
- Deals
- Pipeline stages
- Tasks and reminders
- Email and call tracking
- Reporting and analytics
- Users and permissions
- Automation rules

## License

MIT
