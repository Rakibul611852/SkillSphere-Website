import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative mt-24 bg-gray-900 text-white">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto px-6 py-16 items-center">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-50 mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="pixgen logo"
                width={40}
                height={40}
                className="object-cover h-auto w-auto border rounded-full"
              />
              <h2 className="text-2xl font-semibold tracking-tight text-white dark:text-white">
                SkillSphere
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-white max-w-xs">
              Learn in-demand skills from industry experts. Build your career with real-world courses and hands-on projects.
            </p>
          </div>

        

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link
                  href="/about"
                >
                  Email : rakib*****@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                >
                  Phone : 015********
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white dark:text-white">
              Social links
            </h3>

              <div className="flex gap-4 ">
                  <p className="object-cover h-auto w-auto border border-gray-500 p-1 rounded-full"><FaFacebookF /></p>
                  <p className="object-cover h-auto w-auto border border-gray-500 p-1 rounded-full"><IoLogoTwitter /></p>
                  <p className="object-cover h-auto w-auto border border-gray-500 p-1 rounded-full"><FaLinkedin /></p>
                  <p className="object-cover h-auto w-auto border border-gray-500 p-1 rounded-full"><IoLogoInstagram /></p>
              </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;