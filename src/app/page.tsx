"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Lightbulb, Award } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="/brand/logo.png"
          logoAlt="Company Logo"
          brandName="IT Company"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Empower Your Business"
          description="Innovative IT Solutions for Modern Enterprises"
          imageSrc="https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="About Us"
          description="We are committed to delivering cutting-edge IT solutions and services."
          imageSrc="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          bulletPoints={[
            {
              title: "Innovation",
              description: "Pioneering new technologies",
              icon: Lightbulb
            },
            {
              title: "Commitment",
              description: "Focused on client success",
              icon: Award
            }
          ]}
        />
      </div>
      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Exclusive Features"
          description="Explore our powerful features for optimized performance."
          features={[
            {
              id: "01",
              title: "Advanced Analytics",
              description: "Access detailed insights and data-driven decisions.",
              imageSrc: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Passionate professionals dedicated to excellence."
          members={[
            {
              id: "1",
              name: "Alex Johnson",
              role: "Founder & CTO",
              description: "Leading the tech innovations with over 20 years experience.",
              imageSrc: "https://images.pexels.com/photos/4427497/pexels-photo-4427497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Our services are trusted by global industry leaders."
          logos={["https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact Us"
          title="Get in Touch"
          description="Reach out to us for collaboration and inquiries."
          onSubmit={(email) => console.log(email)}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            {
              items: [{ label: "Features", href: "features" }]
            },
            {
              items: [{ label: "Privacy", href: "privacy" }]
            }
          ]}
          logoText="IT Company"
        />
      </div>
    </ThemeProvider>
  );
}
