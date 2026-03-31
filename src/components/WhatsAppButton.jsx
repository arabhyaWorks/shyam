export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20need%20more%20info%20about%20it%2C%20Please%20assist%20me."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M24 4C12.95 4 4 12.95 4 24c0 3.6.95 7 2.6 9.95L4 44l10.35-2.55A19.86 19.86 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36c-3.3 0-6.4-.9-9.1-2.45l-.65-.4-6.15 1.6 1.65-5.95-.42-.67A15.93 15.93 0 0 1 8 24c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16zm8.75-11.85c-.48-.24-2.83-1.4-3.27-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.03-.75-3.87-2.38-1.43-1.27-2.4-2.84-2.68-3.32-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.93-.78-.8-1.08-.82l-.92-.02c-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.15.5 2.04.8 2.74 1.02 1.15.36 2.2.31 3.03.19.92-.14 2.83-1.16 3.23-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
      </svg>
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  )
}
