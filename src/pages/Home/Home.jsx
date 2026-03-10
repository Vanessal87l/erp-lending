import { useState, useEffect, useCallback, useRef } from "react"
import icon from "@/assets/images/icon.png"
import Container from "@/Container/Container"
import erp from "@/assets/images/erp-glav.jpg"
import erp2 from "@/assets/images/erp2.png"
import erp3 from "@/assets/images/erp3.png"
import erp4 from "@/assets/images/erp4.png"
import qr from "@/assets/images/qr-erp.png"

const GRAD = "linear-gradient(135deg,#0F172A 0%,#1E3A8A 40%,#1D4ED8 70%,#0EA5E9 100%)"
const CAROUSEL_IMAGES = [erp, erp2, erp3, erp4]
const CAROUSEL_INTERVAL = 4500

const STATS = [
  { target: 500, suffix: "+", label: "Faol mijozlar" },
  { target: 5, suffix: "+", label: "Yil tajriba" },
  { target: 99, suffix: "%", label: "Mijoz qoniqishi" },
  { target: 24, suffix: "/7", label: "Qo\u02bcllab-quvvatlash" },
]

// eslint-disable-next-line react/prop-types
function CountUp({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(step)
          else setCount(target)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.4 })
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Real vaqt tahlili",
    desc: "Barcha biznes ko\u02bcrsatkichlarini bir ekranda real vaqtda kuzating va to\u02bcg\u02bcri qarorlar qabul qiling.",
    color: "#3B82F6",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Yuqori xavfsizlik",
    desc: "Ma\u02bclumotlaringiz bank darajasidagi shifrlash texnologiyalari bilan himoyalangan.",
    color: "#10B981",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Tezkor integratsiya",
    desc: "Mavjud tizimlaringiz bilan 3 kun ichida to\u02bcliq integratsiya — ishlashni to\u02bcxtatmasdan.",
    color: "#F59E0B",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Bulut texnologiyasi",
    desc: "Istalgan joydan, istalgan qurilmadan kirish imkoniyati. Internet bo\u02bclsa — siz boshqarasiz.",
    color: "#8B5CF6",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Jamoa boshqaruvi",
    desc: "Xodimlar vazifalari, KPI va ishlash natijalarini bir platformadan samarali boshqaring.",
    color: "#EF4444",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Avtomatik hisobotlar",
    desc: "Moliyaviy va operatsion hisobotlar avtomatik ravishda tayyorlanadi va yuboriladi.",
    color: "#06B6D4",
  },
]

const STEPS = [
  { num: "01", title: "Murojaat qiling", desc: "Bizga qo\u02bcng\u02bciroq yoki xabar yuboring — mutaxassisimiz siz bilan bog\u02bclanadi." },
  { num: "02", title: "Tahlil va demo", desc: "Biznesingiz ehtiyojlarini tahlil qilamiz va tizimdagi demo namoyish qilamiz." },
  { num: "03", title: "Sozlash va o\u02bcnatish", desc: "ERP tizimini biznesingizga mos ravishda sozlaymiz va xodimlaringizni o\u02bcqitamiz." },
  { num: "04", title: "Ishga tushirish", desc: "Tizim ishga tushiriladi va biz 24/7 qo\u02bcllab-quvvatlash xizmati ko\u02bcrsatamiz." },
]

const TESTIMONIALS = [
  {
    quote: ["Height ERP tizimini ishlatib ko`rdim,man o`zim ishlatib ko`rganlarim ichida Eng yaxshi investitsiya!"],
    name: "Abdullayev Bobur",
    role: "Baxtli Savdo MChJ, Direktori",
    initials: "AB",
  },
  {
    quote: ["Height ERP bizning barcha jarayonlarimizni avtomatlashtirdi. Xodimlar unumdorligi ", "2 barobarga oshdi", " va xarajatlar sezilarli kamaydi."],
    name: "Karimov Jasur",
    role: "TechBiznes LLC, Bosh Direktori",
    initials: "KJ",
  },
  {
    quote: ["Bu ERPni qulayligi ichida ERP bilan SRM yig`ilgani "],
    name: "Rahimova Dilnoza",
    role: "Savdo Markazi, Moliya Direktori",
    initials: "RD",
  },
]

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [phase, setPhase] = useState("idle")
  const [dir, setDir] = useState("up")
  const pending = useRef(null)

  const go = useCallback((newIdx, direction) => {
    if (phase !== "idle") return
    pending.current = newIdx
    setDir(direction)
    setPhase("exit")
  }, [phase])

  useEffect(() => {
    if (phase !== "exit") return
    const t = setTimeout(() => {
      setCurrent(pending.current)
      setPhase("enter")
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("idle")))
    }, 260)
    return () => clearTimeout(t)
  }, [phase])

  const goNext = useCallback(() => go((current + 1) % TESTIMONIALS.length, "up"), [current, go])
  const goPrev = useCallback(() => go((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, "down"), [current, go])

  useEffect(() => {
    const id = setInterval(goNext, 5000)
    return () => clearInterval(id)
  }, [goNext])

  const t = TESTIMONIALS[current]
  const contentStyle =
    phase === "exit"
      ? { opacity: 0, transform: dir === "up" ? "translateY(-20px)" : "translateY(20px)", transition: "opacity 0.26s ease, transform 0.26s ease" }
      : phase === "enter"
        ? { opacity: 0, transform: dir === "up" ? "translateY(20px)" : "translateY(-20px)", transition: "none" }
        : { opacity: 1, transform: "translateY(0)", transition: "opacity 0.26s ease, transform 0.26s ease" }

  return (
    <section className="mt-16 rounded-3xl overflow-hidden relative" style={{ background: GRAD }}>
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ background: "radial-gradient(circle,#FFFFFF,transparent)" }} />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-1/3 translate-y-1/3 pointer-events-none" style={{ background: "radial-gradient(circle,#7DD3FC,transparent)" }} />

      <div className="relative p-6 sm:p-10 lg:p-12">
        <div className="text-[80px] leading-none font-serif text-white opacity-10 select-none absolute top-4 left-6 sm:left-8">&ldquo;</div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">
          {/* LEFT — animated quote */}
          <div className="flex-1 relative min-w-0">
            <div style={contentStyle}>
              <div className="flex gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[18px] sm:text-[22px] font-semibold text-white leading-relaxed mb-6">
                {t.quote[0]}
                <span className="font-extrabold text-yellow-300">{t.quote[1]}</span>
                {t.quote[2]}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-[15px] border-2 border-white/30" style={{ background: "rgba(255,255,255,0.15)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-[15px]">{t.name}</p>
                  <p className="text-blue-200 text-[13px]">{t.role}</p>
                </div>
              </div>
            </div>

            {/* Nav controls */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={goPrev}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i, i > current ? "up" : "down")}
                    className="rounded-full transition-all duration-500 cursor-pointer"
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      background: i === current ? "white" : "rgba(255,255,255,0.4)",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden lg:block w-px h-36 bg-white/15" />

          {/* RIGHT — stats */}
          <div className="flex flex-row lg:flex-col gap-5 lg:gap-8 w-full lg:w-auto">
            <div className="flex-1 lg:flex-none text-center">
              <p className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-white leading-none">40%</p>
              <p className="text-blue-200 text-[12px] sm:text-[13px] mt-1">Samaradorlik oshdi</p>
            </div>
            <div className="flex-1 lg:flex-none text-center">
              <p className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-white leading-none">500+</p>
              <p className="text-blue-200 text-[12px] sm:text-[13px] mt-1">Muvaffaqiyatli loyiha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((idx) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setIsTransitioning(false)
    }, 400)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % CAROUSEL_IMAGES.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }, [current, goTo])

  useEffect(() => {
    const id = setInterval(next, CAROUSEL_INTERVAL)
    return () => clearInterval(id)
  }, [next])

  return (
    <div className="relative w-full lg:w-150 xl:w-170 shrink-0 mt-4 lg:mt-8 rounded-2xl overflow-hidden shadow-2xl group">
      {CAROUSEL_IMAGES.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`ERP screenshot ${i + 1}`}
          className="w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-[800ms] ease-in-out"
          style={{
            opacity: i === current && !isTransitioning ? 1 : 0,
            position: i === 0 ? "relative" : "absolute",
            pointerEvents: i === current ? "auto" : "none",
          }}
        />
      ))}

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-2xl" /> */}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)" }}
      >
        <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)" }}
      >
        <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-500 cursor-pointer"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "#2563EB" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container>
        {/* HERO */}
        <header>
          <div className="flex items-center">
            <img className="w-[120px] h-[100px] sm:w-[180px] sm:h-[150px] -ml-4 sm:-ml-9" src={icon} alt="" />
            <h1 className="text-[20px] sm:text-[28px] lg:text-[35px] font-bold text-[#2563EB]">Height IT Company</h1>
          </div>
          <div className="border-t pt-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1 min-w-0">
              <div
                className="w-[200px] sm:w-[230px] mt-4 lg:mt-8 py-2 text-[16px] sm:text-[18px] text-white text-center rounded-3xl"
                style={{ background: GRAD }}
              >
                Yangi avlod ERP tizimi
              </div>
              <h1 className="text-[28px] sm:text-[42px] lg:text-[52px] pt-4 font-bold leading-tight">
                ERP Ekotizimning <br />
                <span className="text-[#2563EB] text-[26px] sm:text-[38px] lg:text-[46px]">Kelajagi</span>
              </h1>
              <p className="w-full text-[15px] sm:text-[17px] lg:text-[18px] mt-5 text-gray-600 leading-relaxed">
                Biznesingizni raqamlashtiring va raqobatchilardan oldinda boring. Height IT Company ning ERP tizimi moliya,
                ombor, savdo va xodimlar boshqaruvini yagona aqlli platformada birlashtiradi.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="tel:+998931121575"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-[15px] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: GRAD }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  Bepul konsultatsiya
                </a>
                <a
                  href="https://t.me/Height_IT"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] border-2 border-[#2563EB] text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white hover:-translate-y-0.5"
                >
                  Demo ko&apos;rish
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <Carousel />
          </div>
        </header>

        {/* STATS */}
        <section className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 sm:p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: GRAD }}
            >
              <p className="text-[22px] sm:text-[30px] font-extrabold text-white">
                <CountUp target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-[11px] sm:text-[14px] text-blue-200 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </section>

        {/* FEATURES */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-5 py-2 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase mb-3 transition-all duration-300 text-white" style={{ background: GRAD }}>
              Imkoniyatlar
            </span>
            <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-gray-900">
              Nima uchun <span className="text-[#2563EB]">Height ERP</span>?
            </h2>
            <p className="text-gray-500 mt-3 text-[14px] sm:text-[15px] max-w-xl mx-auto px-2">
              Zamonaviy texnologiyalar asosida qurilgan platformamiz biznesingizni yangi darajaga olib chiqadi
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                style={{ background: GRAD }}
              >
                <span
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  {f.icon}
                </span>
                <h3 className="text-[15px] sm:text-[17px] font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] sm:text-[14px] text-blue-200 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT + QR */}
        <section className="mt-16 rounded-3xl overflow-hidden relative" style={{ background: GRAD }}>
          {/* bg blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ background: "radial-gradient(circle,#FFFFFF,transparent)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 translate-y-1/2 -translate-x-1/3 pointer-events-none" style={{ background: "radial-gradient(circle,#7DD3FC,transparent)" }} />

          <div className="relative flex flex-col lg:flex-row gap-0">
            {/* LEFT */}
            <div className="flex-1 p-7 sm:p-10 lg:p-12">
              <span className="inline-block px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-5  text-white" style={{ background: "rgba(255,255,255,0.1)" }}>
                Tizim haqida
              </span>
              <h2 className="text-[26px] sm:text-[34px] font-extrabold text-white leading-tight mb-4">
                Biznesingizni <br />
                <span style={{ background: "linear-gradient(90deg,#7DD3FC,#C4B5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  yangi darajaga olib chiqing
                </span>
              </h2>
              <p className="text-blue-200 text-[15px] leading-relaxed mb-8 max-w-lg">
                <span className="text-white font-semibold">Height ERP</span> — bu faqat dastur emas, bu biznesingiz uchun aqlli
                sherik. Barcha jarayonlarni nazorat qiling, xarajatlarni kamaytiring va foyda oling.
              </p>

              {/* PROS grid */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-green-300">Afzalliklar</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: "📊", text: "Real vaqt tahlili va hisobotlar" },
                    { icon: "⚡", text: "Avtomatlashtirilgan jarayonlar" },
                    { icon: "🔗", text: "Har qanday tizim bilan integratsiya" },
                    { icon: "💰", text: "Xarajatlarni 30% kamaytirish" },
                    { icon: "📡", text: "Investitsiyalar monitoringi" },
                    { icon: "🛡️", text: "Bank darajasidagi xavfsizlik" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <span className="text-[18px]">{item.icon}</span>
                      <span className="text-[13px] text-white font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONS */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">E&apos;tiborga olish</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Boshlang\u02bcich sozlash vaqt talab qiladi",
                    "Xodimlarni o\u02bcrgatish zarur",
                    "Texnik ko\u02bcmak kerak bo\u02bclishi mumkin",
                  ].map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-[12px] text-white px-3 py-1.5 rounded-full" style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.25)" }}>
                      <svg className="w-3 h-3 text-amber-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — QR */}
            <div className="flex-shrink-0 w-full lg:w-[300px] p-7 sm:p-10 lg:p-10 flex flex-col items-center justify-center lg:border-l" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.15)" }}>
              <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center shadow-lg" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h7v7H3zm2 2v3h3V5zm8-2h7v7h-7zm2 2v3h3V5zM3 13h7v7H3zm2 2v3h3v-3zm11 0h2v2h-2zm-2-2h2v2h-2zm2 2h2v4h-4v-2h2zm-2 2h-2v2h2z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-white text-center uppercase tracking-widest mb-6 leading-snug">
                Video qo&apos;llanmani<br />
                <span className="text-blue-200">ko&apos;rish uchun</span>
              </h3>

              {/* QR with glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-40" style={{ background: GRAD }} />
                <div className="relative p-3 rounded-2xl shadow-2xl" style={{ background: "rgba(255,255,255,0.95)" }}>
                  <img src={qr} alt="QR kod" className="w-[150px] h-[150px] rounded-xl" />
                </div>
              </div>

              <ul className="space-y-3 w-full">
                {[
                  "Kamerangiz bilan skanerlang",
                  "Video sahifani oching",
                  "Mobil brauzerni ishlating",
                ].map((tip, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[13px] text-blue-100">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: "rgba(255,255,255,0.2)" }}>
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-5 py-2 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase mb-3 transition-all duration-300 text-white" style={{ background: GRAD }}>
              Jarayon
            </span>
            <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold text-gray-900">
              Qanday <span className="text-[#2563EB]">boshlash</span> mumkin?
            </h2>
            <p className="text-gray-500 mt-3 text-[13px] sm:text-[15px] px-2">Atigi 4 qadam bilan biznesingizni raqamlashtirishni boshlang</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 1px 5px 1px gray, 0 1.5px 6px 0 rgba(14,165,233,0.07)" }}>
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 text-white font-extrabold text-[16px] sm:text-[18px] shadow-md"
                    style={{ background: GRAD }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <TestimonialCarousel />
      </Container>
      {/* CONTACT */}
      <section
        className="mt-10 sm:mt-14 lg:mt-18 overflow-hidden relative"
        style={{ background: GRAD }}
      >
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 -translate-y-1/3 translate-x-1/4" style={{ background: "radial-gradient(circle,#FFFFFF,transparent)" }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 translate-y-1/3 -translate-x-1/4" style={{ background: "radial-gradient(circle,#7DD3FC,transparent)" }} />

        <div className="relative px-5 sm:px-10 lg:px-14 pt-10 pb-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-[12px] font-semibold tracking-widest uppercase mb-3 border-2 border-[#2563EB] text-[#2563EB] transition-all duration-300 hover:bg-[#2563EB] hover:text-white hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.08)", color: "#BAE6FD" }}>
            Height IT Company
          </span>
          <h2 className="text-white text-[24px] sm:text-[30px] font-extrabold tracking-tight mb-2">
            Biz bilan bog&apos;laning
          </h2>
          <p className="text-[#93C5FD] text-[14px] sm:text-[15px]">Har qanday savol yoki taklif uchun murojaat qiling — biz doim tayyor</p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
            <div className="h-px w-16 bg-white/20" />
          </div>
        </div>

        <div className="relative px-5 sm:px-10 lg:px-14 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <a
            href="tel:+998931121575"
            className="group flex flex-col items-center gap-4 rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#3B82F6,#06B6D4)", boxShadow: "0 8px 24px rgba(59,130,246,0.45)" }}>
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#7DD3FC" }}>Telefon raqam</p>
              <p className="text-white text-[16px] sm:text-[18px] font-bold leading-tight">+998 93 112 15 75</p>
              <p className="text-[12px] mt-1.5 px-3 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.1)", color: "#BAE6FD" }}>Qo&apos;ng&apos;iroq qiling</p>
            </div>
          </a>

          <a
            href="https://t.me/Height_IT"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", boxShadow: "0 8px 24px rgba(37,99,235,0.45)" }}>
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#7DD3FC" }}>Telegram</p>
              <p className="text-white text-[16px] sm:text-[18px] font-bold leading-tight">@Height_IT</p>
              <p className="text-[12px] mt-1.5 px-3 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.1)", color: "#BAE6FD" }}>Yozing</p>
            </div>
          </a>

          <a
            href="mailto:heightcompany78@gmail.com"
            className="group flex flex-col items-center gap-4 rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#0EA5E9,#10B981)", boxShadow: "0 8px 24px rgba(14,165,233,0.45)" }}>
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#7DD3FC" }}>Elektron pochta</p>
              <p className="text-white text-[14px] sm:text-[15px] font-bold leading-tight">heightcompany78<br />@gmail.com</p>
              <p className="text-[12px] mt-1.5 px-3 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.1)", color: "#BAE6FD" }}>Xat yuboring</p>
            </div>
          </a>
        </div>

        <div className="relative border-t px-5 sm:px-10 lg:px-14 py-4 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-[12px] text-center sm:text-left" style={{ color: "rgba(147,197,253,0.6)" }}>© 2025 Height IT Company. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] opacity-80" />
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7C3AED] opacity-40" />
          </div>
        </div>
      </section>
    </>
  )
}
