"use client";

import RefundHero from "@/components/RefundHero";
import { CONTACT } from "@/constants/contactInfo";
import { LandingSectionShell, landingSectionHeadingClass } from "@/components/ui/landing-section";
import {
  ListItem,
  contactBoxClass,
  headingClass,
  linkClass,
  paragraphClass,
  sectionClass,
  sectionDivider,
} from "@/components/legal/legalPageShared";

const RefundPolicy = () => {
  return (
    <div className="relative z-10">
      <RefundHero />
      {sectionDivider}

      <LandingSectionShell className="pt-8 md:pt-10">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={`${landingSectionHeadingClass} mb-4 text-zinc-900 font-inter-display`}>
            Refund & Cancellation Policy
          </h2>
          <p className="mb-8 text-sm italic text-zinc-500 font-inter-display sm:mb-10 sm:text-base">
            Effective Date: 30 June 2026
          </p>

          <div className="max-w-none">
            <p className={paragraphClass}>
              CYBERLABS India is a brand operated by {CONTACT.registeredEntity} (&quot;Cyveritas&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). All course registrations, payments, and services offered under the CYBERLABS India brand are provided by {CONTACT.registeredEntity}.
            </p>
            <p className={paragraphClass}>
              At Cyveritas, every course registration reserves a seat within a limited-capacity cohort and initiates administrative, scheduling, trainer allocation, and resource planning processes. For this reason, all registrations are considered final.
            </p>
            <p className={paragraphClass}>
              Please read this policy carefully before completing your enrolment.
            </p>

            <div className={sectionClass}>
              <h3 className={headingClass}>1. Course Registration</h3>
              <p className={paragraphClass}>
                Registration for any course offered under the CYBERLABS India brand is confirmed only after full payment has been successfully received and acknowledged by {CONTACT.registeredEntity}.
              </p>
              <p className={paragraphClass}>
                Once a registration has been confirmed, the participant&apos;s seat is reserved for that individual.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>2. Refund Policy</h3>
              <p className={paragraphClass}>
                All fees paid to {CONTACT.registeredEntity} for enrolment in courses offered under the CYBERLABS India brand are final and non-refundable, except where expressly stated in this policy or where required under applicable law.
              </p>
              <p className={paragraphClass}>
                Once a participant has successfully registered and payment has been processed, no refund, whether partial or full, will be provided for reasons including, but not limited to:
              </p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Change of mind</ListItem>
                <ListItem>Personal commitments</ListItem>
                <ListItem>Work or business commitments</ListItem>
                <ListItem>Visa or travel issues</ListItem>
                <ListItem>Medical reasons</ListItem>
                <ListItem>Failure to attend the course</ListItem>
                <ListItem>Failure to complete the course</ListItem>
                <ListItem>Technical issues on the participant&apos;s side</ListItem>
                <ListItem>Lack of required hardware, software, or internet connectivity</ListItem>
              </ul>
              <p className={paragraphClass}>
                Participants are encouraged to carefully review the course details, schedule, prerequisites, and requirements before completing their registration.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>3. Cancellation by the Participant</h3>
              <p className={paragraphClass}>
                Participants may choose not to attend after registration; however, such cancellation does not entitle the participant to any refund, credit, transfer, or adjustment of the course fee.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>4. Transfer of Registration</h3>
              <p className={paragraphClass}>
                Course registrations are non-transferable and may not be assigned, transferred, or resold to another individual unless expressly approved in writing by {CONTACT.registeredEntity}.
              </p>
              <p className={paragraphClass}>
                Any approved transfer shall remain entirely at the sole discretion of {CONTACT.registeredEntity}.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>5. Course Rescheduling or Cancellation by Cyveritas Technologies LLP</h3>
              <p className={paragraphClass}>
                {CONTACT.registeredEntity} reserves the right to reschedule, postpone, or cancel any course offered under the CYBERLABS India brand due to circumstances including, but not limited to:
              </p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Insufficient enrolment</ListItem>
                <ListItem>Trainer availability</ListItem>
                <ListItem>Operational requirements</ListItem>
                <ListItem>Technical reasons</ListItem>
                <ListItem>Events beyond our reasonable control</ListItem>
              </ul>
              <p className={paragraphClass}>
                Where a course is cancelled by {CONTACT.registeredEntity} before commencement, participants may be offered one of the following options at the discretion of {CONTACT.registeredEntity}:
              </p>
              <ul className="mb-4 space-y-2.5">
                <ListItem>Transfer to the next available batch of the same course; or</ListItem>
                <ListItem>Transfer to another course of equivalent value; or</ListItem>
                <ListItem>A refund, where no suitable alternative can be provided.</ListItem>
              </ul>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>6. No Refund for Non-Attendance or Partial Attendance</h3>
              <p className={paragraphClass}>
                No refund, credit, or adjustment shall be provided where a participant fails to attend, attends partially, misses sessions, or is unable to continue the course after commencement for any reason.
              </p>
            </div>

            <div className={sectionClass}>
              <h3 className={headingClass}>7. Exceptional Circumstances</h3>
              <p className={paragraphClass}>
                Any request outside the scope of this policy may be reviewed on a case-by-case basis. However, any exception shall be entirely at the sole discretion of {CONTACT.registeredEntity} and shall not establish a precedent for future cases.
              </p>
            </div>

            <div className="mb-8 md:mb-12">
              <h3 className={headingClass}>8. Contact</h3>
              <p className={paragraphClass}>
                For any questions regarding this Refund &amp; Cancellation Policy, please contact:
              </p>
              <div className={contactBoxClass}>
                <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display mb-2">
                  <strong>{CONTACT.registeredEntity}</strong>
                </p>
                <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display mb-2">
                  <strong>Operating Brand:</strong> CYBERLABS India
                </p>
                <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${CONTACT.educationEmail}`} className={linkClass}>
                    {CONTACT.educationEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </LandingSectionShell>
    </div>
  );
};

export default RefundPolicy;
