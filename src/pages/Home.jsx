import { CTASection } from "../components/CTASection";
import { DescriptionSection } from "../components/DescriptionSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { Login } from "./Login";
import { SignUp } from "./Signup";

export const Home = () => {

  return(
    <main className="text-md sm:text-lg md:text-xl text-slate-600">
      <NavBar />
      <HeroSection />
      <DescriptionSection />
      <CTASection />
      <SignUp />
      <Login />
      <Footer />
    </main>
  );
};