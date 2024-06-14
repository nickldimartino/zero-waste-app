import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location: any = useLocation();
  const pageLocation: string = location.pathname;
  const relativeLocation: boolean = pageLocation === "/industries" || pageLocation === "/materials" ? true : false;

  return (
    <>
      {relativeLocation ? (
        <div className="bg-success position-relative mt-3 w-100">Footer Relative</div>
      ) : (
        <div className="bg-success position-fixed bottom-0 mt-3 w-100">Footer Fixed</div>
      )}
    </>
  )
}
