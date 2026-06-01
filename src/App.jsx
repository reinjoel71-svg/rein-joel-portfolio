import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Globe2,
  PenTool,
  Layout,
  TrendingUp,
  ExternalLink,
  PackageCheck,
  Sparkles,
  Quote,
} from "lucide-react";

const Button = ({ children, className = "", variant = "solid" }) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950";
  const variantClasses =
    variant === "outline"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-cyan-400 text-slate-950 hover:bg-cyan-300";

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "", onClick }) => (
  <div onClick={onClick} className={`border ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const whatsappLink =
  "https://wa.me/254797761019?text=Hi%20Rein%2C%20I%20saw%20your%20portfolio%20website%20and%20I%27d%20like%20to%20work%20with%20you.";

const services = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Landing Pages",
    description:
      "High-converting landing pages for startups, coaches, schools, shops, and service businesses that need more leads and inquiries.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Conversion Copywriting",
    description:
      "Clear, persuasive copy for websites, sales pages, email sequences, and outreach campaigns that turn attention into action.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Business Growth Support",
    description:
      "Offer positioning, outreach scripts, website structure, and quick-win improvements to help businesses look professional online.",
  },
];

const projects = [
  {
    title: "R & S Interiors Website Audit",
    category: "Website Audit + Conversion Strategy",
    description:
      "A practical website audit for an interiors business, focused on clearer messaging, stronger service positioning, and making it easier for visitors to understand the offer.",
    challenge:
      "R & S Interiors needed quick, practical feedback on how their online presence could communicate their services more clearly and feel more trustworthy to potential clients.",
    approach:
      "I reviewed their messaging from a customer’s point of view, pointed out where visitors could get confused, and suggested clearer sections, stronger calls-to-action, and more direct service explanations.",
    outcome:
      "The founder said the audit was quick, easy to work through, affordable, and that they looked forward to working together again.",
  },
  {
    title: "Coach Landing Page Concept",
    category: "Landing Page Copy",
    description:
      "A persuasive landing page structure for an online coach selling a 5-day focus program, built around clear benefits, social proof, and a simple call-to-action.",
    challenge:
      "The offer needed to feel simple, valuable, and easy to act on instead of sounding like another generic coaching program.",
    approach:
      "I structured the page around the target audience’s problem, the promise of the program, clear benefits, trust-building sections, and one focused call-to-action.",
    outcome:
      "This sample shows how I turn an idea into a clear landing page flow that can guide visitors toward booking or signing up.",
  },
  {
    title: "Startup Outreach Campaign",
    category: "Email + WhatsApp Copy",
    description:
      "A practical outreach sequence for Kenyan startups, designed to introduce landing page services without sounding generic or pushy.",
    challenge:
      "Many cold messages sound copied, vague, or too salesy, which makes companies ignore them quickly.",
    approach:
      "I created a simple message flow that starts with relevance, points to a possible website improvement, and gives the prospect an easy reason to reply.",
    outcome:
      "This sample shows how thoughtful outreach can feel more personal, direct, and easier for a business owner to respond to.",
  },
];

const testimonials = [
  {
    quote:
      "Rein was quick and easy to work with. His packages were affordable, and we look forward to working with him again.",
    name: "Eva Martha",
    role: "Founder, R & S Interiors",
    logo: "/rs-interiors-logo.png",
  },
];

const packages = [
  {
    name: "Landing Page Starter",
    price: "From KES 15,000",
    note: "Best for a single offer, campaign, service, or lead-generation page.",
    bestFor:
      "For businesses that need one focused page to collect leads or enquiries.",
    includes: [
      "Landing page structure",
      "Conversion-focused copy",
      "Clear call-to-action sections",
      "Mobile-friendly layout guidance",
    ],
  },
  {
    name: "Website Copy Refresh",
    price: "From KES 10,000",
    note: "Best if the website already exists but the message feels weak or unclear.",
    bestFor:
      "For businesses with an existing website that feels unclear, outdated, or weak at converting visitors.",
    includes: [
      "Homepage copy improvement",
      "Offer positioning",
      "Trust-building section ideas",
      "Stronger headlines and calls-to-action",
    ],
  },
  {
    name: "Outreach Growth Kit",
    price: "From KES 7,500",
    note: "Best for cold emails, WhatsApp messages, follow-ups, and prospecting scripts.",
    bestFor:
      "For startups and service businesses that want better messages for email, WhatsApp, or LinkedIn outreach.",
    includes: [
      "Cold email scripts",
      "WhatsApp message flow",
      "Follow-up messages",
      "Simple lead tracking structure",
    ],
  },
];

const proofPoints = [
  {
    title: "Portfolio samples, not fake client claims",
    description:
      "I show realistic sample projects and concept work so you can judge my thinking, structure, and writing style honestly.",
  },
  {
    title: "Before-and-after thinking",
    description:
      "I can break down weak website sections and show how I would improve the headline, offer, proof, and call-to-action.",
  },
  {
    title: "Clear process and deliverables",
    description:
      "Every project is built around practical outcomes: clearer messaging, stronger trust, and easier ways for customers to contact you.",
  },
];

const process = [
  "Understand your business, offer, audience, and current website gaps.",
  "Create a simple structure focused on trust, clarity, and conversion.",
  "Write or design the page so visitors know what you do and why they should contact you.",
  "Polish the final version for professionalism, mobile readability, and stronger calls-to-action.",
];

export default function ReinPortfolioWebsite() {
  const [openPackage, setOpenPackage] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Rein Joel<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#packages" className="hover:text-white">
              Packages
            </a>
            <a href="#proof" className="hover:text-white">
              Proof
            </a>
            <a href="#testimonials" className="hover:text-white">
              Reviews
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="rounded-2xl bg-cyan-400 px-5 text-slate-950 hover:bg-cyan-300">
              Work with me
            </Button>
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden px-5 py-24 md:py-32"
        >
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Conversion-focused copy & landing pages
              </p>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                I help businesses turn their websites into client-generating
                assets.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I’m Rein Joel, a copywriter and landing page strategist helping
                coaches, startups, schools, and service businesses communicate
                clearly, build trust, and get more inquiries online.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button className="h-12 rounded-2xl bg-cyan-400 px-7 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                    Start a project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <a href="#work">
                  <Button
                    variant="outline"
                    className="h-12 rounded-2xl border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10"
                  >
                    View case studies
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10"
            >
              <Card className="rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">
                        Portfolio Snapshot
                      </p>
                      <h2 className="text-2xl font-bold text-white">
                        What I focus on
                      </h2>
                    </div>
                    <Globe2 className="h-8 w-8 text-cyan-300" />
                  </div>

                  <div className="space-y-4">
                    {[
                      "Clear website messaging",
                      "Landing pages built for conversions",
                      "Email and WhatsApp outreach copy",
                      "Professional online presence for growing businesses",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-slate-950/50 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                        <p className="text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Services
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                How I can help
              </h2>
              <p className="mt-4 text-slate-300">
                Simple, practical services for businesses that want a stronger
                online presence without complicated marketing language.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="rounded-3xl border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="bg-white/[0.03] px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Packages
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Service packages
              </h2>
              <p className="mt-4 text-slate-300">
                Choose a focused package depending on what your business needs
                right now: a landing page, stronger website copy, or better
                outreach messages.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {packages.map((item, index) => (
                <Card
                  key={item.name}
                  onClick={() =>
                    setOpenPackage(openPackage === index ? null : index)
                  }
                  className="cursor-pointer rounded-3xl border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <PackageCheck className="h-6 w-6" />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-white">
                        {item.name}
                      </h3>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                        Click for price
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-slate-300">
                      {item.bestFor}
                    </p>

                    {openPackage === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4"
                      >
                        <p className="text-2xl font-black text-white">
                          {item.price}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {item.note}
                        </p>
                        <a
                          href={`https://wa.me/254797761019?text=${encodeURIComponent(
                            `Hi Rein, I am interested in the ${item.name} package. Could you tell me more?`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="mt-4 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
                        >
                          Ask about this package
                        </a>
                      </motion.div>
                    )}

                    <div className="mt-5 space-y-3">
                      {item.includes.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                          <p className="text-sm leading-6 text-slate-300">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Proof
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Honest proof while I grow
              </h2>
              <p className="mt-4 text-slate-300">
                I do not use fake numbers or false testimonials. Instead, I show
                how I think, write, structure pages, and solve real business
                communication problems.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {proofPoints.map((point) => (
                <Card
                  key={point.title}
                  className="rounded-3xl border-white/10 bg-white/5"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white/[0.03] px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Client Review
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Real feedback from work done
              </h2>
              <p className="mt-4 text-slate-300">
                This is the kind of honest proof that builds trust without
                pretending to have fake results or made-up numbers.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-1">
              {testimonials.map((item) => (
                <Card
                  key={item.name}
                  className="rounded-[2rem] border-cyan-400/20 bg-cyan-400/10"
                >
                  <CardContent className="p-8 md:p-10">
                    <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <Quote className="h-10 w-10 text-cyan-300" />
                      <div className="rounded-2xl bg-white p-4">
                        <img
                          src={item.logo}
                          alt="R & S Interiors logo"
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    </div>

                    <p className="max-w-4xl text-2xl font-bold leading-snug text-white md:text-3xl">
                      “{item.quote}”
                    </p>

                    <div className="mt-6">
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-slate-300">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Selected Work
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                  Readable case studies
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                Click a case study to read the challenge, approach, and outcome
                behind the work.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="rounded-3xl border-white/10 bg-slate-950/70"
                >
                  <CardContent className="p-6">
                    <p className="mb-3 text-sm text-cyan-300">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <button
                      onClick={() =>
                        setOpenProject(openProject === index ? null : index)
                      }
                      className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                    >
                      {openProject === index
                        ? "Hide case study"
                        : "Read case study"}{" "}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </button>

                    {openProject === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-6 space-y-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
                      >
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                            Challenge
                          </p>
                          <p className="mt-2 leading-7 text-slate-300">
                            {project.challenge}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                            Approach
                          </p>
                          <p className="mt-2 leading-7 text-slate-300">
                            {project.approach}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                            Outcome
                          </p>
                          <p className="mt-2 leading-7 text-slate-300">
                            {project.outcome}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Process
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Simple process, clear outcome
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                No confusion. No unnecessary complexity. The goal is to help
                your business look trustworthy and make it easier for people to
                contact you.
              </p>
            </div>

            <div className="space-y-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-cyan-400 font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-2 leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                  Have a website idea or business you want to improve?
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Send me a message and I’ll help you figure out what your
                  website or landing page needs to communicate better.
                </p>
              </div>

              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button className="h-12 rounded-2xl bg-cyan-400 px-7 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                  Contact me
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-24 pt-8">
          <div className="mx-auto max-w-6xl">
            <Card className="rounded-[2rem] border-white/10 bg-white/5">
              <CardContent className="p-8 md:p-10">
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Contact
                    </p>
                    <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                      Let’s build something clean and useful.
                    </h2>
                    <p className="mt-4 leading-7 text-slate-300">
                      Reach out for landing pages, website copy, portfolio
                      pages, outreach scripts, or website improvement ideas.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-3xl bg-slate-950/70 p-5 transition hover:bg-slate-900"
                    >
                      <Mail className="h-6 w-6 text-cyan-300" />
                      <div>
                        <p className="text-sm text-slate-400">
                          WhatsApp / Email enquiry
                        </p>
                        <p className="font-semibold text-white">
                          Message me on WhatsApp
                        </p>
                      </div>
                    </a>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-3xl bg-slate-950/70 p-5 transition hover:bg-slate-900"
                    >
                      <Phone className="h-6 w-6 text-cyan-300" />
                      <div>
                        <p className="text-sm text-slate-400">
                          Phone / WhatsApp
                        </p>
                        <p className="font-semibold text-white">
                          +254 797 761 019
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Rein Joel. Built for clarity, trust, and
          conversion.
        </p>
      </footer>
    </div>
  );
}