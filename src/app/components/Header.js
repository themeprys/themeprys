import React from "react";
import Link from "next/link";
import { Inter, Lato } from 'next/font/google'

const lato = Lato({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ['latin'], weight: ["500"] })

function Header() {
  return (
    <header className="pb-3 mb-5 border-bottom">
      <div className="row">
        <div className="col">
          <Link
            href="/"
            className="text-body-emphasis text-decoration-none"
          >
            <h1 className={`${lato.className} fs-4`}>
              Priyono Santosa</h1>
              <span className={`${inter.className} h6 text-body-secondary`}> 
                Full Stack Developer | Digital Media Professional
              </span>
          </Link>
        </div>
        <div className="col col-md-6 text-md-end thm_headerlinks pt-2 d-none d-md-block">
        <p><a target="_blank" href="https://linkedin.com/in/themeprys">https://linkedin.com/in/themeprys</a><br/>
        <a href="mailto:priyonosantosa.id@gmail.com">priyonosantosa.id@gmail.com</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;
