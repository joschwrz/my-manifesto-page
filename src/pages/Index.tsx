import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-16">
        {/* Logo placeholder — replace src with your logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="max-h-32 w-auto object-contain"
        />
        <Link
          to="/artists"
          className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          artists
        </Link>
      </div>
    </div>
  );
};

export default Index;
