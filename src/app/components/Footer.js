import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
<div className="text-dark border-0 mt-5">
<div className="container text-center">
  <div className="row">
    <div className="col pt-4">
      <p>
        Priyono Santosa <FontAwesomeIcon icon={faCreativeCommons} /> 2010 - 2023.<br/>All Rights Reserved
      </p>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer