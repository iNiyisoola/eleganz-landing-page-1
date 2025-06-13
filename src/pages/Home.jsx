import { CTASection } from "../components/CTASection";
import { DescriptionSection } from "../components/DescriptionSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { LoginSection } from "../components/LoginSection";
import { SignUpSection } from "../components/SignUpSection";

export const Home = () => {

  return(
    <main className="container mx-auto h-screen text-md sm:text-lg md:text-xl text-slate-600">
      <HeroSection />
      <DescriptionSection />
      <CTASection />
      <SignUpSection />
      <LoginSection />
      <Footer />
    </main>
  );
};