import Link from "next/link";
import { Calendar, CalendarDays } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="text-center mt-32">
        <p>Trusted by these companies:</p>
        <div className="flex gap-10 *:h-6 mt-6 justify-center text-gray-600 ">
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg" />
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/1FA2gEsWeu2MyGSy6Qp6ao/859833105cdd6ed5cc75eb5e4bd9cff7/HelloFresh.svg" />
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg" />
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/6jZ182ywMavcqhY7WiLS5x/fb3c393066ae09dc17819472dc605d8f/15Five.svg" />
        </div>
      </section>
    
    </>
  );
}
