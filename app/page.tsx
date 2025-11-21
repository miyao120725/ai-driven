"use client"; // Add this at the very top of your file
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import { Input } from "@components/ui/input";

import bg_circle from "@assets/img/bg-01.svg"
import logo from "@assets/img/logo.svg";
const navItems = [
  { label: "Home", active: true },
  { label: "Problem", active: false },
  { label: "Solution", active: false },
  { label: "Works", active: false },
  { label: "Participant", active: false },
  { label: "Ecosystem", active: false },
];

const glowingOrbs = [
  {
    top: "top-[639px]",
    left: "left-[606px]",
    shadow:
      "shadow-[inset_0px_-8px_10px_#e0625cb2,0px_2px_10px_#e0625c80,0px_20px_40px_#e0625c80,0px_-500px_250px_#e0625c]",
    background:
      "[background:radial-gradient(50%_50%_at_56%_41%,rgba(22,26,27,1)_87%,rgba(224,98,92,1)_100%)]",
  },
  {
    top: "top-[639px]",
    left: "left-[732px]",
    shadow:
      "shadow-[inset_0px_-8px_10px_#fdee2fb2,0px_2px_10px_#fdee2f80,0px_20px_40px_#fdee2f80,0px_-500px_250px_#fdee2f]",
    background:
      "[background:radial-gradient(50%_50%_at_56%_41%,rgba(22,26,27,1)_87%,rgba(253,238,47,1)_100%)]",
  },
  {
    top: "top-[639px]",
    left: "left-[795px]",
    shadow:
      "shadow-[inset_0px_-8px_10px_#5e73f1b2,0px_2px_10px_#5e73f180,0px_20px_40px_#5e73f180,0px_-500px_250px_#939ea0]",
    background:
      "[background:radial-gradient(50%_50%_at_56%_41%,rgba(22,26,27,1)_87%,rgba(147,158,160,1)_100%)]",
  },
];

const comparisonCards = [
  {
    title: "The Old Way",
    description:
      "Brittle & Manual. Today's \"smart\" trading relies on slow, manual systems. Quant teams write rules, engineers code them. Every new strategy is a fragile pipeline that doesn't scale.",
    image: "https://c.animaapp.com/mi7lh0u1WhAn7g/img/frame-1.svg",
    left: "left-[120px]",
  },
  {
    title: 'The "AI" Way',
    description:
      "Zero Transparency. The alternative is a total black box. AI bots promise returns with no visibility. \nFor institutions, this risk is unacceptable. For users, it's not participation—it's just a bet.",
    image: "https://c.animaapp.com/mi7lh0u1WhAn7g/img/frame-2.svg",
    left: "left-[740px]",
  },
];

const philosophyColumns = [
  {
    title: "You (The Human):",
    subtitle: "Set the Goals",
    description:
      "Define the boundaries, provide the capital, and establish the mandate.",
  },
  {
    title: "The AI:",
    subtitle: "Suggests the Actions",
    description: "Continuously reads the market and proposes optimal actions.",
  },
  {
    title: "Neberu (The Framework):",
    subtitle: "Executes & Verifies",
    description:
      "Intercepts every AI suggestion, validates it against your rules, executes safely, and creates an immutable audit trail.",
  },
];

const architectureSteps = [
  {
    title: "The Universal Data Layer",
    description:
      "Neberu translates chaos into order. It unifies disparate market data, APIs, and account information (from CEX, DEX, and brokers) into one consistent, rules-based language.",
    top: "top-[4755px]",
  },
  {
    title: "The AI Decision Core",
    description:
      'This is the modular brain. Instead of hard-coded rules, models receive the unified market state and output clear actions: "how to adjust positions," "how to hedge." The core can be upgraded without breaking the system.',
    top: "top-[5020px]",
  },
  {
    title: "The Control & Execution Shell",
    description:
      'The "adult supervision." This shell stands at the gate, validating every AI decision against your pre-set risk, compliance, and capital limits. Only permitted actions are executed, and everything is logged.',
    top: "top-[5285px]",
  },
];

export default function Screen() {
  const [status,setStatus] = useState<number>(0);
  const num = useRef(0)
  
  useEffect(()=>{
    setInterval(()=>{
      num.current++;
      setStatus(num.current);
    },2000)
  },[])
  return (
    <div
      className="pt-5 bg-[#15191a] overflow-hidden w-full min-w-[1000px] min-h-[8278px] relative"
      data-model-id="1:2"
    >
      <Image
        className="absolute top-0 left-0 w-[1440px] h-[2002px]"
        alt="Ellipse"
        src={bg_circle}
      />

      <nav className="flex flex-col items-start gap-2.5 pl-4 pr-4 py-2 absolute top-8 translate-[-50%] left-[50%] h-[60px] rounded-[20px] shadow-[0px_9.66px_38.62px_#61e4fa1f] z-10 bg-[linear-gradient(47deg,rgba(97,228,250,0.06)_0%,rgba(217,217,217,0.06)_100%)] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="inline-flex items-center gap-8 relative flex-[0_0_auto] mr-[-8.00px]">
          <div className="relative w-32 h-6">
            <Image
              className="w-32 h-6"
              alt="Vector"
              src={logo}
            />
            {/* <div className="top-0 left-[58px] w-[70px] [font-family:'Inter',Helvetica] text-white text-[19.9px] absolute font-normal tracking-[0] leading-[normal]">
              Neberu
            </div> */}
          </div>

          <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] cursor-pointer font-normal text-base text-center tracking-[0] hover:text-white leading-4 whitespace-nowrap transition-colors hover:text-white"
                style={{ color: item.active ? "white" : "#a5acad" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button className="px-[18px] py-3.5 h-auto bg-[linear-gradient(90deg,rgba(194,203,205,1)_0%,rgba(237,249,251,1)_50%,rgba(198,208,209,1)_100%)] hover:opacity-90 transition-opacity rounded-2xl">
            <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#15191a] text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              request Demo
            </span>
          </Button>
        </div>
      </nav>

      <header className="flex flex-col w-[840px] translate-x-[-50%] items-center gap-8 absolute top-[180px] left-[50%]">
        <h1 className="relative w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-[56px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          AI-Driven Trading. <br />
          Human-Defined Boundaries.
        </h1>

        <p className="relative self-stretch [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-xl text-center tracking-[0] leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Neberu is the institutional-grade framework for automated trading. We
          delegate complex decision-making to AI, while ensuring every action is
          executed within a controllable, verifiable, and fully-auditable
          ecosystem.
        </p>
      </header>

      <div className="inline-flex items-center gap-6 absolute top-[516px] left-[50%] translate-y-[-1rem] translate-x-[-50%] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Button className="inline-flex items-center bg-center bg-no-repeat bg-cover shadow-none  h-25 w-84 bg-[url('@assets/img/btn-01.png')] justify-center gap-4 px-6 py-4 bg-[langth:100%]  hover:bg-[linear-gradient(47deg,rgba(97,228,250,0.1)_0%,rgba(217,217,217,0.1)_100%)] transition-colors">
          {/* <span className="relative w-fit [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#eaf6f8] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Explore the Application&nbsp;&nbsp;&gt;
          </span> */}
        </Button>
      </div>

      <img
        className="absolute top-[658px] left-9 w-[1367px] h-[684px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/ellipse-3.svg"
      />

      <img
        className="absolute top-[520px] left-[-91px] w-[1461px] h-[972px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/ellipse-13.svg"
      />

      <img
        className="absolute top-[641px] left-[293px] w-12 h-[31px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/ellipse-16.svg"
      />

      <img
        className="absolute top-[475px] left-[291px] w-[1161px] h-[896px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/ellipse-14.svg"
      />

      {glowingOrbs.map((orb, index) => (
        <div
          key={index}
          className={`absolute ${orb.top} ${orb.left} w-[39px] h-[39px] rounded-[19.5px] ${orb.shadow} ${orb.background}`}
        />
      ))}

      <img
        className="absolute top-0 left-[419px] w-[539px] h-[690px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/ellipse-12.svg"
      />

      <section className="flex flex-col w-[840px] items-center justify-center gap-8 absolute top-[1271px] left-[50%] translate-x-[-50%]">
        <h2 className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal]">
          Stop Guessing. Start Controlling.
        </h2>

        <p className="relative self-stretch [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] text-center tracking-[0] leading-[33px]">
          Whenther you're an institution needing an auditable AI framework or an
          individual ready to enter the world of AI trading, Neberu is the new
          standard.
        </p>
      </section>

      <section className="absolute top-[2102px] left-[50%] translate-x-[-50%] w-[1200px]">
        <h2 className="bg-[linear-gradient(180deg,rgba(155,155,155,1)_0%,rgba(91,98,100,1)_53%,rgba(91,98,100,0)_90%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-[56px] tracking-[0] leading-[normal]">
          Trading is Run by Machines. <br />
          The "Brain" is Still a Black Box
        </h2>

        <div className="flex gap-[60px]">
          {comparisonCards.map((card, index) => (
            <Card
              key={index}
              className="w-[580px] h-[429px] rounded-[20px] shadow-[0px_9.66px_38.62px_#61e4fa1f] bg-[linear-gradient(0deg,rgba(21,25,26,1)_0%,rgba(21,25,26,1)_100%),linear-gradient(47deg,rgba(97,228,250,0.03)_0%,rgba(217,217,217,0.03)_100%)] border-0"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-right flex justify-end align-middle">
                  <img
                  className="w-[222px] h-[195px] mb-6"
                  alt="Frame"
                  src={card.image}
                />
                </div>
                <h3 className="bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-[28px] tracking-[0] leading-[normal] whitespace-nowrap mb-4">
                  {card.title}
                </h3>
                <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="absolute top-[2925px] left-[50%] translate-x-[-50%] w-210">
        <h2 className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#a5adae] text-[56px] text-center tracking-[0] leading-[normal]">
          The power of AI is ready. <br />
          The infrastructure to trust it is not.
          <br /> Until now.
        </h2>
      </section>

      <section className="absolute top-[3474px] left-[50%] translate-x-[-50%] w-[1200px] h-[826px]">
        <div className="absolute top-0 left-0 w-[396px] h-[86px]">
          <h2 className="absolute text-white top-0 left-0 [text-shadow:0px_0px_4px_#00000040] bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [font-family:'SF_Pro-Semibold',Helvetica] font-normal  text-4xl text-left">
            The&nbsp; 
            <span className="[text-shadow:0px_0px_6px_#61e4fa] [font-family:'SF_Pro-Semibold',Helvetica] text-[#61e4fa] text-4xl text-center font-normal">
            Neberu
          </span>&nbsp;Philosophy: 
          <br />
            Delegate, not surrender
          </h2>
         
        </div>

        <p className="absolute top-[100px] left-0 w-[1015px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px]">
          Neberu lets AI handle the heavy lifting—reading markets, tuning
          parameters, spotting opportunities—while you keep all the guardrails.
        </p>

        <div className="absolute top-[271px] left-0 flex gap-[61px]">
          {philosophyColumns.map((column, index) => (
            <>
            <div
              key={index}
              className="flex flex-col items-start gap-8"
              style={{
                maxWidth: index === 2 ? "346px" : index === 1 ? "275px" : "282px",
              }}
            >
              <div className="flex flex-col items-start gap-2">
                <h3 className="bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-[28px] tracking-[0] leading-[normal]">
                  {column.title}
                </h3>
                <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px]">
                  {column.subtitle}
                </p>
              </div>
              <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px]">
                {column.description}
              </p>
            </div>
            {
              index<2?<div className="w-px h-[229px] bg-[linear-gradient(180deg,rgba(21,25,26,1)_0%,rgba(165,165,165,1)_46%,rgba(21,25,26,1)_100%)]" />:null
            }
            </>
          ))}
        </div>

        <img
          className="absolute top-[562px] left-px w-[1199px] h-[264px]"
          alt="Frame"
          src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/frame.svg"
        />
      </section>

      <section className="absolute top-[4380px] left-[50%] translate-x-[-50%] w-[1200px]">
        <h2 className="absolute top-0 left-[495px] bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
          How It Works
        </h2>

        <p className="absolute top-[59px] left-[378px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px] whitespace-nowrap">
          A Closed-Loop Architecture for Verifiable AI
        </p>

        <div className="absolute top-[142px] left-[525px] w-[150px] h-[150px] bg-[#15191a] rounded-[100px] shadow-[0px_9.66px_50px_#61e4fa]" />

        <img
          className="absolute top-[201px] left-[548px] w-[104px] h-8"
          alt="Group"
          src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/group-5.png"
        />

        {architectureSteps.map((step, index) => (
          <div key={index}>
            <img
              className={`absolute ${step.top === "top-[4755px]" ? "top-[372px]" : step.top === "top-[5020px]" ? "top-[636px]" : "top-[902px]"} left-[94px] w-[1012px] h-[216px]`}
              alt="Vector"
              src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/vector.svg"
            />
            <h3
              className={`absolute ${step.top === "top-[4755px]" ? "top-[375px]" : step.top === "top-[5020px]" ? "top-[640px]" : "top-[905px]"} left-[50%] translate-x-[-50%] bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-[28px] tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {step.title}
            </h3>
            <p
              className={`absolute ${step.top === "top-[4755px]" ? "top-[440px]" : step.top === "top-[5020px]" ? "top-[705px]" : "top-[970px]"} left-[50%] translate-x-[-50%] w-[${step.title === "The AI Decision Core" ? "714px" : step.title === "The Universal Data Layer" ? "671px" : "669px"}] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] text-center tracking-[0] leading-[33px]`}
            >
              {step.description}
            </p>
          </div>
        ))}
      </section>

      <section className="absolute top-[5657px] left-[50%] translate-x-[-50%] w-[1200px]">
        <h2 className="absolute top-0 left-[310px] [text-shadow:0px_0px_4px_#00000040] bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
          Institutional Power. Universal Access
        </h2>

        <p className="absolute top-[59px] left-[177px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px] whitespace-nowrap">
          Neberu bridges the gap, offering the same core infrastructure to all
          market participants.
        </p>

        <Card className="absolute top-[172px] left-[100px] w-[1000px] h-[400px] rounded-[20px] shadow-[0px_9.66px_38.62px_#61e4fa1f] bg-[linear-gradient(0deg,rgba(21,25,26,1)_0%,rgba(21,25,26,1)_100%),linear-gradient(47deg,rgba(97,228,250,0.03)_0%,rgba(217,217,217,0.03)_100%)] border-0">
          <CardContent className="p-8 relative h-full">
            <h3 className="bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
              For Institutions & Funds
            </h3>

            <p className="mt-[9px] w-[480px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px]">
              A Framework for Compliance and Scale.
            </p>

            <Button className="absolute top-[201px] left-8 px-[18px] py-3.5 h-auto bg-[linear-gradient(90deg,rgba(194,203,205,1)_0%,rgba(237,249,251,1)_50%,rgba(198,208,209,1)_100%)] hover:opacity-90 transition-opacity rounded-2xl">
              <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#15191a] text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                Schedule An Enterprise Demo
              </span>
            </Button>

            <p className="absolute top-[269px] left-8 w-[936px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#a8b0b2] text-[22px] tracking-[0] leading-[33px]">
              Stop building brittle infrastructure. Plug your proprietary models
              into Neberu. Move from an untrusted black box to a fully
              auditable, compliant, and scalable system. Manage risk, ensure
              compliance, and deploy AI-driven strategies with confidence.
            </p>

            <div className="absolute top-2 left-[592px] w-[400px] h-[225px]">
              <img
                className="w-full h-full"
                alt="Img"
                src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/9a8165ba6b56f173d96bb229323b4097-1.png"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(21,25,26,0)_0%,rgba(21,25,26,1)_100%)]" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="absolute top-[6477px] bg-[url('https://c.animaapp.com/mi7lh0u1WhAn7g/img/group.png')] bg-size-[80%] left-0 w-[100%] h-[900px] bg-[#15191a]">
        
        <h2 className="absolute w-[47.99%] h-[4.78%] top-[8.89%] left-[50%] translate-x-[-50%] [text-shadow:0px_0px_4px_#00000040] bg-[linear-gradient(90deg,rgba(149,156,157,1)_0%,rgba(240,253,255,1)_51%,rgba(149,156,157,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
          More Than a Platform. An Evolving Standard
        </h2>
        <div className="inline-flex items-center justify-center gap-2.5 p-3 absolute top-[350px] left-[50%] translate-x-[-50%] bg-[#61e4fa] rounded-2xl">
          <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#15191a] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
            The Strategy Hub
          </span>
        </div>

        <p className="absolute w-[56.11%] h-[14.00%] top-[47.11%] left-[21.94%] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[28px] text-center tracking-[0] leading-[42px]">
          <span className="text-[#e6f1f0]">
            A "strategy economy" built on our framework.{" "}
          </span>
          <span className="text-[#a5adae80]">
            Define your strategy, run it on your capital, or monetize it by
            letting others subscribe. The framework is the trust layer for all
            participants.
          </span>
        </p>
      </section>

      <div className="absolute top-[7497px] left-[50%] translate-x-[-50%] w-[260px] h-[180px]">
        <img
          className="absolute top-0 left-[7px] w-[246px] h-[77px]"
          alt="Group"
          src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/group-22.png"
        />
        <div className="w-[99.23%] h-[49.26%] top-[50.74%] left-0 [font-family:'Inter',Helvetica] text-white text-[73.5px] absolute font-normal tracking-[0] leading-[normal]">
          Neberu
        </div>
      </div>

      <div className="absolute top-[8193px] left-[-190px] w-[1440px] h-[287px] bg-[#61e4fa] rounded-[720px/143.5px] blur-[87.45px]" />

      <div className="absolute top-[8193px] left-[909px] w-[1440px] h-[287px] bg-[#ffeabc] rounded-[720px/143.5px] blur-[87.45px]" />

      <div className="absolute top-[8238px] left-0 w-[1440px] h-[218px] bg-[#fefeff] rounded-[720px/109px] blur-[25px]" />

      <footer className="absolute top-[7829px] left-[50%] translate-x-[-50%] w-[1202px] h-[158px]">
        <div className="absolute top-0 left-0 w-[375px] h-[102px] flex flex-col gap-6">
          <h3 className="w-[234px] h-[22px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[22px] tracking-[-0.66px] leading-[22px] whitespace-nowrap">
            Sign up for our newsletter
          </h3>

          <div className="w-[375px] h-14 relative">
            <div className="absolute top-0 left-0 w-[373px] h-14 rounded-[20px] border border-solid border-[#ffffff4c] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]" />

            <Input
              placeholder="Your Email"
              className="absolute top-0 left-0 w-[373px] h-14 bg-transparent border-0 px-5 py-4 text-white placeholder:text-white placeholder:opacity-50 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-base"
            />

            <Button className="px-5 py-4 h-auto absolute top-1 left-[252px] bg-white shadow-[0px_2px_20px_#ffffff99] hover:bg-white/90 transition-colors rounded-2xl">
              <span className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                Subscribe
              </span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-[216px] items-start gap-4 absolute top-0 left-[984px]">
          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'SF_Pro-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
            SOCIALS
          </h3>

          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="https://c.animaapp.com/mi7lh0u1WhAn7g/img/frame-2147256338.svg"
          />
        </div>

        <p className="absolute top-[139px] left-0 opacity-50 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
          © 2025 Neberu. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};
