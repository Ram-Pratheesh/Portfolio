import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Awards from '@/components/Awards';
import TechStack from '@/components/TechStack';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative w-full bg-black">
      <ScrollyCanvas />
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="tech"><TechStack /></div>
      <div id="awards"><Awards /></div>
      <div id="certifications"><Certifications /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}
