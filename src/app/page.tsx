import { currentUser } from "@clerk/nextjs/server";
import HeroSection from "./_components/hero";
import CompaniesSection from "./_components/companies";
import FeaturesSection from "./_components/features";

export default async function LandingPage() {
   const user = await currentUser();
   return (
      <div className="scrollbar-hide size-full overflow-x-hidden">
         <HeroSection user={user} />
         <CompaniesSection />
         <FeaturesSection />
      </div>
   );
}
