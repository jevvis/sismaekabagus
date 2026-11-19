'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Protokol Validasi Pembersihan (QC)", en: "Cleaning Validation Protocol (QC)" },
    description: { id: "Membantu penyusunan protokol validasi pembersihan untuk peralatan gelas di laboratorium QC.", en: "Helping prepare a cleaning validation protocol for glassware in the QC laboratory." },
    framework: "PT SAMPHARINDO RETROVIRAL INDONESIA 2026",
    techStack: ["Validasi", "QA"],
  },
  {
    number: '02',
    title: { id: "In-Process Control Tablet", en: "Tablet In-Process Control" },
    description: { id: "Mendukung pengujian kekerasan tablet setelah kompresi dan pengukuran penambahan bobot setelah penyalutan.", en: "Supporting tablet hardness testing after compression and weight gain measurement after coating." },
    framework: "PT SAMPHARINDO RETROVIRAL INDONESIA 2026",
    techStack: ["IPC", "Produksi"],
  },
  {
    number: '03',
    title: { id: "Telaah Literatur Efek Samping ARV", en: "ARV Side Effect Literature Review" },
    description: { id: "Menelusuri literatur efek samping obat, termasuk Efavirenz dan ARV lain, untuk farmakovigilans.", en: "Reviewing literature on drug side effects, including Efavirenz and other ARVs, for pharmacovigilance." },
    framework: "PT SAMPHARINDO RETROVIRAL INDONESIA 2026",
    techStack: ["Farmakovigilans", "ARV"],
  },
  {
    number: '04',
    title: { id: "Proyek CAPA dan Force Majeure", en: "CAPA and Force Majeure Projects" },
    description: { id: "Menyusun dan mempresentasikan proyek CAPA serta penanganan force majeure pada tahap penyalutan.", en: "Preparing and presenting a CAPA project and force majeure handling at the coating stage." },
    framework: "PT SAMPHARINDO RETROVIRAL INDONESIA 2026",
    techStack: ["CAPA", "Penyalutan"],
  },
  {
    number: '05',
    title: { id: "Pemantauan Terapi Obat (PTO)", en: "Drug Therapy Monitoring (PTO)" },
    description: { id: "Memantau terapi obat sekitar 10 pasien di berbagai bangsal rawat inap.", en: "Monitoring drug therapy for about 10 inpatients across wards." },
    framework: "RSUD CILACAP 2026",
    techStack: ["PTO", "Rawat Inap"],
  },
  {
    number: '06',
    title: { id: "MESO dan Masalah Terkait Obat", en: "ADR Monitoring and Drug-Related Problems" },
    description: { id: "Memantau efek samping obat dan mengidentifikasi masalah terkait obat.", en: "Monitoring adverse drug reactions and identifying drug-related problems." },
    framework: "RSUD CILACAP 2026",
    techStack: ["MESO", "DRP"],
  },
  {
    number: '07',
    title: { id: "UDD dan Rencana Kebutuhan Obat", en: "UDD and Drug Requirement Plan" },
    description: { id: "Mendukung distribusi obat dengan UDD dan menyusun RKO dengan metode konsumsi dan epidemiologi.", en: "Supporting drug distribution with UDD and preparing the RKO using consumption and epidemiology methods." },
    framework: "RSUD CILACAP 2026",
    techStack: ["UDD", "RKO"],
  },
  {
    number: '08',
    title: { id: "Evaluasi Antibiotik ATC/DDD", en: "ATC/DDD Antibiotic Evaluation" },
    description: { id: "Mengevaluasi penggunaan antibiotik rasional dengan metodologi ATC/DDD.", en: "Evaluating rational antibiotic use with ATC/DDD methodology." },
    framework: "RSUD CILACAP 2026",
    techStack: ["ATC/DDD", "Antibiotik"],
  },
  {
    number: '09',
    title: { id: "Analisis ABC/Pareto Persediaan", en: "ABC/Pareto Inventory Analysis" },
    description: { id: "Menganalisis persediaan obat dengan ABC/Pareto serta melakukan stock opname di apotek.", en: "Analysing drug inventory with ABC/Pareto and running stock opname at the pharmacy." },
    framework: "APOTEK UMP 2026",
    techStack: ["ABC/Pareto", "Stock Opname"],
  },
  {
    number: '10',
    title: { id: "Dokumentasi Distribusi CDOB", en: "CDOB Distribution Documentation" },
    description: { id: "Mendukung dokumentasi distribusi obat sesuai CDOB, termasuk verifikasi pesanan pembelian dan faktur.", en: "Supporting drug distribution documentation per CDOB, including verifying purchase orders and invoices." },
    framework: "PT DAGANG TEMPO 2025",
    techStack: ["CDOB", "PBF"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'PHARMACIST PORTFOLIO' : 'PORTOFOLIO APOTEKER'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Industry, Hospital & Distribution Practice' : 'Praktik Industri, Rumah Sakit & Distribusi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of quality assurance, production control, clinical pharmacy, and drug distribution practice.'
              : 'Rekam jejak penjaminan mutu, pengendalian produksi, farmasi klinis, dan praktik distribusi obat.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
