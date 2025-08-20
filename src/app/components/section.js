export default function Section() {
  return (
    <section className="max-w-screen-xl mx-auto px-4  flex flex-col items-center font-[Nunito]">
      <h2   className="text-3xl sm:text-[40px] bg-white font-bold px-4 py-2 text-center text-[#1788ae] border-2 rounded-b-2xl border-[#1788ae] mb-12">
        Latest Works
      </h2>


{/*  first section  */}
      {/* Work Row */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center relative">
        {/* Left: Image and horizontal line */}
        <div className="flex items-center  w-full sm:w-auto mb-8 sm:mb-0">
          <img
            src="/pc1.webp"
            alt="Harigurus"
            className="w-70 h-50 hover:scale-140 transition-transform duration-400 object-cover "
          />
          {/* Horizontal line from center of image to vertical line */}
          <div className="hidden sm:block h-px w-85 bg-[#fc815c] " />
          <div className="w-4 h-4 bg-white rounded-full -ml-0 hover:scale-140 border-4 border-[#fc815c] z-10" />
        </div>
        {/* Vertical line */}
        <div className="hidden -ml-2  sm:block w-px h-80 bg-[#4595eb] mx-7" />
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-center sm:items-start">
          <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">
            Harigurus
          </h3>
          <span className="text-[#fc815c] text-base md:text-lg mb-2">
            (Event Booking)
          </span>
          <p className="text-justify text-sm md:text-base mt-2 mb-2">
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
      </div>


{/*  second  section  */}
{/* Work Coloum */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center relative">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-center sm:items-start">
          <h3 className="text-[#771393] font-bold text-2xl md:text-4xl">
            Harigurus
          </h3>
          <span className="text-[#771393] text-base md:text-lg mb-2">
            (Event Booking)
          </span>
          <p className="text-justify text-sm md:text-base mt-2 mb-2">
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
        <div className="flex items-center w-full sm:w-auto mb-8 sm:mb-0">
        {/* Vertical line */}
        <div className="hidden sm:block w-px h-90 bg-[#4595eb] mx-8" />

        {/* Left: Image and horizontal line */}
          <div className="w-4 h-4 bg-white rounded-full -ml-10   hover:scale-140 border-4 text-[#771393] z-10" />
          <div className="hidden sm:block h-px w-85 bg-[#771393] ml-[-10px]" />
          <img
            src="/pc2.webp"
            alt="Harigurus"
             className="w-70 h-50 hover:scale-140 transition-transform duration-400 object-cover "
          />
          {/* Horizontal line from center of image to vertical line */}
         
        </div>
      </div>


{/*  third section  */}
      {/* Work Row */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center relative">
        {/* Left: Image and horizontal line */}
        <div className="flex items-center  w-full sm:w-auto mb-8 sm:mb-0">
          <img
            src="/pc3.webp"
            alt="Harigurus"
            className="w-70 h-50 hover:scale-140 transition-transform duration-400 object-cover "
          />
          {/* Horizontal line from center of image to vertical line */}
          <div className="hidden sm:block h-px w-85 bg-[#5cfce7] " />
          <div className="w-4 h-4 bg-white rounded-full -ml-0 hover:scale-140 border-4 border-[#16a995] z-10" />
        </div>
        {/* Vertical line */}
        <div className="hidden -ml-2  sm:block w-px h-80 bg-[#4595eb] mx-7" />
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-center sm:items-start">
          <h3 className="text-[#16a995] font-bold text-2xl md:text-4xl">
            Harigurus
          </h3>
          <span className="text-[#16a995] text-base md:text-lg mb-2">
            (Event Booking)
          </span>
          <p className="text-justify text-sm md:text-base mt-2 mb-2">
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
      </div>
   


{/*  fourth section  */}
{/* Work Coloum */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center relative">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-center sm:items-start">
          <h3 className="text-[#1f57c0] font-bold text-2xl md:text-4xl">
            Harigurus
          </h3>
          <span className="text-[#1f57c0] text-base md:text-lg mb-2">
            (Event Booking)
          </span>
          <p className="text-justify text-sm md:text-base mt-2 mb-2">
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
        <div className="flex items-center w-full sm:w-auto mb-8 sm:mb-0">
        {/* Vertical line */}
        <div className="hidden sm:block w-px h-90 bg-[#4595eb] mx-8" />

        {/* Left: Image and horizontal line */}
          <div className="w-4 h-4 bg-white rounded-full -ml-10   hover:scale-140 border-4 text-[#1f57c0] z-10" />
          <div className="hidden sm:block h-px w-85 bg-[#1f57c0] ml-[-10px]" />
          <img
            src="/pc4.webp"
            alt="Harigurus"
             className="w-70 h-50 hover:scale-140 transition-transform duration-400 object-cover "
          />
          {/* Horizontal line from center of image to vertical line */}
         
        </div>
      </div>




      
    </section>
  );
}
