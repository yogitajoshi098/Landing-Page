"use client"
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import MidSection from "./components/MidSection";
import Mobile from "../public/Mobile.png";
import Telephone from "../public/Telephone.png";
import Rupee from "../public/RupeeSymbol.png";
import Mobile2 from "../public/Mobile2.png";
import Image from "next/image";
import Group1 from "../public/Group1.png";
import Group2 from "../public/Group2.png";
import Group3 from "../public/Group3.png";
import Group4 from "../public/Group4.png";
import Group5 from "../public/Group5.png";
import Cards from "./components/Cards";
import Pointer from "../public/Pointer.png";
import Card2 from "./components/Card2";
import Hamburger from "../public/hamburger.png"
import { useEffect, useState } from "react";



export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);


  useEffect(() => {
    // Function to update window width
    const updateWindowWidth = () => {
      console.log(windowWidth,"window...");
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    updateWindowWidth();

    // Event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <body>
      {windowWidth <= 600 ? <div className={styles.nav}> <Image src={Hamburger} width={45} height={45}/></div> : <Navbar /> }
      
       <main className={styles.top_main}> 
        <div className={styles.main}>
          <MidSection
            title="Diversifying the Designs of Digital World"
            topPara={`Explorogent International Services Private Limited (EISPL) is one
         of the most famous companies in the sector of Web and Mobile
         Development. In the market, EISPL has a strong presence in
         providing quality services to its clients.`}
            bottomPara={`EISPL is convinced that one should diversify the offering, given
             the changing needs of the clients. That is why we engage in
             multiple projects and activities. We also possess knowledge in web
             development, app development, UI/UX design, as well as digital
             marketing.`}
            buttonTitle="Book a Call"
            MobileImage={Mobile}
            buttonImg={Telephone}
          />
        </div>
        <div className={styles.mid}>
          <p>In the realm of digital solutions, we offer expertise in</p>
          <div className={styles.mid_button}>
            <button>Website Development</button>
            <button>App Development</button>
            <button>UI/UX Design</button>
            <button>Digital Marketing</button>
            <button>SEO Optimisation</button>
          </div>
          <p className={styles.p}>
            showcasing our proficiency across various facets of the digital
            platform{" "}
          </p>
        </div>
        <div>
          <p className={styles.mid_heading}>
            Stay Ahead!
            <br></br>
            Launch Your Next Project with Stackkaroo
          </p>
        </div>
        <div className={styles.main}>
          <MidSection
            title="Our Story"
            topPara={`Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations.

Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride.`}
            bottomPara={`EISPL is convinced that one should diversify the offering, given
             the changing needs of the clients. That is why we engage in
             multiple projects and activities. We also possess knowledge in web
             development, app development, UI/UX design, as well as digital
             marketing.`}
            buttonTitle="Get Estimated Project Cost"
            MobileImage={Mobile2}
            buttonImg={Rupee}
          />
        </div>
        <div className={styles.section2}>
          <h1>Why Choose Us?</h1>
          <p>
            We excel with reliability, innovation and customer-centric approach
            for our quality products.
            <br></br>
            <br></br>
            Our dedicated team ensures that the solutions provided are
            dependable and long-term
          </p>
        </div>
      </main>
      <section>
        <div className={styles.top_div}>
          <div className={styles.section_div}>
            <div>
              <Image src={Group1} />
              User-Centric Approach
            </div>
            <div>
              <Image src={Group2} />
              Customer Satisfaction
            </div>
            <div>
              <Image src={Group3} />
              Integrating Feedback
            </div>
            <div>
              <Image src={Group4} />
              High Quality Products
            </div>
            <div>
              <Image src={Group5} />
              On-Time Product Delivery
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <h1>Stackkaroo’s Digital Services</h1>
          <p>
            We excel with reliability, innovation and customer-centric approach
            for our quality products. Our dedicated team ensures that the
            solutions provided are dependable and long-term
          </p>
        </div>
        <Cards />
        
        <div className={styles.section3}>
          <h1 className={styles.section_title}>SEO Services</h1>
        <div className={styles.section_main}>
          <div className={styles.left}>
            <div className={styles.left_section}>
              <Image src={Pointer} className={styles.pointer} />
              <div>
                <h2>Customized SEO Services</h2>
                <p>
                  We develop tailored SEO plans for new websites as they
                  consider a correct SEO website checklist, as well as strategy,
                  to be critical for business.
                </p>
              </div>
            </div>

            <div className={styles.left_section}>
              <Image src={Pointer} className={styles.pointer} />
              <div>
                <h2>On-Page SEO Services</h2>
                <p>
                  We offer on-page SEO services for content, photos,
                  descriptions, and visibility. They follow the design
                  principles for SEO-friendly websites in order to provide their
                  customers with the best outcomes.
                </p>
              </div>
            </div>

            <div className={styles.left_section}>
              <Image src={Pointer}className={styles.pointer} />
              <div>
                <h2>Off-Page SEO Services</h2>
                <p>
                  We undertake off-page SEO for better rankings. They mainly
                  specialize in handling backlink profiles. Their SEO analysts
                  strive to ensure that their websites are listed on some of the
                  popular sites in the industry of travel.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.right_section}>
            <div className={styles.left_section}>
              <Image src={Pointer} className={styles.pointer} />
              <div>
                <h2>Mobile SEO Services</h2>
                <p>
                  We stress upon the mobile optimizations since the mobile phone
                  use by search is highly prevalent. They are more able to score
                  the best SEO rankings and can easily be viewed on mobile
                  devices.
                </p>
              </div>
            </div>
            <div className={styles.left_section}>
              <Image src={Pointer} className={styles.pointer}/>
              <div>
                <h2>Free Website Audit and Strategies</h2>
                <p>
                  We go beyond essential SEO website development to give out
                  free website audits, analysis and SEO strategies for
                  transparent business strategies. They target business owners
                  in different industries, and these packages include local SEO
                  and e-commerce services.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.section2}>
          <h1>Stackkaroo’s Talent Hiring & Job Placement Services</h1>
          <p>
            We are a talent searching platform that redesigns how companies hire
            talents. It is a cost-effective solution for industries.
            <br></br> We also provide global job opportunities with good
            salaries, support, and professional development.
          </p>
        </div>
        <Card2 />
      </section> 
    </body>
  );
}
