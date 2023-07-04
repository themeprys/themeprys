import React from "react";
import Image from "next/image";

function Porto() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mb-5 pb-5 border-bottom text-center">
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/mitherafilm.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>mitherafilm.com</h5>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/peoplereunite_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>peoplereunite.id</h5>          
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/srmbands_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>srmbands.id</h5>                    
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/mondiblanc_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>mondiblanc.org</h5>          
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/rupasuara_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>rupasuara.com</h5>                    
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/img/porto/thetales_web.webp"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
          <h5>thetalesoftheurbanmisfits.com</h5>          
        </div>
      </div>
      {/* <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/600x400.svg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/600x400.svg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
        </div>
      </div>
      <div className="col">
        <div className="card h-100 border-0">
          <Image
            width="600"
            height="400"
            src="/600x400.svg"
            className="card-Image-top img-fluid rounded"
            alt="themeprys"
          />
        </div>
      </div>             */}
    </div>
  );
}

export default Porto;
