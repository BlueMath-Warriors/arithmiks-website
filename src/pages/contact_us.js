import * as React from "react";
import Header from "../components/Landing/Header";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import * as containerStyles from "../styles/global.module.css";

const IndexPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
      <Header/>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (<>
<title>Arithmiks - Software Development Company</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"></link>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&family=Urbanist:wght@500;600;700&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,700&display=swap" rel="stylesheet"></link>

</>);
