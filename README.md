# ChanCe_marriage

Site de mariage Clémence & Charles (30 mai 2026), construit avec Next.js 14 + Tailwind CSS.

## Développement local

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Docker

### Dev (hot reload)

```bash
docker compose -f docker-compose.dev.yml up
```

### Production (build multi-stage)

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Variables d'environnement: copier `.env.example` vers `.env.local` (dev) ou `.env.production` (prod).
