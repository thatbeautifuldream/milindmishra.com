import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 border-t border-dashed border-green-600/50 select-none"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="hover:text-green-300 transition-colors">
            © {currentYear} Milind Mishra.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/thatbeautifuldream?ref=milindmishra.com"
              className="hover:text-green-300 transition-colors"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/mishramilind/?ref=milindmishra.com"
              className="hover:text-green-300 transition-colors"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:milind.mishra4@gmail.com"
              className="hover:text-green-300 transition-colors"
              target="_blank"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
