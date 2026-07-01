"use client";

import PrivacyHero from "@/components/PrivacyHero";
import { CONTACT } from "@/constants/contactInfo";
import { LandingSectionShell } from "@/components/ui/landing-section";
import {
  ListItem,
  closingBoxClass,
  contactBoxClass,
  headingClass,
  linkClass,
  paragraphClass,
  sectionClass,
  sectionDivider,
  subheadingClass,
} from "@/components/legal/legalPageShared";

const PrivacyPolicy = () => {
  return (
    <div className="relative z-10">
      <PrivacyHero />
      {sectionDivider}

      <LandingSectionShell className="pt-12 md:pt-16">
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-8 text-sm italic text-zinc-500 font-inter-display sm:mb-10 sm:text-base">
            Last Updated: October 2025
          </p>

          <div className="max-w-none">
            <div className={sectionClass}>
              <h3 className={headingClass}>1. Introduction</h3>
              <p className={paragraphClass}>
                At CYBERLABS INDIA (&quot;WE&quot;, &quot;OUR&quot;, &quot;US&quot;), your privacy is important to us.
              </p>
              <p className={paragraphClass}>
                This Privacy Policy explains how we collect, use, and protect your personal information when you access our website, platform, simulators, and training programs (collectively, the &quot;PLATFORM&quot;).
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                By using our Platform, you consent to the collection and use of information as described in this Policy.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>2. Information We Collect</h3>
              <p className={paragraphClass}>
                We collect information to provide and improve our services. This includes:
              </p>
              <p className={subheadingClass}>A. Information You Provide Directly</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>NAME, EMAIL, PHONE NUMBER, and LOCATION (during signup or demo registration).</ListItem>
                <ListItem>EDUCATIONAL BACKGROUND OR PROFESSIONAL DETAILS (when enrolling in programs).</ListItem>
                <ListItem>PAYMENT AND BILLING INFORMATION (processed securely via third-party gateways).</ListItem>
                <ListItem>MESSAGES, REVIEWS, OR SUPPORT REQUESTS YOU SEND TO US.</ListItem>
              </ul>
              <p className={subheadingClass}>B. Automatically Collected Information</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Device and browser type, IP address, and OS version.</ListItem>
                <ListItem>Platform usage logs, activity on simulators, and lab interactions.</ListItem>
                <ListItem>Cookies and analytics data (to improve user experience).</ListItem>
              </ul>
              <p className={subheadingClass}>C. From Third-Party Integrations</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>When you sign in via Google, LinkedIn, or other OAuth providers.</ListItem>
                <ListItem>When you access external tools or certification bodies linked through our Platform.</ListItem>
              </ul>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>3. How We Use Your Information</h3>
              <p className={paragraphClass}>We use the collected information to:</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Provide access to our courses, simulators, and labs.</ListItem>
                <ListItem>Personalize learning content and track progress.</ListItem>
                <ListItem>Send important updates, certifications, and system notifications.</ListItem>
                <ListItem>Improve the Platform, training modules, and simulator experiences.</ListItem>
                <ListItem>Respond to queries, technical issues, or customer support requests.</ListItem>
                <ListItem>Send promotional materials (only if you&apos;ve opted in).</ListItem>
              </ul>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>4. Cookies &amp; Tracking Technologies</h3>
              <p className={paragraphClass}>We use cookies, web beacons, and similar technologies to:</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Maintain user sessions and preferences.</ListItem>
                <ListItem>Analyze usage patterns through analytics tools (like Google Analytics).</ListItem>
                <ListItem>Improve navigation, speed, and performance.</ListItem>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                You can manage or disable cookies in your browser settings, though certain Platform features may not function correctly without them.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>5. Data Storage &amp; Security</h3>
              <p className={paragraphClass}>
                All data is stored on secure, encrypted servers hosted in India or trusted global data centers.
              </p>
              <p className={paragraphClass}>
                We implement SSL encryption, firewall protection, and access controls to safeguard your data.
              </p>
              <p className={paragraphClass}>
                Only authorized personnel have access to sensitive information.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                Despite these measures, no online system is 100% secure - use the Platform responsibly.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>6. Data Retention</h3>
              <p className={paragraphClass}>We retain your data:</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>As long as your account is active or needed for service delivery.</ListItem>
                <ListItem>For a reasonable period after account deletion to comply with legal or audit requirements.</ListItem>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                You may request permanent deletion by contacting <a href={`mailto:${CONTACT.supportEmail}`} className={linkClass}>{CONTACT.supportEmail}</a>.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>7. Information Sharing &amp; Disclosure</h3>
              <p className={paragraphClass}>We do not sell or rent your personal data.</p>
              <p className={paragraphClass}>However, we may share limited data with:</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Trusted partners or vendors assisting in hosting, payments, or analytics.</ListItem>
                <ListItem>Certifying bodies (e.g., CompTIA, CEH) when you apply for linked certifications.</ListItem>
                <ListItem>Government or law enforcement agencies when required by law.</ListItem>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                All third parties are bound by confidentiality and data-protection agreements.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>8. Third-Party Services</h3>
              <p className={paragraphClass}>
                Our Platform may include links or integrations to third-party websites, tools, or certification partners.
              </p>
              <p className={paragraphClass}>We are not responsible for their privacy practices.</p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                Please review their policies before using those services.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>9. Your Rights &amp; Choices</h3>
              <p className={paragraphClass}>You have the right to:</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Access the data we hold about you.</ListItem>
                <ListItem>Correct inaccurate or outdated information.</ListItem>
                <ListItem>Request deletion of your personal data.</ListItem>
                <ListItem>Withdraw consent for marketing communications.</ListItem>
                <ListItem>Export your learning records (where technically feasible).</ListItem>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                To exercise any of these rights, contact <a href={`mailto:${CONTACT.supportEmail}`} className={linkClass}>{CONTACT.supportEmail}</a>.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>10. Communications &amp; Marketing</h3>
              <p className={paragraphClass}>
                We may send you emails or messages related to course updates, new launches, or cybersecurity alerts.
              </p>
              <p className={paragraphClass}>
                You can unsubscribe anytime using the link in our emails or through your account settings.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                We do not spam or share your contact details with advertisers.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>11. Data of Minors</h3>
              <p className={paragraphClass}>Our services are intended for users aged 16 and above.</p>
              <p className={paragraphClass}>
                If you are under 16, parental or guardian consent is required.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                If we learn that a child&apos;s data has been collected without consent, we will delete it promptly.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>12. Data Transfers</h3>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                If we transfer your data outside India (for hosting or analytics), it will be done under data-protection frameworks that ensure adequate security and compliance with applicable laws (such as GDPR-equivalent standards).
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>13. Updates to This Policy</h3>
              <p className={paragraphClass}>
                We may update this Privacy Policy periodically to reflect new features or legal requirements.
              </p>
              <p className={paragraphClass}>
                The updated version will be posted with a new &quot;Last Updated&quot; date.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                Continued use of the Platform means you accept those changes.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>14. Contact Us</h3>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                For questions, requests, or concerns related to privacy:
              </p>
            </div>

            <div className="mb-8 md:mb-12">
              <h3 className={headingClass}>15. Contact Information</h3>
              <p className={paragraphClass}>
                For any questions or concerns about this Privacy Policy, please reach out to:
              </p>
              <div className={contactBoxClass}>
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

            <div className={closingBoxClass}>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                By using our platform, you acknowledge that you have read, understood, and agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </LandingSectionShell>
    </div>
  );
};

export default PrivacyPolicy;
