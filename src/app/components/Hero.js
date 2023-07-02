import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

function Hero() {
  return (
    <main>
      <div className="row">
      <div className="col-12 d-sm-block d-md-none d-lg-none">
          <Image
            alt="Priyono Santosa"
            width={500}
            height={500}
            src="/priyonosantosa.webp"
            className="img-fluid mb-5 shadow thm_profilepic"
          />
        </div>        
        <div className="col-12 col-md-8">
          <h1 className={`${lato.className}`}>
            Hi, I’m a Full Stack Developer based in Jakarta, Indonesia
          </h1>
          <p>
            Experienced as a senior web developer and digital media professional
            in last 7 years for various clients, startups, companies and
            non-profit organization in Indonesia, Malaysia, Singapore, Hongkong
            and more.
          </p>
          <p>
            At the moment, I work at Leverate Group as a Web Development
            Director.
          </p>
          <div className="mt-4 mb-3 pb-5 d-sm-block d-md-none d-lg-none">
          <div className="d-grid gap-2 text-center">
          <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Curriculum Vitae
            </Link>
            <Link href="/">Read my blog</Link>
              {/* <button class="btn btn-primary" type="button">Button</button> */}
            </div>
            {/* <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Download Resume
            </Link><br />
            or <Link href="/blog">Browse my writings</Link> */}
          </div>
          <div className="mt-4 mb-3 pb-5 d-none d-md-block">
            <Link
              href="/about"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Curriculum Vitae
            </Link>
            or <Link href="/">Read my blog</Link>
          </div>          

          {/* <p>
            Strong multidisipliner background and highly skilled in content
            creation, UI/UX design, CMS development, search engine optimization,
            digital campaign, data visualization, etc by developing a wide range
            of technologies across multiple frameworks, software, operating
            systems & programming language.
          </p>
          <p>
            At the moment, I work at Leverate Group as a Web
            Development Director.
          </p> */}
        </div>
        <div className="col d-none d-md-block">
          <Image
            alt="Priyono Santosa"
            width={500}
            height={500}
            src="/priyonosantosa.webp"
            className="img-fluid mb-5 shadow thm_profilepic"
          />
        </div>
      </div>
      {/* 
      <div className="mt-4 mb-3 pb-5">
        <Link href="/about" className="btn btn-dark btn-lg px-4 me-2 thm_cta">
          <FontAwesomeIcon icon={faFilePdf} /> Download Resume
        </Link>
        or <Link href="/blog">Browse my writings</Link>
      </div> */}
    </main>
  );
}

export default Hero;
