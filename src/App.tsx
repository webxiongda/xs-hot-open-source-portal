import { useEffect, useState } from 'react'
import { getProduct, HOT_LINES, PRODUCTS, type Product } from './data'

function useRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, '') || 'home'
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onHash = () => {
      setRoute(read())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

const goto = (slug: string) => {
  window.location.hash = `#/${slug}`
}

function Header({ route }: { route: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/home" aria-label="返回首页">
        <span className="brand-mark">XS</span>
        <span className="brand-text">热点开源产品集</span>
      </a>
      <nav className="nav">
        <a href="#/home" className={route === 'home' ? 'active' : ''}>首页</a>
        {PRODUCTS.map((p) => (
          <a key={p.slug} href={`#/${p.slug}`} className={route === p.slug ? 'active' : ''}>
            {p.emoji} {p.name}
          </a>
        ))}
      </nav>
      <a className="gh-link" href="https://github.com/webxiongda" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>从热榜里长出来的 5 个开源工具 · 2026-11-20</span>
      <span>React + TypeScript + Vite · 全部 MIT License</span>
    </footer>
  )
}

function HotStrip() {
  return (
    <section className="hot-strip">
      <div className="hot-strip-head">
        <span className="pulse" />
        <span>热点信号 · 来自 GitHub Trending / X 技术热榜 · 2026-11-20</span>
      </div>
      <div className="hot-grid">
        {HOT_LINES.map((h) => (
          <button key={h.line} className="hot-item" onClick={() => goto(h.product)}>
            <span className="hot-line">{h.line}</span>
            <span className="hot-evidence">{h.evidence}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-badge">5 个产品 · 6 个开源仓库 · 全部可运行</div>
        <h1>
          从 <span className="grad">热榜</span> 里长出来的<br />5 个开源产品
        </h1>
        <p className="hero-sub">
          不拍脑袋。每个产品都对应一条 2026-11-20 正在爆的开发者热点，
          纯前端、零后端、内置示例，点开就能跑。
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="#/slopcheck">开始逛 →</a>
          <a className="btn ghost" href="https://github.com/webxiongda" target="_blank" rel="noreferrer">看 GitHub</a>
        </div>
        <div className="hero-stats">
          <div><b>5</b><span>产品</span></div>
          <div><b>6</b><span>仓库</span></div>
          <div><b>100%</b><span>纯前端</span></div>
          <div><b>MIT</b><span>协议</span></div>
        </div>
      </section>

      <HotStrip />

      <section className="section">
        <div className="section-head">
          <h2>挑一个，直接玩</h2>
          <p>每张卡片点进去都有：热点证据、真实可运行的 demo、快速开始命令。</p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.slug}
              className="product-card"
              style={{ ['--accent' as string]: p.accent, ['--glow' as string]: p.glow }}
              onClick={() => goto(p.slug)}
            >
              <div className="card-top">
                <span className="card-emoji">{p.emoji}</span>
                <span className="card-hot">{p.hotLabel}</span>
              </div>
              <h3>{p.name}</h3>
              <p className="card-tagline">{p.tagline}</p>
              <p className="card-desc">{p.description}</p>
              <div className="card-foot">
                <span>进入产品 →</span>
                <span className="card-index">0{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

function DemoFrame({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false)
  const src = `./demos/${product.slug}/`
  return (
    <section className="demo-section">
      <div className="demo-bar">
        <div className="demo-dots"><i /><i /><i /></div>
        <span className="demo-url">{src}</span>
        <div className="demo-actions">
          <button onClick={() => setExpanded(!expanded)}>{expanded ? '收起' : '放大'}</button>
          <a href={src} target="_blank" rel="noreferrer">新窗口打开 ↗</a>
        </div>
      </div>
      <iframe
        className={expanded ? 'demo-frame expanded' : 'demo-frame'}
        src={src}
        title={`${product.name} 在线演示`}
        loading="lazy"
      />
      <p className="demo-note">↑ 这是内嵌的真实产品，不是截图 —— 可以直接在里面输入、拖拽、点击。</p>
    </section>
  )
}

function ProductPage({ product }: { product: Product }) {
  return (
    <main className="product-page" style={{ ['--accent' as string]: product.accent, ['--glow' as string]: product.glow }}>
      <div className="breadcrumb">
        <a href="#/home">首页</a><span>/</span><span>{product.name}</span>
      </div>

      <section className="product-hero">
        <div className="product-hero-badge">{product.emoji} {product.hotLabel}</div>
        <h1>{product.name}</h1>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-desc">{product.description}</p>
        <div className="product-cta">
          <a className="btn primary" href={`https://github.com/webxiongda/${product.slug}`} target="_blank" rel="noreferrer">GitHub 仓库 ↗</a>
          <a className="btn ghost" href="#/home">← 返回全部产品</a>
        </div>
      </section>

      <section className="two-col">
        <div className="panel">
          <h2>为什么是它：热点证据</h2>
          <ul className="evidence-list">
            {product.hotEvidence.map((e) => <li key={e}>{e}</li>)}
          </ul>
          <p className="panel-note">这些数字来自 2026-11-20 GitHub Trending 榜单与 X 技术热榜摘要。</p>
        </div>
        <div className="panel">
          <h2>核心功能</h2>
          <div className="feature-list">
            {product.features.map((f) => (
              <div className="feature" key={f.title}>
                <b>{f.title}</b>
                <span>{f.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoFrame product={product} />

      <section className="quickstart">
        <h2>本地跑起来</h2>
        <pre><code>{product.steps.join('\n')}</code></pre>
        <p className="panel-note">亮点：{product.highlight}</p>
      </section>

      <div className="prev-next">
        {(() => {
          const i = PRODUCTS.findIndex((p) => p.slug === product.slug)
          const prev = PRODUCTS[(i - 1 + PRODUCTS.length) % PRODUCTS.length]
          const next = PRODUCTS[(i + 1) % PRODUCTS.length]
          return (
            <>
              <button onClick={() => goto(prev.slug)}>← {prev.emoji} {prev.name}</button>
              <button onClick={() => goto(next.slug)}>{next.emoji} {next.name} →</button>
            </>
          )
        })()}
      </div>
    </main>
  )
}

export default function App() {
  const route = useRoute()
  const product = getProduct(route)
  return (
    <div className="app-shell">
      <Header route={route} />
      {product ? <ProductPage product={product} /> : <HomePage />}
      <Footer />
    </div>
  )
}
