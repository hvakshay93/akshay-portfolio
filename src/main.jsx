import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X,
  Cloud, Server, Workflow, ShieldCheck, Database, Terminal, GitBranch,
  Layers3, Activity, ExternalLink, CheckCircle2, Code2, Cpu, HardDrive,
  Network, Gauge, ChevronRight, Copy, Check, Sparkles, ArrowRight, Sun, Moon,
  BookOpen, Send, XCircle
} from 'lucide-react'
import './styles.css'

const profile = {
  name: 'Akshay Ranganath H V',
  title: 'Senior Software Engineer | Cloud & DevOps',
  tagline: 'AWS  /  AUTOMATION  /  RELIABILITY',
  email: 'akshayhv@hotmail.com',
  github: 'https://github.com/hvakshay93',
  linkedin: 'https://www.linkedin.com/in/akshay-ranganath-h-v-619a671a4',
}

const skills = [
  { name: 'AWS Cloud', detail: 'EC2, EBS, EFS, IAM, VPC, Backup & DR', icon: Cloud, group: 'Cloud' },
  { name: 'Microsoft Azure', detail: 'Cloud infrastructure and platform operations', icon: Cloud, group: 'Cloud' },
  { name: 'Terraform', detail: 'Infrastructure as Code & reusable modules', icon: Workflow, group: 'Automation' },
  { name: 'Ansible', detail: 'Configuration management and infrastructure automation', icon: Workflow, group: 'Automation' },
  { name: 'SAP Infrastructure', detail: 'SAP S/4HANA, HANA, ASCS & dialog tiers', icon: Server, group: 'Platforms' },
  { name: 'Linux Administration', detail: 'System operations, storage & troubleshooting', icon: Terminal, group: 'Platforms' },
  { name: 'CI/CD', detail: 'GitLab, GitHub Actions, Jenkins & release workflows', icon: GitBranch, group: 'Automation' },
  { name: 'Docker & Kubernetes', detail: 'Container packaging and orchestration fundamentals', icon: Layers3, group: 'Platforms' },
  { name: 'Disaster Recovery', detail: 'Backup vaults, restore planning & validation', icon: ShieldCheck, group: 'Reliability' },
  { name: 'Incident Management', detail: 'Service restoration, escalation and stakeholder updates', icon: Activity, group: 'Reliability' },
  { name: 'Monitoring & Cost', detail: 'Operational visibility and cost optimization', icon: Gauge, group: 'Reliability' },
]

const experience = [
  {
    period: 'JUN 2026 — PRESENT',
    role: 'Senior Software Engineer',
    company: 'Allianz Technology',
    location: 'India',
    summary: 'Specializing in AWS infrastructure automation and SAP workloads, with a focus on reliability, scalability and security.',
    highlights: ['Terraform-driven AWS infrastructure automation', 'SAP workload infrastructure and operational reliability', 'GitLab and GitHub engineering workflows', 'Solving complex infrastructure challenges against business requirements'],
  },
  {
    period: 'APR 2021 — MAR 2026',
    role: 'Senior Tech Lead',
    company: 'Tech Mahindra Ltd',
    location: 'Bangalore, India',
    summary: 'Led infrastructure, automation and enterprise operations across Linux, AWS, CI/CD and SAP ECS environments.',
    highlights: ['AWS infrastructure with Ansible and AWS services', 'Jenkins and GitHub Actions delivery pipelines', 'Linux OS backup and recovery with ReaR', 'SAP ECS incident management and cross-team restoration'],
  },
  {
    period: 'APR 2018 — MAR 2021',
    role: 'Linux Administrator',
    company: 'Lifestyle International Pvt. Ltd',
    location: 'Bangalore, India',
    summary: 'Supported Linux server estates, developer environments, web services and cloud infrastructure operations.',
    highlights: ['DHCP, DNS and NFS services for 100+ developer environments', 'Apache virtual hosting and Tomcat integration', 'AWS solutions for performance and reliability', 'DevOps tooling and deployment infrastructure support'],
  },
]

const certifications = [
  'AWS Cloud Practitioner / Solutions Architect',
  'Linux Certification',
  'Cybersecurity Analyst',
  'Ansible — Hands-On DevOps',
]

const projects = [
  {
    number: '01',
    type: 'INFRASTRUCTURE AS CODE',
    title: 'SAP on AWS — Infrastructure Automation',
    description: 'Provisioning and maintaining SAP landscape infrastructure on AWS using Terraform, with an emphasis on repeatability, environment consistency and controlled deployments.',
    challenge: 'Enterprise infrastructure needs to be consistent across environments while remaining safe to change.',
    approach: 'Use reusable Terraform modules, version-controlled workflows and clear environment boundaries to make infrastructure changes repeatable and reviewable.',
    outcome: 'A more predictable path from infrastructure change to deployment, with operational decisions easier to understand and validate.',
    tags: ['AWS', 'Terraform', 'SAP S/4HANA', 'GitLab CI/CD'],
    icon: Cloud,
    color: 'blue',
  },
  {
    number: '02',
    type: 'BUSINESS CONTINUITY',
    title: 'AWS Disaster Recovery & Restore',
    description: 'Working with cross-region backup and recovery for SAP workloads, including EC2 images, EBS snapshots and EFS backup restoration workflows.',
    challenge: 'Recovery plans need to be practical, testable and aligned with the dependencies of critical workloads.',
    approach: 'Map recovery workflows across EC2, EBS and EFS, then document restore sequences and validation checkpoints.',
    outcome: 'A clearer recovery model that helps teams reason about restore readiness before an incident occurs.',
    tags: ['AWS Backup', 'EBS', 'EFS', 'DR'],
    icon: ShieldCheck,
    color: 'mint',
  },
  {
    number: '03',
    type: 'CLOUD GOVERNANCE',
    title: 'AWS Cost & Configuration Audit',
    description: 'Reviewing infrastructure and cost optimization findings, identifying configuration gaps and documenting implementation risks before changes are applied.',
    challenge: 'Cloud cost and configuration improvements can introduce risk when context is missing.',
    approach: 'Review findings alongside workload requirements, operational constraints and implementation dependencies before recommending changes.',
    outcome: 'Better-informed improvement work with risks and trade-offs made visible to stakeholders.',
    tags: ['AWS', 'FinOps', 'Governance', 'Risk Review'],
    icon: Activity,
    color: 'violet',
  },
  {
    number: '04',
    type: 'SECURITY & OPERATIONS',
    title: 'Infrastructure Security Remediation',
    description: 'Assessing infrastructure-level security findings and translating remediation requirements into controlled, reviewable infrastructure changes.',
    challenge: 'Security remediation has to improve the control surface without destabilizing production systems.',
    approach: 'Translate findings into scoped infrastructure changes, review them through version control and validate the operational impact.',
    outcome: 'A safer remediation process with clearer ownership, traceability and rollback considerations.',
    tags: ['Terraform', 'Security', 'Linux', 'IaC'],
    icon: ShieldCheck,
    color: 'orange',
  },
]

const notes = [
  { category: 'AWS / OPERATIONS', title: 'Designing for recovery before failure', text: 'A practical checklist for thinking through backups, dependencies, restore order and validation.' },
  { category: 'TERRAFORM / DELIVERY', title: 'Infrastructure changes people can review', text: 'Why small modules, clear environments and version history make cloud operations easier to trust.' },
  { category: 'SAP / CLOUD', title: 'The infrastructure beneath an SAP landscape', text: 'A visual guide to the cloud building blocks that support enterprise workloads.' },
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
        <Workflow size={13} /> REBUILD WITH SWARM
      </button>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  const Icon = project.icon
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article className={`project-modal project-${project.color}`} role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={event => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close case study"><XCircle size={20} /></button>
        <div className="modal-kicker"><span className="project-icon"><Icon size={24} /></span><span>{project.number} / {project.type}</span></div>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="modal-intro">{project.description}</p>
        <div className="case-study-grid">
          <div><span>THE CHALLENGE</span><p>{project.challenge}</p></div>
          <div><span>THE APPROACH</span><p>{project.approach}</p></div>
          <div><span>THE VALUE</span><p>{project.outcome}</p></div>
        </div>
        <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </article>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('home')
  const [skillFilter, setSkillFilter] = React.useState('All')
  const [emailCopied, setEmailCopied] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState(null)
  const [theme, setTheme] = React.useState(() => window.localStorage.getItem('portfolio-theme') || 'dark')
  const closeMenu = () => setMenuOpen(false)
  const nav = [['About', '#about'], ['Expertise', '#expertise'], ['Projects', '#projects'], ['Experience', '#experience'], ['Notes', '#notes'], ['Contact', '#contact']]
  const skillGroups = ['All', 'Cloud', 'Automation', 'Platforms', 'Reliability']
  const visibleSkills = skillFilter === 'All' ? skills : skills.filter(skill => skill.group === skillFilter)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem('portfolio-theme', nextTheme)
  }

  const submitContact = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.01 },
    )
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`site-shell theme-${theme}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="scroll-progress" aria-hidden="true" />
      <header className={`topbar${scrolled ? ' topbar-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Akshay home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">AKSHAY<span> / CLOUD & DEVOPS</span></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className={activeSection === href.slice(1) ? 'nav-active' : ''}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="availability" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }}>
              <span className="pulse-dot" /> BUILDING RELIABLE SYSTEMS
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
              <a className="button button-ghost button-cv" href={`${import.meta.env.BASE_URL}Akshay-Ranganath-HV-CV.pdf`} download>Download CV <ArrowDown size={16} /></a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
              <span><MapPin size={14} /> India</span>
              <span className="meta-divider" />
              <span>{profile.tagline}</span>
            </motion.div>
            <div className="hero-proof">
              <div><strong>03</strong><span>core disciplines</span></div>
              <div><strong>01</strong><span>reliability mindset</span></div>
              <div><strong>∞</strong><span>room to scale</span></div>
            </div>
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
          <div className="filter-bar" aria-label="Filter expertise">
            <span className="filter-label"><Sparkles size={14} /> FOCUS AREAS</span>
            <div className="filter-options">
              {skillGroups.map(group => <button key={group} type="button" className={skillFilter === group ? 'filter-button filter-active' : 'filter-button'} onClick={() => setSkillFilter(group)}>{group}</button>)}
            </div>
            <span className="filter-count">{visibleSkills.length.toString().padStart(2, '0')} SKILLS</span>
          </div>
          <div className="skills-grid">
            {visibleSkills.map((skill, i) => {
              const Icon = skill.icon
              return <Reveal key={skill.name} delay={i * .045}>
                <div className="skill-card">
                  <div className="skill-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-group">{skill.group}</span></div>
                  <h3>{skill.name}</h3><p>{skill.detail}</p>
                    <span className="skill-arrow"><ArrowRight size={15} /></span>
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
                    <button className="project-mark" type="button" aria-label={`Open ${project.title} case study`} onClick={() => setSelectedProject(project)}><ArrowUpRight size={20} /></button>
                  </article>
                </Reveal>
              })}
            </div>
            <div className="project-note"><CheckCircle2 size={16} /> Client and production details are kept confidential. Public code samples can be added here as they become available.</div>
            <p className="interaction-hint"><ArrowUpRight size={13} /> Select any project to explore the challenge, approach and value.</p>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <Reveal><SectionHeading eyebrow="04 / EXPERIENCE" title={<>Experience built<br /><span className="muted-heading">in production.</span></>} description="A focused view of the roles and operating environments behind my infrastructure experience." /></Reveal>
          <div className="experience-list">
            {experience.map((item, i) => <Reveal key={item.company} delay={i * .08}><article className="experience-item"><div className="experience-period">{item.period}</div><div className="experience-marker"><span /></div><div className="experience-content"><div className="experience-heading"><div><h3>{item.role}</h3><p>{item.company} <span>·</span> {item.location}</p></div><span className="experience-index">0{i + 1}</span></div><p className="experience-summary">{item.summary}</p><div className="experience-highlights">{item.highlights.map(highlight => <span key={highlight}><CheckCircle2 size={13} /> {highlight}</span>)}</div></div></article></Reveal>)}
          </div>
          <div className="credentials-strip"><div><span className="eyebrow">CREDENTIALS</span><strong>Continuous learning, practical delivery.</strong></div><div className="credential-list">{certifications.map(certification => <span key={certification}><Check size={13} /> {certification}</span>)}</div></div>
        </section>

        <section className="notes-section section-wrap" id="notes">
          <Reveal><SectionHeading eyebrow="05 / TECHNICAL NOTES" title={<>Ideas worth<br /><span className="muted-heading">sharing clearly.</span></>} description="Short-form topics I can expand into articles, diagrams and practical guides." /></Reveal>
          <div className="notes-grid">
            {notes.map((note, i) => <Reveal key={note.title} delay={i * .07}><article className="note-card"><div className="note-icon"><BookOpen size={18} /></div><span>{note.category}</span><h3>{note.title}</h3><p>{note.text}</p><button type="button" className="text-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Request this topic <ArrowUpRight size={14} /></button></article></Reveal>)}
          </div>
        </section>

        <section className="section-wrap approach-section" id="approach">
          <Reveal><SectionHeading eyebrow="06 / HOW I WORK" title={<>From complexity<br /><span className="muted-heading">to clarity.</span></>} /></Reveal>
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
              <div className="contact-actions">
                <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} /></a>
                <button className="copy-email" type="button" onClick={copyEmail}>{emailCopied ? <Check size={15} /> : <Copy size={15} />} {emailCopied ? 'Email copied' : 'Copy email'}</button>
              </div>
            </Reveal>
            <Reveal className="contact-links" delay={.12}>
              <a href={`mailto:${profile.email}`}><span className="contact-link-icon"><Mail size={18} /></span><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={18} /></span><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight size={17} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={18} /></span><span><small>GITHUB</small>@hvakshay93</span><ArrowUpRight size={17} /></a>
            </Reveal>
          </div>
          <form className="contact-form section-wrap" onSubmit={submitContact}>
            <div className="form-heading"><Send size={16} /><span>OR SEND A QUICK NOTE</span></div>
            <div className="form-grid"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label></div>
            <label>Message<textarea required name="message" rows="4" placeholder="Tell me what you are working on..." /></label>
            <button className="button button-primary" type="submit">Open email draft <ArrowUpRight size={17} /></button>
          </form>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span></a>
        <span>© {new Date().getFullYear()} {profile.name}. Built with intent.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
