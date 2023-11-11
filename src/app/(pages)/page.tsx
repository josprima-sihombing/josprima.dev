import DestroyButton from "@/components/atoms/destroy-button";
import HeroSection from "@/components/sections/hero";
import LatestPost from "@/components/sections/latest-post";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestPost />

      <DestroyButton />
    </>
  );
}
