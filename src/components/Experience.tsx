import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import kapitalSocialMedia from "figma:asset/5bcea6570c18caa33fd2896c12245f3283e5980d.png";
import kapitalWebsite from "figma:asset/26139ff7d90c00e8dcd3b1781e66ce4f912054cd.png";
import pentakodDashboard from "figma:asset/97dd938085ceee74e41656925205c790bb29dd58.png";
import pentakodSearchConsole from "figma:asset/5524b4b2d116741e755f22db5d6b8dc2c13efb81.png";
import pentakodLogo from "figma:asset/e978a4700c426acc023519829da32144a9fca003.png";
import egeHospitalSurgery from "figma:asset/866198de5a6aca4431c36c9913ccf98511f00e16.png";
import egeHospitalSocial from "figma:asset/620f627ed9b8b7cb7ac993c0222fa36902ac699d.png";
import egeHospitalLogo from "figma:asset/ec4dac4e91cfb7e79c90313752a2dcbccbf4ee18.png";
import kapitalBankLogo from "figma:asset/837f62105f4c73cbeefdfd366cb738a2742e0da2.png";
import infuseLogo from "figma:asset/9bc0446af417ccac81bc0eb59b465ed12414791b.png";
import cleanArtLogo from "figma:asset/3c6b472a2fe1ffc84fd681d76e49e686c3d8d158.png";
import cleanArtMobile from "figma:asset/ad1dfef369070ef9052acd0f13aaaf6f870dfea8.png";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration?: string;
  logoUrl?: string;
  description: string[];
  metrics?: { label: string; value: string }[];
  imageUrl?: string;
  images?: string[];
  color: string;
  isRemote?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: "kapital",
    company: "KAPITAL BANK",
    role: "Digital Marketing Intern",
    duration: "3 ay",
    logoUrl: kapitalBankLogo,
    description: [
      "Sosial media postlarının hazırlanmasına dəstək, partner kampaniyalarında iştirak",
      "Videolar və vizual kontent yaradılmasına qatılmaq; bəzi videolarda marka üzü kimi görünmək",
      "Birbank Biznes-in sosial media və Telegram kanallarında gündəlik paylaşım dəstəyi",
      "Veb saytın SEO optimizasiyası üçün kommunikasiya və kontent uyğunluğu",
    ],
    images: [kapitalSocialMedia, kapitalWebsite],
    color: "pink",
  },
  {
    id: "pentakod",
    company: "PENTAKOD",
    role: "Digital Marketing / SEO Support",
    logoUrl: pentakodLogo,
    description: [
      "Web sayt layihələrinin SEO optimizasiyasını davamlı tənzimləmək",
      "Müştərilərə kontent dəstəyi vermək, sosial media postları və sayt mətnləri hazırlamaq",
      "SEO və kontent uyğunluğu üçün müştəri ilə kommunikasiya aparmaq",
    ],
    images: [pentakodDashboard, pentakodSearchConsole],
    color: "purple",
  },
  {
    id: "ege",
    company: "EGE HOSPITAL",
    role: "Digital Marketing & PR Support",
    logoUrl: egeHospitalLogo,
    description: [
      "Sosial media postlarının hazırlanmasına dəstək; izləyici sayının 35 mindən 57 minə qədər artmasına qatqı",
      "Regional layihələrdə, marketing və PR fəaliyyətlərində iştirak (Şirvan)",
      "Rəqəmsal platformalarda həkimlərin tanıdılması və saytın görünürlüğünün artırılması",
      '"Təbib-in Vətən Yaxşı" layihəsi üçün kontent və strategiya dəstəyi',
    ],
    metrics: [{ label: "İzləyici Artımı", value: "+63%" }],
    images: [egeHospitalSurgery, egeHospitalSocial],
    color: "blue",
  },
  {
    id: "infuse",
    company: "INFUSE",
    role: "Data Research Specialist",
    isRemote: true,
    logoUrl: infuseLogo,
    description: [
      "Müxtəlif mənbələrdən gələn dataları araşdırmaq və yoxlamaq",
      "Datalardan analitik insight-lar çıxarmaq",
      "Remote şəraitdə müstəqil işləyərək layihələrin keyfiyyətini təmin etmək",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    color: "cyan",
  },
  {
    id: "cleantart",
    company: "CLEANTART",
    role: "Digital Marketing & Advertising Support",
    logoUrl: cleanArtLogo,
    description: [
      "Sosial media postlarının hazırlanmasına və paylaşılmasına dəstək",
      "Reklam kampaniyalarını izləmək və analiz etmək",
      "Kontent və hədəf optimizasiyası ilə reklam performansını artırmaq",
    ],
    metrics: [
      { label: "CPA", value: "$0.50" },
      { label: "CTR", value: "2-3%" },
      { label: "Reach", value: "25K" },
      { label: "Engagement", value: "5-7%" },
    ],
    images: [cleanArtMobile],
    color: "green",
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const colorClasses = {
    pink: "border-pink-500/30 from-pink-500/10 to-purple-500/10 text-pink-500",
    purple:
      "border-purple-500/30 from-purple-500/10 to-pink-500/10 text-purple-400",
    blue: "border-blue-500/30 from-blue-500/10 to-cyan-500/10 text-blue-400",
    cyan: "border-cyan-500/30 from-cyan-500/10 to-blue-500/10 text-cyan-400",
    green:
      "border-green-500/30 from-green-500/10 to-teal-500/10 text-green-400",
  };

  return (
    <div
      className={`fade-in-up transition-all duration-700 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content Card */}
        <div className={isEven ? "md:text-right" : ""}>
          <div
            className={`bg-gradient-to-r ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[1]} border ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[0]} backdrop-blur-md p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
          >
            {/* Animated Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <div
              className={`flex items-center mb-6 ${isEven ? "md:justify-end" : "justify-start"}`}
            >
              <div
                className={`w-20 h-20 rounded-2xl ${isEven ? "mr-4" : "mr-4"} overflow-hidden bg-white flex items-center justify-center border ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[0]} shadow-lg`}
              >
                {experience.logoUrl ? (
                  <img
                    src={experience.logoUrl}
                    alt={`${experience.company} logo`}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <div
                    className={`w-16 h-16 ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[2]} rounded-xl flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {experience.company.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h3
                  className={`text-3xl font-black ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[2]}`}
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  {experience.company}
                </h3>
                <p
                  className="text-gray-400 font-semibold text-lg"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {experience.role}
                </p>
                {experience.duration && (
                  <p className="text-cyan-400 font-bold">
                    {experience.duration}
                  </p>
                )}
                {experience.isRemote && (
                  <p className="text-green-400 font-bold">
                    (Remote)
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 text-lg">
              {experience.description.map((desc, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl bg-gradient-to-r ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[1]} border ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[0]} relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] animate-pulse"
                    style={{
                      animation: "data-flow 2s linear infinite",
                    }}
                  />
                  <p className="relative z-10">• {desc}</p>
                </div>
              ))}
            </div>

            {experience.metrics && (
              <div className="mt-6">
                {experience.metrics.length === 1 ? (
                  <div className="p-4 backdrop-blur-md bg-black/50 border border-pink-500/30 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">
                        {experience.metrics[0].label}:
                      </span>
                      <span
                        className="text-2xl font-black bg-gradient-to-r from-pink-500 to-green-400 bg-clip-text text-transparent"
                        style={{
                          fontFamily: "Orbitron, monospace",
                        }}
                      >
                        {experience.metrics[0].value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 mt-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-green-400 h-3 rounded-full"
                        style={{ width: "63%" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {experience.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="backdrop-blur-md bg-black/50 border border-pink-500/30 p-3 rounded-xl text-center"
                      >
                        <div
                          className="text-xl font-black bg-gradient-to-r from-pink-500 to-green-400 bg-clip-text text-transparent"
                          style={{
                            fontFamily: "Orbitron, monospace",
                          }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Images */}
        <div className="space-y-6">
          {experience.images ? (
            <>
              <div
                className={`h-64 rounded-3xl overflow-hidden border ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[0]} shadow-lg bg-gray-900 group`}
              >
                <img
                  src={experience.images[0]}
                  alt={`${experience.company} sosial media kampaniyaları`}
                  className="w-full h-64 object-contain object-center group-hover:scale-105 transition-all duration-700 filter brightness-110 contrast-110 saturate-110 hover:brightness-125"
                />
              </div>

              <div
                className={`h-80 rounded-3xl overflow-hidden border ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[0]} shadow-lg bg-gray-900 group`}
              >
                <img
                  src={experience.images[1]}
                  alt={`${experience.company} web sayt layihəsi`}
                  className="w-full h-80 object-contain object-center group-hover:scale-105 transition-all duration-700 filter brightness-110 contrast-110 saturate-110 hover:brightness-125"
                />
              </div>
            </>
          ) : (
            <div
              className={`h-64 rounded-3xl overflow-hidden border ${colorClasses[experience.color as keyof typeof colorClasses].split(" ")[0]} shadow-lg bg-gray-900 group`}
            >
              <ImageWithFallback
                src={experience.imageUrl || ""}
                alt={`${experience.company} work environment`}
                className="w-full h-64 object-cover object-center group-hover:scale-110 transition-all duration-700 filter brightness-110 contrast-110 saturate-110 hover:brightness-125"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-in-up">
          <h2
            className="text-6xl md:text-8xl font-black mb-8"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:400%_400%] animate-pulse">
              İŞ TƏCRÜBƏSİ
            </span>
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 via-blue-500 to-green-400 transform -translate-x-1/2 hidden md:block" />

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes data-flow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}