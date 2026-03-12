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
      "E-posta uygulamanız açılacak. Talebinizi gönderdikten sonra en kısa sürede dönüş yapacağız!"
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
              <a href="#ozellikler">Özellikler</a>
            </li>
            <li>
              <a href="#nasil-calisir">Nasıl Çalışır</a>
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
              <div className="hero-badge">İnşaat & Proje Yönetimi</div>
              <h1>
                Şantiyeden masaya
                <br />
                <em>tek platform.</em>
              </h1>
              <p className="hero-desc">
                Projelerinizi blok ve kat bazlı takip edin, şantiye süreçlerini
                dijitalleştirin, ekibinizle gerçek zamanlı koordinasyon sağlayın.
              </p>
              <div className="hero-actions">
                <a href="#sunum-talep" className="btn-primary">
                  Detaylı Sunum Talep Et{" "}
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
                  Özellikleri Keşfet
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
                      <div className="dash-sl">İlerleme</div>
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
                  <div className="dash-pl">Tamamlandı</div>
                </div>
                <div className="dash-prog">
                  <div className="dash-prog-title">Blok İlerleme</div>
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
                  <div className="dash-nt">Son Güncellemeler</div>
                  <div className="dash-ni">
                    <div className="dash-nd"></div>
                    <div className="dash-nx">B Blok 3.Kat tamamlandı</div>
                  </div>
                  <div className="dash-ni">
                    <div className="dash-nd"></div>
                    <div className="dash-nx">A Blok sıva başladı</div>
                  </div>
                  <div className="dash-ni">
                    <div className="dash-nd"></div>
                    <div className="dash-nx">3 yeni satış kaydı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>%40</h3>
              <p>Daha hızlı proje takibi</p>
            </div>
            <div className="hero-stat">
              <h3>Blok+Kat</h3>
              <p>Bazlı detaylı izleme</p>
            </div>
            <div className="hero-stat">
              <h3>7/24</h3>
              <p>Gerçek zamanlı erişim</p>
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
            <div className="section-label">Modüller</div>
            <h2 className="section-title">
              İnşaat yönetiminin her adımı
              <br />
              tek ekranda.
            </h2>
            <p className="section-desc">
              Proje planlama, şantiye takibi, satış yönetimi ve ekip
              koordinasyonunu tek platformda birleştirin.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div className="feature-icon">
                <HardHat size={24} color="var(--accent)" />
              </div>
              <h3>Şantiye Yönetimi</h3>
              <p>
                Blok ve kat bazlı ilerleme takibi, iş programı, günlük şantiye
                raporları ve puantaj yönetimi tek ekranda.
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
                Tüm projelerinizi tek panelden yönetin. Villa, rezidans veya
                toplu konut — her proje tipine uyumlu yapı.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div className="feature-icon">
                <Wallet size={24} color="var(--accent)" />
              </div>
              <h3>Satış & CRM</h3>
              <p>
                Daire/villa satış süreçleri, müşteri takibi, teklif yönetimi ve
                ödeme planlarını entegre biçimde yönetin.
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
                Taşeron, mühendis ve şantiye ekibini tek platformda buluşturun.
                Görev atama ve ilerleme bildirimleri.
              </p>
            </div>
            <div className="feature-card reveal">
              <div className="corner-tl"></div>
              <div className="corner-br"></div>
              <div className="feature-icon">
                <Smartphone size={24} color="var(--accent)" />
              </div>
              <h3>Mobil Erişim</h3>
              <p>
                Şantiyeden, ofisten veya sahadan — her cihazdan kesintisiz
                erişim. Responsive tasarım, her ekranda çalışır.
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
                Proje bazlı maliyet analizi, ilerleme grafikleri, satış
                performansı ve özelleştirilebilir raporlar.
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
              Nasıl Çalışır
            </div>
            <h2 className="section-title">4 Adımda Dijital Dönüşüm</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Projenizi dakikalar içinde dijitalleştirin. Kurulum, eğitim derdi
              yok — hemen başlayın.
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
                  <h3>Proje Oluşturun</h3>
                  <p>
                    Proje tipini seçin, blok ve kat yapısını tanımlayın.
                    Dakikalar içinde hazır.
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
                    Şantiye şefi, mühendis, satış ekibi — herkese rol ve yetki
                    tanıyın.
                  </p>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-step-num">03</div>
                <div className="flow-step-card">
                  <div className="flow-step-icon">
                    <ClipboardCheck size={28} color="var(--accent)" />
                  </div>
                  <h3>Takip Başlasın</h3>
                  <p>
                    İlerleme girin, raporlar oluşturun, satış durumunu
                    güncelleyin.
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
              Sektör profesyonelleri
              <br />
              PeraOS&apos;u tercih ediyor.
            </h2>
            <p className="section-desc">
              İnşaat ve proje yönetiminde dijital dönüşüm sağlayan firmalardan
              geri bildirimler.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="quote-mark">&ldquo;</div>
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">
                &ldquo;Şantiye takibinde Excel&apos;den kurtulmamızı sağladı.
                Blok ve kat bazlı ilerleme sistemi tam ihtiyacımız olan
                şeydi.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AK</div>
                <div>
                  <div className="testimonial-name">Ahmet K.</div>
                  <div className="testimonial-role">
                    Proje Müdürü — Yapı İnşaat
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="quote-mark">&ldquo;</div>
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">
                &ldquo;Satış ekibi ile şantiye ekibini aynı platformda
                buluşturmak büyük avantaj sağladı. İletişim kopuklukları
                bitti.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SY</div>
                <div>
                  <div className="testimonial-name">Selin Y.</div>
                  <div className="testimonial-role">
                    Genel Müdür — Prestij Konut
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="quote-mark">&ldquo;</div>
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">
                &ldquo;Villa projelerimizi PeraOS üzerinden yönetmeye başladık.
                Mobil erişim sayesinde sahada anlık güncellemeler
                yapabiliyoruz.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MÇ</div>
                <div>
                  <div className="testimonial-name">Murat Ç.</div>
                  <div className="testimonial-role">
                    Şantiye Şefi — Doruk İnşaat
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
              İhtiyacınıza uygun planı seçin.
            </h2>
            <p className="section-desc">
              Her ölçekte inşaat firması için esnek fiyatlandırma. Büyüdükçe
              ölçeklendirin.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal">
              <div className="pricing-name">Başlangıç</div>
              <div className="pricing-price">Teklif Alın</div>
              <div className="pricing-desc">
                Küçük ölçekli firmalar için temel özellikler. Proje başına
                ücretlendirilir.
              </div>
              <ul className="pricing-features">
                <li>Proje başına ücretlendirme</li>
                <li>5 kullanıcı</li>
                <li>Blok & kat takibi</li>
                <li>Günlük şantiye raporu</li>
                <li>Puantaj yönetimi</li>
                <li>E-posta desteği</li>
              </ul>
              <a href="#sunum-talep" className="pricing-cta pricing-cta-outline">
                Sunum Talep Et
              </a>
            </div>
            <div className="pricing-card featured reveal">
              <div className="pricing-name">Profesyonel</div>
              <div className="pricing-price">Teklif Alın</div>
              <div className="pricing-desc">
                Büyüyen firmalar için gelişmiş özellikler. Proje başına
                ücretlendirilir.
              </div>
              <ul className="pricing-features">
                <li>Proje başına ücretlendirme</li>
                <li>15 kullanıcı</li>
                <li>Satış & CRM modulu</li>
                <li>Raporlama & analiz</li>
                <li>Ekip koordinasyonu</li>
                <li>Puantaj yönetimi</li>
                <li>Mobil uygulama (iOS & Android) — yakında</li>
                <li>Öncelikli destek</li>
              </ul>
              <a href="#sunum-talep" className="pricing-cta pricing-cta-filled">
                Sunum Talep Et
              </a>
            </div>
            <div className="pricing-card reveal">
              <div className="pricing-name">Kurumsal</div>
              <div className="pricing-price">Özel Fiyat</div>
              <div className="pricing-desc">
                Büyük firmalar için tam kapsamlı çözüm. Vaziyet planı çizimi
                dahil.
              </div>
              <ul className="pricing-features">
                <li>Sınırsız proje & kullanıcı</li>
                <li>Vaziyet planı çizim hizmeti</li>
                <li>Tüm modüller dahil</li>
                <li>API entegrasyonu</li>
                <li>Özel raporlama</li>
                <li>Çoklu firma yönetimi</li>
                <li>Mobil uygulama (iOS & Android) — yakında</li>
                <li>Özel eğitim & onboarding</li>
                <li>7/24 öncelikli destek</li>
              </ul>
              <a
                href="#sunum-talep"
                className="pricing-cta pricing-cta-outline"
              >
                İletişime Geçin
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
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
            <p className="section-desc">
              PeraOS hakkında merak edilenlerin yanıtları.
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
                PeraOS&apos;u kullanmak için kurulum gerekiyor mu?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Hayır, PeraOS tamamen bulut tabanlıdır. Herhangi bir kurulum
                  veya indirme gerektirmez. Tarayıcınızdan anında erişim
                  sağlayabilirsiniz.
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
                Kaç proje ve kullanıcı ekleyebilirim?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Başlangıç ve Profesyonel paketlerde proje basina
                  ücretlendirme yapılır, ihtiyacınız kadar proje
                  ekleyebilirsiniz. Kurumsal pakette ise sınırsız proje ve
                  kullanıcı kapasitesi sunulmaktadır.
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
                Verilerim güvende mi?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Kesinlikle. Tüm verileriniz SSL ile şifreli iletilir ve
                  güvenli bulut sunucularda saklanır. Rol bazlı yetkilendirme
                  ile herkes yalnızca yetkisi olan veriyi görebilir. KVKK uyumlu
                  altyapı ile çalışıyoruz.
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
                  tanımlayabilirsiniz. Excel veya diğer kaynaklardan veri
                  aktarımı için ekibimiz destek sağlar.
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
                  rezidans, ticari inşaat ve altyapı projeleri dahil olmak üzere
                  blok-kat-daire hiyerarşisini özelleştirebilirsiniz.
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
                Sahadan (şantiyeden) kullanılabiliyor mu?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Evet, tamamen responsive tasarıma sahiptir. Şantiye şefleri
                  telefonlarından anlık ilerleme girişi yapabilir, fotoğraflı
                  rapor oluşturabilir ve bildirim alabilir.
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
                Ücretsiz deneme süresi var mı?
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>
                  Platformumuzu yakından tanımanız için detaylı sunum ve demo
                  imkanı sunuyoruz. Sunum talep formu üzerinden bize ulaşın,
                  firmanıza özel bir demo planlayalım.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Projenizi dijitale taşımaya hazır mısınız?</h2>
          <p>
            Detaylı sunum ile PeraOS&apos;un firmanıza nasıl
            uyarlanabileceğini keşfedin.
          </p>
          <a href="#sunum-talep" className="btn-white">
            Detaylı Sunum Talep Et &rarr;
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
                Firmanıza özel
                <br />
                detaylı sunum alalım.
              </h2>
              <p className="section-desc">
                PeraOS&apos;un inşaat projelerinize nasıl değer katacağını
                gösteren detaylı bir sunum hazırlayalım. Bilgilerinizi bırakın,
                size özel sunum ile dönüş yapalım.
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
                    <strong>Konum</strong>İstanbul, Türkiye
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form reveal">
              <h3>Sunum Talep Formu</h3>
              <p>
                Bilgilerinizi bırakın, 24 saat içinde detaylı sunum ile dönüş
                yapalim.
              </p>
              <form id="sunumForm" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Ad Soyad</label>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Adınız Soyadınız"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Firma</label>
                    <input
                      type="text"
                      id="fcompany"
                      placeholder="Firma adınız"
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
                    <option value="">Seçiniz</option>
                    <option>Toplu Konut</option>
                    <option>Villa Projesi</option>
                    <option>Rezidans</option>
                    <option>Ticari İnşaat</option>
                    <option>Altyapı Projesi</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mesajınız</label>
                  <textarea
                    id="fmessage"
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
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
                İnşaat ve proje yönetiminde dijital dönüşüm platformu.
                Şantiyeden masaya, tek cozum.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Platform</h4>
                <a href="#ozellikler">Özellikler</a>
                <a href="#nasil-calisir">Nasıl Çalışır</a>
                <a href="#paketler">Paketler</a>
                <a href="#sss">SSS</a>
                <a href="#sunum-talep">Sunum Talep</a>
              </div>
              <div className="footer-col">
                <h4>Yasal</h4>
                <a onClick={() => openLegal("gizlilik")}>
                  Gizlilik Politikası
                </a>
                <a onClick={() => openLegal("kullanim")}>
                  Kullanım Koşulları
                </a>
                <a onClick={() => openLegal("kvkk")}>KVKK</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 PeraOS. Tüm hakları saklıdır.</span>
            <span>
              Bir{" "}
              <a href="https://b2solve.io" target="_blank" rel="noreferrer">
                b2solve
              </a>{" "}
              ürünüdür.
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
          <h2>Gizlilik Politikası</h2>
          <div className="legal-date">Son güncelleme: Mart 2026</div>
          <h3>1. Toplanan Veriler</h3>
          <p>
            PeraOS olarak, hizmetlerimizi sunabilmek için gerekli olan minimum
            düzeyde kişisel veri toplamaktayız. Bu veriler; ad-soyad, e-posta
            adresi, telefon numarası, firma bilgileri ve proje detaylarını
            içerebilir.
          </p>
          <h3>2. Verilerin Kullanım Amacı</h3>
          <p>
            Toplanan veriler yalnızca sunum taleplerinin karşılanması, iletişim
            sağlanması ve hizmet kalitesinin artırılması amacıyla
            kullanılmaktadır.
          </p>
          <h3>3. Veri Güvenliği</h3>
          <p>
            Tüm verileriniz SSL sertifikası ile şifreli olarak iletilir ve
            güvenli sunucularda saklanır.
          </p>
          <h3>4. İletişim</h3>
          <p>
            Gizlilik politikamız hakkında sorularınız için info@peraos.com
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
        <div className="legal-modal" id="legal-kullanim" style={{ display: "none" }}>
          <button className="legal-close" onClick={closeLegal}>
            &#10005;
          </button>
          <h2>Kullanım Koşulları</h2>
          <div className="legal-date">Son güncelleme: Mart 2026</div>
          <h3>1. Hizmet Tanımı</h3>
          <p>
            PeraOS, inşaat ve proje yönetimi alanında bulut tabanlı yazılım
            hizmeti (SaaS) sunan bir platformdur.
          </p>
          <h3>2. Hesap Sorumluluğu</h3>
          <p>
            Kullanıcılar, hesap bilgilerinin gizliliğinden ve hesapları
            üzerinden gerçekleştirilen tüm işlemlerden sorumludur.
          </p>
          <h3>3. Fikri Mülkiyet</h3>
          <p>
            PeraOS platformu, tasarımı, logosu ve yazılımı b2solve tarafından
            geliştirilmiş olup tüm fikri mülkiyet hakları saklıdır.
          </p>
          <h3>4. Sorumluluk Sınırı</h3>
          <p>
            PeraOS, platformun kesintisiz veya hatasız çalışacağını garanti
            etmez.
          </p>
        </div>
        <div className="legal-modal" id="legal-kvkk" style={{ display: "none" }}>
          <button className="legal-close" onClick={closeLegal}>
            &#10005;
          </button>
          <h2>KVKK Aydınlatma Metni</h2>
          <div className="legal-date">Son güncelleme: Mart 2026</div>
          <h3>Veri Sorumlusu</h3>
          <p>
            6698 sayılı KVKK kapsamında, kişisel verileriniz veri sorumlusu
            sıfatıyla b2solve / PeraOS tarafından işlenmektedir.
          </p>
          <h3>İşlenen Kişisel Veriler</h3>
          <p>
            Kimlik bilgileri (ad, soyad), iletişim bilgileri (e-posta, telefon),
            firma bilgileri ve proje detayları işlenmektedir.
          </p>
          <h3>Haklarınız</h3>
          <p>
            KVKK&apos;nın 11. maddesi kapsamında; kişisel verilerinizin işlenip
            işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme
            haklarına sahipsiniz. Başvuru için: info@peraos.com
          </p>
        </div>
      </div>
    </>
  );
}
