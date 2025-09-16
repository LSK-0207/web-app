// import ContactUs from "@/components/ContactUs";
// import HeroSection from "@/components/Menu/HeroSection";
// import Order from "@/components/Menu/Order";

import { redirect } from "next/navigation";

// Force-redirect anyone trying to access the /menu page to the landing page (/)
export default function Menu() {
  // Original JSX commented out below (do not delete per request):
  // return (
  //   <div>
  //     <HeroSection />
  //     <Order />
  //     <ContactUs />
  //   </div>
  // );

  // Perform a server-side redirect to the landing page
  redirect("/");
}
