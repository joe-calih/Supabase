"use client"

import Link from "next/link"
import { ChevronDown, Search, Telescope, Heart } from "lucide-react"

export function DocsHeader() {
  return (
    <div className="hidden lg:sticky w-full lg:flex top-0 left-0 right-0 z-50">
      <nav aria-label="top bar" className="w-full z-40 flex flex-col subhighlight-border backdrop-blur-sm backdrop-filter bg-default/75 border-b border-border">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-5 lg:pl-10 lg:pr-8">
          
          {/* Logo & Desktop Nav */}
          <div className="hidden lg:flex h-full items-center justify-center gap-4">
            
            {/* Sprint Logo & Home Link */}
            <a className="flex items-center gap-2" aria-label="Sprint home" href="/">
              <svg width="23" height="24" viewBox="0 0 109 113" fill="none" aria-hidden="true">
                <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#nav-paint0)"></path>
                <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                <defs>
                  <linearGradient id="nav-paint0" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#249361"></stop>
                    <stop offset="1" stopColor="#3ECF8E"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-semibold text-foreground">Sprint</span>
            </a>

            <div className="h-4 w-px bg-border"></div>

            {/* Supabase Docs Branding */}
            <Link className="flex shrink-0 items-center gap-1.5 w-fit" href="/docs">
              <span className="flex shrink-0 items-center gap-1.5 w-fit">

                <span className="font-mono text-sm font-medium text-primary mb-px">DOCS</span>
              </span>
            </Link>

            <div className="flex relative gap-2 justify-start items-end w-full h-full">
              <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex-1 items-center w-full flex justify-start h-full">
                <div style={{ position: "relative" }}>
                  <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center px-6 space-x-2 h-16" dir="ltr">
                    
                    {/* Start Link */}
                    <li className="text-sm relative h-full flex items-center">
                      <Link
                        className="inline-flex items-center justify-center text-sm transition-colors focus:outline-hidden focus:bg-accent focus:text-accent-foreground group w-max p-2 bg-transparent border-0 border-b-2 border-transparent font-normal rounded-none text-foreground-light hover:bg-transparent hover:text-foreground h-full shadow-none"
                        href="/docs/guides/getting-started"
                      >
                        Start
                      </Link>
                    </li>

                    {/* Products Dropdown */}
                    <li className="text-sm relative h-full flex items-center">
                      <div className="group/dropdown relative h-full flex items-center">
                        <button
                          className="group inline-flex items-center justify-center text-sm transition-colors focus:outline-hidden focus:bg-accent focus:text-accent-foreground w-max p-2 bg-transparent border-0 border-b-2 border-transparent font-normal rounded-none text-foreground-light hover:bg-transparent hover:text-foreground h-full shadow-none cursor-pointer"
                        >
                          Products
                          <ChevronDown className="relative top-px ml-1 h-3 w-3 transition duration-200 group-hover/dropdown:rotate-180" aria-hidden="true" />
                        </button>
                        
                        <div className="invisible absolute left-0 top-full w-64 -translate-x-1/4 pt-2 opacity-0 transition-all group-hover/dropdown:visible group-hover/dropdown:opacity-100 z-50">
                          <div className="border border-border bg-popover text-popover-foreground shadow-xl rounded-md p-1 overflow-hidden bg-background">
                            <div className="p-1">
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/database/overview">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.99915C2.5 2.17072 3.17157 1.49915 4 1.49915H12C12.8284 1.49915 13.5 2.17072 13.5 2.99915V4.99915C13.5 5.53212 13.222 6.00017 12.8032 6.26623V9.73377C13.222 9.99983 13.5 10.4679 13.5 11.0009V13.0009C13.5 13.8293 12.8284 14.5009 12 14.5009H4C3.17157 14.5009 2.5 13.8293 2.5 13.0009V11.0009C2.5 10.4615 2.78461 9.98872 3.21183 9.72437V6.27563C2.78461 6.01128 2.5 5.53845 2.5 4.99915V2.99915ZM12.0158 5.4989H3.98422C3.71538 5.49057 3.5 5.27001 3.5 4.99915V2.99915C3.5 2.723 3.72386 2.49915 4 2.49915H12C12.2761 2.49915 12.5 2.723 12.5 2.99915V4.99915C12.5 5.27001 12.2846 5.49057 12.0158 5.4989ZM4.21183 6.49915V9.4989H11.8032V6.49915H4.21183ZM4 10.5009C3.72386 10.5009 3.5 10.7247 3.5 11.0009V13.0009C3.5 13.277 3.72386 13.5009 4 13.5009H12C12.2761 13.5009 12.5 13.277 12.5 13.0009V11.0009C12.5 10.7247 12.2761 10.5009 12 10.5009H4Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Database</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/auth">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.49414 9.97461H8.49414M3.49414 9.97461V11.9746H8.49414V9.97461M3.49414 9.97461V7.97461H8.49414V9.97461M10 5V3C10 1.89543 9.10457 1 8 1C6.89543 1 6 1.89543 6 3V5M3.47266 7L3.47266 12C3.47266 13.1046 4.36809 14 5.47266 14H10.4727C11.5772 14 12.4727 13.1046 12.4727 12V7C12.4727 5.89543 11.5772 5 10.4727 5L5.47266 5C4.36809 5 3.47266 5.89543 3.47266 7Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                                </svg>
                                <span className="flex-1">Auth</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/storage">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.9997 7.50869V5.60119L9.38151 2.00024H3.99967C3.44739 2.00024 2.99967 2.44796 2.99967 3.00024V5.99976M12.9645 5.58447L9.38004 2L9.38004 4.58447C9.38004 5.13676 9.82776 5.58447 10.38 5.58447L12.9645 5.58447ZM4.44135 5.99976H2.97363C2.42135 5.99976 1.97363 6.44747 1.97363 6.99976V11.9998C1.97363 13.1043 2.86906 13.9998 3.97363 13.9998H11.9736C13.0782 13.9998 13.9736 13.1043 13.9736 11.9998V8.50869C13.9736 7.95641 13.5259 7.50869 12.9736 7.50869H6.79396C6.53157 7.50869 6.27968 7.40556 6.09263 7.22153L5.14268 6.28692C4.95563 6.10289 4.70375 5.99976 4.44135 5.99976Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                                </svg>
                                <span className="flex-1">Storage</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/functions">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M1.62624 10.8978C1.22391 10.0142 1 9.03261 1 8C1 4.13401 4.13401 1 8 1C9.03686 1 10.0223 1.22575 10.9087 1.63122C11.2997 1.37784 11.766 1.23071 12.2665 1.23071C13.6473 1.23071 14.7665 2.35 14.7665 3.73071C14.7665 4.23073 14.6197 4.69646 14.3669 5.08716C14.7736 5.97467 15 6.96155 15 8C15 11.866 11.866 15 8 15C6.94896 15 5.95081 14.768 5.05508 14.3521C4.67477 14.5858 4.22715 14.7206 3.74805 14.7206C2.36733 14.7206 1.24805 13.6013 1.24805 12.2206C1.24805 11.7349 1.38656 11.2815 1.62624 10.8978ZM2 8C2 4.68629 4.68629 2 8 2C8.75898 2 9.48416 2.14069 10.1515 2.39715C9.90768 2.7831 9.76654 3.24042 9.76654 3.73071C9.76654 3.77457 9.76768 3.81815 9.76991 3.86145C9.22664 3.6288 8.62833 3.5 7.99994 3.5C5.51466 3.5 3.49994 5.51472 3.49994 8C3.49994 8.61006 3.62134 9.19177 3.8413 9.72228C3.81035 9.72115 3.77927 9.72058 3.74805 9.72058C3.24584 9.72058 2.77822 9.86866 2.38647 10.1235C2.13679 9.46389 2 8.74838 2 8ZM5.83493 13.5976C6.50608 13.8574 7.23593 14 8 14C11.3137 14 14 11.3137 14 8C14 7.23965 13.8588 6.51324 13.6015 5.84486C13.2152 6.08924 12.7574 6.23071 12.2665 6.23071C12.2232 6.23071 12.1802 6.22961 12.1374 6.22743C12.3707 6.77139 12.4999 7.3706 12.4999 8C12.4999 10.4853 10.4852 12.5 7.99994 12.5C7.37809 12.5 6.78569 12.3739 6.24695 12.1458C6.24768 12.1706 6.24805 12.1956 6.24805 12.2206C6.24805 12.7294 6.09603 13.2027 5.83493 13.5976ZM10.7665 3.73071C10.7665 2.90229 11.4381 2.23071 12.2665 2.23071C13.095 2.23071 13.7665 2.90229 13.7665 3.73071C13.7665 4.55914 13.095 5.23071 12.2665 5.23071C11.4381 5.23071 10.7665 4.55914 10.7665 3.73071ZM5.40407 10.3477C5.48532 10.4196 5.56185 10.4967 5.63315 10.5785C6.25623 11.1507 7.08729 11.5 7.99994 11.5C9.93294 11.5 11.4999 9.933 11.4999 8C11.4999 6.067 9.93294 4.5 7.99994 4.5C6.06695 4.5 4.49994 6.067 4.49994 8C4.49994 8.90336 4.84218 9.72678 5.40407 10.3477ZM3.74805 10.7206C4.11285 10.7206 4.44724 10.8508 4.70725 11.0673C4.77215 11.1369 4.83923 11.2045 4.90838 11.2699C5.12065 11.5287 5.24805 11.8598 5.24805 12.2206C5.24805 13.049 4.57647 13.7206 3.74805 13.7206C2.91962 13.7206 2.24805 13.049 2.24805 12.2206C2.24805 11.3921 2.91962 10.7206 3.74805 10.7206Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Edge Functions</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/realtime">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5.85669 1.07837C6.13284 1.07837 6.35669 1.30223 6.35669 1.57837V4.07172C6.35669 4.34786 6.13284 4.57172 5.85669 4.57172C5.58055 4.57172 5.35669 4.34786 5.35669 4.07172V1.57837C5.35669 1.30223 5.58055 1.07837 5.85669 1.07837ZM1.51143 1.51679C1.70961 1.32449 2.02615 1.32925 2.21845 1.52743L4.3494 3.72353C4.5417 3.9217 4.53694 4.23825 4.33876 4.43055C4.14058 4.62285 3.82403 4.61809 3.63173 4.41991L1.50078 2.22381C1.30848 2.02564 1.31325 1.70909 1.51143 1.51679ZM5.10709 6.49114C4.74216 5.65659 5.59204 4.80844 6.42584 5.17508L14.3557 8.66199C15.2287 9.04582 15.1201 10.3175 14.1948 10.5478L11.1563 11.3041L10.4159 14.1716C10.1783 15.0916 8.91212 15.1928 8.53142 14.3222L5.10709 6.49114ZM13.9532 9.5774L6.02332 6.09049L9.44766 13.9216L10.2625 10.7658C10.3083 10.5882 10.4478 10.4499 10.6258 10.4056L13.9532 9.5774ZM1.04663 5.79688C1.04663 5.52073 1.27049 5.29688 1.54663 5.29688H3.99057C4.26671 5.29688 4.49057 5.52073 4.49057 5.79688C4.49057 6.07302 4.26671 6.29688 3.99057 6.29688H1.54663C1.27049 6.29688 1.04663 6.07302 1.04663 5.79688Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Realtime</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Build Dropdown */}
                    <li className="text-sm relative h-full flex items-center">
                      <div className="group/dropdown relative h-full flex items-center">
                        <button
                          className="group inline-flex items-center justify-center text-sm transition-colors focus:outline-hidden focus:bg-accent focus:text-accent-foreground w-max p-2 bg-transparent border-0 border-b-2 border-transparent font-normal rounded-none text-foreground-light hover:bg-transparent hover:text-foreground h-full shadow-none cursor-pointer"
                        >
                          Build
                          <ChevronDown className="relative top-px ml-1 h-3 w-3 transition duration-200 group-hover/dropdown:rotate-180" aria-hidden="true" />
                        </button>
                        
                        <div className="invisible absolute left-0 top-full w-64 -translate-x-1/4 pt-2 opacity-0 transition-all group-hover/dropdown:visible group-hover/dropdown:opacity-100 z-50">
                          <div className="border border-border bg-popover text-popover-foreground shadow-xl rounded-md p-1 overflow-hidden bg-background">
                            <div className="p-1">
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/ai-tools">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6.7156 1.77258C7.58712 1.14341 8.76326 1.14175 9.63655 1.76846L12.0629 3.50974C12.7162 3.97855 12.8569 4.83994 12.4888 5.4786L13.0896 5.9098C13.7748 6.4015 13.8962 7.32509 13.4579 7.97059L14.1753 8.4882C15.0124 9.09219 15.0035 10.3415 14.1578 10.9335L9.42209 14.2484C8.5592 14.8524 7.41031 14.8508 6.54911 14.2444L1.83872 10.9276C0.999787 10.3368 0.988308 9.09703 1.81616 8.49086L2.80076 7.76992C2.50724 7.14639 2.66597 6.35556 3.27999 5.91229L3.88264 5.47721C3.51614 4.83981 3.65602 3.98138 4.30587 3.51223L6.7156 1.77258ZM5.00242 5.21218C4.95761 5.16341 4.90473 5.12529 4.84735 5.09839C4.61595 4.88922 4.62987 4.51169 4.8912 4.32303L7.30093 2.58337C7.82385 2.20587 8.52953 2.20487 9.0535 2.5809L11.4799 4.32218C11.7403 4.50906 11.7564 4.88309 11.5302 5.09348C11.4651 5.12213 11.4054 5.16499 11.3562 5.22122L9.03905 6.84318C8.52132 7.20559 7.83199 7.20462 7.31527 6.84078L5.00242 5.21218ZM4.62864 6.17202L3.86532 6.72308C3.58687 6.92411 3.58931 7.33956 3.87012 7.53729L7.31263 9.96135C7.82935 10.3252 8.51869 10.3262 9.03642 9.96376L12.5018 7.53808C12.7841 7.34045 12.7866 6.92317 12.5066 6.72224L11.7408 6.17267L9.6125 7.66242C8.74962 8.26643 7.60073 8.26482 6.73953 7.65841L4.62864 6.17202ZM3.49834 8.49855L2.40694 9.29769C2.13099 9.49975 2.13482 9.91301 2.41446 10.1099L7.12485 13.4268C7.64157 13.7906 8.3309 13.7916 8.84864 13.4292L13.5844 10.1143C13.8663 9.91694 13.8692 9.50049 13.5902 9.29916L12.674 8.63814L9.60987 10.783C8.74698 11.387 7.59809 11.3854 6.7369 10.779L3.49834 8.49855Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">AI Tools</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/local-development">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4C1.5 2.61929 2.61929 1.5 4 1.5H12C13.3807 1.5 14.5 2.61929 14.5 4V12C14.5 13.3807 13.3807 14.5 12 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V4ZM4 2.5C3.17157 2.5 2.5 3.17157 2.5 4V12C2.5 12.8284 3.17157 13.5 4 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V4C13.5 3.17157 12.8284 2.5 12 2.5H4ZM4.91205 5.19896C5.10729 5.00369 5.42388 5.00366 5.61915 5.19891L8.02043 7.59984C8.11421 7.6936 8.1669 7.82078 8.16691 7.9534C8.16691 8.08601 8.11423 8.2132 8.02046 8.30697L5.61918 10.7083C5.42392 10.9035 5.10733 10.9035 4.91207 10.7083C4.71681 10.513 4.71681 10.1964 4.91207 10.0011L6.95977 7.95344L4.9121 5.90607C4.71682 5.71082 4.7168 5.39424 4.91205 5.19896ZM7.5 10.1492C7.5 9.87303 7.72386 9.64917 8 9.64917H11C11.2761 9.64917 11.5 9.87303 11.5 10.1492C11.5 10.4253 11.2761 10.6492 11 10.6492H8C7.72386 10.6492 7.5 10.4253 7.5 10.1492Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Local Development &amp; CLI</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/deployment">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M4.5 2.25L4.5 11.25M15.75 4.5A2.25 2.25 0 1 1 11.25 4.5A2.25 2.25 0 1 1 15.75 4.5ZM6.75 13.5A2.25 2.25 0 1 1 2.25 13.5A2.25 2.25 0 1 1 6.75 13.5ZM13.5 6.75A6.75 6.75 0 0 1 6.75 13.5" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                                </svg>
                                <span className="flex-1">Deployment &amp; Branching</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/self-hosting">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.97943 1.49988C3.151 1.49988 2.47943 2.17145 2.47943 2.99988V4.99988C2.47943 5.61515 2.84987 6.1439 3.37989 6.37526V9.62473C2.84987 9.85609 2.47943 10.3848 2.47943 11.0001V13C2.47943 13.8285 3.151 14.5 3.97943 14.5H7.51391C7.51982 14.5001 7.52575 14.5001 7.53168 14.5001H12.0206C12.849 14.5001 13.5206 13.8286 13.5206 13.0001V12.0851C13.5206 10.6081 12.6654 9.33078 11.4232 8.72137C11.946 8.26309 12.2761 7.59029 12.2761 6.84045C12.2761 6.71652 12.2671 6.5947 12.2497 6.4756C12.9491 6.34833 13.4794 5.73603 13.4794 4.99988V2.99988C13.4794 2.17145 12.8079 1.49988 11.9794 1.49988H3.97943ZM11.1343 6.20304C11.1364 6.20772 11.1386 6.21237 11.1408 6.21697C11.2277 6.40684 11.2761 6.618 11.2761 6.84045C11.2761 7.66893 10.6045 8.34062 9.77613 8.34062C8.94776 8.34062 8.27613 7.66893 8.27613 6.84045C8.27613 6.01203 8.9477 5.34045 9.77613 5.34045C10.3766 5.34045 10.8947 5.69333 11.1343 6.20304ZM11.8867 5.49988H11.9794C12.2556 5.49988 12.4794 5.27602 12.4794 4.99988V2.99988C12.4794 2.72374 12.2556 2.49988 11.9794 2.49988H3.97943C3.70329 2.49988 3.47943 2.72374 3.47943 2.99988V4.99988C3.47943 5.27602 3.70329 5.49988 3.97943 5.49988H7.66558C8.10923 4.80286 8.88868 4.34045 9.77613 4.34045C10.6636 4.34045 11.443 4.80286 11.8867 5.49988ZM7.29913 6.49988H4.37989V9.50011H7.07418C7.37693 9.18356 7.73443 8.91934 8.1315 8.72347C7.60726 8.26515 7.27613 7.59143 7.27613 6.84045C7.27613 6.72493 7.28396 6.61124 7.29913 6.49988ZM6.38668 10.5001H3.97943C3.70329 10.5001 3.47943 10.724 3.47943 11.0001V13C3.47943 13.2762 3.70329 13.5 3.97943 13.5H6.11674C6.06165 13.344 6.03168 13.176 6.03168 13.0009V12.0851C6.03168 11.5208 6.15894 10.9831 6.38668 10.5001ZM7.80624 13.5001C7.80283 13.5001 7.79941 13.5 7.79599 13.5H7.5214C7.24953 13.4946 7.03168 13.2731 7.03168 13.0009V12.0851C7.03168 10.5867 8.26234 9.34062 9.77613 9.34062C11.2918 9.34062 12.5206 10.5694 12.5206 12.0851V13.0001C12.5206 13.2763 12.2967 13.5001 12.0206 13.5001H7.80624Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Self-Hosting</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/integrations">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M1.6748 3.08472C1.6748 2.25629 2.34638 1.58472 3.1748 1.58472H6.1748C7.00323 1.58472 7.6748 2.25629 7.6748 3.08472V6.08472C7.6748 6.91314 7.00323 7.58472 6.1748 7.58472H3.1748C2.34638 7.58472 1.6748 6.91314 1.6748 6.08472V3.08472ZM3.1748 2.58472C2.89866 2.58472 2.6748 2.80857 2.6748 3.08472V6.08472C2.6748 6.36086 2.89866 6.58472 3.1748 6.58472H6.1748C6.45095 6.58472 6.6748 6.36086 6.6748 6.08472V3.08472C6.6748 2.80857 6.45095 2.58472 6.1748 2.58472H3.1748ZM11.5107 1.58472C11.7869 1.58472 12.0107 1.80857 12.0107 2.08472V4.08496H14.0107C14.2869 4.08496 14.5107 4.30882 14.5107 4.58496C14.5107 4.8611 14.2869 5.08496 14.0107 5.08496H12.0107V7.08472C12.0107 7.36086 11.7869 7.58472 11.5107 7.58472C11.2346 7.58472 11.0107 7.36086 11.0107 7.08472V5.08496H9.01074C8.7346 5.08496 8.51074 4.8611 8.51074 4.58496C8.51074 4.30882 8.7346 4.08496 9.01074 4.08496H11.0107V2.08472C11.0107 1.80857 11.2346 1.58472 11.5107 1.58472ZM4.67432 9.04516C3.46754 9.04516 2.48926 10.0234 2.48926 11.2302C2.48926 12.437 3.46754 13.4153 4.67432 13.4153C5.88109 13.4153 6.85938 12.437 6.85938 11.2302C6.85938 10.0234 5.88109 9.04516 4.67432 9.04516ZM1.48926 11.2302C1.48926 9.47116 2.91526 8.04516 4.67432 8.04516C6.43338 8.04516 7.85938 9.47116 7.85938 11.2302C7.85938 12.9893 6.43338 14.4153 4.67432 14.4153C2.91526 14.4153 1.48926 12.9893 1.48926 11.2302ZM8.51074 9.83423C8.51074 9.0058 9.18232 8.33423 10.0107 8.33423H13.0107C13.8392 8.33423 14.5107 9.0058 14.5107 9.83423V12.8342C14.5107 13.6627 13.8392 14.3342 13.0107 14.3342H10.0107C9.18231 14.3342 8.51074 13.6627 8.51074 12.8342V9.83423ZM10.0107 9.33423C9.7346 9.33423 9.51074 9.55809 9.51074 9.83423V12.8342C9.51074 13.1104 9.7346 13.3342 10.0107 13.3342H13.0107C13.2869 13.3342 13.5107 13.1104 13.5107 12.8342V9.83423C13.5107 9.55809 13.2869 9.33423 13.0107 9.33423H10.0107Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Integrations</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Reference Dropdown */}
                    <li className="text-sm relative h-full flex items-center">
                      <div className="group/dropdown relative h-full flex items-center">
                        <button
                          className="group inline-flex items-center justify-center text-sm transition-colors focus:outline-hidden focus:bg-accent focus:text-accent-foreground w-max p-2 bg-transparent border-0 border-b-2 border-transparent font-normal rounded-none text-foreground-light hover:bg-transparent hover:text-foreground h-full shadow-none cursor-pointer"
                        >
                          Reference
                          <ChevronDown className="relative top-px ml-1 h-3 w-3 transition duration-200 group-hover/dropdown:rotate-180" aria-hidden="true" />
                        </button>
                        
                        <div className="invisible absolute left-0 top-full w-64 -translate-x-1/4 pt-2 opacity-0 transition-all group-hover/dropdown:visible group-hover/dropdown:opacity-100 z-50">
                          <div className="border border-border bg-popover text-popover-foreground shadow-xl rounded-md p-1 overflow-hidden bg-background">
                            <div className="p-1">
                              <div className="font-mono tracking-wider flex items-center text-foreground-muted text-xs uppercase rounded-md p-2 leading-none">Client Library Reference</div>
                              
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/javascript">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M2 2h12v12H2V2Zm9.173 10.06c-.556 0-.87-.29-1.112-.685l-.916.533c.33.654 1.007 1.153 2.054 1.153 1.071 0 1.869-.556 1.869-1.572 0-.941-.541-1.36-1.5-1.771l-.281-.12c-.484-.21-.693-.347-.693-.686 0-.273.209-.483.54-.483.323 0 .532.137.725.483l.878-.563c-.371-.654-.887-.903-1.604-.903-1.007 0-1.651.644-1.651 1.49 0 .917.54 1.352 1.354 1.698l.282.121c.514.225.821.362.821.749 0 .322-.299.556-.766.556Zm-4.37-.007c-.387 0-.548-.266-.726-.58l-.917.556c.265.562.788 1.03 1.691 1.03 1 0 1.684-.532 1.684-1.7V7.51H7.407v3.834c0 .564-.233.709-.604.709Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">JavaScript</span>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/dart">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="m11.857 2-3.718.004L2.143 8l1.85 1.852 1.626-1.617L11.857 2ZM8.245 7.531c-.052-.002-.107-.005-.14.04l-3.198 3.197 1.836 1.825-.002.002 1.315 1.316a.549.549 0 0 1 .026.025c.035.036.074.074.13.062.607-.002 1.214-.002 1.821-.001l1.822-.001-3.232-3.235 3.23-3.23H8.31a.39.39 0 0 1-.064 0Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Flutter</span>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/swift">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.364 4.774c.004.128.005.256.006.384l.001.439v5.245c-.002.128-.003.256-.007.384-.007.28-.024.561-.073.837-.05.28-.133.541-.263.796a2.673 2.673 0 0 1-1.17 1.17c-.254.13-.514.211-.795.262-.276.05-.558.066-.837.073-.128.004-.256.005-.384.006l-.408.001H5.565l-.407-.001c-.128 0-.256-.002-.384-.006a5.571 5.571 0 0 1-.837-.073c-.28-.05-.541-.133-.796-.262a2.674 2.674 0 0 1-1.17-1.17 2.824 2.824 0 0 1-.262-.796 5.582 5.582 0 0 1-.073-.837 18.375 18.375 0 0 1-.006-.384l-.001-.404V5.158c.002-.128.003-.256.007-.384.007-.28.024-.561.073-.837.05-.28.133-.541.262-.796a2.673 2.673 0 0 1 1.362-1.258c.194-.08.393-.136.604-.174.207-.037.417-.056.627-.066.07-.003.14-.006.21-.007.128-.004.256-.005.384-.006l.457-.001H10.842l.384.006c.28.008.561.024.837.074.28.05.541.133.796.262a2.671 2.671 0 0 1 1.17 1.17c.13.255.212.515.262.796.05.276.066.558.073.837Zm-2.64 4.72h.002c1.094 1.347.797 2.791.656 2.519-.572-1.114-1.638-.83-2.178-.55-.044.028-.09.053-.136.078l-.008.004a.306.306 0 0 0-.01.006l.002-.002c-1.124.597-2.632.642-4.149-.01A6.673 6.673 0 0 1 2.908 8.97c.345.255.718.48 1.114.665 1.603.75 3.213.697 4.352 0C6.753 8.386 5.4 6.762 4.361 5.446a5.644 5.644 0 0 1-.534-.736C5.07 5.85 7.033 7.277 7.737 7.672c-1.494-1.58-2.812-3.525-2.75-3.462 2.355 2.372 4.527 3.714 4.527 3.714.082.045.143.081.192.113.044-.114.084-.232.118-.355.376-1.374-.047-2.946-1.004-4.243 2.184 1.311 3.474 3.802 2.946 5.91a75.282 75.282 0 0 0-.041.145Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Swift</span>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/python">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6.424 1.627A9.05 9.05 0 0 1 7.923 1.5a9.885 9.885 0 0 1 1.633.127c.851.14 1.568.771 1.568 1.612v2.953a1.57 1.57 0 0 1-1.568 1.576H6.424c-1.063 0-1.959.903-1.959 1.927v1.416H3.387c-.911 0-1.443-.654-1.666-1.572-.3-1.233-.288-1.97 0-3.152.25-1.03 1.047-1.572 1.959-1.572h4.312V4.42H4.856V3.239c0-.895.241-1.38 1.568-1.612Zm.391 1.417a.592.592 0 0 0-.588-.593.59.59 0 0 0 0 1.182.59.59 0 0 0 .588-.59Zm4.7 3.148V4.815h1.177c.912 0 1.342.675 1.568 1.572.313 1.246.327 2.18 0 3.152-.317.944-.657 1.572-1.568 1.572h-4.7v.394h3.132v1.182c0 .896-.778 1.35-1.568 1.577-1.187.34-2.14.288-3.132 0-.829-.242-1.568-.736-1.568-1.576V9.733c0-.85.71-1.576 1.568-1.576h3.132c1.044 0 1.96-.898 1.96-1.966Zm-1.173 6.69a.589.589 0 1 0-1.177 0c0 .328.265.594.589.594a.59.59 0 0 0 .588-.593Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Python</span>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/csharp">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="m2.242 11.3.004-.003a1.191 1.191 0 0 1-.134-.57V5.27c0-.442.185-.784.57-1.005.444-.259 1.393-.804 2.33-1.343 1.019-.587 2.024-1.165 2.35-1.356.42-.247.826-.254 1.25-.01l2.37 1.364 2.336 1.345c.189.109.33.247.425.414.098.167.145.366.145.587V10.73c-.001.216-.048.407-.138.573a1.089 1.089 0 0 1-.432.428l-1.786 1.028c-.973.56-1.947 1.12-2.92 1.682-.388.228-.767.236-1.155.042a1.65 1.65 0 0 1-.103-.056c-.382-.227-1.702-.986-2.881-1.664-.747-.429-1.437-.826-1.799-1.036a1.137 1.137 0 0 1-.432-.428Zm7.452-2.351a1.95 1.95 0 0 1-1.698.994 1.94 1.94 0 0 1-1.69-.983A1.946 1.946 0 0 1 9.68 7.02l1.7-.98a3.91 3.91 0 1 0-3.385 5.866 3.913 3.913 0 0 0 3.4-1.974l-1.701-.983Zm2.151-1.88h-.388v.316h-.312v.388h.312v.468h-.312v.388h.312v.316h.388v-.316h.472v.316h.388v-.316h.316v-.388h-.316v-.468h.316v-.388h-.316V7.07h-.388v.316h-.472V7.07Zm0 1.172v-.468h.472v.468h-.472Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">C#</span>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/kotlin">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14 14H2V2H14L8 8L14 14Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Kotlin</span>
                                <div className="inline-flex items-center gap-1 justify-center rounded-full uppercase font-medium text-[9px] px-[5.5px] py-[3px] bg-surface-75 text-foreground-light border border-strong">Community</div>
                              </Link>

                              <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-border-muted"></div>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/server">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M2 2h12v12H2V2Zm9.173 10.06c-.556 0-.87-.29-1.112-.685l-.916.533c.33.654 1.007 1.153 2.054 1.153 1.071 0 1.869-.556 1.869-1.572 0-.941-.541-1.36-1.5-1.771l-.281-.12c-.484-.21-.693-.347-.693-.686 0-.273.209-.483.54-.483.323 0 .532.137.725.483l.878-.563c-.371-.654-.887-.903-1.604-.903-1.007 0-1.651.644-1.651 1.49 0 .917.54 1.352 1.354 1.698l.282.121c.514.225.821.362.821.749 0 .322-.299.556-.766.556Zm-4.37-.007c-.387 0-.548-.266-.726-.58l-.917.556c.265.562.788 1.03 1.691 1.03 1 0 1.684-.532 1.684-1.7V7.51H7.407v3.834c0 .564-.233.709-.604.709Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Server SDK</span>
                                <div className="inline-flex items-center gap-1 justify-center rounded-full uppercase font-medium text-[9px] px-[5.5px] py-[3px] bg-brand-default/10 text-brand-600 border border-brand-500">New</div>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/middleware">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M2 2h12v12H2V2Zm9.173 10.06c-.556 0-.87-.29-1.112-.685l-.916.533c.33.654 1.007 1.153 2.054 1.153 1.071 0 1.869-.556 1.869-1.572 0-.941-.541-1.36-1.5-1.771l-.281-.12c-.484-.21-.693-.347-.693-.686 0-.273.209-.483.54-.483.323 0 .532.137.725.483l.878-.563c-.371-.654-.887-.903-1.604-.903-1.007 0-1.651.644-1.651 1.49 0 .917.54 1.352 1.354 1.698l.282.121c.514.225.821.362.821.749 0 .322-.299.556-.766.556Zm-4.37-.007c-.387 0-.548-.266-.726-.58l-.917.556c.265.562.788 1.03 1.691 1.03 1 0 1.684-.532 1.684-1.7V7.51H7.407v3.834c0 .564-.233.709-.604.709Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Middleware SDK</span>
                                <div className="inline-flex items-center gap-1 justify-center rounded-full uppercase font-medium text-[9px] px-[5.5px] py-[3px] bg-brand-default/10 text-brand-600 border border-brand-500">New</div>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/cli/introduction">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M8.68972 4.35753C8.96122 4.40797 9.14042 4.66896 9.08998 4.94045L7.9225 11.2244C7.87206 11.4959 7.61107 11.6751 7.33958 11.6246C7.06808 11.5742 6.88888 11.3132 6.93932 11.0417L8.1068 4.75779C8.15724 4.48629 8.41822 4.30709 8.68972 4.35753ZM10.0165 6.07223C10.2118 5.87695 10.5284 5.87693 10.7236 6.07218L12.2979 7.64617C12.3916 7.73993 12.4443 7.86711 12.4443 7.99973C12.4443 8.13234 12.3917 8.25953 12.2979 8.3533L10.7237 9.92752C10.5284 10.1228 10.2118 10.1228 10.0166 9.92752C9.8213 9.73226 9.8213 9.41568 10.0166 9.22042L11.2372 7.99977L10.0166 6.77933C9.82131 6.58409 9.82129 6.2675 10.0165 6.07223ZM6.01227 9.9275C5.81702 10.1228 5.50044 10.1228 5.30516 9.92755L3.73094 8.35356C3.63716 8.2598 3.58447 8.13262 3.58447 8C3.58446 7.86739 3.63714 7.7402 3.73091 7.64643L5.30514 6.07221C5.5004 5.87694 5.81698 5.87694 6.01225 6.07221C6.20751 6.26747 6.20751 6.58405 6.01225 6.77931L4.7916 7.99996L6.01222 9.2204C6.2075 9.41564 6.20752 9.73223 6.01227 9.9275ZM1.5 4C1.5 2.61929 2.61929 1.5 4 1.5H12C13.3807 1.5 14.5 2.61929 14.5 4V12C14.5 13.3807 13.3807 14.5 12 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V4ZM4 2.5C3.17157 2.5 2.5 3.17157 2.5 4V12C2.5 12.8284 3.17157 13.5 4 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V4C13.5 3.17157 12.8284 2.5 12 2.5H4Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">CLI Commands</span>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/reference/api/introduction">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M8.00018 1.98145C7.56432 1.98145 7.13983 2.02769 6.73114 2.11537C6.46114 2.1733 6.19531 2.00138 6.13738 1.73138C6.07946 1.46138 6.25138 1.19554 6.52138 1.13762C6.99858 1.03524 7.49338 0.981445 8.00018 0.981445C8.50698 0.981445 9.00178 1.03524 9.47898 1.13762C9.74898 1.19555 9.9209 1.46138 9.86297 1.73138C9.80505 2.00138 9.53921 2.1733 9.26921 2.11537C8.86053 2.02769 8.43603 1.98145 8.00018 1.98145Z" fill="currentColor"></path>
                                  <path d="M1.73138 6.1372C2.00138 6.19513 2.1733 6.46096 2.11537 6.73096C2.02769 7.13965 1.98145 7.56414 1.98145 8C1.98145 8.43586 2.02769 8.86035 2.11537 9.26904C2.1733 9.53904 2.00138 9.80487 1.73138 9.8628C1.46138 9.92072 1.19555 9.7488 1.13762 9.4788C1.03524 9.0016 0.981445 8.5068 0.981445 8C0.981445 7.4932 1.03524 6.9984 1.13762 6.5212C1.19555 6.2512 1.46138 6.07928 1.73138 6.1372Z" fill="currentColor"></path>
                                  <path d="M14.2686 6.1372C14.5386 6.07928 14.8045 6.2512 14.8624 6.5212C14.9648 6.9984 15.0186 7.4932 15.0186 8C15.0186 8.5068 14.9648 9.0016 14.8624 9.4788C14.8045 9.7488 14.5386 9.92072 14.2686 9.86279C13.9986 9.80487 13.8267 9.53903 13.8846 9.26904C13.9723 8.86035 14.0186 8.43586 14.0186 8C14.0186 7.56414 13.9723 7.13965 13.8846 6.73096C13.8267 6.46096 13.9986 6.19513 14.2686 6.1372Z" fill="currentColor"></path>
                                  <path d="M6.13738 14.2686C6.19531 13.9986 6.46114 13.8267 6.73114 13.8846C7.13983 13.9723 7.56432 14.0186 8.00018 14.0186C8.43603 14.0186 8.86053 13.9723 9.26922 13.8846C9.53922 13.8267 9.80505 13.9986 9.86297 14.2686C9.9209 14.5386 9.74898 14.8045 9.47898 14.8624C9.00178 14.9648 8.50698 15.0186 8.00018 15.0186C7.49337 15.0186 6.99858 14.9648 6.52137 14.8624C6.25138 14.8045 6.07946 14.5386 6.13738 14.2686Z" fill="currentColor"></path>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8048 1.75216C12.4795 1.0774 13.5735 1.07741 14.2483 1.75216C14.923 2.42691 14.923 3.52091 14.2483 4.19566C13.6764 4.76755 12.8033 4.85474 12.1396 4.45721L10.6936 5.90323C11.1446 6.48183 11.4133 7.20953 11.4133 7.99999C11.4133 8.76199 11.1636 9.46567 10.7416 10.0337L12.2103 11.5024C12.8642 11.152 13.6961 11.2526 14.2478 11.8043C14.9225 12.479 14.9225 13.573 14.2478 14.2478C13.573 14.9226 12.479 14.9226 11.8043 14.2478C11.2523 13.6958 11.1519 12.8633 11.503 12.2092L10.0346 10.7409C9.46646 11.1634 8.76241 11.4134 7.99997 11.4134C7.20951 11.4134 6.4818 11.1447 5.90321 10.6936L4.4574 12.1395C4.85471 12.8031 4.76747 13.676 4.19566 14.2478C3.52091 14.9226 2.42691 14.9226 1.75216 14.2478C1.0774 13.573 1.07741 12.479 1.75216 11.8043C2.28359 11.2729 3.07507 11.16 3.71698 11.4657L5.21234 9.9703C4.81821 9.4137 4.5866 8.73389 4.5866 7.99999C4.5866 7.23755 4.83658 6.5335 5.25904 5.96532L3.79073 4.497C3.13666 4.8481 2.30413 4.74766 1.75216 4.19569C1.07741 3.52093 1.07741 2.42694 1.75216 1.75218C2.42692 1.07743 3.52091 1.07743 4.19566 1.75219C4.74732 2.30385 4.84796 3.13573 4.49758 3.78964L5.96628 5.25834C6.53429 4.83631 7.23797 4.58662 7.99997 4.58662C8.73387 4.58662 9.41367 4.81824 9.97027 5.21236L11.466 3.71665C11.1605 3.0748 11.2734 2.2835 11.8048 1.75216ZM13.5412 2.45927C13.2569 2.17504 12.7961 2.17504 12.5119 2.45927C12.2277 2.7435 12.2277 3.20433 12.5119 3.48856C12.7961 3.77279 13.2569 3.77279 13.5412 3.48856C13.8254 3.20433 13.8254 2.7435 13.5412 2.45927ZM9.67618 9.73627C9.24205 10.1555 8.65112 10.4134 7.99997 10.4134C6.6671 10.4134 5.5866 9.33286 5.5866 7.99999C5.5866 6.66712 6.6671 5.58662 7.99997 5.58662C9.33283 5.58662 10.4133 6.66712 10.4133 7.99999C10.4133 8.65078 10.1557 9.24141 9.73695 9.67547C9.72611 9.68462 9.71556 9.6943 9.70535 9.70451C9.69509 9.71478 9.68536 9.72537 9.67618 9.73627ZM3.48856 2.45929C3.20433 2.17506 2.7435 2.17506 2.45927 2.45929C2.17504 2.74352 2.17504 3.20435 2.45927 3.48858C2.7435 3.77281 3.20433 3.77281 3.48856 3.48858C3.77279 3.20435 3.77279 2.74352 3.48856 2.45929ZM3.48856 12.5114C3.20433 12.2272 2.7435 12.2272 2.45927 12.5114C2.17504 12.7956 2.17504 13.2565 2.45927 13.5407C2.7435 13.8249 3.20433 13.8249 3.48856 13.5407C3.77279 13.2565 3.77279 12.7956 3.48856 12.5114ZM13.5407 12.5114C13.2564 12.2272 12.7956 12.2272 12.5114 12.5114C12.2271 12.7956 12.2271 13.2565 12.5114 13.5407C12.7956 13.8249 13.2564 13.8249 13.5407 13.5407C13.8249 13.2565 13.8249 12.7956 13.5407 12.5114Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Management API</span>
                              </Link>

                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="https://supabase.com/library">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.973313" y="0.64" width="14.72" height="14.72" rx="1.92" stroke="currentColor" strokeWidth="1.28"></rect>
                                  <path d="M8.56519 4.69238H9.74564V8.94966C9.74564 9.41632 9.63534 9.82678 9.41473 10.181C9.19625 10.5353 8.88867 10.8121 8.492 11.0115C8.09534 11.2087 7.63185 11.3074 7.10155 11.3074C6.56913 11.3074 6.10458 11.2087 5.70791 11.0115C5.31125 10.8121 5.00367 10.5353 4.78519 10.181C4.5667 9.82678 4.45746 9.41632 4.45746 8.94966V4.69238H5.63791V8.85102C5.63791 9.12253 5.69731 9.36435 5.81609 9.57647C5.937 9.7886 6.1067 9.95511 6.32519 10.076C6.54367 10.1948 6.80246 10.2542 7.10155 10.2542C7.40064 10.2542 7.65943 10.1948 7.87791 10.076C8.09852 9.95511 8.26822 9.7886 8.387 9.57647C8.50579 9.36435 8.56519 9.12253 8.56519 8.85102V4.69238Z" fill="currentColor"></path>
                                  <path d="M12.2092 4.69238V11.2087H11.0287V4.69238H12.2092Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Library</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Manage Dropdown */}
                    <li className="text-sm relative h-full flex items-center">
                      <div className="group/dropdown relative h-full flex items-center">
                        <button
                          className="group inline-flex items-center justify-center text-sm transition-colors focus:outline-hidden focus:bg-accent focus:text-accent-foreground w-max p-2 bg-transparent border-0 border-b-2 border-transparent font-normal rounded-none text-foreground-light hover:bg-transparent hover:text-foreground h-full shadow-none cursor-pointer"
                        >
                          Manage
                          <ChevronDown className="relative top-px ml-1 h-3 w-3 transition duration-200 group-hover/dropdown:rotate-180" aria-hidden="true" />
                        </button>
                        
                        <div className="invisible absolute left-0 top-full w-64 -translate-x-1/4 pt-2 opacity-0 transition-all group-hover/dropdown:visible group-hover/dropdown:opacity-100 z-50">
                          <div className="border border-border bg-popover text-popover-foreground shadow-xl rounded-md p-1 overflow-hidden bg-background">
                            <div className="p-1">
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/platform">
                                <svg className="text-foreground-lighter shrink-0" viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6.7156 1.77258C7.58712 1.14341 8.76326 1.14175 9.63655 1.76846L12.0629 3.50974C12.7162 3.97855 12.8569 4.83994 12.4888 5.4786L13.0896 5.9098C13.7748 6.4015 13.8962 7.32509 13.4579 7.97059L14.1753 8.4882C15.0124 9.09219 15.0035 10.3415 14.1578 10.9335L9.42209 14.2484C8.5592 14.8524 7.41031 14.8508 6.54911 14.2444L1.83872 10.9276C0.999787 10.3368 0.988308 9.09703 1.81616 8.49086L2.80076 7.76992C2.50724 7.14639 2.66597 6.35556 3.27999 5.91229L3.88264 5.47721C3.51614 4.83981 3.65602 3.98138 4.30587 3.51223L6.7156 1.77258ZM5.00242 5.21218C4.95761 5.16341 4.90473 5.12529 4.84735 5.09839C4.61595 4.88922 4.62987 4.51169 4.8912 4.32303L7.30093 2.58337C7.82385 2.20587 8.52953 2.20487 9.0535 2.5809L11.4799 4.32218C11.7403 4.50906 11.7564 4.88309 11.5302 5.09348C11.4651 5.12213 11.4054 5.16499 11.3562 5.22122L9.03905 6.84318C8.52132 7.20559 7.83199 7.20462 7.31527 6.84078L5.00242 5.21218ZM4.62864 6.17202L3.86532 6.72308C3.58687 6.92411 3.58931 7.33956 3.87012 7.53729L7.31263 9.96135C7.82935 10.3252 8.51869 10.3262 9.03642 9.96376L12.5018 7.53808C12.7841 7.34045 12.7866 6.92317 12.5066 6.72224L11.7408 6.17267L9.6125 7.66242C8.74962 8.26643 7.60073 8.26482 6.73953 7.65841L4.62864 6.17202ZM3.49834 8.49855L2.40694 9.29769C2.13099 9.49975 2.13482 9.91301 2.41446 10.1099L7.12485 13.4268C7.64157 13.7906 8.3309 13.7916 8.84864 13.4292L13.5844 10.1143C13.8663 9.91694 13.8692 9.50049 13.5902 9.29916L12.674 8.63814L9.60987 10.783C8.74698 11.387 7.59809 11.3854 6.7369 10.779L3.49834 8.49855Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Platform Management</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/security">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M9 2L3 4V11C3 14 6 16 9 16.5C12 16 15 14 15 11V4L9 2Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M7 10L8 12L12 8" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                                <span className="flex-1">Security &amp; Compliance</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/observability">
                                <Telescope className="text-foreground-lighter shrink-0" size={16} />
                                <span className="flex-1">Observability</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Resources Dropdown */}
                    <li className="text-sm relative h-full flex items-center">
                      <div className="group/dropdown relative h-full flex items-center">
                        <button
                          className="group inline-flex items-center justify-center text-sm transition-colors focus:outline-hidden focus:bg-accent focus:text-accent-foreground w-max p-2 bg-transparent border-0 border-b-2 border-transparent font-normal rounded-none text-foreground-light hover:bg-transparent hover:text-foreground h-full shadow-none cursor-pointer"
                        >
                          Resources
                          <ChevronDown className="relative top-px ml-1 h-3 w-3 transition duration-200 group-hover/dropdown:rotate-180" aria-hidden="true" />
                        </button>
                        
                        <div className="invisible absolute left-0 top-full w-64 -translate-x-1/4 pt-2 opacity-0 transition-all group-hover/dropdown:visible group-hover/dropdown:opacity-100 z-50">
                          <div className="border border-border bg-popover text-popover-foreground shadow-xl rounded-md p-1 overflow-hidden bg-background">
                            <div className="p-1">
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/resources/glossary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5.00001 2.49996C4.17157 2.49996 3.49999 3.17154 3.49999 3.99998V10.7676C3.79417 10.5974 4.13571 10.5 4.50001 10.5H11.9928C12.2686 10.5 12.4924 10.2765 12.4928 10.0007L12.4996 5.001L12.4939 2.99854C12.4931 2.72295 12.2694 2.49996 11.9938 2.49996H9.15577V5.99998C9.15577 6.20778 9.02724 6.39391 8.83291 6.46753C8.63859 6.54115 8.41899 6.4869 8.28131 6.33126L7.15602 5.05923L6.0302 6.33133C5.89249 6.48693 5.67291 6.54114 5.47861 6.46751C5.28432 6.39388 5.15581 6.20776 5.15581 5.99998V2.49996H5.00001ZM5.00001 1.5C3.61931 1.5 2.50003 2.61928 2.50003 3.99998V12.5C2.50003 13.6045 3.39545 14.5 4.50001 14.5H12C12.8284 14.5 13.5 13.8284 13.5 13V9.33774C13.5 9.31079 13.4979 9.28434 13.4938 9.25855L13.4996 5.00138L13.4938 2.99568C13.4914 2.16895 12.8206 1.5 11.9938 1.5H5.00001ZM12.5 11.412C12.3416 11.4689 12.1708 11.5 11.9928 11.5H4.50001C3.94771 11.5 3.49999 11.9477 3.49999 12.5C3.49999 13.0523 3.94771 13.5 4.50001 13.5H12C12.2762 13.5 12.5 13.2761 12.5 13V11.412ZM6.15577 2.49996V4.68063L6.78169 3.97337C6.8766 3.86613 7.01294 3.80474 7.15615 3.80475C7.29936 3.80477 7.43569 3.86619 7.53058 3.97345L8.15581 4.68021V2.49996H6.15577Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Glossary</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="https://supabase.com/changelog">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text text-foreground-lighter shrink-0" aria-hidden="true"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
                                <span className="flex-1">Changelog</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="https://status.supabase.com/">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.9895 1.13281C4.64498 1.13281 1.12305 4.65474 1.12305 8.99927C1.12305 13.3438 4.64498 16.8657 8.9895 16.8657C13.334 16.8657 16.856 13.3438 16.856 8.99927C16.856 7.13428 16.207 5.42087 15.1225 4.07258L8.35267 10.8424L6.39571 8.88546M9.06632 4.19659C6.42145 4.19659 4.27737 6.34068 4.27737 8.98555C4.27737 11.6304 6.42145 13.7745 9.06632 13.7745C11.7112 13.7745 13.8553 11.6304 13.8553 8.98555C13.8553 7.99916 13.5571 7.08243 13.0459 6.32059" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                                </svg>
                                <span className="flex-1">Status</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/contributing">
                                <Heart className="text-foreground-lighter shrink-0" size={16} />
                                <span className="flex-1">Contributing</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="/docs/guides/troubleshooting">
                                <svg className="text-foreground-lighter shrink-0" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.0326 6.65586L11.679 6.30231L12.0326 6.65586ZM13.9812 4.70721L14.4367 4.50108C14.3691 4.35154 14.2323 4.24473 14.0708 4.21531C13.9094 4.18589 13.7437 4.2376 13.6277 4.35366L13.9812 4.70721ZM8.76103 9.9274L8.96716 9.47187L8.65205 9.32928L8.40747 9.57385L8.76103 9.9274ZM4.21801 14.4704L3.86446 14.1169L4.21801 14.4704ZM2.24565 12.4981L1.89209 12.1445H1.89209L2.24565 12.4981ZM6.78866 7.95504L7.14221 8.30859L7.38679 8.06402L7.24419 7.7489L6.78866 7.95504ZM7.5932 3.53939L7.23965 3.18584L7.5932 3.53939ZM9.67545 2.4479L9.76508 2.9398L9.67545 2.4479ZM12.0089 2.73485L12.3624 3.0884C12.4785 2.97234 12.5302 2.8067 12.5008 2.64522C12.4713 2.48374 12.3645 2.34699 12.215 2.27932L12.0089 2.73485ZM10.0602 4.6835L9.70665 4.32994L10.0602 4.6835ZM10.0671 6.66267L9.71597 7.01867L10.0671 6.66267ZM12.3861 7.00941L14.3348 5.06077L13.6277 4.35366L11.679 6.30231L12.3861 7.00941ZM13.5257 4.91335C13.8144 5.55131 13.9018 6.2621 13.7763 6.95099L14.7601 7.13024C14.922 6.24136 14.8092 5.32423 14.4367 4.50108L13.5257 4.91335ZM13.7763 6.95099C13.6507 7.63988 13.3183 8.27417 12.8231 8.76931L13.5302 9.47642C14.1691 8.83754 14.5981 8.01912 14.7601 7.13024L13.7763 6.95099ZM12.8231 8.76931C12.328 9.26445 11.6937 9.59694 11.0048 9.72245L11.1841 10.7063C12.0729 10.5443 12.8913 10.1153 13.5302 9.47642L12.8231 8.76931ZM11.0048 9.72245C10.3159 9.84797 9.60512 9.76056 8.96716 9.47187L8.55489 10.3829C9.37805 10.7554 10.2952 10.8682 11.1841 10.7063L11.0048 9.72245ZM8.40747 9.57385L3.86446 14.1169L4.57157 14.824L9.11458 10.281L8.40747 9.57385ZM3.86446 14.1169C3.69668 14.2846 3.46911 14.3789 3.23183 14.3789V15.3789C3.73433 15.3789 4.21625 15.1793 4.57157 14.824L3.86446 14.1169ZM3.23183 14.3789C2.99455 14.3789 2.76699 14.2846 2.5992 14.1169L1.89209 14.824C2.24741 15.1793 2.72933 15.3789 3.23183 15.3789V14.3789ZM2.5992 14.1169C2.43142 13.9491 2.33716 13.7215 2.33716 13.4842H1.33716C1.33716 13.9867 1.53677 14.4686 1.89209 14.824L2.5992 14.1169ZM2.33716 13.4842C2.33716 13.247 2.43142 13.0194 2.5992 12.8516L1.89209 12.1445C1.53678 12.4998 1.33716 12.9817 1.33716 13.4842H2.33716ZM2.5992 12.8516L7.14221 8.30859L6.43511 7.60149L1.89209 12.1445L2.5992 12.8516ZM7.24419 7.7489C6.9555 7.11095 6.86809 6.40016 6.99361 5.71126L6.00981 5.53201C5.84785 6.42089 5.96064 7.33802 6.33313 8.16118L7.24419 7.7489ZM6.99361 5.71126C7.11913 5.02237 7.45161 4.38808 7.94676 3.89294L7.23965 3.18584C6.60077 3.82472 6.17176 4.64313 6.00981 5.53201L6.99361 5.71126ZM7.94676 3.89294C8.4419 3.3978 9.07618 3.06532 9.76508 2.9398L9.58582 1.956C8.69694 2.11795 7.87853 2.54696 7.23965 3.18584L7.94676 3.89294ZM9.76508 2.9398C10.454 2.81428 11.1648 2.90169 11.8027 3.19038L12.215 2.27932C11.3918 1.90682 10.4747 1.79404 9.58582 1.956L9.76508 2.9398ZM11.6553 2.38129L9.70665 4.32994L10.4138 5.03705L12.3624 3.0884L11.6553 2.38129ZM11.679 6.30231C11.3313 6.64999 10.7682 6.65194 10.4182 6.30668L9.71597 7.01867C10.4573 7.74984 11.6498 7.74571 12.3861 7.00941L11.679 6.30231ZM10.4182 6.30668C10.0646 5.95801 10.0627 5.38815 10.4138 5.03705L9.70665 4.32994C8.96311 5.07349 8.96729 6.28029 9.71597 7.01867L10.4182 6.30668Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Troubleshooting</span>
                              </Link>
                              <Link className="group/menu-item gap-2 w-full flex h-8 items-center text-foreground-light text-sm hover:text-foreground hover:bg-accent select-none rounded-md p-2 leading-none no-underline" href="https://supabase.com/kb">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground-lighter shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5.00001 2.49996C4.17157 2.49996 3.49999 3.17154 3.49999 3.99998V10.7676C3.79417 10.5974 4.13571 10.5 4.50001 10.5H11.9928C12.2686 10.5 12.4924 10.2765 12.4928 10.0007L12.4996 5.001L12.4939 2.99854C12.4931 2.72295 12.2694 2.49996 11.9938 2.49996H9.15577V5.99998C9.15577 6.20778 9.02724 6.39391 8.83291 6.46753C8.63859 6.54115 8.41899 6.4869 8.28131 6.33126L7.15602 5.05923L6.0302 6.33133C5.89249 6.48693 5.67291 6.54114 5.47861 6.46751C5.28432 6.39388 5.15581 6.20776 5.15581 5.99998V2.49996H5.00001ZM5.00001 1.5C3.61931 1.5 2.50003 2.61928 2.50003 3.99998V12.5C2.50003 13.6045 3.39545 14.5 4.50001 14.5H12C12.8284 14.5 13.5 13.8284 13.5 13V9.33774C13.5 9.31079 13.4979 9.28434 13.4938 9.25855L13.4996 5.00138L13.4938 2.99568C13.4914 2.16895 12.8206 1.5 11.9938 1.5H5.00001ZM12.5 11.412C12.3416 11.4689 12.1708 11.5 11.9928 11.5H4.50001C3.94771 11.5 3.49999 11.9477 3.49999 12.5C3.49999 13.0523 3.94771 13.5 4.50001 13.5H12C12.2762 13.5 12.5 13.2761 12.5 13V11.412ZM6.15577 2.49996V4.68063L6.78169 3.97337C6.8766 3.86613 7.01294 3.80474 7.15615 3.80475C7.29936 3.80477 7.43569 3.86619 7.53058 3.97345L8.15581 4.68021V2.49996H6.15577Z" fill="currentColor"></path>
                                </svg>
                                <span className="flex-1">Knowledge base</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </nav>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center justify-end gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-foreground text-foreground-light px-3 py-1.5 rounded-md h-[30px]"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center cursor-pointer font-medium duration-200 border-0 bg-primary-solid text-primary-solid-foreground text-xs px-3 py-1.5 rounded-md h-[30px] hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Start your project</span>
            </Link>
          </div>

        </div>
      </nav>
    </div>
  )
}