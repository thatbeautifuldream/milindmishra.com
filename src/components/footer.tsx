const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} Milind Mishra. Hire me before my domain expires!
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/thatbeautifuldream"
              className="hover:text-green-300 transition-colors"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mishramilind/"
              className="hover:text-green-300 transition-colors"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="mailto:milind.mishra4@gmail.com"
              className="hover:text-green-300 transition-colors"
              target="_blank"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
