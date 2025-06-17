import { CTASection } from "../components/CTASection";
import { DescriptionSection } from "../components/DescriptionSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { LoginSection } from "../components/LoginSection";
import { NavBar } from "../components/NavBar";
import { SignUpSection } from "../components/SignUpSection";

export const Home = () => {

  return(
    <main className="text-md sm:text-lg md:text-xl text-slate-600">
      <NavBar />
      <HeroSection />
      <DescriptionSection />
      <CTASection />
      <SignUpSection />
      <LoginSection />
      <Footer />
    </main>
  );
};