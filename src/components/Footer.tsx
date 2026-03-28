const Footer = () => {
  return (
    <footer className="bg-foreground py-10 text-background">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 font-heading text-lg font-bold">
          <span>Boost</span>
          <span className="text-[#D1FFBD]"> Solution </span>
          <span> Processing LLC</span>
        </p>

        <p className="text-sm opacity-70">
          Copyright {new Date().getFullYear()} Boost Solution Processing LLC. All rights reserved.
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] opacity-70">
          <a href="/privacy-policy.html">Privacy Policy</a>
          {" | "}
          <a href="/terms-of-service.html">Terms &amp; Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
