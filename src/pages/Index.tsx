import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-16">
        <img
          src={logo}
          alt="Very Good Editions"
          className="max-h-32 w-auto object-contain"
        />
        <Link
          to="/artists"
          className="text-[10px] tracking-[0.25em] lowercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          artists
        </Link>
      </div>
    </div>
  );
};

export default Index;
