import React, { useEffect } from "react";
import Master from "../Layouts/Master";

export default function Test() {
    async function getData(){
        const response = await fetch('https://api.elinorboutique.com/v1/front/home');
        const json = await response.json(); // تبدیل به JSON
        console.log(json.data.response.stories); 
    }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Master>
      <section
        className="hero"
        style={{ width: "99vw", height: "100vh", backgroundColor: "#f5f5f5" }}
      >
        {/* محتوای دلخواه */}
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <p>تست</p>
      </section>
    </Master>
  );
}
