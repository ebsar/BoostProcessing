import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iosGlassCard = "backdrop-blur-[30px] backdrop-saturate-[180%] bg-white/[0.03] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]";
  
  const sectionTitle = "font-heading text-2xl font-bold text-[#D1FFBD] mt-12 mb-6 tracking-tight uppercase";
  const paragraphStyle = "text-gray-400 leading-relaxed text-lg font-light mb-6";

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#D1FFBD] selection:text-black pb-20">
      
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D1FFBD]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.a 
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#D1FFBD] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 inline-block hover:underline"
          >
            ← Back to Home
          </motion.a>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-4"
          >
            PRIVACY <span className="text-[#D1FFBD]">POLICY</span>
          </motion.h1>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-xs">Last updated March 19, 2026</p>
        </div>
      </section>

      <section className="px-6">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`max-w-4xl mx-auto p-8 md:p-16 rounded-[2.5rem] ${iosGlassCard}`}
        >
          <p className={paragraphStyle}>
            This Privacy Notice for <strong>Boost Solution Processing LLC</strong> (doing business as <strong>Boost Solution</strong>) ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services").
          </p>

          <h2 className={sectionTitle}>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <p className={paragraphStyle}>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services. This includes:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-400 space-y-2">
            <li>Names, phone numbers, and email addresses.</li>
            <li>Information about your current payment processing.</li>
            <li>Financial data (when necessary and with your consent).</li>
          </ul>

          <h2 className={sectionTitle}>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p className={paragraphStyle}>
            We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information to:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-400 space-y-2">
            <li>Respond to user inquiries and offer support.</li>
            <li>Send marketing and promotional communications (you can opt-out at any time).</li>
            <li>Maintain the security and operation of our Services.</li>
          </ul>

          <h2 className={sectionTitle}>3. WHEN AND WITH WHOM DO WE SHARE YOUR DATA?</h2>
          <p className={paragraphStyle}>
            We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us. These include Sales & Marketing Tools, Social Networks, and Finance Tools.
          </p>

          <h2 className={sectionTitle}>4. YOUR PRIVACY RIGHTS</h2>
          <p className={paragraphStyle}>
            Depending on your location (such as Canada or specific US States), you have rights that allow you greater access to and control over your personal information. You may:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-400 space-y-2">
            <li>Request access to and a copy of your personal information.</li>
            <li>Request rectification or erasure of your data.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>

          <h2 className={sectionTitle}>5. CONTACT US</h2>
          <p className={paragraphStyle}>
            If you have questions or comments about this notice, you may email us at 
            <a href="mailto:bejtullah@boostatm.com" className="text-[#D1FFBD] ml-1 hover:underline">bejtullah@boostatm.com</a> or contact us by post at:
          </p>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-white font-bold mb-1">Boost Solution Processing LLC</p>
            <p className="text-gray-400">Asllan Klecka PN</p>
            <p className="text-gray-400">Rahovec, Kosovo 21000</p>
          </div>
        </motion.div>
      </section>

      <footer className="mt-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
          © {new Date().getFullYear()} Boost Solution Processing LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Policy;