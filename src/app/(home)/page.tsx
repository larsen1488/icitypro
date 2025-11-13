import BenefitsCard from "@/src/components/BenefitsCard";
import CityProStats from "@/src/components/CityProStats";
import FaqAccordion from "@/src/components/FaqAccordion";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import IntercomPromo from "@/src/components/IntercomPromo";
import Layout from "@/src/components/Layout";
import PhoneForm from "@/src/components/PhoneForm";
import PricingTable from "@/src/components/PricingTable";
import PromoSection from "@/src/components/PromoSection";
import SmartIntercomInfo from "@/src/components/SmartIntercomInfo";

export default function Home() {
  return (
    <main>
      <Header />
      <Layout>
        <PhoneForm />
        <Hero />
        <SmartIntercomInfo />
        <BenefitsCard />
        <PricingTable />
        <PromoSection />
        <IntercomPromo />
        <CityProStats />
        <FaqAccordion />
        <PhoneForm />
      </Layout>
      <Footer />
    </main>
  );
}
