# 🔥 XS 热点开源产品集 · 门户站

> 从 2026-11-20 GitHub Trending / X 技术热榜挑出的 5 个热点方向，做成 5 个能直接跑的开源产品。本仓库是统一门户，首页 + 5 个产品详情页共 6 页，每页内嵌**真实可运行的产品 demo**（不是截图）。

![license](https://img.shields.io/badge/license-MIT-green)
![stars](https://img.shields.io/github/stars/webxiongda/xs-hot-open-source-portal?style=social)
![React](https://img.shields.io/badge/React-18-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

## 在线预览

在线地址：https://webxiongda.github.io/xs-hot-open-source-portal/

本地运行：

```bash
npm install
npm run dev
```

打开终端给出的地址，6 个页面：

- `#/home` — 首页：热点信号 + 5 个产品卡片
- `#/slopcheck` — AI 味检测器
- `#/codegraph` — 代码依赖图谱
- `#/drop2md` — 拖拽转 Markdown
- `#/skillvault` — Agent Skills 管理器
- `#/tokenlens` — Token 花费分析器

## 5 个产品

| 产品 | 热点 | 仓库 |
|---|---|---|
| 🧹 SlopCheck | 反 AI 味（impeccable +15.2k/月） | [slopcheck](https://github.com/webxiongda/slopcheck) |
| 🕸️ CodeGraph | 代码图谱（graphify +10.6k/月） | [codegraph](https://github.com/webxiongda/codegraph) |
| 📄 Drop2MD | markitdown 今日 +434 | [drop2md](https://github.com/webxiongda/drop2md) |
| 🧰 SkillVault | Skills（mattpocock/skills +19.7k/月） | [skillvault](https://github.com/webxiongda/skillvault) |
| 💰 TokenLens | Token 经济学（TokenEconomizer 热榜） | [tokenlens](https://github.com/webxiongda/tokenlens) |

## demo 是怎么嵌进去的

`public/demos/<product>/` 里是各产品用 `vite build --base=./` 产出的静态文件，iframe 以相对路径加载，因此门户部署到任意路径都能跑，无需后端或跨仓库请求。更新某个 demo：

```bash
cd slopcheck
npx vite build --base=./ --outDir=../portal/public/demos/slopcheck
cd ../portal && npm run build
```

## 技术栈

React 18 + TypeScript + Vite，hash 路由零依赖；样式为手写 CSS，玻璃拟态 + 渐变 + 微动效，响应式。

## License

MIT
