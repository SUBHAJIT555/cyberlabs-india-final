"use client";

import CookieHero from "@/components/CookieHero";
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

const CookiePolicy = () => {
  return (
    <div className="relative z-10">
      <CookieHero />
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
                This Cookie Policy explains how CYBERLABS INDIA (&quot;WE&quot;, &quot;OUR&quot;, &quot;US&quot;) uses cookies and similar tracking technologies on our website and learning platform (collectively, the &quot;PLATFORM&quot;).
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                By continuing to browse or use our Platform, you consent to the use of cookies as described in this Policy.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>2. What Are Cookies?</h3>
              <p className={paragraphClass}>
                Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website.
              </p>
              <p className={paragraphClass}>
                They help the site recognize your device, remember preferences, and improve functionality.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                Cookies do not give us access to your computer or any personal data beyond what you choose to share.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>3. Why We Use Cookies</h3>
              <p className={paragraphClass}>
                We use cookies to ensure the best possible experience for learners and visitors. Specifically, cookies help us:
              </p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Enable essential website functions (login sessions, authentication).</ListItem>
                <ListItem>Personalize your experience by remembering settings and preferences.</ListItem>
                <ListItem>Analyze performance and usage through analytics tools.</ListItem>
                <ListItem>Improve marketing by understanding user interest and engagement.</ListItem>
                <ListItem>Enhance simulator and lab interactions by saving session states.</ListItem>
              </ul>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>4. Types of Cookies We Use</h3>
              <p className={subheadingClass}>A. Essential (Strictly Necessary) Cookies</p>
              <p className={paragraphClass}>These are required for the Platform to function properly.</p>
              <p className={paragraphClass}>
                They include login authentication, security tokens, and session maintenance.
              </p>
              <p className={paragraphClass}>
                Example: Session cookies that keep you logged in while using CYBERLABS or simulators.
              </p>
              <p className={subheadingClass}>B. Performance &amp; Analytics Cookies</p>
              <p className={paragraphClass}>
                Used to collect anonymous information about how users interact with the Platform.
              </p>
              <p className={paragraphClass}>
                This helps us optimize speed, navigation, and overall learning experience.
              </p>
              <p className={paragraphClass}>
                Example: Google Analytics, Hotjar (used to understand which sections users engage with).
              </p>
              <p className={subheadingClass}>C. Functional Cookies</p>
              <p className={paragraphClass}>
                Allow the Platform to remember your preferences - such as dark mode, selected program, or language settings.
              </p>
              <p className={paragraphClass}>
                Example: Remembering whether you prefer dark/light theme inside the simulator dashboard.
              </p>
              <p className={subheadingClass}>D. Marketing &amp; Third-Party Cookies</p>
              <p className={paragraphClass}>
                Used to deliver relevant ads, track conversions, and improve communications (only if you&apos;ve consented).
              </p>
              <p className={paragraphClass}>
                Example: Meta Pixel, Google Ads Remarketing, LinkedIn Insights Tag.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                You can disable these at any time (see Section 7 below).
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>5. Third-Party Cookies</h3>
              <p className={paragraphClass}>
                Some cookies are placed by third parties when you access our site (e.g., YouTube videos, Google login, LinkedIn widgets).
              </p>
              <p className={paragraphClass}>We do not control how these cookies operate.</p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                Please review the privacy and cookie policies of those third-party services for more information.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>6. Duration of Cookies</h3>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed mb-2">
                <strong>Session Cookies</strong> → Temporary; deleted when you close your browser.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed mb-2">
                <strong>Persistent Cookies</strong> → Remain on your device until deleted or expired automatically.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                <strong>Analytics Cookies</strong> → Typically retained for 6–12 months (depending on provider).
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>7. Managing &amp; Disabling Cookies</h3>
              <p className={paragraphClass}>You can control or delete cookies as you wish:</p>
              <p className={paragraphClass}>
                Adjust cookie preferences directly via our Cookie Consent Banner.
              </p>
              <p className={paragraphClass}>Block or delete cookies from your browser settings:</p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Chrome → Settings → Privacy → Cookies and site data</ListItem>
                <ListItem>Firefox → Preferences → Privacy &amp; Security → Cookies</ListItem>
                <ListItem>Edge/Safari → Preferences → Privacy</ListItem>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                Note: Disabling certain cookies may limit functionality (e.g., login sessions or simulator progress tracking).
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>8. Consent</h3>
              <p className={paragraphClass}>
                When you first visit our Platform, you&apos;ll see a cookie consent banner asking for your preferences.
              </p>
              <p className={paragraphClass}>
                By clicking &quot;ACCEPT&quot; or continuing to use the site, you consent to our use of cookies per this Policy.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                You can update your consent anytime via the Cookie Settings link in the footer.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>9. Updates to This Policy</h3>
              <p className={paragraphClass}>
                We may update this Cookie Policy occasionally to reflect technology or legal changes.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                The updated version will be posted with a new &quot;LAST UPDATED&quot; date at the top.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>10. Contact Us</h3>
              <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
                If you have questions about our cookie usage or data practices, contact us:
              </p>
            </div>

            <div className="mb-8 md:mb-12">
              <h3 className={headingClass}>11. Contact Information</h3>
              <p className={paragraphClass}>
                For any questions or concerns about this Cookie Policy, please reach out to:
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
                By using our platform, you acknowledge that you have read, understood, and agree to our Cookie Policy.
              </p>
            </div>
          </div>
        </div>
      </LandingSectionShell>
    </div>
  );
};

export default CookiePolicy;
