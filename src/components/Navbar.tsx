import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "@/lib/react-router";
import { IoSearch } from "react-icons/io5";
import { SearchIcon } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { YouTubeIcon } from "@/components/ui/YouTubeIcon";
import { Logo } from "./index";
import { useLenis } from "../hooks/useLenis";
import { cn } from "@/lib/utils";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
    Root as DrawerRoot,
    Trigger as DrawerTrigger,
    Content as DrawerContent,
    Header as DrawerHeader,
    Body as DrawerBody,
    Footer as DrawerFooter,
} from "./ui/drawer";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { useCourses } from "@/hooks/useCourses";
import { useBootcamps } from "@/hooks/useBootcamps";
import { crosshatchBgStyle } from "@/constants/bootcampStyles";
import CallbackModal from "./CallbackModal";
import { CONTACT } from "@/constants/contactInfo";

const drawerItemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.035,
            duration: 0.18,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    }),
};

function NavArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="translate-x-[-3px] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12h.5m3 0h1.5m3 0h6" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
        </svg>
    );
}

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCommandOpen, setIsCommandOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCommandUrl, setActiveCommandUrl] = useState<string | null>(null);
    const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

    const commandInputRef = useRef<HTMLInputElement | null>(null);
    const commandScrollRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const lenis = useLenis();
    const { getCourses } = useCourses();
    const { getBootcamps } = useBootcamps();
    const courses = getCourses();
    const bootcamps = getBootcamps();

    // Navigation items
    const navigationItems = [
        { name: "CYBERLABS Home", path: "/" },
        { name: "About CYBERLABS", path: "/about-cyberlabs" },
        { name: "Leadership and Faculty", path: "/leadership-and-faculty" },
        { name: "Cyber Defense Programs", path: "/cyber-defense-programs" },
        { name: "Learning Environment", path: "/learning-environment" },
        { name: "Who Should Apply", path: "/who-should-apply" },
        { name: "Certification and Evaluation Framework", path: "/certification-and-evaluation-framework" },
        { name: "Request Call Back", path: "/request-callback" },
        { name: "Contact with CYBERLABS", path: "/contact-cyberlabs" },
        { name: "Frequently Asked Questions", path: "/frequently-asked-questions" },
    ];

    const legalItems = [
        { name: "Terms & Condition", path: "/terms-and-conditions" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Cookie Policy", path: "/cookie-policy" },
        { name: "Refund & Cancellation", path: "/refund-and-cancellation" },
    ];

    // Handle scroll styling (backdrop blur when scrolled)
    useEffect(() => {
        if (!lenis) return;

        let ticking = false;

        const handleScroll = ({ scroll }: { scroll: number }) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(scroll > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };

        lenis.on("scroll", handleScroll);

        if (lenis.scroll !== undefined) {
            setIsScrolled(lenis.scroll > 10);
        }

        return () => {
            lenis.off("scroll", handleScroll);
        };
    }, [lenis]);

    const normalizedQuery = searchQuery.toLowerCase().trim();

    const filterByQuery = (text: string) =>
        !normalizedQuery || text.toLowerCase().includes(normalizedQuery);

    const filteredNavigation = navigationItems.filter(
        (item) => filterByQuery(item.name) || filterByQuery(item.path)
    );

    const filteredCourses = courses.filter(
        (course) =>
            filterByQuery(course.title) ||
            filterByQuery(course.category) ||
            filterByQuery(course.slug)
    );

    const filteredBootcamps = bootcamps.filter(
        (bootcamp) =>
            filterByQuery(bootcamp.title) ||
            filterByQuery(bootcamp.slug) ||
            filterByQuery(bootcamp.duration)
    );

    const filteredLegal = legalItems.filter(
        (item) => filterByQuery(item.name) || filterByQuery(item.path)
    );

    // Prevent background scroll when sidebar or command palette is open
    useEffect(() => {
        if (isSidebarOpen || isCommandOpen) {
            document.body.style.overflow = "hidden";
            if (lenis) lenis.stop();
        } else {
            document.body.style.overflow = "";
            if (lenis) lenis.start();
        }
        return () => {
            document.body.style.overflow = "";
            if (lenis) lenis.start();
        };
    }, [isSidebarOpen, isCommandOpen,
        lenis
    ]);

    // Keyboard shortcut: Ctrl/Cmd + K to open command modal
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isMetaK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
            if (isMetaK) {
                event.preventDefault();
                setIsCommandOpen(true);
            }
            if (event.key === "Escape") {
                setIsCommandOpen(false);
                setSearchQuery("");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Focus the command input when the palette opens (desktop only)
    useEffect(() => {
        if (isCommandOpen && commandInputRef.current) {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            // Only focus on desktop since input is hidden on mobile
            if (!isMobile) {
                commandInputRef.current.focus();
                commandInputRef.current.select();
            }
        }
    }, [isCommandOpen]);

    // Handle wheel scrolling inside the command palette so Lenis
    // doesn't block scroll when it has prevented default behavior.
    const handleCommandWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if (!commandScrollRef.current) return;
        const container = commandScrollRef.current;
        container.scrollTop += event.deltaY;
    };

    // Handle keyboard actions inside the command palette (Enter / Esc)
    const handleCommandKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isCommandOpen) return;

        if (event.key === "Enter") {
            event.preventDefault();
            if (activeCommandUrl === "__callback_modal__") {
                setIsCommandOpen(false);
                setSearchQuery("");
                setIsCallbackModalOpen(true);
            } else if (activeCommandUrl) {
                navigate(activeCommandUrl);
                setIsCommandOpen(false);
                setSearchQuery("");
            }
        }
        if (event.key === "Escape") {
            event.preventDefault();
            setIsCommandOpen(false);
            setSearchQuery("");
        }
    };

    // Check if a path is active
    const isActive = (path: string) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <motion.header
                className={cn(
                    "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
                    isScrolled
                        ? "border-zinc-200 bg-white/50"
                        : "border-transparent bg-white/45",
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-8">
                        <Link to="/" className="inline-flex items-center cursor-pointer">
                            <motion.div
                                className="h-8 w-24 sm:h-9 sm:w-28 md:h-10 md:w-32 relative"
                                transition={{ duration: 0.2 }}
                            >
                                <Logo />
                            </motion.div>
                        </Link>

                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <div className="hidden lg:block">
                                <InputGroup
                                    className="w-full max-w-xs cursor-pointer rounded-xl border border-dashed border-zinc-200 bg-zinc-50/60 ring-0 ring-offset-0 focus-within:border-zinc-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-zinc-200/80"
                                    onClick={() => setIsCommandOpen(true)}
                                >
                                    <InputGroupAddon>
                                        <SearchIcon className="w-4 h-4 text-zinc-500" />
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        placeholder="Search..."
                                        readOnly
                                        className="text-zinc-900 placeholder:text-zinc-400"
                                    />
                                    <InputGroupAddon align="inline-end">
                                        <Kbd>⌘</Kbd>
                                        <Kbd>K</Kbd>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>

                            <motion.button
                                className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
                                whileTap={{ scale: 0.95 }}
                                aria-label="Search"
                                onClick={() => setIsCommandOpen(true)}
                            >
                                <IoSearch className="w-5 h-5" />
                            </motion.button>

                            <div className="hidden lg:block">
                                <ShinyButton
                                    variant="light"
                                    size="compact"
                                    className="rounded-lg! shadow-lg! shadow-zinc-800/20!"
                                    onClick={() => navigate("/request-callback")}
                                    aria-label="Request Callback"
                                >
                                    Request Callback
                                </ShinyButton>
                            </div>

                            <motion.button
                                className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
                                whileTap={{ scale: 0.95 }}
                                aria-label="Request Callback"
                                onClick={() => navigate("/request-callback")}
                            >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-phone-incoming"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                        <path d="M15 9l5 -5" />
                                        <path d="M15 5l0 4l4 0" />
                                    </svg>
                            </motion.button>

                            <DrawerRoot open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                                <DrawerTrigger asChild>
                                    <motion.button
                                        className="inline-flex h-9 w-9 items-center justify-center text-zinc-800 transition hover:text-zinc-900"
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Open Menu"
                                        aria-expanded={isSidebarOpen}
                                    >
                                        <span className="relative block h-4 w-4">
                                            <span
                                                className={cn(
                                                    "absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition",
                                                    isSidebarOpen ? "translate-y-[7px] rotate-45" : "translate-y-0",
                                                )}
                                            />
                                            <span
                                                className={cn(
                                                    "absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition",
                                                    isSidebarOpen ? "opacity-0" : "opacity-100",
                                                )}
                                            />
                                            <span
                                                className={cn(
                                                    "absolute left-0 top-[14px] h-0.5 w-4 rounded-full bg-current transition",
                                                    isSidebarOpen ? "translate-y-[-7px] -rotate-45" : "translate-y-0",
                                                )}
                                            />
                                        </span>
                                    </motion.button>
                                </DrawerTrigger>

                                <DrawerContent side="right">
                                    <DrawerHeader className="border-b border-zinc-200 border-dashed bg-transparent">
                                        <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                                            <motion.div
                                                className="w-24 sm:w-28 md:w-32 lg:w-36 h-full relative"
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Logo />
                                            </motion.div>
                                        </Link>
                                    </DrawerHeader>

                                    <DrawerBody className="px-4 py-6 bg-transparent">
                                        <nav className="w-full">
                                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-800">
                                                Menu
                                            </p>
                                            <div className="mt-2 border-t border-dashed border-zinc-200 pt-3">
                                                <div className="flex flex-col gap-1">
                                                    {navigationItems.map((item, index) => {
                                                        const active = isActive(item.path);
                                                        return (
                                                            <motion.div
                                                                key={item.name}
                                                                custom={index}
                                                                initial="hidden"
                                                                animate="visible"
                                                                variants={drawerItemVariants}
                                                            >
                                                                <Link
                                                                    to={item.path}
                                                                    onClick={() => setIsSidebarOpen(false)}
                                                                    className="block w-full"
                                                                >
                                                                    <div
                                                                        className={cn(
                                                                            "group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium transition md:text-base",
                                                                            active
                                                                                ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200"
                                                                                : "text-zinc-700 hover:bg-white/70 hover:text-zinc-900",
                                                                        )}
                                                                    >
                                                                        <span className="truncate">{item.name}</span>
                                                                        <NavArrowIcon />
                                                                    </div>
                                                                </Link>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </nav>
                                    </DrawerBody>

                                    <DrawerFooter className="flex flex-col gap-4 border-t border-zinc-200 border-dashed bg-transparent">
                                        {/* Social Links */}
                                        <div className="flex items-center justify-center gap-4">
                                            <motion.a
                                                href="https://www.instagram.com/cyberlabsindia"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="Instagram"
                                            >
                                                <FaInstagram className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href="https://www.facebook.com/profile.php?id=61587196465882"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="Facebook"
                                            >
                                                <FaFacebookF className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href="https://www.youtube.com/@cyberlabsindiabycyveritas-y7h"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="YouTube"
                                            >
                                                <YouTubeIcon className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href="https://www.linkedin.com/company/cyberlabs-india/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedinIn className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href="https://wa.me/971504602632"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="WhatsApp"
                                            >
                                                <FaWhatsapp className="w-5 h-5" />
                                            </motion.a>
                                        </div>

                                        {/* Copyright */}
                                        <p className="text-center text-xs text-zinc-500 md:text-sm">
                                            © {new Date().getFullYear()} CYBERLABS INDIA. All rights reserved.
                                        </p>
                                    </DrawerFooter>
                                </DrawerContent>
                            </DrawerRoot>
                        </div>
                </div>
            </motion.header>

            {/* Command / Search Modal */}
            {isCommandOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center bg-white/70 backdrop-blur-sm"
                    onClick={() => {
                        setIsCommandOpen(false);
                        setSearchQuery("");
                    }}
                    onTouchStart={(e) => {
                        // Only close on backdrop, not on modal content
                        if (e.target === e.currentTarget) {
                            setIsCommandOpen(false);
                            setSearchQuery("");
                        }
                    }}
                >
                    <div
                        className="mt-20 w-full max-w-3xl px-4"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                    >
                        <div
                            className="relative overflow-hidden flex flex-col rounded-xl border border-dashed border-zinc-200 bg-white shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-200/80"
                            style={{
                                maxHeight: "calc(100vh - 160px)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                            onKeyDown={handleCommandKeyDown}
                        >
                            <div
                                className="absolute inset-0 z-0 pointer-events-none"
                                style={crosshatchBgStyle}
                                aria-hidden
                            />
                            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
                            <div className="shrink-0 border-b border-dashed border-zinc-200 bg-transparent px-3 pb-2 pt-3 sm:px-4">
                                <div className="flex items-center justify-between px-2 py-1.5">
                                    <span className="text-base font-semibold text-zinc-900">
                                        CYBERLABS INDIA
                                    </span>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsCommandOpen(false);
                                            setSearchQuery("");
                                        }}
                                        onTouchStart={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsCommandOpen(false);
                                            setSearchQuery("");
                                        }}
                                        aria-label="Close menu"
                                        className="flex h-8 w-8 touch-manipulation items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-200 sm:h-6 sm:w-6"
                                        style={{ touchAction: 'manipulation' }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 sm:w-3.5 sm:h-3.5"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div
                                className="px-3 sm:px-4 py-2 bg-transparent"
                                ref={commandScrollRef}
                                onWheel={handleCommandWheel}
                                onTouchMove={(e) => {
                                    // Allow touch move events for scrolling
                                    e.stopPropagation();
                                }}
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    WebkitTransform: 'translateZ(0)',
                                    touchAction: 'pan-y',
                                    overscrollBehavior: 'contain',
                                    flex: '1 1 0%',
                                    minHeight: 0,
                                    overflowY: 'scroll',
                                    overflowX: 'hidden',
                                    position: 'relative',
                                    height: '100%',
                                }}
                            >
                                <div className="space-y-4">
                                    {/* Navigation Links */}
                                    <div>
                                        <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                                            Menu
                                        </p>
                                        <ul className="space-y-0.5">
                                            {filteredNavigation.map((item, index) => (
                                                <li key={item.path}>
                                                    <Link
                                                        to={item.path}
                                                        onMouseEnter={() => setActiveCommandUrl(item.path)}
                                                        onClick={() => {
                                                            setIsCommandOpen(false);
                                                            setSearchQuery("");
                                                        }}
                                                        className="group flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 sm:text-base"
                                                    >
                                                        <span className="text-zinc-500 shrink-0">
                                                            {index === 0 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                                                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                                                </svg>
                                                            )}
                                                            {index === 1 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-alert-square-rounded"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
                                                                    <path d="M12 8v4" />
                                                                    <path d="M12 16h.01" />
                                                                </svg>
                                                            )}
                                                            {index === 2 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                                    <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                                                                    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                                    <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                                                                    <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                                    <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                                                                </svg>
                                                            )}
                                                            {index === 3 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-school"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                                                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                                                                </svg>
                                                            )}
                                                            {index === 4 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-bolt"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M14.5 16h-10.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
                                                                    <path d="M7 20h6" />
                                                                    <path d="M9 16v4" />
                                                                    <path d="M19 16l-2 3h4l-2 3" />
                                                                </svg>
                                                            )}
                                                            {index === 5 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-checklist"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                                                                    <path d="M14 19l2 2l4 -4" />
                                                                    <path d="M9 8h4" />
                                                                    <path d="M9 12h2" />
                                                                </svg>
                                                            )}
                                                            {index === 6 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2 2 0 0 1 -2.2 -2.2v-1a2 2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                                                                    <path d="M9 12l2 2l4 -4" />
                                                                </svg>
                                                            )}
                                                            {index === 7 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-phone-incoming"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                                    <path d="M15 9l5 -5" />
                                                                    <path d="M15 5v4h4" />
                                                                </svg>
                                                            )}
                                                            {index === 8 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-mail-share"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
                                                                    <path d="M3 7l9 6l9 -6" />
                                                                    <path d="M16 22l5 -5" />
                                                                    <path d="M21 21.5v-4.5h-4.5" />
                                                                </svg>
                                                            )}
                                                            {index === 9 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-help-hexagon"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033" />
                                                                    <path d="M12 16v.01" />
                                                                    <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                                                                </svg>
                                                            )}
                                                        </span>
                                                        <span>{item.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Flagship Programs */}
                                    <div>
                                        <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                                            Flagship Programs
                                        </p>
                                        <ul className="space-y-0.5">
                                            {filteredCourses.map((course) => {
                                                const url = `/cyber-defense-programs/${course.slug}`;
                                                return (
                                                    <li key={course.slug}>
                                                        <Link
                                                            to={url}
                                                            onMouseEnter={() => setActiveCommandUrl(url)}
                                                            onClick={() => {
                                                                setIsCommandOpen(false);
                                                                setSearchQuery("");
                                                            }}
                                                            className="flex items-start gap-2 px-2.5 py-1.5 rounded-md hover:bg-zinc-50 text-sm sm:text-base text-zinc-900"
                                                        >
                                                            <span className="text-zinc-500 shrink-0 mt-0.5">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-terminal"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M5 7l5 5l-5 5" />
                                                                    <path d="M12 19h7" />
                                                                </svg>
                                                            </span>
                                                            <div className="flex flex-col">
                                                                <span className="font-medium">{course.title}</span>
                                                                <span className="text-[12px] font-medium sm:text-xs text-zinc-500">
                                                                    {course.category} • {course.duration}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    {/* Elite Bootcamps */}
                                    <div>
                                        <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                                            Elite Bootcamps
                                        </p>
                                        <ul className="space-y-0.5">
                                            {filteredBootcamps.map((bootcamp) => {
                                                const url = `/cyber-defense-programs/bootcamp/${bootcamp.slug}`;
                                                return (
                                                    <li key={bootcamp.slug}>
                                                        <Link
                                                            to={url}
                                                            onMouseEnter={() => setActiveCommandUrl(url)}
                                                            onClick={() => {
                                                                setIsCommandOpen(false);
                                                                setSearchQuery("");
                                                            }}
                                                            className="flex items-start gap-2 px-2.5 py-1.5 rounded-md hover:bg-zinc-50 text-sm sm:text-base text-zinc-900"
                                                        >
                                                            <span className="text-zinc-500 shrink-0 mt-0.5">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-terminal"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M5 7l5 5l-5 5" />
                                                                    <path d="M12 19h7" />
                                                                </svg>
                                                            </span>
                                                            <div className="flex flex-col">
                                                                <span className="font-medium">{bootcamp.title}</span>
                                                                <span className="text-[12px] font-medium sm:text-xs text-zinc-500">
                                                                    Elite Boot Camp • {bootcamp.duration}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    {/* Actions */}
                                    <div>
                                        <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                                            Actions
                                        </p>
                                        <ul className="space-y-0.5">
                                            {/* Open callback modal */}
                                            <li>
                                                <button
                                                    type="button"
                                                    onMouseEnter={() => setActiveCommandUrl("__callback_modal__")}
                                                    onClick={() => {
                                                        setIsCommandOpen(false);
                                                        setSearchQuery("");
                                                        setIsCallbackModalOpen(true);
                                                    }}
                                                    className="w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-zinc-50 text-sm sm:text-base text-zinc-900 font-medium cursor-pointer focus:outline-none focus-visible:outline-none"
                                                >
                                                    <span className="text-zinc-500">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="icon icon-tabler icons-tabler-outline icon-tabler-phone-incoming"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                            <path d="M15 9l5 -5" />
                                                            <path d="M15 5l0 4l4 0" />
                                                        </svg>
                                                    </span>
                                                    <span>Request Callback</span>
                                                </button>
                                            </li>
                                            {/* Frequently Asked Questions */}
                                            {/* <li>
                                                <Link
                                                    to="/frequently-asked-questions"
                                                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-zinc-50 text-sm sm:text-base text-zinc-900 font-medium cursor-pointer"
                                                >
                                                    <span className="text-zinc-500 shrink-0">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="icon icon-tabler icons-tabler-outline icon-tabler-help-hexagon"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033" />
                                                            <path d="M12 16v.01" />
                                                            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                                                        </svg>
                                                    </span>
                                                    <span>Frequently Asked Questions</span>
                                                </Link>
                                            </li> */}

                                            {/* Email support */}
                                            <li>
                                                <a
                                                    href={`mailto:${CONTACT.supportEmail}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-zinc-50 text-sm sm:text-base text-zinc-900 font-medium cursor-pointer"
                                                >
                                                    <span className="text-zinc-500">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="icon icon-tabler icons-tabler-outline icon-tabler-message-dots"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M12 11v.01" />
                                                            <path d="M8 11v.01" />
                                                            <path d="M16 11v.01" />
                                                            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3l12 0" />
                                                        </svg>
                                                    </span>
                                                    <span>Support</span>
                                                </a>
                                            </li>
                                        </ul>


                                    </div>

                                    {/* Legal Links */}
                                    <div>
                                        <p className="mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:text-xs">
                                            Legals
                                        </p>
                                        <ul className="space-y-0.5">
                                            {filteredLegal.map((item, index) => (
                                                <li key={item.path}>
                                                    <Link
                                                        to={item.path}
                                                        onMouseEnter={() => setActiveCommandUrl(item.path)}
                                                        onClick={() => {
                                                            setIsCommandOpen(false);
                                                            setSearchQuery("");
                                                        }}
                                                        className="group flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 sm:text-base"
                                                    >
                                                        <span className="text-zinc-500 shrink-0">
                                                            {index === 0 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-file-text"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                                                                    <path d="M9 9h1" />
                                                                    <path d="M9 13h6" />
                                                                    <path d="M9 17h6" />
                                                                </svg>
                                                            )}
                                                            {index === 1 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                                                                    <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                                    <path d="M12 12v2.5" />
                                                                </svg>
                                                            )}
                                                            {index === 2 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-cookie"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M8 13v.01" />
                                                                    <path d="M12 17v.01" />
                                                                    <path d="M12 12v.01" />
                                                                    <path d="M16 14v.01" />
                                                                    <path d="M11 8v.01" />
                                                                    <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.25 .396 -.427 .69 -.553 .957c-.192 .414 -.338 .808 -.507 1.463c-.107 .406 -.252 .951 -.483 1.613a3 3 0 0 1 -1.624 1.623c-.624 .157 -1.03 .273 -1.4 .42c-.42 .166 -.79 .346 -1.352 .677c-.53 .314 -.848 .5 -1.162 .5c-.314 0 -.632 -.186 -1.162 -.5c-.562 -.331 -.932 -.511 -1.352 -.677c-.37 -.147 -.776 -.263 -1.4 -.42a3 3 0 0 1 -1.623 -1.624c-.231 -.662 -.376 -1.207 -.483 -1.613c-.169 -.655 -.315 -1.049 -.507 -1.463c-.126 -.267 -.303 -.561 -.553 -.957a3 3 0 0 1 0 -2.296c.25 -.396 .427 -.69 .553 -.957c.192 -.414 .338 -.808 .507 -1.463c.107 -.406 .252 -.951 .483 -1.613a3 3 0 0 1 1.624 -1.623c.624 -.157 1.03 -.273 1.4 -.42c.42 -.166 .79 -.346 1.352 -.677c.53 -.314 .848 -.5 1.162 -.5c.314 0 .632 .186 1.162 .5" />
                                                                </svg>
                                                            )}
                                                            {index === 3 && (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="18"
                                                                    height="18"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-refresh"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                                                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                                                </svg>
                                                            )}
                                                        </span>
                                                        <span>{item.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Footer hints */}
                            <div className="flex shrink-0 flex-col gap-1.5 border-t border-dashed border-zinc-200 bg-transparent px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-4">
                                <p className="text-center text-[10px] text-zinc-500 sm:text-left sm:text-xs">
                                    Use your mouse or keyboard to navigate. Press{" "}
                                    <span className="font-semibold">Enter</span> to open.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 sm:justify-end sm:text-xs">
                                    <span className="flex items-center gap-1">
                                        <Kbd>↵</Kbd>
                                        <span>Go to Page</span>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Kbd>Esc</Kbd>
                                        <span>Close</span>
                                    </span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Global Request Callback Modal */}
            <CallbackModal
                isOpen={isCallbackModalOpen}
                onClose={() => setIsCallbackModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
