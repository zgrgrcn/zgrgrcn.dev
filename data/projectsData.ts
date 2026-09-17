import type { Project } from '~/types'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'AI Code Review Bot',
    description:
      'Autonomous merge request reviewer powered by Model Context Protocol (MCP) servers, vector storage over internal architecture standards, and n8n workflows. Automatically reads MR diffs and Jira specs to post contextual feedback and answer system questions in Slack.',
    imgSrc: '/static/images/rocket.jpg',
    url: '/blog/building-an-autonomous-code-review-bot-with-mcp-and-n8n',
    builtWith: ['MCP', 'Python', 'n8n', 'Vector DB', 'Slack API', 'GitLab API'],
  },
  {
    type: 'work',
    title: 'High-Scale Load-Test Data Generator',
    description:
      'High-concurrency data generation pipeline replacing 30+ manual HTTP requests with parallel batch calls. Capable of spinning up tens of millions of coupon entities in under 5 minutes to stress-test active-active data layers and Chaos Engineering scenarios before campaign peaks.',
    imgSrc: '/static/images/performance.jpg',
    url: '/blog/taming-the-n-plus-1-problem-at-scale',
    builtWith: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker'],
  },
  {
    type: 'work',
    title: 'Automated Architecture & Wiki Sync',
    description:
      'Continuous documentation pipeline using n8n and GitLab webhooks that diffs merged codebase changes against team architectural standards (ADRs) and synchronizes technical documentation automatically, eliminating documentation debt.',
    imgSrc: '/static/images/server.jpg',
    url: '/blog/building-an-autonomous-code-review-bot-with-mcp-and-n8n',
    builtWith: ['n8n', 'Node.js', 'GitLab CI', 'Markdown', 'Webhooks'],
  },
  {
    type: 'work',
    title: 'Self-Service Dynamic Config Pipeline',
    description:
      'GitLab CI validation and automated deployment workflow allowing non-developer stakeholder teams to deploy production campaign rules safely with automated schema validation and sanity assertions, slashing release turnaround from 30 minutes to under 30 seconds.',
    imgSrc: '/static/images/lock.jpg',
    url: '/blog/resilience-patterns-for-event-driven-architectures',
    builtWith: ['GitLab CI', 'JSON Schema', 'Bash', 'Docker'],
  },
  {
    type: 'self',
    title: 'JSONShare',
    description:
      'A modern, high-performance online JSON studio with an interactive tree inspector, syntax error auto-fixer, recursive alphabetical key sorting, VS Code themes, schema diff comparison, and instant shareable URLs.',
    imgSrc: '/static/images/jsonshare.png',
    repo: 'jsonshare.dev',
    url: 'https://github.com/zgrgrcn/jsonshare.dev',
    builtWith: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Sentry'],
  },
  {
    type: 'self',
    title: 'Personal Portfolio & Engineering Hub',
    description:
      'Modern static/serverless engineering hub and tech log, self-hosted on a dedicated VPS using Coolify, Traefik automated TLS, multi-stage standalone Docker builds, and automated GitHub CI/CD.',
    imgSrc: '/static/images/ozgur-blog.png',
    repo: 'zgrgrcn.dev',
    url: 'https://github.com/zgrgrcn/zgrgrcn.dev',
    builtWith: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Drizzle / Prisma',
      'PostgreSQL',
      'Docker',
      'Coolify',
      'Cloudflare',
    ],
  },
]
