import React from "react";
import Image from "next/image";
import leftCaret from "public/zeelo-logo.png";

const ZeeloHeader = () => {
  return <Image src={leftCaret} alt="caret Left" width={450} height={100} />;
};

export default ZeeloHeader;
