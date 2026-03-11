"use client";

import { useEffect } from "react";
import {
  HardHat,
  BarChart3,
  Wallet,
  Users,
  Smartphone,
  TrendingUp,
  Building2,
  ClipboardCheck,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLegal();
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  function toggleFaq(btn: HTMLButtonElement) {
    const item = btn.parentElement;
    const wasActive = item?.classList.contains("active");
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("active"));
    if (!wasActive) item?.classList.add("active");
  }

  function openLegal(type: string) {
    document.getElementById("legalOverlay")?.classList.add("active");
    document
      .querySelectorAll(".legal-modal")
      .forEach((m) => ((m as HTMLElement).style.display = "none"));
    const el = document.getElementById("legal-" + type);
    if (el) el.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeLegal() {
    document.getElementById("legalOverlay")?.classList.remove("active");
    document.body.style.overflow = "";
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const n = (document.getElementById("fname") as HTMLInputElement).value;
    const c = (document.getElementById("fcompany") as HTMLInputElement).value;
    const em = (document.getElementById("femail") as HTMLInputElement).value;
    const p = (document.getElementById("fphone") as HTMLInputElement).value;
    const t = (document.getElementById("ftype") as HTMLSelectElement).value;
    const m = (document.getElementById("fmessage") as HTMLTextAreaElement)
      .value;
    const subject = encodeURIComponent("PeraOS Sunum Talebi - " + n);
    const body = encodeURIComponent(
      "Ad Soyad: " +
        n +
        "\nFirma: " +
        c +
        "\nE-posta: " +
        em +
        "\nTelefon: " +
        p +
        "\nProje Tipi: " +
        t +
        "\nMesaj: " +
        m
    );
    window.location.href =
      "mailto:info@peraos.com?subject=" + subject + "&body=" + body;
    alert(
      "E-posta uygulamaniz acilacak. Talebinizi gonderdikten sonra en kisa surede donus yapacagiz!"
    );
  }

  return (
    <>
      <nav>
        <div className="container">
          <a href="#" className="logo">
            <img
              src="/logo-white.svg"
              alt="PeraOS"
              style={{ height: "37px", width: "auto" }}
            />
          </a>
          <ul className="nav-links">
            <li>
              <a href="#ozellikler">Ozellikler</a>
            </li>
            <li>
              <a href="#nasil-calisir">Nasil Calisir</a>
            </li>
            <li>
              <a href="#paketler">Paketler</a>
            </li>
            <li>
              <a href="#sss">SSS</a>
            </li>
            <li>
              <a href="#sunum-talep" className="nav-cta">
                Sunum Talep Et
              </a>
            </li>
          </ul>
          <button className="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-skyline">
          <svg
            width="100%"
            height="260"
            viewBox="0 0 1440 260"
            preserveAspectRatio="xMidYMax slice"
            fill="currentColor"
            style={{ color: "var(--accent)" }}
          >
            <rect x="80" y="100" width="60" height="160" />
            <rect x="140" y="60" width="40" height="200" />
            <rect x="180" y="120" width="50" height="140" />
            <rect x="240" y="40" width="35" height="220" />
            <rect x="275" y="80" width="55" height="180" />
            <rect x="340" y="140" width="45" height="120" />
            <rect x="400" y="20" width="30" height="240" />
            <rect x="430" y="70" width="60" height="190" />
            <rect x="510" y="0" width="4" height="260" />
            <rect x="490" y="0" width="80" height="4" />
            <rect x="620" y="80" width="70" height="180" />
            <rect x="690" y="110" width="50" height="150" />
            <rect x="750" y="50" width="40" height="210" />
            <rect x="800" y="90" width="55" height="170" />
            <rect x="870" y="30" width="30" height="230" />
            <rect x="900" y="70" width="65" height="190" />
            <rect x="980" y="120" width="50" height="140" />
            <rect x="1040" y="60" width="35" height="200" />
            <rect x="1080" y="100" width="60" height="160" />
            <rect x="1150" y="40" width="40" height="220" />
            <rect x="1200" y="80" width="55" height="180" />
            <rect x="1270" y="120" width="45" height="140" />
            <rect x="1330" y="70" width="60" height="190" />
          </svg>
        </div>
        <div className="hero-measure">
          <div className="m-line"></div>
          <div className="m-tick" style={{ top: 0 }}></div>
          <div className="m-tick" style={{ top: "25%" }}></div>
          <div className="m-tick" style={{ top: "50%" }}></div>
          <div className="m-tick" style={{ top: "75%" }}></div>
          <div className="m-tick" style={{ top: "100%" }}></div>
          <div className="m-label" style={{ top: "50%" }}>
            KOT +3.50
          </div>
        </div>
        <div className="hero-cross hero-cross-1"></div>
        <div className="hero-cross hero-cross-2"></div>
        <div className="hero-cross hero-cross-3"></div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge">Insaat & Proje Yonetimi</div>
              <h1>
                Santiyeden masaya
                <br />
                <em>tek platform.</em>
              </h1>
              <p className="hero-desc">
                Projelerinizi blok ve kat bazli takip edin, santiye sureclerini
                dijitallestirin, ekibinizle gercek zamanli koordinasyon saglayin.
              </p>
              <div className="hero-actions">
                <a href="#sunum-talep" className="btn-primary">
                  Detayli Sunum Talep Et{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10m0 0L9 4m4 4L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#ozellikler" className="btn-secondary">
                  Ozellikleri Kesfet
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="dash-wrap">
                <div className="dash-main-card">
                  <div className="dash-hd">
                    <div className="dash-d dash-dr"></div>
                    <div className="dash-d dash-dy"></div>
                    <div className="dash-d dash-dg"></div>
                  </div>
                  <div className="dash-body">
                    <div className="dash-st">
                      <div className="dash-sn">24</div>
                      <div className="dash-sl">Proje</div>
                    </div>
                    <div className="dash-st">
                      <div className="dash-sn">156</div>
                      <div className="dash-sl">Daire</div>
                    </div>
                    <div className="dash-st">
                      <div className="dash-sn">%78</div>
                      <div className="dash-sl">Ilerleme</div>
                    </div>
                    <div className="dash-ch">
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                      <div className="dash-bar"></div>
                    </div>
                  </div>
                </div>
                <div className="dash-pct">
                  <div className="dash-pn">%78</div>
                  <div className="dash-pl">Tamamlandi</div>
                </div>
                <div className="dash-prog">
                  <div className="dash-prog-title">Blok Ilerleme</div>
                  <div className="dash-prog-row">
                    <div className="dash-prog-label">A Blok</div>
                    <div className="dash-prog-track">
                      <div className="dash-prog-fill dash-prog-fill-1"></div>
                    </div>
                  </div>
                  <div className="dash-prog-row">
                    <div className="dash-prog-label">B Blok</div>
                    <div className="dash-prog-track">
                      <div className="dash-prog-fill dash-prog-fill-2"></div>
                    </div>
                  </div>
                  <div className="dash-prog-row">
                    <div className="dash-prog-label">C Blok</div>
                    <div className="dash-prog-track">
                      <div className="dash-prog-fill dash-prog-fill-3"></div>
                    </div>
                  </div>
                </div>
                <div className="dash-notif">
                  <div className="dash-nt">Son Guncellemeler</div>
                  <div className="dash-ni">
                    <div className="dash-nd"></div>
                    <div className="dash-nx">B Blok 3.Kat tamamlandi</div>
                  </div>
                  <div className="dash-ni">
                    <div className="dash-nd"></div>
                    <div className="dash-nx">A Blok siva basladi</div>
                  </div>
                  <div className="dash-ni">
                    <div className="dash-nd"></div>
                    <div className="dash-nx">3 yeni satis kaydi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>%40</h3>
              <p>Daha hizli proje takibi</p>
            </div>
            <div className="hero-stat">
              <h3>Blok+Kat</h3>
              <p>Bazli detayli izleme</p>
            </div>
            <div className="hero-stat">
              <h3>7/24</h3>
              <p>Gercek zamanli erisim</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="ozellikler">
        <div className="features-floor-plan">
          <div className="fp-room fp-room-1"></div>
          <div className="fp-room fp-room-2"></div>
          <div className="fp-room fp-room-3"></div>
          <div className="fp-room fp-room-4"></div>
          <div className="fp-room fp-room-5"></div>
          <div className="fp-door fp-door-1"></div>
          <div className="fp-door fp-door-2"></div>
          <div className="fp-dim fp-dim-1">
            <span>7.20 m</span>
          </div>
          <div className="fp-dim fp-dim-2">
            <span>5.40 m</span>
          </div>
        </div>
        <div className="container">
          <div className="features-header reveal">
            <div className="section-label">Moduller</div>
            <h2 className="section-title">
              Insaat yonetiminin her adimi
              <br />
              tek ekranda.
            </h2>
            <p className="section-desc">
              Proje planlama, santiye takibi, satis yonetimi ve ekip
              koordinasyonunu tek platformda birlestirin.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div className="feature-icon">
                <HardHat size={24} color="var(--accent)" />
              </div>
              <h3>Santiye Yonetimi</h3>
              <p>
                Blok ve kat bazli ilerleme takibi, is programi, gunluk santiye
                raporlari ve puantaj yonetimi tek ekranda.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div
                className="feature-icon"
                style={{ background: "var(--accent-green-light)" }}
              >
                <BarChart3 size={24} color="var(--accent-green)" />
              </div>
              <h3>Proje Takibi</h3>
              <p>
                Tum projelerinizi tek panelden yonetin. Villa, rezidans veya
                toplu konut — her proje tipine uyumlu yapi.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div className="feature-icon">
                <Wallet size={24} color="var(--accent)" />
              </div>
              <h3>Satis & CRM</h3>
              <p>
                Daire/villa satis surecleri, musteri takibi, teklif yonetimi ve
                odeme planlarini entegre bicimde yonetin.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div
                className="feature-icon"
                style={{ background: "var(--accent-green-light)" }}
              >
                <Users size={24} color="var(--accent-green)" />
              </div>
              <h3>Ekip Koordinasyonu</h3>
              <p>
                Taseron, muhendis ve santiye ekibini tek platformda bulusturun.
                Gorev atama ve ilerleme bildirimleri.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div className="feature-icon">
                <Smartphone size={24} color="var(--accent)" />
              </div>
              <h3>Mobil Erisim</h3>
              <p>
                Santiyeden, ofisten veya sahadan — her cihazdan kesintisiz
                erisim. Responsive tasarim, her ekranda calisir.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div
                className="feature-icon"
                style={{ background: "var(--accent-green-light)" }}
              >
                <TrendingUp size={24} color="var(--accent-green)" />
              </div>
              <h3>Raporlama & Analiz</h3>
              <p>
                Proje bazli maliyet analizi, ilerleme grafikleri, satis
                performansi ve ozellestirilebilir raporlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="nasil-calisir">
        <div className="level-markers">
          <div className="level-mark">KAT 5</div>
          <div className="level-mark">KAT 4</div>
          <div className="level-mark">KAT 3</div>
          <div className="level-mark">KAT 2</div>
          <div className="level-mark">KAT 1</div>
          <div className="level-mark">ZEMIN</div>
        </div>
        <div className="container">
          <div style={{ textAlign: "center" }} className="reveal">
            <div
              className="section-label section-label-light"
              style={{ justifyContent: "center" }}
            >
              Nasil Calisir
            </div>
            <h2 className="section-title">4 Adimda Dijital Donusum</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Projenizi dakikalar icinde dijitallestirin. Kurulum, egitim derdi
              yok — hemen baslayin.
            </p>
          </div>
          <div className="flow-container reveal">
            <div className="flow-line"></div>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="flow-step-num">01</div>
                <div className="flow-step-card">
                  <div className="flow-step-icon">
                    <Building2 size={28} color="var(--accent)" />
                  </div>
                  <h3>Proje Olusturun</h3>
                  <p>
                    Proje tipini secin, blok ve kat yapisini tanimlayin.
                    Dakikalar icinde hazir.
                  </p>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-step-num">02</div>
                <div className="flow-step-card">
                  <div className="flow-step-icon">
                    <Users size={28} color="var(--accent)" />
                  </div>
                  <h3>Ekibinizi Ekleyin</h3>
                  <p>
                    Santiye sefi, muhendis, satis ekibi — herkese rol ve yetki
                    taniyin.
                  </p>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-step-num">03</div>
                <div className="flow-step-card">
                  <div className="flow-step-icon">
                    <ClipboardCheck size={28} color="var(--accent)" />
                  </div>
                  <h3>Takip Baslasin</h3>
                  <p>
                    Ilerleme girin, raporlar olusturun, satis durumunu
                    guncelleyin.
                  </p>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-step-num">04</div>
                <div className="flow-step-card">
                  <div className="flow-step-icon">
                    <BarChart3 size={28} color="var(--accent)" />
                  </div>
                  <h3>Analiz Edin</h3>
                  <p>
                    Dashboard&apos;lardan anlik veri alin, kararlari veriye
                    dayali verin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="referanslar">
        <div className="rivets">
          <div className="rivet"></div>
          <div className="rivet"></div>
          <div className="rivet"></div>
          <div className="rivet"></div>
          <div className="rivet"></div>
          <div className="rivet"></div>
        </div>
        <div className="container">
          <div className="testimonials-header reveal">
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              Referanslar
            </div>
            <h2 className="section-title">
              Sektor profesyonelleri
              <br />
              PeraOS&apos;u tercih ediyor.
            </h2>
            <p className="section-desc">
              Insaat ve proje yonetiminde dijital donusum saglayan firmalardan
              geri bildirimler.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="quote-mark">&ldquo;</div>
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">
                &ldquo;Santiye takibinde Excel&apos;den kurtulmamizi sagladi.
                Blok ve kat bazli ilerleme sistemi tam ihtiyacimiz olan
                seydi.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AK</div>
                <div>
                  <div className="testimonial-name">Ahmet K.</div>
                  <div className="testimonial-role">
                    Proje Muduru — Yapi Insaat
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="quote-mark">&ldquo;</div>
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">
                &ldquo;Satis ekibi ile santiye ekibini ayni platformda
                bulusturmak buyuk avantaj sagladi. Iletisim kopukluklari
                bitti.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SY</div>
                <div>
                  <div className="testimonial-name">Selin Y.</div>
                  <div className="testimonial-role">
                    Genel Mudur — Prestij Konut
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="quote-mark">&ldquo;</div>
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">
                &ldquo;Villa projelerimizi PeraOS uzerinden yonetmeye basladik.
                Mobil erisim sayesinde sahada anlik guncellemeler
                yapabiliyoruz.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MC</div>
                <div>
                  <div className="testimonial-name">Murat C.</div>
                  <div className="testimonial-role">
                    Santiye Sefi — Doruk Insaat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="paketler">
        <div className="container">
          <div className="pricing-header reveal">
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              Paketler
            </div>
            <h2 className="section-title">
              Ihtiyaciniza uygun plani secin.
            </h2>
            <p className="section-desc">
              Her olcekte insaat firmasi icin esnek fiyatlandirma. Buyudukce
              olceklendirin.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal">
              <div className="pricing-name">Baslangic</div>
              <div className="pricing-price">Teklif Alin</div>
              <div className="pricing-desc">
                Kucuk olcekli firmalar icin temel ozellikler. Proje basina
                ucretlendirilir.
              </div>
              <ul className="pricing-features">
                <li>Proje basina ucretlendirme</li>
                <li>5 kullanici</li>
                <li>Blok & kat takibi</li>
                <li>Gunluk santiye raporu</li>
                <li>Puantaj yonetimi</li>
                <li>E-posta destegi</li>
              </ul>
              <a href="#sunum-talep" className="pricing-cta pricing-cta-outline">
                Sunum Talep Et
              </a>
            </div>
            <div className="pricing-card featured reveal">
              <div className="pricing-name">Profesyonel</div>
              <div className="pricing-price">Teklif Alin</div>
              <div className="pricing-desc">
                Buyuyen firmalar icin gelismis ozellikler. Proje basina
                ucretlendirilir.
              </div>
              <ul className="pricing-features">
                <li>Proje basina ucretlendirme</li>
                <li>15 kullanici</li>
                <li>Satis & CRM modulu</li>
                <li>Raporlama & analiz</li>
                <li>Ekip koordinasyonu</li>
                <li>Puantaj yonetimi</li>
                <li>Mobil uygulama (iOS & Android) — yakinda</li>
                <li>Oncelikli destek</li>
              </ul>
              <a href="#sunum-talep" className="pricing-cta pricing-cta-filled">
                Sunum Talep Et
              </a>
            </div>
            <div className="pricing-card reveal">
              <div className="pricing-name">Kurumsal</div>
              <div className="pricing-price">Ozel Fiyat</div>
              <div className="pricing-desc">
                Buyuk firmalar icin tam kapsamli cozum. Vaziyet plani cizimi
                dahil.
              </div>
              <ul className="pricing-features">
                <li>Sinirsiz proje & kullanici</li>
                <li>Vaziyet plani cizim hizmeti</li>
                <li>Tum moduller dahil</li>
                <li>API entegrasyonu</li>
                <li>Ozel raporlama</li>
                <li>Coklu firma yonetimi</li>
                <li>Mobil uygulama (iOS & Android) — yakinda</li>
                <li>Ozel egitim & onboarding</li>
                <li>7/24 oncelikli destek</li>
              </ul>
              <a
                href="#sunum-talep"
                className="pricing-cta pricing-cta-outline"
              >
                Iletisime Gecin
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="sss">
        <div className="container">
          <div className="faq-header reveal">
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              SSS
            </div>
            <h2 className="section-title">Sikca Sorulan Sorular</h2>
            <p className="section-desc">
              PeraOS hakkinda merak edilenlerin yanitlari.
            </p>
          </div>
          <div className="faq-list reveal">
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) =>
                  toggleFaq(e.currentTarget)
                }
              >
                PeraOS&apos;u kullanmak icin kurulum gerekiyor mu?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Hayir, PeraOS tamamen bulut tabanlıdır. Herhangi bir kurulum
                  veya indirme gerektirmez. Tarayıcınızdan anında erisim
                  saglayabilirsiniz.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) =>
                  toggleFaq(e.currentTarget)
                }
              >
                Kac proje ve kullanici ekleyebilirim?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Baslangic ve Profesyonel paketlerde proje basina
                  ucretlendirme yapilir, ihtiyaciniz kadar proje
                  ekleyebilirsiniz. Kurumsal pakette ise sinirsiz proje ve
                  kullanici kapasitesi sunulmaktadir.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) =>
                  toggleFaq(e.currentTarget)
                }
              >
                Verilerim guvende mi?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Kesinlikle. Tum verileriniz SSL ile sifreli iletilir ve
                  guvenli bulut sunucularda saklanir. Rol bazli yetkilendirme
                  ile herkes yalnizca yetkisi olan veriyi gorebilir. KVKK uyumlu
                  altyapi ile calisiyoruz.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) =>
                  toggleFaq(e.currentTarget)
                }
              >
                Mevcut projelerimi aktarabilir miyim?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Evet, mevcut projelerinizi platforma kolayca
                  tanimlayabilirsiniz. Excel veya diger kaynaklardan veri
                  aktarimi icin ekibimiz destek saglar.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) =>
                  toggleFaq(e.currentTarget)
                }
              >
                Villa, rezidans ve toplu konut destekleniyor mu?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Evet, PeraOS her proje tipine uyumludur. Toplu konut, villa,
                  rezidans, ticari insaat ve altyapi projeleri dahil olmak uzere
                  blok-kat-daire hiyerarsisini ozellestirebilirsiniz.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) =>
                  toggleFaq(e.currentTarget)
                }
              >
                Sahadan (santiyeden) kullanilabiliyor mu?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Evet, tamamen responsive tasarima sahiptir. Santiye sefleri
                  telefonlarindan anlik ilerleme girisi yapabilir, fotografli
                  rapor olusturabilir ve bildirim alabilir.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) =>
                  toggleFaq(e.currentTarget)
                }
              >
                Ucretsiz deneme suresi var mi?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Platformumuzu yakindan tanimaniz icin detayli sunum ve demo
                  imkani sunuyoruz. Sunum talep formu uzerinden bize ulasin,
                  firmaniza ozel bir demo planlayalim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Projenizi dijitale tasimaya hazir misiniz?</h2>
          <p>
            Detayli sunum ile PeraOS&apos;un firmaniza nasil
            uyarlanabilecegini kesfedin.
          </p>
          <a href="#sunum-talep" className="btn-white">
            Detayli Sunum Talep Et &rarr;
          </a>
        </div>
      </section>

      <section className="contact" id="sunum-talep">
        <div className="contact-building">
          <svg
            width="300"
            height="400"
            viewBox="0 0 300 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: "var(--accent)" }}
          >
            <rect x="40" y="60" width="100" height="340" />
            <rect x="140" y="120" width="80" height="280" />
            <rect x="220" y="180" width="60" height="220" />
            <line x1="40" y1="120" x2="140" y2="120" />
            <line x1="40" y1="180" x2="220" y2="180" />
            <line x1="40" y1="240" x2="280" y2="240" />
            <line x1="40" y1="300" x2="280" y2="300" />
            <line x1="40" y1="340" x2="280" y2="340" />
            <rect x="55" y="75" width="15" height="12" rx="1" />
            <rect x="80" y="75" width="15" height="12" rx="1" />
            <rect x="110" y="75" width="15" height="12" rx="1" />
            <rect x="55" y="135" width="15" height="12" rx="1" />
            <rect x="80" y="135" width="15" height="12" rx="1" />
            <rect x="155" y="135" width="15" height="12" rx="1" />
            <rect x="185" y="135" width="15" height="12" rx="1" />
          </svg>
        </div>
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info reveal">
              <div className="section-label">Sunum Talep</div>
              <h2 className="section-title">
                Firmaniza ozel
                <br />
                detayli sunum alalim.
              </h2>
              <p className="section-desc">
                PeraOS&apos;un insaat projelerinize nasil deger katacagini
                gosteren detayli bir sunum hazirlayalim. Bilgilerinizi birakin,
                size ozel sunum ile donus yapalim.
              </p>
              <div style={{ marginTop: "40px" }}>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Mail size={18} color="var(--accent)" />
                  </div>
                  <div className="contact-detail-text">
                    <strong>E-posta</strong>info@peraos.com
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <MapPin size={18} color="var(--accent)" />
                  </div>
                  <div className="contact-detail-text">
                    <strong>Konum</strong>Istanbul, Turkiye
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form reveal">
              <h3>Sunum Talep Formu</h3>
              <p>
                Bilgilerinizi birakin, 24 saat icinde detayli sunum ile donus
                yapalim.
              </p>
              <form id="sunumForm" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Ad Soyad</label>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Adiniz Soyadiniz"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Firma</label>
                    <input
                      type="text"
                      id="fcompany"
                      placeholder="Firma adiniz"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>E-posta</label>
                    <input
                      type="email"
                      id="femail"
                      placeholder="ornek@firma.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input
                      type="tel"
                      id="fphone"
                      placeholder="05xx xxx xx xx"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Proje Tipi</label>
                  <select id="ftype">
                    <option value="">Seciniz</option>
                    <option>Toplu Konut</option>
                    <option>Villa Projesi</option>
                    <option>Rezidans</option>
                    <option>Ticari Insaat</option>
                    <option>Altyapi Projesi</option>
                    <option>Diger</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mesajiniz</label>
                  <textarea
                    id="fmessage"
                    placeholder="Projeniz hakkinda kisaca bilgi verin..."
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Sunum Talep Et &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img
                  src="/logo-white.svg"
                  alt="PeraOS"
                  style={{ height: "32px", width: "auto" }}
                />
              </a>
              <p className="footer-desc">
                Insaat ve proje yonetiminde dijital donusum platformu.
                Santiyeden masaya, tek cozum.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Platform</h4>
                <a href="#ozellikler">Ozellikler</a>
                <a href="#nasil-calisir">Nasil Calisir</a>
                <a href="#paketler">Paketler</a>
                <a href="#sss">SSS</a>
                <a href="#sunum-talep">Sunum Talep</a>
              </div>
              <div className="footer-col">
                <h4>Yasal</h4>
                <a onClick={() => openLegal("gizlilik")}>
                  Gizlilik Politikasi
                </a>
                <a onClick={() => openLegal("kullanim")}>
                  Kullanim Kosullari
                </a>
                <a onClick={() => openLegal("kvkk")}>KVKK</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 PeraOS. Tum haklari saklidir.</span>
            <span>
              Bir{" "}
              <a href="https://b2solve.io" target="_blank" rel="noreferrer">
                b2solve
              </a>{" "}
              urunudur.
            </span>
          </div>
        </div>
      </footer>

      <div
        className="legal-overlay"
        id="legalOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLegal();
        }}
      >
        <div className="legal-modal" id="legal-gizlilik" style={{ display: "none" }}>
          <button className="legal-close" onClick={closeLegal}>
            &#10005;
          </button>
          <h2>Gizlilik Politikasi</h2>
          <div className="legal-date">Son guncelleme: Mart 2026</div>
          <h3>1. Toplanan Veriler</h3>
          <p>
            PeraOS olarak, hizmetlerimizi sunabilmek icin gerekli olan minimum
            duzeyde kisisel veri toplamaktayiz. Bu veriler; ad-soyad, e-posta
            adresi, telefon numarasi, firma bilgileri ve proje detaylarini
            icerebilir.
          </p>
          <h3>2. Verilerin Kullanim Amaci</h3>
          <p>
            Toplanan veriler yalnizca sunum taleplerinin karsilanmasi, iletisim
            saglanmasi ve hizmet kalitesinin artirilmasi amaciyla
            kullanilmaktadir.
          </p>
          <h3>3. Veri Guvenligi</h3>
          <p>
            Tum verileriniz SSL sertifikasi ile sifreli olarak iletilir ve
            guvenli sunucularda saklanir.
          </p>
          <h3>4. Iletisim</h3>
          <p>
            Gizlilik politikamiz hakkinda sorulariniz icin info@peraos.com
            adresinden bize ulasabilirsiniz.
          </p>
        </div>
        <div className="legal-modal" id="legal-kullanim" style={{ display: "none" }}>
          <button className="legal-close" onClick={closeLegal}>
            &#10005;
          </button>
          <h2>Kullanim Kosullari</h2>
          <div className="legal-date">Son guncelleme: Mart 2026</div>
          <h3>1. Hizmet Tanimi</h3>
          <p>
            PeraOS, insaat ve proje yonetimi alaninda bulut tabanli yazilim
            hizmeti (SaaS) sunan bir platformdur.
          </p>
          <h3>2. Hesap Sorumlulugu</h3>
          <p>
            Kullanicilar, hesap bilgilerinin gizliliginden ve hesaplari
            uzerinden gerceklestirilen tum islemlerden sorumludur.
          </p>
          <h3>3. Fikri Mulkiyet</h3>
          <p>
            PeraOS platformu, tasarimi, logosu ve yazilimi b2solve tarafindan
            gelistirilmis olup tum fikri mulkiyet haklari saklidir.
          </p>
          <h3>4. Sorumluluk Siniri</h3>
          <p>
            PeraOS, platformun kesintisiz veya hatasiz calisacagini garanti
            etmez.
          </p>
        </div>
        <div className="legal-modal" id="legal-kvkk" style={{ display: "none" }}>
          <button className="legal-close" onClick={closeLegal}>
            &#10005;
          </button>
          <h2>KVKK Aydinlatma Metni</h2>
          <div className="legal-date">Son guncelleme: Mart 2026</div>
          <h3>Veri Sorumlusu</h3>
          <p>
            6698 sayili KVKK kapsaminda, kisisel verileriniz veri sorumlusu
            sifatiyla b2solve / PeraOS tarafindan islenmektedir.
          </p>
          <h3>Islenen Kisisel Veriler</h3>
          <p>
            Kimlik bilgileri (ad, soyad), iletisim bilgileri (e-posta, telefon),
            firma bilgileri ve proje detaylari islenmektedir.
          </p>
          <h3>Haklariniz</h3>
          <p>
            KVKK&apos;nin 11. maddesi kapsaminda; kisisel verilerinizin islenip
            islenmedigini ogrenme, duzeltilmesini veya silinmesini talep etme
            haklarina sahipsiniz. Basvuru icin: info@peraos.com
          </p>
        </div>
      </div>
    </>
  );
}
