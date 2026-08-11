import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
const siteUrl="https://truda0124.github.io/ji-yiru-teacher-portfolio";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"紀怡如｜教師個人資料",template:"%s｜紀怡如老師"},description:"紀怡如老師的藝術教育、設計教學、專題課程與專業成長紀錄。",openGraph:{title:"紀怡如｜教師個人資料",description:"讓設計走進生活，讓學習回應環境。",url:siteUrl,images:[{url:`${siteUrl}/og.png`,width:1680,height:945}]},twitter:{card:"summary_large_image",images:[`${siteUrl}/og.png`]}};
const nav=[["/about","關於老師"],["/teaching","教學理念"],["/portfolio","課程成果"],["/growth","專業成長"]];
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body><header className="site-header"><Link className="brand" href="/"><span>紀</span><b>紀怡如｜教師個人資料</b></Link><nav aria-label="主要導覽">{nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav><Link className="menu-cta" href="/portfolio">精選課程</Link></header>{children}<footer><div><strong>紀怡如｜教師個人資料</strong><span>藝術教育・設計教學・專題實作</span></div><p>網站內容依教學評鑑與專業檔案整理；個人證件號碼及敏感資料未公開。</p></footer></body></html>}
