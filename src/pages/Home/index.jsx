import React from "react";
import { CgDanger } from "react-icons/cg";

const Home = () => {
  return (
    <div className='space-y-10 px-6 md:px-16'>
      <div>Image div</div>
      <div className="text-center">
        <h3 className="font-medium text-red-600">
          Competence and experience for your health Family doctor Rheindahlen
        </h3>
        <p className="font-extralight">
          Your own health is a very personal matter. We at your Rheindahlen
          family doctor understand this, and we repay the trust you place in us
          with maximum commitment. Because the well-being of our patients is our
          driving force.
        </p>
      </div>
      <div className='border-[0.5px] border-[#f29549] p-4 flex gap-4'>
        <CgDanger className='text-[#f29549]'/>
        <div className='space-y-6'>
          <p className='text-red-600 font-bold text-xl'>Digital health applications
</p> <p>Dear patients,</p>
<p className=''>Our practice can prescribe all digital health applications (DiGa) for you . You can find an overview here: {' '}
<a href='https://diga.bfarm.de/de/diga-nutzer' target='_blank'>https://diga.bfarm.de/de/diga-nutzer</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
