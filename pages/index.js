import Head from "next/head";
import classes from "../styles/Home.module.css";
import Welcome from "../components/Welcome/Welcome";
import What from "../components/What/What";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/Contact/ContactForm";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Joakimwebdev</title>
        <meta name="Joakimwebdev" content="Joakimwebdev portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={classes.main}>
        <Welcome />
        <About />
        <What />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}
