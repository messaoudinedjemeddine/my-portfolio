import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nedjmou | Web developer | IT Support</title>
        <meta name="description" content="Professional portfolio for Morgan, a web and graphics designer that solves design-related problems." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
