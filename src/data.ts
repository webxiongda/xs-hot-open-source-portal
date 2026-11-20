export type Product = {
  slug: string
  name: string
  emoji: string
  tagline: string
  description: string
  accent: string
  glow: string
  hotLabel: string
  hotEvidence: string[]
  features: { title: string; detail: string }[]
  steps: string[]
  highlight: string
}

export const HOT_LINES = [
  { line: '反 AI 味 / 设计品质', evidence: 'impeccable +15.2k · unslop +15.1k · hallmark +14.1k / 月', product: 'slopcheck' },
  { line: '代码知识图谱', evidence: 'graphify +10.6k/月 · codegraph +119/天', product: 'codegraph' },
  { line: '文档转 Markdown', evidence: 'microsoft/markitdown 今日 +434（全场第一）', product: 'drop2md' },
  { line: 'Agent Skills 生态', evidence: 'mattpocock/skills +19.7k · anthropics/skills +11.8k', product: 'skillvault' },
  { line: 'Token 经济学', evidence: 'MSFT TokenEconomizer 上 X 热榜 · OmniRoute +5.7k', product: 'tokenlens' },
]

export const PRODUCTS: Product[] = [
  {
    slug: 'slopcheck',
    name: 'SlopCheck',
    emoji: '🧹',
    tagline: '你的文字，有 AI 味吗？',
    description: '粘贴文案或代码，实时揪出 AI 陈词、黑话、句式套路，给出评分、高亮和能直接用的朴素改法。规则库零依赖、社区可扩展。',
    accent: '#ff7a59',
    glow: 'rgba(255,122,89,.35)',
    hotLabel: '反 AI 味',
    hotEvidence: ['impeccable +15.2k / 月', 'unslop +15.1k / 月', 'hallmark +14.1k / 月'],
    features: [
      { title: '加权密度评分', detail: '0–100 AI 味指数，重叠命中去重，实测示例得分 100 / 69 / 0' },
      { title: '分类高亮', detail: '英文陈词、中文黑话、句式套路、Emoji 滥用、填充冗余分色标注' },
      { title: '逐条改法', detail: '每条命中配一个可直接替换的朴素表达，不是空泛建议' },
      { title: '一键去味 + 分享卡', detail: '自动改写输出可复制，Top3 命中生成可分享结果卡' },
    ],
    steps: ['cd slopcheck', 'npm install', 'npm run dev'],
    highlight: '规则集中在 src/rules.ts，方便社区提 PR 扩展词库',
  },
  {
    slug: 'codegraph',
    name: 'CodeGraph',
    emoji: '🕸️',
    tagline: '看见代码之间的隐形连线',
    description: '用 TypeScript 编译器 API 解析任意 TS/JS 项目，把手写的 AST 依赖变成可交互的力导向图谱，顺带揪出循环依赖、孤儿文件和枢纽节点。',
    accent: '#8b7bff',
    glow: 'rgba(139,123,255,.35)',
    hotLabel: '代码图谱',
    hotEvidence: ['graphify +10.6k / 月', 'codegraph +119 / 天', '本地 AST、无向量库'],
    features: [
      { title: '真实 AST 解析', detail: 'createSourceFile 提取 import / export / 动态导入，解析失败优雅降级' },
      { title: '手写力导向图', detail: 'SVG 节点发光，支持拖拽、缩放、搜索、按目录着色，零图表依赖' },
      { title: '依赖体检', detail: 'DFS 找环、孤儿节点、枢纽 Top5，示例 11 文件 / 26 边 / 3 个环' },
      { title: '零额外依赖', detail: '除了 TS 编译器本身，运行时只有 react / react-dom' },
    ],
    steps: ['cd codegraph', 'npm install', 'npm run dev'],
    highlight: '浏览器实测无控制台报错，打开示例项目即渲染完整图谱',
  },
  {
    slug: 'drop2md',
    name: 'Drop2MD',
    emoji: '📄',
    tagline: '任何文件，拖进来就是 Markdown',
    description: '纯前端文件转 Markdown 工具。拖拽批量转换 md / txt / html / csv / json，带安全预览和一键下载，文件全程留在你的浏览器里。',
    accent: '#3ddc97',
    glow: 'rgba(61,220,151,.32)',
    hotLabel: 'markitdown',
    hotEvidence: ['microsoft/markitdown 今日 +434（全场第一）', '隐私优先 / 零上传', '零依赖 Markdown 渲染'],
    features: [
      { title: '批量拖拽转换', detail: 'md/txt 直通，html 结构化提取，csv 转表格，json 格式化成代码块' },
      { title: '安全预览', detail: '手写渲染器 + XSS 白名单转义，预览/源码一键切换' },
      { title: '复制与下载', detail: '单个复制/下载，全部一键打包下载为 .md' },
      { title: '本地隐私', detail: '零上传、零后端，顶部常驻隐私提示条' },
    ],
    steps: ['cd drop2md', 'npm install', 'npm run dev'],
    highlight: '内置 HTML / CSV / JSON 三个示例，点一下就能看效果',
  },
  {
    slug: 'skillvault',
    name: 'SkillVault',
    emoji: '🧰',
    tagline: '让你的技能，触手可及',
    description: '管理、筛选、开关你的 Agent Skills。解析 SKILL.md frontmatter，可视化每个技能的用途，一键生成能直接跑的批量安装脚本。',
    accent: '#d36bff',
    glow: 'rgba(211,107,255,.32)',
    hotLabel: 'Agent Skills',
    hotEvidence: ['mattpocock/skills +19.7k / 月', 'anthropics/skills +11.8k / 月', '本地优先 / 数据不出浏览器'],
    features: [
      { title: 'SKILL.md 解析', detail: 'frontmatter 名称/描述/工具实时预览，解析失败给明确中文报错' },
      { title: '分类与启停', detail: '搜索、五类筛选、开关持久化到 localStorage，10 个真实示例技能' },
      { title: '批量安装脚本', detail: 'heredoc 写入完整技能内容，复制即可在终端执行' },
      { title: '详情抽屉', detail: '带行号查看完整 SKILL.md 原文' },
    ],
    steps: ['cd skillvault', 'npm install', 'npm run dev'],
    highlight: '数据全部留在浏览器，自包含脚本可直接落地到 ~/.claude/skills',
  },
  {
    slug: 'tokenlens',
    name: 'TokenLens',
    emoji: '💰',
    tagline: '你的 token，到底花在哪了？',
    description: '把 Claude Code 会话日志拖进来，立刻看到 token 在输入、输出、缓存间的分布，找出重复读取和高输出低缓存的浪费点，拿到可执行的省钱建议。',
    accent: '#4aa8ff',
    glow: 'rgba(74,168,255,.32)',
    hotLabel: 'Token 经济学',
    hotEvidence: ['MSFT TokenEconomizer 上 X 热榜', 'OmniRoute +5.7k / 月', '缓存命中率优化'],
    features: [
      { title: '健壮解析', detail: '兼容 usage 字段变体，跳过坏行并提示数量，支持 jsonl / json' },
      { title: '全手写图表', detail: '环形分布、Token 时间线、模型条形图、缓存命中率仪表，零图表库' },
      { title: '浪费雷达', detail: '重复读取高发时段、高输出低缓存、超长消息 Top5' },
      { title: '省钱建议', detail: '每条建议带估算依据与节省比例（明确标注为估算）' },
    ],
    steps: ['cd tokenlens', 'npm install', 'npm run dev'],
    highlight: '内置 20 条示例会话，打开即见完整仪表盘与建议',
  },
]

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug)
