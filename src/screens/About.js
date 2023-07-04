import React from 'react';

export const About = () => {
  return (
    <div className=" container" id="about" style={{backgroundColor:"black"}}>
  
        <h2   className="className='fs-3 m-3'">About Us</h2>
      <hr id="hr-success" style={{ height: "5px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />

          <div className="abgr">

          {/* para */}
          <div className="md:w-1/2 md:mr-8">
          <h1>Hungry Hive</h1>
          <h3 style={{ fontFamily: 'Allura' }}>where every flavor tells a story.</h3>

            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              beatae! Doloribus fuga aperiam magni ipsum repellat voluptates
              itaque error, atque, exercitationem fugit ab, modi ut voluptatum
              sequi ad eum! Rerum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Minus quia suscipit deserunt, neque nemo veniam
              adipisci deleniti culpa dolor dolores omnis, rem veritatis assumenda
              eaque dignissimos ut, nam debitis numquam!
            </p>
          </div>
          {/* para */}

{/*image  */}
          <div >
            <img
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="w-[400px] h-[400px] object-cover"
            />
          </div>
{/* image */}
</div>
       

      </div>
  
  );
};
