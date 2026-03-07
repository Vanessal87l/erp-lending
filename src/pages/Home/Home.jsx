import icon from "@/assets/images/icon.png"
import Container from "@/Container/Container"
import erp from "@/assets/images/erp-glav.jpg"
import qr from "@/assets/images/qr-erp.png"

export default function Home() {
  return (
    <Container>
      <header>
        <div className="flex">
          <img className="w-[180px] h-[150px] -ml-9" src={icon} alt="" />
          <h1 className="text-[35px] mt-13 font-bold text-[#2563EB]">Height IT Company </h1>
        </div>
        <div className="flex border-t  justify-between">
          <div className="mt-6   ">
            <div className="w-[230px] mt-12 py-2 text-[18px] text-white text-center rounded-3xl " style={{
              background: "linear-gradient(135deg,#3B82F6,#1E4ED8)"
            }}>Yangi avlod ERP tizimi</div>
            <h1 className="text-[60px] pt-4 font-bold">  ERP Ekotizimning <br /> <span className="text-[#2563EB]  text-[55px]">Kelajagi</span></h1>
            <p className="w-[720px] text-[22px] mt-8"> ERP ekotizimi kompaniyaning barcha asosiy jarayonlarini yagona platformada birlashtiradi. Tizim yordamida moliya, ombor, savdo, ishlab chiqarish va xodimlar fa‘oliyatini real vaqt rejimida boshqarish mumkin.Zamonaviy ERP yechimlari biznes jarayonlarini avtomatlashtiradi.</p>
          </div>


          <div className=" h-[640px]  flex items-center justify-center">
            <img className="rounded-xl w-[640px] h-[350px] " src={erp} alt="" />
          </div> </div>
      </header>
      <section className="bg-[#EFF6FF] mt-6 rounded-2xl w-full p-10 flex gap-10 border border-[#BFDBFE]">
        <div className="flex-1">
          <h2 className="text-[32px] font-bold mb-1 text-gray-900">Tizim haqida</h2>
          <div className="w-14 h-1 rounded-full bg-[#2563EB] mb-5" />
          <p className="text-[18px] text-gray-600 leading-relaxed mb-8">
            <span className="font-bold text-gray-900">OurSystem</span> – biznes va investorlarni yagona raqamii platforma orqaii biriashtirib,
            biznes boshqaruvini yangi bosqichga olib chiqib. Biznes boshqaruvini avtomatiqatizrish,
            integratsiya orqali biriashtirna biznes boshqaruvini yangi bosqiichga olib chiqish imkoniynitni beradi Biznng platforma.
          </p>

          <div className="flex gap-6">
            <div className="flex-1 bg-white rounded-xl p-5 border border-[#BFDBFE] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3B82F6,#1E40AF)" }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="text-[17px] font-bold uppercase tracking-wide text-gray-800">Tizimning afzalliklari</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Real vaqt rejimida ma’lumorlarni tahili qilish",
                  "Avtomatlashihiligan biznes jarayonlari",
                  "Invesitisiysiar monitoringi uchun markaziy platforma",
                  "Turii xil tizimlar bilan integratsiya",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-gray-700">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center shadow-sm" style={{ background: "linear-gradient(135deg,#3B82F6,#1E40AF)" }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 bg-white rounded-xl p-5 border border-amber-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                </span>
                <h3 className="text-[17px] font-bold uppercase tracking-wide text-gray-800">Tizimning kamchiliklari</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Dasturiy ta’minotni joriy etish uchun boshlang’ich xarajattar talab qilinadi",
                  "Integratsiya jarayoni ma’lum vaqt talab qilladi",
                  "Foydalanuvechilar uchun moslashuv davri talab qiilnishi mumikn",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-gray-700">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shadow-sm">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: QR */}
        <div className="flex-shrink-0 w-[290px] rounded-2xl p-6 flex flex-col items-center border border-[#BFDBFE]" style={{ background: "linear-gradient(160deg,#EFF6FF,#DBEAFE)" }}>
          <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3B82F6,#1E40AF)" }}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h7v7H3zm2 2v3h3V5zm8-2h7v7h-7zm2 2v3h3V5zM3 13h7v7H3zm2 2v3h3v-3zm11 0h2v2h-2zm-2-2h2v2h-2zm2 2h2v4h-4v-2h2zm-2 2h-2v2h2z" />
            </svg>
          </div>
          <h3 className="text-[17px] font-bold text-[#1E40AF] text-center uppercase mb-4 leading-snug tracking-wide">
            Video qo’llanmani<br />ko’rish uchun
          </h3>
          <div className="p-2 bg-white rounded-2xl shadow-md border border-[#BFDBFE] mb-5">
            <img src={qr} alt="QR kod" className="w-[155px] h-[155px] rounded-xl" />
          </div>
          <ul className="space-y-2.5 w-full">
            {[
              "QR kodni kamerangiz bilan skanerlang",
              "Video qo’llanma sahifashi oching",
              "Samarali foydalanish uchun mobii brauzermgizdan foydalaniang",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center shadow-sm" style={{ background: "linear-gradient(135deg,#3B82F6,#1E40AF)" }}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-18 mb-4 rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg,#0F172A 0%,#1E3A8A 40%,#1D4ED8 70%,#0EA5E9 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 -translate-y-1/3 translate-x-1/4" style={{ background: "radial-gradient(circle,#FFFFFF,transparent)" }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 translate-y-1/3 -translate-x-1/4" style={{ background: "radial-gradient(circle,#7DD3FC,transparent)" }} />

        <div className="relative px-14 pt-10 pb-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-[12px] font-semibold tracking-widest uppercase mb-3 border border-white/20" style={{ background: "rgba(255,255,255,0.08)", color: "#BAE6FD" }}>
            Height IT Company
          </span>
          <h2 className="text-white text-[30px] font-extrabold tracking-tight mb-2">
            Biz bilan bog’laning
          </h2>
          <p className="text-[#93C5FD] text-[15px]">Har qanday savol yoki taklif uchun murojaat qiling — biz doim tayyor</p>
          {/* divider */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
            <div className="h-px w-16 bg-white/20" />
          </div>
        </div>

        <div className="relative px-14 py-8 grid grid-cols-3 gap-6">
          <a href="tel:+998931121575"
            className="group flex flex-col items-center gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
            <span className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#3B82F6,#06B6D4)", boxShadow: "0 8px 24px rgba(59,130,246,0.45)" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#7DD3FC" }}>Telefon raqam</p>
              <p className="text-white text-[18px] font-bold leading-tight">+998 93 112 15 75</p>
              <p className="text-[12px] mt-1.5 px-3 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.1)", color: "#BAE6FD" }}>Qo’ng’iroq qiling</p>
            </div>
          </a>

          <a href="https://t.me/Height_IT" target="_blank" rel="noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
            <span className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", boxShadow: "0 8px 24px rgba(37,99,235,0.45)" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#7DD3FC" }}>Telegram</p>
              <p className="text-white text-[18px] font-bold leading-tight">@Height_IT</p>
              <p className="text-[12px] mt-1.5 px-3 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.1)", color: "#BAE6FD" }}>Yozing</p>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:heightcompany78@gmail.com"
            className="group flex flex-col items-center gap-4 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
            <span className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#0EA5E9,#10B981)", boxShadow: "0 8px 24px rgba(14,165,233,0.45)" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#7DD3FC" }}>Elektron pochta</p>
              <p className="text-white text-[15px] font-bold leading-tight">heightcompany78<br />@gmail.com</p>
              <p className="text-[12px] mt-1.5 px-3 py-0.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.1)", color: "#BAE6FD" }}>Xat yuboring</p>
            </div>
          </a>
        </div>

        {/* footer line */}
        <div className="relative border-t px-14 py-4 flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-[12px]" style={{ color: "rgba(147,197,253,0.6)" }}>© 2025 Height IT Company. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] opacity-80" />
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] opacity-60" />
            <div className="w-2 h-2 rounded-full bg-[#7C3AED] opacity-40" />
          </div>
        </div>
      </section>

    </Container>
  )
}
