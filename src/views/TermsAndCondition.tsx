"use client";

import { type ReactNode } from "react";
import TermsHero from "@/components/TermsHero";
import { Link } from "@/lib/react-router";
import { CONTACT } from "@/constants/contactInfo";
import {
  LandingSectionShell,
  landingSectionSubheadingClass,
} from "@/components/ui/landing-section";

const paragraphClass =
  "text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed mb-4";
const headingClass = `${landingSectionSubheadingClass} text-zinc-900 font-inter-display mb-4`;
const linkClass = "text-blue-600 hover:underline";

const sectionDivider = (
  <div
    className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-t border-dashed border-zinc-200"
    aria-hidden
  />
);

const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
    <span>{children}</span>
  </li>
);

const TermsAndCondition = () => {
  return (
    <div className="relative z-10">
      <TermsHero />
      {sectionDivider}

      <LandingSectionShell className="pt-8 md:pt-10">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-8 text-sm italic text-zinc-500 font-inter-display sm:mb-10 sm:text-base">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="max-w-none">
                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    1. Introduction
                  </h3>
                  <p className={paragraphClass}>
                    Welcome to CYBERLABS INDIA (&quot;WE&quot;, &quot;OUR&quot;, &quot;US&quot;).
                  </p>
                  <p className={paragraphClass}>
                    These TERMS &amp; CONDITIONS (&quot;TERMS&quot;) govern your access and use of our website, learning platform, simulators, and related services (collectively, the &quot;PLATFORM&quot;).
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    By using the Platform, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
                  </p>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    2. Definitions
                  </h3>
                  <p className={paragraphClass}>
                    For clarity:
                  </p>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>&quot;PLATFORM&quot; refers to cyberlabs-india.com, its subdomains, web applications, and associated online services.</ListItem>
                    <ListItem>&quot;USER&quot;, &quot;YOU&quot;, or &quot;LEARNER&quot; means any individual or entity accessing or using our Platform.</ListItem>
                    <ListItem>&quot;PROGRAMS&quot; refer to online courses, labs, simulators, or certifications offered through CYBERLABS INDIA.</ListItem>
                    <ListItem>&quot;CONTENT&quot; means all materials, videos, exercises, text, graphics, and intellectual property available on the Platform.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    3. Eligibility
                  </h3>
                  <p className={paragraphClass}>
                    To register and access CYBERLABS INDIA:
                  </p>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>You must provide accurate and complete information during signup.</ListItem>
                    <ListItem>We reserve the right to deny or revoke access if false information or misuse is detected.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    4. Account Registration &amp; Security
                  </h3>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>You are responsible for maintaining the confidentiality of your login credentials.</ListItem>
                    <ListItem>Any activity under your account is deemed to be by you.</ListItem>
                    <ListItem>Notify us immediately at <a href={`mailto:${CONTACT.supportEmail}`} className={linkClass}>{CONTACT.supportEmail}</a> if you suspect unauthorized use.</ListItem>
                    <ListItem>We are not liable for losses due to compromised credentials.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    5. Use of Platform
                  </h3>
                  <p className={paragraphClass}>
                    You agree to:
                  </p>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>Use the Platform solely for lawful educational purposes.</ListItem>
                    <ListItem>Not attempt to hack, reverse-engineer, disrupt, or exploit the Platform or simulator environments.</ListItem>
                    <ListItem>Not share course materials, simulations, or credentials with others.</ListItem>
                    <ListItem>Respect all intellectual property and copyright laws.</ListItem>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    Violation may lead to account suspension or permanent ban without refund.
                  </p>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    6. Programs, Labs &amp; Simulators
                  </h3>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>Access to labs and simulators is granted for the duration of your subscription or course.</ListItem>
                    <ListItem>You must not replicate, distribute, or use the lab environment or simulator code for personal gain.</ListItem>
                    <ListItem>All exercises, attack simulations, and defense drills are educational and sandboxed - no real networks or systems are targeted.</ListItem>
                    <ListItem>We may update or modify course content at any time for improvement.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    7. Payments &amp; Refund Policy
                  </h3>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>All fees are displayed in INR (₹) or equivalent currency and are non-transferable.</ListItem>
                    <ListItem>Payments are processed via secure gateways.</ListItem>
                    <ListItem>Refunds are available only under CYBERLABS INDIA&apos;s Refund Policy, accessible at <Link to="/refund-policy" className={linkClass}>cyberlabs-india.com/refund-policy</Link>.</ListItem>
                    <ListItem>We may revise pricing or offers periodically.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    8. Intellectual Property Rights
                  </h3>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>All materials, simulators, graphics, videos, and course content are intellectual property of CYBERLABS INDIA.</ListItem>
                    <ListItem>You are granted a limited, non-exclusive, non-transferable license to use the Platform for personal learning only.</ListItem>
                    <ListItem>You may not copy, modify, distribute, sell, or reproduce any part of our content without written permission.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    9. Certificates &amp; Assessments
                  </h3>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>Certificates are issued upon course or track completion.</ListItem>
                    <ListItem>We reserve the right to verify identity, performance, or eligibility before awarding certificates.</ListItem>
                    <ListItem>Certificates represent learning completion, not professional licensure.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    10. Third-Party Links &amp; Tools
                  </h3>
                  <p className={paragraphClass}>
                    Our Platform may link to third-party websites or tools (e.g., certification bodies, learning tools).
                  </p>
                  <p className={paragraphClass}>
                    We are not responsible for their content, policies, or practices.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    Use them at your own discretion.
                  </p>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    11. Data Privacy
                  </h3>
                  <p className={paragraphClass}>
                    We collect and process your data as outlined in our <Link to="/privacy-policy" className={linkClass}>Privacy Policy</Link>.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    By using the Platform, you consent to our data handling practices, including analytics and communications.
                  </p>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    12. Limitation of Liability
                  </h3>
                  <p className={paragraphClass}>
                    To the fullest extent permitted by law:
                  </p>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>CYBERLABS INDIA is not liable for any loss, damage, or data breach arising from misuse of the Platform.</ListItem>
                    <ListItem>Training simulators are for educational purposes only; we are not responsible for any real-world system misuse based on them.</ListItem>
                    <ListItem>Our total liability shall not exceed the amount paid by you for the specific course or service.</ListItem>
                  </ul>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    13. Suspension &amp; Termination
                  </h3>
                  <p className={paragraphClass}>
                    We may suspend or terminate your account if:
                  </p>
                  <ul className="mb-4 space-y-2.5">
                    <ListItem>You breach these Terms.</ListItem>
                    <ListItem>Engage in unethical or malicious activity within simulators.</ListItem>
                    <ListItem>Misuse intellectual property or share confidential training materials.</ListItem>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    Upon termination, your access to all courses, labs, and simulators will be revoked immediately.
                  </p>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    14. Changes to Terms
                  </h3>
                  <p className={paragraphClass}>
                    We may modify these Terms periodically.
                  </p>
                  <p className={paragraphClass}>
                    Updates will be posted on this page with the &quot;Last Updated&quot; date.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    Continued use after such updates implies your acceptance of the revised Terms.
                  </p>
                </div>

                <div className="mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12">
                  <h3 className={headingClass}>
                    15. Governing Law and Jurisdiction
                  </h3>
                  <p className={paragraphClass}>
                    These Terms are governed by the laws of India, with jurisdiction state of Maharastra.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    Any disputes shall be subject to the exclusive jurisdiction of Maharashtra courts.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className={headingClass}>
                    16. Contact Information
                  </h3>
                  <p className={paragraphClass}>
                    For any questions or concerns about these Terms, please reach out to:
                  </p>
                  <div className="border border-dashed border-zinc-200 bg-white/90 p-4 sm:p-6">
                    <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display mb-2">
                      <strong>Registered Entity:</strong> {CONTACT.registeredEntity}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display mb-2">
                      <strong>Office Address:</strong><br />
                      {CONTACT.officeAddressIndia[0]}<br />
                      {CONTACT.officeAddressIndia[1]}<br />
                      {CONTACT.officeAddressIndia[2]}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display">
                      <strong>Email:</strong> <a href={`mailto:${CONTACT.supportEmail}`} className={linkClass}>{CONTACT.supportEmail}</a>
                    </p>
                  </div>
                </div>

                <div className="border border-dashed border-zinc-200 bg-zinc-50/80 p-4 sm:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                    By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions.
                  </p>
                </div>
              </div>
        </div>
      </LandingSectionShell>
    </div>
  );
};

export default TermsAndCondition;
