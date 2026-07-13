"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BarChart3,
  Bell,
  ClipboardList,
  CreditCard,
  FileSearch,
  FolderOpen,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const memberFeatureCards = [
  {
    icon: BarChart3,
    title: "Track Sharing Activity",
    text: "Members can see where requests, balances, and recent activity stand at a glance.",
  },
  {
    icon: ClipboardList,
    title: "Submit Requests Online",
    text: "A simple digital flow for sharing requests, documents, and follow-up information.",
  },
  {
    icon: CreditCard,
    title: "Digital ID Card",
    text: "Fast access to member ID information from desktop or mobile.",
  },
  {
    icon: UsersRound,
    title: "Manage Family Members",
    text: "Household profiles, dependents, and related member information in one place.",
  },
  {
    icon: FolderOpen,
    title: "Documents & EOS",
    text: "Organized access to uploaded files, statements, and explanation documents.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    text: "Updates for request status, documents, payments, and important member alerts.",
  },
];

const mobileScreens = [
  {
    src: "/proposal/mobile-home.jpg",
    alt: "Mobile member app home screen",
  },
  {
    src: "/proposal/mobile-sharing-requests.jpg",
    alt: "Mobile member app sharing requests screen",
  },
  {
    src: "/proposal/mobile-help-support.jpg",
    alt: "Mobile member app help and AI support screen",
  },
  {
    src: "/proposal/mobile-profile.jpg",
    alt: "Mobile member app profile screen",
  },
  {
    src: "/proposal/mobile-submit-sharing.jpg",
    alt: "Mobile member app submit sharing request screen",
  },
];

type PreviewImage = {
  src: string;
  alt: string;
};

const coreBuild = [
  {
    icon: LayoutDashboard,
    title: "Member Dashboard",
    text: "Secure account access, household profiles, digital ID cards, claims, billing, documents, and notifications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Member App",
    text: "Responsive mobile web app experience for high-frequency member needs like ID cards, claims, uploads, and support.",
  },
  {
    icon: ClipboardList,
    title: "Admin Portal",
    text: "Application review, member management, staff queues, document visibility, notes, reporting, and operational controls.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Infrastructure",
    text: "Production deployment, authentication, role-based access, audit-friendly workflows, and structured data management.",
  },
];

const aiLayer = [
  {
    icon: FileSearch,
    title: "Document Processing",
    text: "Extract and organize information from uploaded documents so staff can review faster with fewer manual data-entry steps.",
  },
  {
    icon: MessageCircle,
    title: "Member Assistant",
    text: "A guided AI assistant inside the member portal for common questions, document help, and next-step support.",
  },
];

const phases = [
  {
    label: "Phase 1",
    title: "Foundation and UX",
    text: "Finalize platform scope, user flows, visual direction, and the core data model for members, staff, and documents.",
  },
  {
    label: "Phase 2",
    title: "Portal Build",
    text: "Build the member dashboard, mobile web app, admin portal, authentication, and core operational screens.",
  },
  {
    label: "Phase 3",
    title: "Automation Layer",
    text: "Add document processing, AI assistant features, notifications, reporting, and staff efficiency workflows.",
  },
  {
    label: "Phase 4",
    title: "Launch and Support",
    text: "Production hardening, training, launch support, monitoring, iteration, and ongoing platform care.",
  },
];

export default function ProposalPage() {
  const [activePreview, setActivePreview] = useState<PreviewImage | null>(null);

  useEffect(() => {
    if (!activePreview) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePreview(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePreview]);

  const openPreview = (preview: PreviewImage) => {
    setActivePreview(preview);
  };

  const activePreviewIsMobile = activePreview?.src.includes("/mobile-") ?? false;

  return (
    <main className="min-h-screen bg-[#f7fbfd] text-[#102033]">
      <section className="relative overflow-hidden bg-[#0f5d9c] text-white">
        <div className="absolute inset-0 bg-[url('/images/watermarkLightBlue-300x300-1.png')] bg-repeat opacity-[0.06]" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-[#96d7cf] blur-3xl" />
          <div className="absolute bottom-[-30%] right-[-10%] h-96 w-96 rounded-full bg-[#f2c96d] blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-black/10">
              <Image
                src="/images/ur-logo-header.png"
                alt="United Refuah"
                width={222}
                height={90}
                className="h-12 w-auto"
                priority
              />
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 sm:flex">
              <Sparkles className="h-4 w-4" />
              Private proposal preview
            </div>
          </header>

          <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:py-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/85">
                <MonitorSmartphone className="h-4 w-4" />
                Member portal + mobile app + admin portal
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl">
                A modern <span className="text-[#96d7cf]">digital platform</span> for members,
                staff, and document workflows.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                This concept shows the experience United REFUAH can provide: a secure member portal,
                mobile-first access, a stronger admin portal, and optional AI automation for documents
                and support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Member self-service", "Staff efficiency", "AI-ready workflows"].map((item) => (
                  <span key={item} className="rounded-full bg-white/12 px-4 py-2 text-sm text-white/88">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/18 bg-white/12 p-3 shadow-2xl backdrop-blur lg:-mr-10 xl:-mr-16">
                <div className="overflow-hidden rounded-[1.4rem] bg-white">
                  <button
                    type="button"
                    aria-label="Open member portal preview"
                    onClick={() =>
                      openPreview({
                        src: "/proposal/member-dashboard.jpg",
                        alt: "Member portal concept preview",
                      })
                    }
                    className="block w-full cursor-zoom-in text-left"
                  >
                    <Image
                      src="/proposal/member-dashboard.jpg"
                      alt="Member portal concept preview"
                      width={1600}
                      height={934}
                      className="max-h-[740px] w-full bg-white object-contain object-top"
                      priority
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbfd] px-5 py-20 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[url('/images/watermarkLightBlue-300x300-1.png')] bg-repeat opacity-[0.035]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f5d9c]">Member experience</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-[#102033] sm:text-5xl">
              Your health sharing, simplified
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#587084]">
              Members can manage everything from one intuitive dashboard: track requests, view
              documents, manage family details, and access support from desktop or mobile.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <button
              type="button"
              aria-label="Open member portal dashboard preview"
              onClick={() =>
                openPreview({
                  src: "/proposal/member-dashboard.jpg",
                  alt: "Member portal dashboard preview",
                })
              }
              className="block rounded-[1.6rem] border border-[#d9e8ee] bg-white p-4 shadow-2xl shadow-[#0f5d9c]/10"
            >
              <Image
                src="/proposal/member-dashboard.jpg"
                alt="Member portal dashboard preview"
                width={1600}
                height={934}
                className="max-h-[610px] w-full rounded-[1.1rem] object-contain object-top"
                priority
              />
            </button>

            <div className="grid gap-4 sm:grid-cols-2">
              {memberFeatureCards.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-xl border border-[#d9e8ee] bg-white/80 p-5 shadow-sm backdrop-blur">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f4f8] text-[#0f5d9c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#102033]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#587084]">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f5d9c]">Mobile web app</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#102033] sm:text-4xl">
            A native-feeling mobile experience without app store friction
          </h2>
        </div>
        <div className="mt-10 rounded-2xl border border-[#d9e8ee] bg-[#e8f4f8] p-4 shadow-sm sm:p-6">
          <div className="grid grid-cols-2 items-start gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {mobileScreens.map((screen) => (
              <button
                key={screen.src}
                type="button"
                aria-label={`Open ${screen.alt}`}
                onClick={() => openPreview(screen)}
                className="block cursor-zoom-in"
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={390}
                  height={747}
                  className="mx-auto aspect-[9/16] max-h-[430px] w-auto rounded-[1rem] border-[6px] border-[#102033] bg-white object-contain object-top shadow-lg"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f5d9c]">Admin operations</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#102033] sm:text-4xl">
            Operational command center for staff workflows
          </h2>
          <p className="mt-4 text-base leading-7 text-[#587084]">
            Staff can review members, applications, documents, queues, and follow-up work from a
            clean internal dashboard.
          </p>
        </div>
        <button
          type="button"
          aria-label="Open admin portal dashboard preview"
          onClick={() =>
            openPreview({
              src: "/proposal/admin-dashboard.jpg",
              alt: "Admin portal dashboard preview",
            })
          }
          className="mt-10 block rounded-2xl border border-[#d9e8ee] bg-white p-4 shadow-xl shadow-[#0f5d9c]/10 sm:p-6"
        >
          <Image
            src="/proposal/admin-dashboard.jpg"
            alt="Admin portal dashboard preview"
            width={1600}
            height={940}
            className="max-h-[760px] w-full rounded-xl object-contain object-top"
          />
        </button>
      </section>

      <section className="border-y border-[#d9e8ee] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f5d9c]">Core build</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#102033] sm:text-4xl">
              The base platform covers the workflows members and staff touch every day.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#587084]">
              The goal is a complete operating layer, not just a prettier website: member access,
              mobile convenience, staff tools, secure data, and admin visibility.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {coreBuild.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-[#d9e8ee] bg-[#f7fbfd] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#dceff5] text-[#0f5d9c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#102033]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#587084]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-lg bg-[#102033] p-7 text-white sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#96d7cf]">Optional AI layer</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              AI features focused on document processing and member support.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/74">
              The AI package can help staff process documents faster while giving members guided
              support inside the portal.
            </p>
          </div>

          <div className="grid gap-4">
            {aiLayer.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 rounded-lg border border-[#d9e8ee] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#eef8f6] text-[#18756c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#102033]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#587084]">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf5f8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f5d9c]">Build plan</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#102033] sm:text-4xl">
              A phased path from concept to production
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div key={phase.label} className="rounded-lg border border-[#cfe2e9] bg-white p-5">
                <p className="text-sm font-semibold text-[#0f5d9c]">{phase.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#102033]">{phase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#587084]">{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f5d9c] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Platform discussion
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">
              Review the portal experience, confirm priorities, and align on the build scope.
            </h2>
          </div>
          <div className="inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0f5d9c]">
            Private proposal preview
          </div>
        </div>
      </section>

      {activePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07111d]/88 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          onClick={() => setActivePreview(null)}
        >
          <div
            className={
              activePreviewIsMobile
                ? "relative max-h-[94vh] w-full max-w-7xl"
                : "relative max-h-[96vh] w-full max-w-[96vw]"
            }
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close screenshot preview"
              onClick={() => setActivePreview(null)}
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#102033] shadow-lg transition hover:bg-[#e8f4f8] focus:outline-none focus:ring-2 focus:ring-[#96d7cf]"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className={
                activePreviewIsMobile
                  ? "overflow-hidden rounded-xl bg-[#e8f4f8] p-5 shadow-2xl sm:p-8"
                  : "overflow-hidden rounded-xl bg-white shadow-2xl"
              }
            >
              <Image
                src={activePreview.src}
                alt={activePreview.alt}
                width={1800}
                height={1200}
                className={
                  activePreviewIsMobile
                    ? "mx-auto max-h-[86vh] w-auto max-w-full rounded-[1rem] object-contain object-top shadow-xl"
                    : "max-h-[96vh] w-full object-contain object-top"
                }
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
