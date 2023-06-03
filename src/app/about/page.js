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
          <h1 className={`${lato.className} pb-3 mb-3`}>About</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <p>
            <strong>PROFESSIONAL SUMMARY</strong>
          </p>
          <p>
            More than 7 years take part in the digital marketing industry and
            worked for various business owners, startups, companies and
            non-profit organizations around South East Asia.
          </p>
          <p>
            As a full stack developer, I have a strong multidisciplinary
            background and proven work on content strategy and creation, UI/UX
            research and design, web and CMS development, SEO and SEM, social
            media marketing, e-commerce optimization and data visualization.
          </p>
          <p>
            In terms of leadership skills, I have more than 5 years experience
            building teams from scratch, screening the best developer talent
            around the country, coaching Agile and Scrum Framework materials,
            direct and maintaining their performance on a daily basis with tools
            such as Trello, Slack, JIRA and other Agile project management
            software.
          </p>
          <p>
            At the moment, I work at Leverate Group as a Web Development
            Director.
          </p>
          <p>
            <strong>KEY SKILLS</strong>
          </p>
          <ul>
            <li aria-level="1">Project Planning and Budgeting</li>
            <li aria-level="1">Content Strategy &amp; Creation</li>
            <li aria-level="1">User Experience (UX) Research</li>
            <li aria-level="1">User Interface (UI) Design</li>
            <li aria-level="1">Full Stack Website Development</li>
            <li aria-level="1">System Administrator/ DevOps</li>
            <li aria-level="1">Search Engine Optimization</li>
            <li aria-level="1">App Store Optimization</li>
            <li aria-level="1">Digital Marketing</li>
            <li aria-level="1">Data Visualization &amp; Analytical</li>
            <li aria-level="1">Website Performance Monitoring</li>
            <li aria-level="1">Scrum Master/ Agile</li>
            <li aria-level="1">Product Development</li>
            <li aria-level="1">Project Management</li>
          </ul>
          {/* <p>
            <strong>
              <br />
            </strong>
            <strong>TECHNICAL SKILLS</strong>
          </p>
          <ul>
            <li aria-level="1">Operating System: Mac, Linux, Windows&nbsp;</li>
            <li aria-level="1">Web Server: Nginx, Centos, Apache</li>
            <li aria-level="1">
              Cloud: Google Cloud Platform, Amazon Web Services, Digital Ocean
            </li>
            <li aria-level="1">Serverless: Vercel, Netlify</li>
            <li aria-level="1">Database: SQL, MongoDb</li>
            <li aria-level="1">
              Programming: PHP, Vanilla Javascript, NodeJS, ReactJS, VueJs,
              Python, Java, R Language
            </li>
            <li aria-level="1">
              Frameworks: Laravel, Codeigniter, NuxtJs, NextJs,&nbsp;
            </li>
            <li aria-level="1">Traditional CMS: WordPress, Magento, Drupal</li>
            <li aria-level="1">Headless CMS: Strapi, Directus, CrafterCMS</li>
            <li aria-level="1">
              Version Control System: Gitlab, Github, Bitbucket
            </li>
            <li aria-level="1">
              Google/ SEO: GA4, Search Console, Google Tag Manager, Semrush,
              Ahrefs
            </li>
            <li aria-level="1">
              Social Media: Fanpage Karma, Falcon, Buffer, Hootsuite, IFTTT
            </li>
            <li aria-level="1">
              Data Visualization/ Science: Google Data Studio, PowerBI, Tableau,
              R Studio
            </li>
            <li aria-level="1">
              Multimedia Editing: Adobe Premier, Kdenlive, Audacity
            </li>
            <li aria-level="1">
              Graphic Design: Adobe Photoshop, Illustrator, GIMP, Inkscape
            </li>
            <li aria-level="1">Agile/ Scrum: Trello, Pivotal Tracker, Slack</li>
          </ul> */}

          <div className="mt-4 mb-3 pb-5 d-sm-block d-md-none d-lg-none">
            <div className="d-grid gap-2 text-center">
              <a
                href="https://docs.google.com/document/d/1JPLDv9Flo1Y815kSTgwzs9FF2raDYcauC7v81wMnUGQ/edit"
                className="btn btn-dark btn-lg px-4 me-2 thm_cta"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFilePdf} /> Download my CV
              </a>
              {/* <Link href="/">Browse my writings</Link> */}
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
            <a
              href="https://docs.google.com/document/d/1JPLDv9Flo1Y815kSTgwzs9FF2raDYcauC7v81wMnUGQ/edit"
              className="btn btn-dark btn-lg px-4 me-2 thm_cta"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Download my CV
            </a>
            {/* or <Link href="/">Browse my writings</Link> */}
          </div>
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
