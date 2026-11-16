from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'output' / 'pdf' / 'Akshay-Ranganath-HV-CV.pdf'
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor('#10213c')
BLUE = colors.HexColor('#2d61c8')
MUTED = colors.HexColor('#55657b')
LIGHT = colors.HexColor('#e8eef7')


class CVDocTemplate(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(filename, pagesize=A4, rightMargin=16 * mm, leftMargin=16 * mm, topMargin=15 * mm, bottomMargin=14 * mm)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id='normal')
        self.addPageTemplates([PageTemplate(id='cv', frames=frame, onPage=self.draw_page)])

    def draw_page(self, canvas, doc):
        canvas.saveState()
        canvas.setStrokeColor(LIGHT)
        canvas.setLineWidth(0.5)
        canvas.line(doc.leftMargin, 11 * mm, A4[0] - doc.rightMargin, 11 * mm)
        canvas.setFont('Helvetica', 7.5)
        canvas.setFillColor(MUTED)
        canvas.drawString(doc.leftMargin, 7 * mm, 'AKSHAY RANGANATH H V  |  SENIOR SOFTWARE ENGINEER')
        canvas.drawRightString(A4[0] - doc.rightMargin, 7 * mm, f'{doc.page}')
        canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Name', fontName='Helvetica-Bold', fontSize=24, leading=27, textColor=NAVY, spaceAfter=2))
styles.add(ParagraphStyle(name='Role', fontName='Helvetica', fontSize=11, leading=14, textColor=BLUE, spaceAfter=5))
styles.add(ParagraphStyle(name='Contact', fontName='Helvetica', fontSize=8.5, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name='Section', fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=BLUE, spaceBefore=10, spaceAfter=5, uppercase=True))
styles.add(ParagraphStyle(name='BodySmall', fontName='Helvetica', fontSize=8.5, leading=12, textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name='Job', fontName='Helvetica-Bold', fontSize=10.5, leading=13, textColor=NAVY))
styles.add(ParagraphStyle(name='Company', fontName='Helvetica', fontSize=8.5, leading=12, textColor=BLUE))
styles.add(ParagraphStyle(name='Date', fontName='Helvetica-Bold', fontSize=8, leading=11, textColor=MUTED, alignment=TA_LEFT))
styles.add(ParagraphStyle(name='BulletCV', fontName='Helvetica', fontSize=8.2, leading=11, leftIndent=9, firstLineIndent=-7, textColor=MUTED, spaceAfter=1.5))
styles.add(ParagraphStyle(name='Skill', fontName='Helvetica', fontSize=8.2, leading=11, textColor=MUTED))


def p(text, style='BodySmall'):
    return Paragraph(text, styles[style])


def bullets(items):
    return [p(f'• {item}', 'BulletCV') for item in items]


story = [
    p('Akshay Ranganath H V', 'Name'),
    p('Senior Software Engineer | Cloud & DevOps', 'Role'),
    p('Bangalore, Karnataka &nbsp;|&nbsp; +91 6366521166 &nbsp;|&nbsp; akshayhv@hotmail.com &nbsp;|&nbsp; linkedin.com/in/akshay-ranganath-h-v-619a671a4', 'Contact'),
    Spacer(1, 4 * mm),
    p('PROFESSIONAL SUMMARY', 'Section'),
    p('Senior Software Engineer and DevOps professional with 8+ years of experience across AWS infrastructure automation, SAP workloads, CI/CD, Linux administration and enterprise operations. Skilled at solving complex infrastructure challenges while aligning reliable, scalable and secure engineering solutions with business requirements. Experienced with Terraform, Ansible, GitLab, GitHub, Jenkins, AWS, Azure, Docker, Kubernetes and incident management.', 'BodySmall'),
    p('CORE COMPETENCIES', 'Section'),
]

skills = [
    ['Cloud platforms', 'AWS (EC2, S3, CloudWatch, IAM, Backup & DR), Microsoft Azure'],
    ['Automation & IaC', 'Terraform, Ansible, Shell scripting, YAML, Jenkins, GitLab, GitHub Actions'],
    ['Containers', 'Docker, Kubernetes, image and application packaging'],
    ['Systems', 'RHEL, Ubuntu, AIX, VMware vSphere, SSH, NFS, CIFS, FTP, Samba'],
    ['Operations', 'SAP ECS, incident management, monitoring, ServiceNow, ITAC, recovery planning'],
    ['Networking & data', 'TCP/IP, DHCP, DNS, Apache, Tomcat, MongoDB'],
]
skill_table = Table([[p(f'<b>{name}</b>', 'Skill'), p(value, 'Skill')] for name, value in skills], colWidths=[36 * mm, 139 * mm])
skill_table.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LINEBELOW', (0, 0), (-1, -1), 0.35, LIGHT), ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 3)]))
story.append(skill_table)

story += [p('PROFESSIONAL EXPERIENCE', 'Section')]

jobs = [
    ('Senior Software Engineer', 'Allianz Technology', 'June 2026 — Present', 'India', [
        'Specialize in AWS infrastructure automation and SAP workloads, emphasizing reliability, scalability and security.',
        'Use Terraform, AWS, GitLab and GitHub to support repeatable infrastructure engineering workflows.',
        'Apply structured problem-solving to complex infrastructure challenges while aligning solutions with business requirements.',
        'Continuously adopt emerging technologies and strengthen engineering practices through ongoing learning.',
    ]),
    ('Senior Tech Lead', 'Tech Mahindra Ltd', 'April 2021 — March 2026', 'Bangalore, India', [
        'Designed and implemented AWS-based infrastructure with Ansible and AWS services, improving scalability and reliability by 30%.',
        'Built and maintained end-to-end CI/CD pipelines using Jenkins and GitHub Actions, reducing release cycles.',
        'Automated build cleanup and user off-boarding through Jenkins pipelines, reducing manual overhead and improving compliance.',
        'Implemented Linux OS backup and recovery using ReaR and administered VMware vSphere cloning, snapshots and migrations.',
        'Led SAP ECS incident management, cross-team outage coordination, backup troubleshooting and customer communications.',
    ]),
    ('Linux Administrator', 'Lifestyle International Pvt. Ltd', 'April 2018 — March 2021', 'Bangalore, India', [
        'Administered Linux servers and DHCP, DNS and NFS services for 100+ developer environments.',
        'Configured Apache web servers with virtual hosting and integrated Tomcat for web service delivery.',
        'Managed DevOps tooling and infrastructure supporting software development and deployment pipelines.',
        'Designed and managed AWS cloud solutions to optimize performance, scalability and infrastructure reliability.',
    ]),
]

for role, company, dates, location, points in jobs:
    header = Table([[p(role, 'Job'), p(dates, 'Date')], [p(f'{company}  |  {location}', 'Company'), '']], colWidths=[110 * mm, 65 * mm])
    header.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('ALIGN', (1, 0), (1, 0), 'RIGHT'), ('BOTTOMPADDING', (0, 0), (-1, -1), 1), ('TOPPADDING', (0, 0), (-1, -1), 0)]))
    story.append(KeepTogether([header] + bullets(points) + [Spacer(1, 2 * mm)]))

story += [p('CERTIFICATIONS', 'Section')]
story += bullets([
    'AWS Certified — Cloud Practitioner / Solutions Architect (Udemy)',
    'Linux Certification (Udemy)',
    'Cybersecurity Analyst (StationX)',
    'Ansible — Hands-On DevOps (Udemy)',
])

doc = CVDocTemplate(str(OUTPUT))
doc.build(story)
print(OUTPUT)
