const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-heading text-lg font-bold mb-2">
          <span>Boost</span>
          <span className="text-[#D1FFBD]"> Solution </span>
          <span> Processing LLC</span>
        </p>
        
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Boost Solution Processing LLC. All rights reserved.
          <br/>
          <br/><a href="/privacy-policy.html">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
