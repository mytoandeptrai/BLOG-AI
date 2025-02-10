import { currentUser } from "@clerk/nextjs/server";
import HeroSection from "./_components/hero";
import CompaniesSection from "./_components/companies";
import FeaturesSection from "./_components/features";
import ProcessSection from "./_components/process";
import PricingSection from "./_components/pricing";
import CustomersSection from "./_components/customers";
import ActionsSection from "./_components/actions";

export default async function LandingPage() {
   const user = await currentUser();
   return (
      <div className="scrollbar-hide size-full overflow-x-hidden">
         <HeroSection user={user} />
         <CompaniesSection />
         <FeaturesSection />
         <ProcessSection />
         <PricingSection />
         <CustomersSection />
         <ActionsSection />
      </div>
   );
}
