"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Receipt, Gavel, ListTodo, FileText } from "lucide-react";
import joanIcon from "@/icons/joan.webp";
import { FloatingCard } from "@/components/FloatingCard";
import { BackgroundBlob } from "@/components/BackgroundBlob";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-0 overflow-x-hidden bg-[#f6f7fb] text-[#0f172a] lg:min-h-screen dark:bg-[#0a0a0a] dark:text-slate-100">
      <ThemeToggle />

      <div className="block lg:hidden">
        <BackgroundBlob
          animateY={[0, -10, 0]}
          duration={5}
          className="-left-10 bottom-[150px] h-[36.05px] w-[75px] rotate-[170.73deg] rounded-[90px] bg-[#E3EAF8] dark:bg-[#E3EAF8]/10"
        />
        <BackgroundBlob
          animateY={[0, 10, 0]}
          duration={6}
          className="-left-6 bottom-[105px] h-[36.05px] w-[80px] -rotate-180 rounded-l-[90px] bg-[#E3EAF8] dark:bg-[#E3EAF8]/10"
        />
        <BackgroundBlob
          animateY={[0, -15, 0]}
          duration={7}
          className="-left-2 bottom-[60px] h-[36.05px] w-[134.19px] -rotate-180 rounded-l-[90px] bg-[#E3EAF8] dark:bg-[#E3EAF8]/10"
        />
        <BackgroundBlob
          animateY={[0, 15, 0]}
          duration={5.5}
          className="right-[-40px] top-[110px] h-[36.05px] w-[99.06px] rotate-[9.27deg] rounded-l-[90px] rounded-r-[15px] bg-[#E3EAF8] dark:bg-[#E3EAF8]/10"
        />
        <BackgroundBlob
          animateY={[0, -10, 0]}
          duration={6.5}
          className="right-[-25px] top-[155px] h-[36.05px] w-[143.2px] rounded-l-[90px] bg-[#E3EAF8] dark:bg-[#E3EAF8]/10"
        />
        <BackgroundBlob
          animateY={[0, 10, 0]}
          duration={4.5}
          className="right-[-15px] top-[200px] h-[36.05px] w-[86.12px] rounded-l-[90px] bg-[#E3EAF8] dark:bg-[#E3EAF8]/10"
        />
      </div>

      <div className="hidden lg:block">
        <BackgroundBlob
          animateY={[0, -20, 0]}
          duration={6}
          className="-left-28 bottom-[290px] h-[88px] w-[280px] -rotate-[10deg] rounded-full bg-[#e7ecf8] dark:bg-[#e7ecf8]/10"
        />
        <BackgroundBlob
          animateY={[0, 15, 0]}
          duration={7}
          className="-left-16 bottom-[180px] h-[88px] w-[300px] rounded-full bg-[#e7ecf8] dark:bg-[#e7ecf8]/10"
        />
        <BackgroundBlob
          animateY={[0, -15, 0]}
          duration={5}
          className="-left-8 bottom-[70px] h-[88px] w-[480px] rounded-full bg-[#e7ecf8] dark:bg-[#e7ecf8]/10"
        />
        <BackgroundBlob
          animateY={[0, 20, 0]}
          duration={8}
          className="right-[-78px] top-[112px] h-[88px] w-[280px] rotate-[8deg] rounded-full bg-[#e7ecf8] dark:bg-[#e7ecf8]/10"
        />
        <BackgroundBlob
          animateY={[0, -20, 0]}
          duration={6.5}
          className="right-[-45px] top-[224px] h-[88px] w-[400px] rounded-full bg-[#e7ecf8] dark:bg-[#e7ecf8]/10"
        />
        <BackgroundBlob
          animateY={[0, 15, 0]}
          duration={5.5}
          className="right-[-24px] top-[334px] h-[88px] w-[300px] rounded-full bg-[#e7ecf8] dark:bg-[#e7ecf8]/10"
        />
      </div>

      <section className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-6 sm:px-6 md:px-10 md:pt-8 lg:h-full lg:px-16 lg:pt-10">
        <motion.div
          className="relative z-20 max-w-[580px] self-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="w-full max-w-[320px] text-left text-[38px] font-light leading-[1.08] tracking-[-0.03em] text-[#7377a8] sm:w-auto sm:max-w-none sm:text-[43px] lg:text-[56px] dark:text-slate-400"
          >
            A single platform to{" "}
            <span className="font-semibold text-[#6971aa] dark:text-slate-200">
              manage
            </span>{" "}
            every part of your{" "}
            <span className="font-semibold text-[#6971aa] dark:text-slate-200">
              legal work
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 w-full max-w-[320px] text-left text-[18px] font-normal leading-[1.45] text-[#3955ff] sm:w-[70%] sm:max-w-[460px] sm:text-[20px] lg:text-[19px] dark:text-[#6a84ff]"
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication - all in one system.
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10 hidden lg:block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FloatingCard
            variants={itemVariants}
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
            className="float-c1 absolute right-[160px] top-[290px] w-[430px] h-[96px] p-4"
            color="blue"
            rotation="rotate-[11deg]"
            icon={Receipt}
            label="Billing"
          />

          <FloatingCard
            variants={itemVariants}
            whileHover={{ rotate: -8, scale: 1.05 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
            className="float-c2 absolute left-[240px] top-[430px] w-[360px] h-[96px] p-4"
            color="orange"
            rotation="-rotate-[11deg]"
            icon={Gavel}
            label="Matters"
          />

          <FloatingCard
            variants={itemVariants}
            whileHover={{ rotate: 4, scale: 1.05 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
            className="float-c3 absolute left-[620px] top-[430px] h-[96px] w-[390px] pl-10"
            color="purple"
            rotation="rotate-[4deg]"
          >
            <div className="h-11 w-1 rounded-full bg-[#eb7a24]" />

            <div className="grid h-11 w-11 ml-2 place-items-center rounded-full bg-[#f4c8ab]">
              <img
                src={joanIcon.src}
                alt="Avatar"
                className="h-7 w-7 object-contain"
              />
            </div>

            <div className="min-w-0 ml-4">
              <p className="truncate text-[16px] font-normal leading-none text-[#0c144b]">
                John Doe - Portal
              </p>

              <p
                className="mt-1 max-w-[180px] text-[11px] leading-tight text-[#797DA7]"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                }}
              >
                Hey! Could you please review a document for me?
              </p>

              <p className="mt-1 truncate text-[11px] leading-none text-[#6a77bc]">
                MAT-2233 - 2 h ago
              </p>
            </div>
          </FloatingCard>

          <FloatingCard
            variants={itemVariants}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
            className="float-c1 absolute left-[calc(50%-180px)] top-[572px] w-[430px] h-[96px] p-4"
            color="dark"
            rotation=""
            icon={ListTodo}
            label="Tasks"
          />

          <FloatingCard
            variants={itemVariants}
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
            className="float-c2 absolute left-[calc(50%+280px)] top-[540px] w-[430px] h-[96px] p-4"
            color="dark"
            rotation="-rotate-[10deg]"
            icon={FileText}
            label="Documents"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 mt-10 lg:hidden pb-12 w-full max-w-[340px] mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FloatingCard
            isMobile
            variants={itemVariants}
            className="float-c1 w-full h-[76px] p-3"
            color="blue"
            icon={Receipt}
            label="Billing"
          />

          <FloatingCard
            isMobile
            variants={itemVariants}
            className="float-c2 w-full h-[76px] p-3"
            color="orange"
            icon={Gavel}
            label="Matters"
          />

          <FloatingCard
            isMobile
            variants={itemVariants}
            className="float-c3 w-full h-[76px] pl-8"
            color="purple"
          >
            <div className="h-8 w-1 rounded-full bg-[#eb7a24]" />
            <div className="grid h-9 w-9 ml-2 place-items-center rounded-full bg-[#f4c8ab] shrink-0">
              <img
                src={joanIcon.src}
                alt="Avatar"
                className="h-6 w-6 object-contain"
              />
            </div>
            <div className="min-w-0 ml-3">
              <p className="truncate text-[14px] font-normal leading-none text-[#0c144b]">
                John Doe - Portal
              </p>
              <p
                className="mt-1 max-w-[160px] text-[10px] leading-tight text-[#797DA7]"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                }}
              >
                Hey! Could you please review a document for me?
              </p>
              <p className="mt-1 truncate text-[10px] leading-none text-[#6a77bc]">
                MAT-2233 - 2 h ago
              </p>
            </div>
          </FloatingCard>

          <FloatingCard
            isMobile
            variants={itemVariants}
            className="float-c1 w-full h-[76px] p-3"
            color="dark"
            icon={ListTodo}
            label="Tasks"
          />

          <FloatingCard
            isMobile
            variants={itemVariants}
            className="float-c2 w-full h-[76px] p-3"
            color="dark"
            icon={FileText}
            label="Documents"
          />
        </motion.div>
      </section>
    </main>
  );
}
