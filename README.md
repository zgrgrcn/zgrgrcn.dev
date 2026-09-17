<div align="center">

# zgrgrcn.dev

**Personal Engineering Hub, Production Architecture Case Studies & Technical Blog**

[![Website](https://img.shields.io/badge/Website-ozgurgurcan.com-0ea5e9?style=flat-square&logo=google-chrome&logoColor=white)](https://ozgurgurcan.com)
[![Next.js](https://img.shields.io/badge/Next.js-13-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169e1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Multi--stage-2496ed?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Coolify](https://img.shields.io/badge/Coolify-Self--Hosted-6c5ce7?style=flat-square&logo=server&logoColor=white)](https://coolify.io/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Edge_Network-f38020?style=flat-square&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/)

</div>

---

## 📌 Overview

**[ozgurgurcan.com](https://ozgurgurcan.com)** (also accessible via **[dev.ozgurgurcan.com](https://dev.ozgurgurcan.com)**) is the personal website, engineering portfolio, and technical writing hub of **Ozgur Gurcan** (Software Engineer | Backend & Distributed Systems). 

It features production war stories, high-throughput distributed systems case studies, zero-downtime database migration playbooks, and modern AI engineering workflows (MCP & n8n). The site is architected for maximum performance, minimal resource footprint, and zero cloud vendor lock-in through self-hosted containerization.

---

## 🛠️ Tech Stack & Architecture

### Application & Frontend
- **Framework:** [Next.js 13](https://nextjs.org/) configured with `output: 'standalone'` for minimal container payloads.
- **Language:** [TypeScript](https://www.typescriptlang.org/) with strict type safety.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with typography and custom dark/light theme tokens.
- **Content Engine:** MDX Bundler, Rehype, Remark GFM, and Prism Plus for syntax highlighting.
- **State & Data Fetching:** [SWR](https://swr.vercel.app/) for client-side telemetry and view counter synchronization.

### Database & Persistence
- **Database:** [PostgreSQL 17](https://www.postgresql.org/) hosted on private infrastructure.
- **ORM / Schema:** [Prisma](https://www.prisma.io/) schema powering view tracking and analytics metrics with indexed slug lookup.

### Infrastructure & Operations
- **Containerization:** Multi-stage Docker image using `node:20-slim`, non-root execution (`nextjs:1001`), and asset optimization.
- **Deployment & PaaS:** Self-hosted on [Coolify](https://coolify.io/) with automatic container orchestration and zero downtime rolling restarts.
- **Networking & Edge:** Traefik reverse proxy coupled with [Cloudflare](https://www.cloudflare.com/) edge caching, SSL termination, and DDoS protection.

---

## 📚 Featured Case Studies & Engineering Logs

The hub publishes in-depth architectural post-mortems and engineering deep dives based on real-world high-throughput platforms:

1. **[Multi-Datacenter Active-Active at Scale (7M RPM)](https://ozgurgurcan.com/blog/multi-datacenter-active-active-at-scale)**
   - Architecting bidirectional data replication, conflict resolution (LWW, CRDTs), and failure domain isolation under extreme load.
2. **[Zero-Downtime Database Migration: Couchbase to PostgreSQL](https://ozgurgurcan.com/blog/zero-downtime-database-migration-couchbase-to-postgresql)**
   - Production dual-write patterns, asynchronous backfill reconcilers, and shadow-read verification under heavy transactional traffic.
3. **[Taming the N+1 Query Problem at Scale](https://ozgurgurcan.com/blog/taming-the-n-plus-1-problem-at-scale)**
   - Systematic query optimization, batch loading, and connection pool tuning in high-concurrency Spring Boot and Go microservices.
4. **[Building an Autonomous AI Code Review Bot with MCP & n8n](https://ozgurgurcan.com/blog/building-an-autonomous-code-review-bot-with-mcp-and-n8n)**
   - Implementing autonomous GitLab merge request reviews using Model Context Protocol (MCP) servers, team architectural standards (ADRs), and vector search.
5. **[Resilience Patterns for Event-Driven Architectures](https://ozgurgurcan.com/blog/resilience-patterns-for-event-driven-architectures)**
   - Transactional outbox pattern, idempotent consumers, dead-letter queues, and Kafka circuit breakers.
6. **[Java 25 and Spring Boot 4 Virtual Threads](https://ozgurgurcan.com/blog/java-25-and-spring-boot-4-virtual-threads)**
   - Project Loom deep dive: eliminating thread-pinning, carrier thread exhaustion, and optimizing I/O intensive throughput.
7. **[Dynamic Limit Allocation on 32TB Data with BigQuery](https://ozgurgurcan.com/blog/dynamic-limit-allocation-on-32tb-data-with-bigquery)**
   - Large-scale quota management, query partitioning, and cost-efficient analytics at terabyte scale.
8. **[Ditching PaaS: Self-Hosting My Stack with Coolify](https://ozgurgurcan.com/blog/ditching-paas-self-hosting-my-stack-with-coolify)**
   - Migration journey from proprietary cloud PaaS to a fully controlled, self-hosted Docker and Coolify setup.

---

## 💻 Local Development

### Prerequisites
- Node.js `20.x` or later
- npm `9.x` or later
- A running PostgreSQL instance (or Docker) for view counter endpoints

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zgrgrcn/zgrgrcn.dev.git
   cd zgrgrcn.dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file at the root:
   ```env
   # PostgreSQL Connection String
   DATABASE_URL="postgresql://user:password@localhost:5432/zgrgrcn_db?schema=public"

   # Optional Integrations
   SPOTIFY_CLIENT_ID=""
   SPOTIFY_CLIENT_SECRET=""
   SPOTIFY_REFRESH_TOKEN=""
   GITHUB_API_TOKEN=""
   ```

4. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verification Commands

```bash
# Typecheck
npm run typecheck

# Production build
npm run build

# Linting
npm run lint
```

---

## 🐳 Docker & Coolify Deployment

### Multi-Stage Dockerfile

The application uses an optimized 3-stage build (`deps` ➔ `builder` ➔ `runner`):
- **Stage 1 (deps):** Installs production and build dependencies with `npm ci` and generates the Prisma client.
- **Stage 2 (builder):** Compiles Next.js using standalone mode, bundling only necessary dependencies.
- **Stage 3 (runner):** Minimal `node:20-slim` runtime running under an unprivileged `nextjs` system user (`UID 1001`).

### Build & Run Locally with Docker

```bash
# Build the Docker image
docker build -t zgrgrcn-dev:latest .

# Run the container
docker run -d \
  --name zgrgrcn-dev \
  -p 3000:3000 \
  -e DATABASE_URL="postgresql://user:password@host.docker.internal:5432/zgrgrcn_db?schema=public" \
  zgrgrcn-dev:latest
```

### Coolify Self-Hosting Deployment

1. **Add Project:** Create a new application in Coolify connected to `zgrgrcn/zgrgrcn.dev` (branch `main`).
2. **Build Pack:** Select **Dockerfile**. Coolify automatically detects `./Dockerfile`.
3. **Environment Variables:**
   - `DATABASE_URL`: Internal Coolify PostgreSQL service URL (e.g., `postgresql://postgres:secret@postgres-db:5432/zgrgrcn_db?schema=public`)
   - `NODE_ENV`: `production`
   - `PORT`: `3000`
4. **Networking:** 
   - Expose port `3000`.
   - Assign domains `https://dev.ozgurgurcan.com` and `https://ozgurgurcan.com`.
   - Set up Cloudflare SSL & proxying.
5. **Deploy:** Hit **Deploy**. Coolify pulls the repo, executes the multi-stage build, and activates the container with zero downtime.

---

## 👤 Author

**Ozgur Gurcan**
- Website: [ozgurgurcan.com](https://ozgurgurcan.com)
- GitHub: [@zgrgrcn](https://github.com/zgrgrcn)
- LinkedIn: [in/ozgurgurcan](https://linkedin.com/in/ozgurgurcan)

---

Copyright © 2026 Ozgur Gurcan. All rights reserved.
