import { bootcamps } from "@/constants/bootcampData";
import { courses } from "@/constants/programData";
import { CONTACT } from "@/constants/contactInfo";

export type SitemapLink = {
    label: string;
    path: string;
    external?: boolean;
};

export type SitemapColumn = {
    title: string;
    links: SitemapLink[];
};

export type SitemapBlock = {
    /** Large section heading, e.g. "Flagship Programs" */
    title?: string;
    columns: SitemapColumn[];
};

const flagshipPrograms: SitemapLink[] = courses.map((course) => ({
    label: course.title,
    path: `/cyber-defense-programs/${course.slug}`,
}));

const eliteBootcamps: SitemapLink[] = bootcamps.map((bootcamp) => ({
    label: bootcamp.title,
    path: `/cyber-defense-programs/bootcamp/${bootcamp.slug}`,
}));

const bootcampMidpoint = Math.ceil(eliteBootcamps.length / 2);

export const sitemapBlocks: SitemapBlock[] = [
    {
        columns: [
            {
                title: "About CYBERLABS",
                links: [
                    { label: "CYBERLABS Home", path: "/" },
                    { label: "About CYBERLABS", path: "/about-cyberlabs" },
                    { label: "Leadership and Faculty", path: "/leadership-and-faculty" },
                    { label: "Learning Environment", path: "/learning-environment" },
                ],
            },
            {
                title: "Programs & Learning",
                links: [
                    { label: "Cyber Defense Programs", path: "/cyber-defense-programs" },
                    {
                        label: "Certification & Evaluation Framework",
                        path: "/certification-and-evaluation-framework",
                    },
                    { label: "CYBERLABS Free Webinars", path: "/cyberlabs-webinars" },
                    { label: "Who Should Apply", path: "/who-should-apply" },
                ],
            },
            {
                title: "Admissions & Support",
                links: [
                    { label: "Request Call Back", path: "/request-callback" },
                    { label: "Contact CYBERLABS", path: "/contact-cyberlabs" },
                    { label: "Frequently Asked Questions", path: "/frequently-asked-questions" },
                    {
                        label: CONTACT.educationEmail,
                        path: `mailto:${CONTACT.educationEmail}`,
                        external: true,
                    },
                ],
            },
            {
                title: "Legal & Policies",
                links: [
                    { label: "Terms & Conditions", path: "/terms-and-conditions" },
                    { label: "Privacy Policy", path: "/privacy-policy" },
                    { label: "Cookie Policy", path: "/cookie-policy" },
                    { label: "Refund & Cancellation Policy", path: "/refund-and-cancellation" },
                ],
            },
        ],
    },
    {
        title: "Flagship Programs",
        columns: [
            {
                title: "All Programs",
                links: [
                    { label: "Cyber Defense Programs", path: "/cyber-defense-programs" },
                    ...flagshipPrograms,
                ],
            },
        ],
    },
    {
        title: "Elite Bootcamps",
        columns: [
            {
                title: "Bootcamps",
                links: eliteBootcamps.slice(0, bootcampMidpoint),
            },
            {
                title: "More Bootcamps",
                links: eliteBootcamps.slice(bootcampMidpoint),
            },
        ],
    },
    {
        title: "Connect",
        columns: [
            {
                title: "Get in Touch",
                links: [
                    {
                        label: CONTACT.educationEmail,
                        path: `mailto:${CONTACT.educationEmail}`,
                        external: true,
                    },
                    { label: "Request Call Back", path: "/request-callback" },
                    { label: "Contact CYBERLABS", path: "/contact-cyberlabs" },
                ],
            },
            {
                title: "Follow CYBERLABS",
                links: [
                    {
                        label: "Instagram",
                        path: "https://www.instagram.com/cyberlabsindia",
                        external: true,
                    },
                    {
                        label: "Facebook",
                        path: "https://www.facebook.com/profile.php?id=61587196465882",
                        external: true,
                    },
                    {
                        label: "YouTube",
                        path: "https://www.youtube.com/@cyberlabsindiabycyveritas-y7h",
                        external: true,
                    },
                    {
                        label: "LinkedIn",
                        path: "https://www.linkedin.com/company/cyberlabs-india/",
                        external: true,
                    },
                    { label: "WhatsApp", path: "https://wa.me/971504602632", external: true },
                ],
            },
        ],
    },
];

export function getInternalSitemapPaths(): string[] {
    const paths = new Set<string>(["/sitemap"]);

    for (const block of sitemapBlocks) {
        for (const column of block.columns) {
            for (const link of column.links) {
                if (link.external || link.path.startsWith("mailto:")) {
                    continue;
                }
                paths.add(link.path);
            }
        }
    }

    return Array.from(paths).sort();
}

export function getSitemapLinkCount(): number {
    return sitemapBlocks.reduce(
        (count, block) =>
            count + block.columns.reduce((columnCount, column) => columnCount + column.links.length, 0),
        0,
    );
}
