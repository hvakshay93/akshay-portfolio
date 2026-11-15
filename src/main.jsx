import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X,
  Cloud, Server, Workflow, ShieldCheck, Database, Terminal, GitBranch,
  Layers3, Activity, ExternalLink, CheckCircle2, Code2, Cpu, HardDrive,
  Network, Gauge, ChevronRight, MousePointer2
} from 'lucide-react'
import './styles.css'

const profile = {
  name: 'Akshay Ranganath H V',
  title: 'Cloud & DevOps Engineer',
  tagline: 'AWS  /  SAP  /  Terraform',
  email: 'akshayhv@hotmail.com',
  github: 'https://github.com/hvakshay93',
  linkedin: 'https://www.linkedin.com/in/akshay-ranganath-h-v-619a671a4',
}

const skills = [
  { name: 'AWS Cloud', detail: 'EC2, EBS, EFS, IAM, VPC, Backup & DR', icon: Cloud, group: 'Cloud' },
  { name: 'Terraform', detail: 'Infrastructure as Code & reusable modules', icon: Workflow, group: 'Automation' },
  { name: 'SAP Infrastructure', detail: 'SAP S/4HANA, HANA, ASCS & dialog tiers', icon: Server, group: 'Platforms' },
  { name: 'Linux Administration', detail: 'System operations, storage & troubleshooting', icon: Terminal, group: 'Platforms' },
  { name: 'CI/CD', detail: 'GitLab pipelines, Jenkins & release workflows', icon: GitBranch, group: 'Automation' },
  { name: 'Disaster Recovery', detail: 'Backup vaults, restore planning & validation', icon: ShieldCheck, group: 'Reliability' },
  { name: 'Containers', detail: 'Docker, images & application packaging', icon: Layers3, group: 'Automation' },
  { name: 'Monitoring & Cost', detail: 'Operational visibility and cost optimization', icon: Gauge, group: 'Reliability' },
]

const projects = [
  {
    number: '01',
    type: 'INFRASTRUCTURE AS CODE',
    title: 'SAP on AWS — Infrastructure Automation',
    description: 'Provisioning and maintaining SAP landscape infrastructure on AWS using Terraform, with an emphasis on repeatability, environment consistency and controlled deployments.',
    tags: ['AWS', 'Terraform', 'SAP S/4HANA', 'GitLab CI/CD'],
    icon: Cloud,
    color: 'blue',
  },
  {
    number: '02',
    type: 'BUSINESS CONTINUITY',
    title: 'AWS Disaster Recovery & Restore',
    description: 'Working with cross-region backup and recovery for SAP workloads, including EC2 images, EBS snapshots and EFS backup restoration workflows.',
    tags: ['AWS Backup', 'EBS', 'EFS', 'DR'],
    icon: ShieldCheck,
    color: 'mint',
  },
  {
    number: '03',
    type: 'CLOUD GOVERNANCE',
    title: 'AWS Cost & Configuration Audit',
    description: 'Reviewing infrastructure and cost optimization findings, identifying configuration gaps and documenting implementation risks before changes are applied.',
    tags: ['AWS', 'FinOps', 'Governance', 'Risk Review'],
    icon: Activity,
    color: 'violet',
  },
  {
    number: '04',
    type: 'SECURITY & OPERATIONS',
    title: 'Infrastructure Security Remediation',
    description: 'Assessing infrastructure-level security findings and translating remediation requirements into controlled, reviewable infrastructure changes.',
    tags: ['Terraform', 'Security', 'Linux', 'IaC'],
    icon: ShieldCheck,
    color: 'orange',
  },
]

const capabilities = [
  { icon: Network, title: 'Cloud infrastructure', text: 'Designing and supporting dependable AWS environments.' },
  { icon: Code2, title: 'Infrastructure as Code', text: 'Making infrastructure changes repeatable, traceable and reviewable.' },
  { icon: HardDrive, title: 'Backup & recovery', text: 'Planning recovery workflows for critical workloads and data.' },
  { icon: Database, title: 'SAP platforms', text: 'Supporting the infrastructure foundations behind SAP landscapes.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}


function SwarmPortrait() {
  const canvasRef = React.useRef(null)
  const [rebuildKey, setRebuildKey] = React.useState(0)
  const [revealed, setRevealed] = React.useState(false)

  React.useEffect(() => {
    setRevealed(false)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const image = new Image()
    let frame
    let particles = []
    let startedAt = 0
    let cancelled = false
    const width = 300
    const height = 375
    canvas.width = width * 2
    canvas.height = height * 2
    ctx.scale(2, 2)

    image.onload = () => {
      if (cancelled) return
      const sample = document.createElement('canvas')
      sample.width = width
      sample.height = height
      const sampleCtx = sample.getContext('2d', { willReadFrequently: true })
      sampleCtx.drawImage(image, 0, 0, width, height)
      const pixels = sampleCtx.getImageData(0, 0, width, height).data
      const stride = window.innerWidth < 600 ? 5 : 4
      for (let y = 0; y < height; y += stride) {
        for (let x = 0; x < width; x += stride) {
          const index = (y * width + x) * 4
          if (pixels[index + 3] < 80) continue
          const color = `rgba(${pixels[index]},${pixels[index + 1]},${pixels[index + 2]},${Math.max(.55, pixels[index + 3] / 255)})`
          const angle = Math.random() * Math.PI * 2
          const radius = 100 + Math.random() * 260
          particles.push({
            x: width / 2 + Math.cos(angle) * radius,
            y: height / 2 + Math.sin(angle) * radius,
            tx: x, ty: y, color,
            size: .65 + Math.random() * 1.15,
            delay: Math.random() * 650,
          })
        }
      }
      startedAt = performance.now()
      animate(startedAt)
    }

    function animate(now) {
      if (cancelled) return
      const elapsed = now - startedAt
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        const progress = Math.max(0, Math.min(1, (elapsed - p.delay) / 1900))
        const ease = 1 - Math.pow(1 - progress, 3)
        p.x += (p.tx - p.x) * (0.035 + ease * 0.13)
        p.y += (p.ty - p.y) * (0.035 + ease * 0.13)
        ctx.globalAlpha = .25 + ease * .75
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      if (elapsed < 3100) frame = requestAnimationFrame(animate)
      else {
        ctx.clearRect(0, 0, width, height)
        particles.forEach((p, i) => {
          if (i % 3 !== 0) return
          ctx.globalAlpha = .28
          ctx.fillStyle = p.color
          ctx.fillRect(p.tx, p.ty, 1.2, 1.2)
        })
        ctx.globalAlpha = 1
        setRevealed(true)
      }
    }

    image.src = `${import.meta.env.BASE_URL}akshay-profile.jpg`
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [rebuildKey])

  return (
    <div className="swarm-portrait">
      <img className={revealed ? 'portrait-revealed' : 'portrait-hidden'} src={`${import.meta.env.BASE_URL}akshay-profile.jpg`} alt="Akshay Ranganath H V" />
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="portrait-scanline" />
      <div className="portrait-caption"><span>AKSHAY RANGANATH H V</span><span>PROFILE / 001</span></div>
      <button className="rebuild-button" onClick={() => setRebuildKey(key => key + 1)} type="button">
        <Workflow size={13} /> REBUILD PORTRAIT
      </button>
    </div>
  )
}


const SWARM_PALETTE = [
  '#31d7cb', '#f2c94c', '#a987ff', '#ff8c68', '#61b9ff', '#f16da9', '#77e0a3',
  '#e8a3ff', '#ffb454', '#6ce0e8', '#d2e86c', '#ff758f', '#8fa8ff', '#f5a4d4',
  '#7ce0c1', '#ff9f43', '#8ed3ff', '#c49bff', '#f6d365', '#62e5a7', '#ff7d63',
  '#72c9ff', '#df8cff', '#9be071', '#ffb2a0', '#68dfd0', '#f2a1ed', '#9caeff',
]

const SWARM_DURATION_MS = 49700

function getSwarmAgentCount(progress) {
  const milestones = [
    [0, 1], [.16, 18], [.32, 19], [.5, 23], [.7, 26], [.9, 28], [1, 28],
  ]
  for (let index = 1; index < milestones.length; index += 1) {
    const [rightProgress, rightCount] = milestones[index]
    const [leftProgress, leftCount] = milestones[index - 1]
    if (progress <= rightProgress) {
      const portion = (progress - leftProgress) / (rightProgress - leftProgress)
      return Math.max(1, Math.round(leftCount + (rightCount - leftCount) * portion))
    }
  }
  return 28
}

function drawCursor(ctx, x, y, color, size = 17) {
  ctx.save()
  ctx.translate(x, y)
  ctx.shadowColor = color
  ctx.shadowBlur = 9
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, size)
  ctx.lineTo(size * .29, size * .7)
  ctx.lineTo(size * .52, size * 1.12)
  ctx.lineTo(size * .72, size * 1.02)
  ctx.lineTo(size * .5, size * .61)
  ctx.lineTo(size * .92, size * .58)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
  ctx.shadowBlur = 0
  ctx.lineWidth = 1.25
  ctx.strokeStyle = '#f7fbff'
  ctx.stroke()
  ctx.restore()
}

function SwarmRebuildOverlay({ onClose }) {
  const canvasRef = React.useRef(null)
  const speedRef = React.useRef(1)
  const [speed, setSpeed] = React.useState(1)
  const [runId, setRunId] = React.useState(0)
  const [phase, setPhase] = React.useState('touring')
  const [stats, setStats] = React.useState({ progress: 0, done: 0, total: 0, agents: 1, seconds: 0 })

  React.useEffect(() => { speedRef.current = speed }, [speed])

  React.useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return undefined

    setPhase('touring')
    setStats({ progress: 0, done: 0, total: 0, agents: 1, seconds: 0 })
    window.scrollTo(0, 0)

    const excludedTags = new Set(['SCRIPT', 'STYLE', 'SVG', 'PATH', 'CANVAS', 'NOSCRIPT'])
    const collectLayers = () => {
      const elements = Array.from(document.querySelectorAll('.site-shell *'))
      const usable = elements.filter(element => {
        if (excludedTags.has(element.tagName)) return false
        if (element.closest('.swarm-rebuild-overlay')) return false
        if (element.closest('.swarm-portrait canvas')) return false
        const style = window.getComputedStyle(element)
        if (style.display === 'none' || style.visibility === 'hidden') return false
        const rect = element.getBoundingClientRect()
        if (rect.width < 18 || rect.height < 9) return false
        if (rect.width > window.innerWidth * .97 && rect.height > window.innerHeight * .72) return false
        return true
      })
      usable.sort((a, b) => {
        const ar = a.getBoundingClientRect()
        const br = b.getBoundingClientRect()
        const ay = ar.top + window.scrollY
        const by = br.top + window.scrollY
        if (Math.abs(ay - by) > 3) return ay - by
        if (Math.abs(ar.left - br.left) > 3) return ar.left - br.left
        return (br.width * br.height) - (ar.width * ar.height)
      })
      return usable.slice(0, 320)
    }

    const layers = collectLayers()
    const totalLayers = Math.max(1, layers.length)
    setStats(current => ({ ...current, total: totalLayers }))

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resizeCanvas = () => {
      canvas.width = Math.round(window.innerWidth * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const starField = Array.from({ length: 44 }, (_, index) => ({
      x: ((index * 173 + 29) % 997) / 997,
      y: ((index * 313 + 71) % 991) / 991,
      size: 1.2 + (index % 4) * .45,
      color: SWARM_PALETTE[index % SWARM_PALETTE.length],
      phase: index * .71,
    }))
    const trails = SWARM_PALETTE.map(() => [])
    const rectCache = new Array(totalLayers)
    const startedAt = performance.now()
    let elapsed = 0
    let previousFrame = startedAt
    let lastUiUpdate = 0
    let lastRectUpdate = 0
    let animationFrame = 0
    let complete = false

    const drawSelection = (rect, index, color, selected = false) => {
      if (!rect || rect.bottom < -30 || rect.top > window.innerHeight + 30 || rect.right < -20 || rect.left > window.innerWidth + 20) return
      const x = Math.max(0, rect.left - 2)
      const y = Math.max(0, rect.top - 2)
      const w = Math.min(window.innerWidth - x, rect.width + 4)
      const h = Math.min(window.innerHeight - y, rect.height + 4)
      ctx.save()
      ctx.strokeStyle = color
      ctx.lineWidth = selected ? 1.3 : .8
      ctx.globalAlpha = selected ? .95 : .72
      ctx.strokeRect(x, y, w, h)
      if (selected) {
        const handle = 5
        ctx.fillStyle = '#eaf7ff'
        ;[[x, y], [x + w, y], [x, y + h], [x + w, y + h]].forEach(([hx, hy]) => {
          ctx.fillRect(hx - handle / 2, hy - handle / 2, handle, handle)
        })
        const label = `${Math.round(rect.width)} × ${Math.round(rect.height)}`
        ctx.font = '10px "DM Mono", monospace'
        const labelWidth = ctx.measureText(label).width + 12
        const labelY = Math.min(window.innerHeight - 20, y + h + 7)
        ctx.fillStyle = '#168de0'
        ctx.fillRect(x, labelY, labelWidth, 17)
        ctx.fillStyle = '#fff'
        ctx.fillText(label, x + 6, labelY + 12)
      }
      ctx.restore()
    }

    const draw = (progress, done, agents, now) => {
      const width = window.innerWidth
      const height = window.innerHeight
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#05080f'
      ctx.fillRect(0, 0, width, height)

      ctx.globalCompositeOperation = 'destination-out'
      for (let index = 0; index < done; index += 1) {
        const rect = rectCache[index]
        if (!rect || rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width) continue
        const pad = rect.width > width * .8 ? 2 : 4
        ctx.clearRect(rect.left - pad, rect.top - pad, rect.width + pad * 2, rect.height + pad * 2)
      }
      ctx.globalCompositeOperation = 'source-over'

      const elapsedSeconds = now / 1000
      starField.forEach(star => {
        const pulse = .3 + .55 * (Math.sin(elapsedSeconds * .8 + star.phase) * .5 + .5)
        const sx = star.x * width
        const sy = star.y * height
        ctx.globalAlpha = pulse * (progress > .94 ? .6 : .34)
        ctx.strokeStyle = star.color
        ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(sx - star.size, sy); ctx.lineTo(sx + star.size, sy)
        ctx.moveTo(sx, sy - star.size); ctx.lineTo(sx, sy + star.size); ctx.stroke()
      })
      ctx.globalAlpha = 1

      const activeIndices = []
      const futureRange = Math.max(1, Math.min(34, totalLayers - done))
      for (let index = 0; index < Math.min(agents, 10); index += 1) {
        const targetIndex = Math.min(totalLayers - 1, done + Math.floor((index / Math.max(1, Math.min(agents, 10))) * futureRange))
        if (targetIndex >= done && !activeIndices.includes(targetIndex)) activeIndices.push(targetIndex)
      }
      activeIndices.forEach((targetIndex, index) => {
        const rect = rectCache[targetIndex]
        drawSelection(rect, targetIndex, index % 4 === 0 ? '#37baff' : '#ff665f', index === 0)
      })

      for (let index = 0; index < agents; index += 1) {
        const targetIndex = Math.min(totalLayers - 1, done + Math.floor((index / Math.max(1, agents)) * futureRange))
        let rect = rectCache[targetIndex]
        if (!rect || rect.bottom < -40 || rect.top > height + 40) {
          const visible = rectCache.find(candidate => candidate && candidate.bottom > 0 && candidate.top < height)
          rect = visible || { left: width * .15, top: height * .2, width: width * .7, height: height * .5 }
        }
        const wave = elapsedSeconds * (1.15 + (index % 5) * .08) + index * 1.7
        const x = Math.max(5, Math.min(width - 18, rect.left + rect.width * (.18 + .64 * (.5 + .5 * Math.sin(wave)))))
        const y = Math.max(5, Math.min(height - 26, rect.top + rect.height * (.18 + .64 * (.5 + .5 * Math.cos(wave * .83)))))
        const color = SWARM_PALETTE[index % SWARM_PALETTE.length]
        const trail = trails[index]
        trail.push({ x, y })
        if (trail.length > 6) trail.shift()
        if (trail.length > 1) {
          ctx.save()
          ctx.beginPath()
          trail.forEach((point, pointIndex) => pointIndex === 0 ? ctx.moveTo(point.x + 7, point.y + 8) : ctx.lineTo(point.x + 7, point.y + 8))
          ctx.strokeStyle = color
          ctx.globalAlpha = .19
          ctx.lineWidth = 1.2
          ctx.stroke()
          ctx.restore()
        }
        drawCursor(ctx, x, y, color, 15)
      }
    }

    const tick = (now) => {
      if (complete) return
      const delta = Math.min(50, Math.max(0, now - previousFrame))
      previousFrame = now
      elapsed += delta * speedRef.current
      const progress = Math.min(1, elapsed / SWARM_DURATION_MS)
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      window.scrollTo(0, maxScroll * progress)
      const done = Math.min(totalLayers, Math.floor(progress * totalLayers))
      const agents = getSwarmAgentCount(progress)

      if (now - lastRectUpdate > 100 || progress === 1) {
        lastRectUpdate = now
        layers.forEach((element, index) => {
          const rect = element.getBoundingClientRect()
          rectCache[index] = { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height }
        })
      }
      draw(progress, done, agents, elapsed)

      if (now - lastUiUpdate > 110 || progress === 1) {
        lastUiUpdate = now
        setStats({ progress, done, total: totalLayers, agents, seconds: (now - startedAt) / 1000 })
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick)
      } else {
        complete = true
        setPhase('complete')
        setStats({ progress: 1, done: totalLayers, total: totalLayers, agents: 28, seconds: (now - startedAt) / 1000 })
        ctx.clearRect(0, 0, width, height)
      }
    }

    animationFrame = requestAnimationFrame(tick)
    return () => {
      complete = true
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [runId])

  const replay = () => {
    setSpeed(1)
    speedRef.current = 1
    setRunId(id => id + 1)
  }

  const elapsedLabel = `${stats.seconds.toFixed(1)}s`
  const agentDots = Math.min(5, stats.agents)

  return (
    <div className={`swarm-rebuild-overlay ${phase === 'complete' ? 'swarm-complete' : ''}`} aria-label="Multiplayer cursor swarm page rebuild">
      <canvas ref={canvasRef} className="swarm-rebuild-canvas" aria-hidden="true" />
      <div className="swarm-toolbar" role="status" aria-live="polite">
        <div className="swarm-toolbar-agents" aria-hidden="true">
          {Array.from({ length: agentDots }, (_, index) => (
            <span key={index} style={{ '--agent-color': SWARM_PALETTE[index] }}>{['A', 'T', 'W', 'O', 'S'][index]}</span>
          ))}
        </div>
        {phase === 'touring' ? (
          <>
            <strong className="swarm-agent-count">{stats.agents} agents</strong>
            <span className="swarm-layer-count">{stats.done} / {stats.total || '…'} layers</span>
            <div className="swarm-toolbar-progress"><span style={{ width: `${stats.progress * 100}%` }} /></div>
            <span className="swarm-tour-status">Touring</span>
            <button className="swarm-speed" type="button" onClick={() => setSpeed(value => value === 1 ? 2 : 1)} aria-label="Change tour speed">{speed}×</button>
            <button className="swarm-close" type="button" onClick={onClose} aria-label="Close rebuild tour"><X size={15} /></button>
          </>
        ) : (
          <>
            <strong className="swarm-finished-label">Rebuilt by 28 agents in {elapsedLabel}</strong>
            <div className="swarm-toolbar-progress finished"><span /></div>
            <button className="swarm-go-live" type="button" onClick={onClose}>Go live</button>
            <button className="swarm-replay" type="button" onClick={replay}>Replay</button>
            <button className="swarm-close" type="button" onClick={onClose} aria-label="Close rebuild tour"><X size={15} /></button>
          </>
        )}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [swarmRunId, setSwarmRunId] = React.useState(0)
  const [swarmActive, setSwarmActive] = React.useState(false)
  const startSwarmRebuild = React.useCallback(() => {
    setSwarmRunId(id => id + 1)
    setSwarmActive(true)
  }, [])
  const finishSwarmRebuild = React.useCallback(() => setSwarmActive(false), [])

  React.useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined
    const timer = window.setTimeout(startSwarmRebuild, 850)
    return () => window.clearTimeout(timer)
  }, [startSwarmRebuild])
  const closeMenu = () => setMenuOpen(false)
  const nav = [['About', '#about'], ['Expertise', '#expertise'], ['Projects', '#projects'], ['Contact', '#contact']]

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Akshay home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">AKSHAY<span> / CLOUD & DEVOPS</span></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="availability" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }}>
              <span className="pulse-dot" /> CLOUD. AUTOMATION. RELIABILITY.
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .2 }}>
              Building cloud<br />
              systems that <span className="gradient-text">scale.</span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .48, duration: .7 }}>
              I'm <strong>{profile.name}</strong>, a {profile.title} focused on AWS, SAP infrastructure and Terraform-driven automation.
              I turn complex infrastructure requirements into dependable, repeatable solutions.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <Mail size={16} /></a>
              <button className="button button-swarm" type="button" onClick={startSwarmRebuild}><MousePointer2 size={16} /> Watch swarm tour</button>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
              <span><MapPin size={14} /> India</span>
              <span className="meta-divider" />
              <span>{profile.tagline}</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .35 }}>
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <SwarmPortrait />
            <div className="float-chip chip-terraform"><Workflow size={15} /> TERRAFORM</div>
            <div className="float-chip chip-sap"><Database size={15} /> SAP LANDSCAPES</div>
            <div className="float-chip chip-aws"><Cloud size={15} /> AWS CLOUD</div>
            <div className="visual-caption">ENGINEERED FOR RESILIENCE <span>↗</span></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        </section>

        <section className="ticker" aria-label="Specialties">
          <div className="ticker-track">
            {['CLOUD ENGINEERING', 'INFRASTRUCTURE AS CODE', 'SAP ON AWS', 'DISASTER RECOVERY', 'AUTOMATION', 'CLOUD ENGINEERING', 'INFRASTRUCTURE AS CODE', 'SAP ON AWS', 'DISASTER RECOVERY', 'AUTOMATION'].map((item, i) => (
              <span key={i}>{item}<b>✳</b></span>
            ))}
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <Reveal><SectionHeading eyebrow="01 / ABOUT" title={<>Engineering with<br /><span className="muted-heading">purpose & precision.</span></>} /></Reveal>
          <div className="about-grid">
            <Reveal className="about-main">
              <p className="lead-copy">I work at the intersection of cloud infrastructure, enterprise platforms and automation.</p>
              <p className="body-copy">My work centres on building and supporting AWS infrastructure for SAP environments, using Infrastructure as Code to make deployments consistent and operational processes easier to manage. I enjoy solving the practical challenges behind reliable systems — from provisioning and troubleshooting to backup, recovery and cost reviews.</p>
              <p className="body-copy">I believe good engineering is more than getting infrastructure running. It's about making it understandable, secure, maintainable and ready for what comes next.</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>
            </Reveal>
            <Reveal className="about-side" delay={.12}>
              <div className="stat-card"><span className="stat-index">A / 01</span><span className="stat-value">CLOUD</span><span className="stat-label">Infrastructure & operations</span></div>
              <div className="stat-card"><span className="stat-index">A / 02</span><span className="stat-value">AUTOMATE</span><span className="stat-label">Repeatable delivery with IaC</span></div>
              <div className="stat-card"><span className="stat-index">A / 03</span><span className="stat-value">RESILIENCE</span><span className="stat-label">Recovery & reliability mindset</span></div>
            </Reveal>
          </div>
        </section>

        <section className="section-wrap expertise-section" id="expertise">
          <Reveal><SectionHeading eyebrow="02 / EXPERTISE" title={<>Tools are useful.<br /><span className="muted-heading">Outcomes matter.</span></>} description="The technologies and disciplines I use to build, automate and operate infrastructure." /></Reveal>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon
              return <Reveal key={skill.name} delay={i * .045}>
                <div className="skill-card">
                  <div className="skill-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-group">{skill.group}</span></div>
                  <h3>{skill.name}</h3><p>{skill.detail}</p>
                  <span className="skill-arrow"><ArrowUpRight size={15} /></span>
                </div>
              </Reveal>
            })}
          </div>
          <div className="capability-row">
            {capabilities.map((item, i) => {
              const Icon = item.icon
              return <Reveal key={item.title} delay={i * .07}><div className="capability"><Icon size={18} /><div><h4>{item.title}</h4><p>{item.text}</p></div></div></Reveal>
            })}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <Reveal><SectionHeading eyebrow="03 / SELECTED WORK" title={<>Practical work.<br /><span className="muted-heading">Real-world challenges.</span></>} description="A selection of infrastructure initiatives and technical areas I've worked on. Project summaries are intentionally high-level; implementation details can be discussed directly." /></Reveal>
            <div className="projects-list">
              {projects.map((project, i) => {
                const Icon = project.icon
                return <Reveal key={project.number} delay={i * .06}>
                  <article className={`project-card project-${project.color}`}>
                    <div className="project-number">{project.number}</div>
                    <div className="project-icon"><Icon size={24} /></div>
                    <div className="project-content">
                      <span className="project-type">{project.type}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    </div>
                    <div className="project-mark"><ArrowUpRight size={20} /></div>
                  </article>
                </Reveal>
              })}
            </div>
            <div className="project-note"><CheckCircle2 size={16} /> Client and production details are kept confidential. Public code samples can be added here as they become available.</div>
          </div>
        </section>

        <section className="section-wrap approach-section">
          <Reveal><SectionHeading eyebrow="04 / HOW I WORK" title={<>From complexity<br /><span className="muted-heading">to clarity.</span></>} /></Reveal>
          <div className="approach-grid">
            {[
              ['01', 'Understand', 'Start with the workload, constraints and operational requirements.'],
              ['02', 'Design', 'Choose a secure, supportable architecture that fits the environment.'],
              ['03', 'Automate', 'Use version-controlled infrastructure and repeatable deployment workflows.'],
              ['04', 'Validate', 'Test changes, document outcomes and plan for recovery.'],
            ].map(([n, title, text], i) => <Reveal key={n} delay={i * .07}><div className="approach-step"><span>{n}</span><h3>{title}</h3><p>{text}</p><ChevronRight size={17} /></div></Reveal>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <Reveal>
              <span className="eyebrow">05 / CONTACT</span>
              <h2>Have a cloud challenge?<br /><span className="gradient-text">Let's build something solid.</span></h2>
              <p>Open to conversations about cloud infrastructure, DevOps, SAP on AWS and automation.</p>
              <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} /></a>
            </Reveal>
            <Reveal className="contact-links" delay={.12}>
              <a href={`mailto:${profile.email}`}><span className="contact-link-icon"><Mail size={18} /></span><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={18} /></span><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight size={17} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={18} /></span><span><small>GITHUB</small>@hvakshay93</span><ArrowUpRight size={17} /></a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span></a>
        <span>© {new Date().getFullYear()} {profile.name}. Built with intent.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
      {swarmActive && <SwarmRebuildOverlay key={swarmRunId} onClose={finishSwarmRebuild} />}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
