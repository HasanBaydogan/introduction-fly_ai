"use client";
import { SOCIALS } from '@/constants'
// ...existing code...
import Link from 'next/link'
import React from 'react'
import { useLanguage } from './LanguageProvider'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-center md:items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <img src="/FLY_AI_logo_new.png" alt="FLY AI" width={250} height={40} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {t.footer.columns.map((columns, idx) => (
              <FooterColumn title={columns.title} key={columns.title + '-' + idx}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, linkIdx: number) => {
                    // Define proper navigation URLs for footer links
                    const getFooterLinkHref = (linkText: string) => {
                      switch (linkText.toLowerCase()) {
                        case 'about':
                        case 'hakkımızda':
                          return '#ozellikler';
                        case 'technical documentation':
                        case 'teknik dokümantasyon':
                          return '#akis';
                        case 'privacy policy':
                        case 'gizlilik politikası':
                          return '/privacy-policy';
                        case 'terms of use':
                        case 'kullanım şartları':
                          return '/terms-of-use';
                        case 'faq':
                        case 'sss':
                          return '#sss';
                        case 'blog':
                          return '/blog';
                        case 'api v1':
                          return '/api-docs';
                        case 'sürüm notları':
                        case 'release notes':
                          return '/release-notes';
                        default:
                          return '/';
                      }
                    };
                    
                    return (
                      <Link href={getFooterLinkHref(link)} key={link + '-' + linkIdx}>
                        {link}
                      </Link>
                    );
                  })}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={t.footer.contactTitle} key="footer-contact-info">
                {t.footer.contactLinks.map((link, idx: number) => (
                  <div
                    key={link.label + '-' + idx}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </div>   
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={t.footer.socialTitle} key="footer-socials">
                <ul className="regular-14 flex gap-4 text-gray-30 ">
                  {SOCIALS.links.map((link, idx) => {
                    // Define proper social media URLs
                    const getSocialHref = (iconPath: string) => {
                      if (iconPath.includes('linkedin')) {
                        return 'https://linkedin.com/company/flyai';
                      } else if (iconPath.includes('nextsosyal')) {
                        return 'https://nextsosyal.com';
                      } else if (iconPath.includes('instagram')) {
                        return 'https://instagram.com/flyai';
                      } else if (iconPath.includes('twitter')) {
                        return 'https://twitter.com/flyai';
                      } else if (iconPath.includes('youtube')) {
                        return 'https://youtube.com/@flyai';
                      } else if (iconPath.includes('wordpress')) {
                        return 'https://blog.flyai.tr';
                      }
                      return '#';
                    };

                    return (
                      <Link 
                        href={getSocialHref(link)} 
                        key={link + '-' + idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={link} alt="social media" width={24} height={24} style={{ width: 'auto', height: 'auto' }} />
                      </Link>
                    );
                  })}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">{t.footer.rights}</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer