// import React, { useState } from 'react';

// const SocialMediaButtons = () => {
//   const [showImage, setShowImage] = useState(false);

//   const handleShowImage = () => {
//     setShowImage(true);
//   };

//   return (
//     <div className="flex flex-col items-center mt-8 relative">
//       <button onClick={handleShowImage} className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded">
//         Tickle my Balls
//       </button>
//       {showImage && (
//         <div className="mt-4 w-100 h-100 relative">
//           <img src="/Asset 1.png" alt="Ball Image" className="w-full h-full object-cover scale-125 mt-4 "/>
//           <div className="absolute inset-0 flex justify-center items-center space-x-60"> {/* Adjusted the spacing here */}
//             <a href="https://t.me/your_telegram_link" target="_blank" rel="noopener noreferrer" className="text-lg">
//               <button className=" text-white font-bold py-6 px-4 rounded">TELEGRAM</button>
//             </a>
//             <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer" className="text-lg">
//               <button className=" text-white font-bold py-2 px-4 rounded">TWITTER</button>
//             </a>
//           </div>
//         </div>
//       )}
//       <p className="text-white mt-8 text-sm font-bold text-center max-w-2xl mx-auto">
//       Forget boring old movies, Nutflix is all about Nutz - there's 8 billion of them! With every TUDUM (that awesome Nutflix sound), Nutz get more control, becoming GigaChadz!! 
// Lost onchain in this Woke Culture!! Pepe the meme master, Brett the coding queen, and Andy the awesome gamer  were lost. But guess what saved them? Their Nutz power! Pepe powered its community with Nutz, Brett's community rocked Nutflix, and Andy welcomed everyone. Together, they built a giant Nutz community with a special sound called TUDUM.
// This Nutz community became super famous! Nutflix realized Nutz were awesome and let them influence everything. The TUDUM sound became like a calling for Nutz, giving them a say in what happens. Pepe, Brett, and Andy became super legends - Harnessing TUDUM
// But it's not just about them. The TUDUM sound isn't just on screens, it's a feeling in all Nutz hearts. The world is finally waking up - lets unite with 8 billion Nutz, all powered by TUDUM! 
//       </p>
//       <footer className="w-full py-6 mt-12 bg-black text-white text-xl font-bold text-center">
//         Untold Stories from the Book of Meme, presented by TUDUM, coming soon on Nutflix
//       </footer>
//     </div>
//   );
// };

// export default SocialMediaButtons;




// import React, { useState } from 'react';

// const SocialMediaButtons = () => {
//   const [showContent, setShowContent] = useState(false);

//   const handleShowContent = () => {
//     setShowContent(true);
//     // Smooth scroll to the content
//     window.scrollTo({
//       top: window.innerHeight * 2, // Scroll down to the height of the viewport
//       behavior: 'smooth', 
//     });
//   };

//   return (
//     <div className="flex flex-col items-center mt-8 relative">
//       {!showContent && (
//         <button onClick={handleShowContent} className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded">
//           Tickle my Balls
//         </button>
//       )}
//       {showContent && (
//         <div className="full-page-content overflow-auto"> {/* Ensure overflow is set to auto */}
//           <div className="mt-4 w-full h-full relative">
//             <img src="/Asset 1.png" alt="Ball Image" className="mx-auto max-w-full h-auto object-cover scale-125 mt-4 "/>
//             <div className="absolute inset-0 flex justify-center items-center space-x-60"> {/* Adjusted the spacing here */}
//               <a href="https://t.me/your_telegram_link" target="_blank" rel="noopener noreferrer" className="text-lg">
//                 <button className=" text-white font-bold py-6 px-4 rounded">TELEGRAM</button>
//               </a>
//               <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer" className="text-lg">
//                 <button className=" text-white font-bold py-2 px-4 rounded">TWITTER</button>
//               </a>
//             </div>
//           </div>
//           <p className="text-white mt-8 text-sm font-bold text-center max-w-2xl mx-auto">
//             {/* Your content goes here */}
//             Forget boring old movies, Nutflix is all about Nutz - there's 8 billion of them! With every TUDUM (that awesome Nutflix sound), Nutz get more control, becoming GigaChadz!! 
//             Lost onchain in this Woke Culture!! Pepe the meme master, Brett the coding queen, and Andy the awesome gamer  were lost. But guess what saved them? Their Nutz power! Pepe powered its community with Nutz, Brett's community rocked Nutflix, and Andy welcomed everyone. Together, they built a giant Nutz community with a special sound called TUDUM.
//             This Nutz community became super famous! Nutflix realized Nutz were awesome and let them influence everything. The TUDUM sound became like a calling for Nutz, giving them a say in what happens. Pepe, Brett, and Andy became super legends - Harnessing TUDUM
//             But it's not just about them. The TUDUM sound isn't just on screens, it's a feeling in all Nutz hearts. The world is finally waking up - lets unite with 8 billion Nutz, all powered by TUDUM! 
//           </p>
//           <footer className="w-full py-6 mt-12 bg-black text-white text-xl font-bold text-center">
//             Untold Stories from the Book of Meme, presented by TUDUM, coming soon on Nutflix
//           </footer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SocialMediaButtons;


// import React, { useState } from 'react';

// const SocialMediaButtons = () => {
//   const [showContent, setShowContent] = useState(false);

//   const handleShowContent = () => {
//     setShowContent(true);
//     // Smooth scroll to the content
//     window.scrollTo({
//       top: window.innerHeight *2 + 100, // Scroll down to the height of the viewport
//       left: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="flex flex-col items-center mt-8 relative">
//       {!showContent && (
//         <button onClick={handleShowContent} className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded">
//           Tickle my Balls
//         </button>
//       )}
//       {showContent && (
//         <div className="full-page-content overflow-auto" style={{ width: '100vw' }}> {/* Ensure width is set to 100vw */}
//           <div className="mt-4 w-full h-full relative">
//             <img src="/Asset 1.png" alt="Ball Image" className="mx-auto max-w-full h-auto object-cover scale-125 mt-4 "/>
//             <div className="absolute inset-0 flex justify-center items-center space-x-60"> {/* Adjusted the spacing here */}
//               <a href="https://t.me/your_telegram_link" target="_blank" rel="noopener noreferrer" className="text-lg">
//                 <button className=" text-white font-bold py-6 px-4 rounded">TELEGRAM</button>
//               </a>
//               <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer" className="text-lg">
//                 <button className=" text-white font-bold py-2 px-4 rounded">TWITTER</button>
//               </a>
//             </div>
//           </div>
//           <p className="text-white mt-8 text-xl font-bold text-center max-w-8xl mx-auto">
//             {/* Your content goes here */}
//             Forget boring old movies, Nutflix is all about Nutz - there's 8 billion of them! With every TUDUM (that awesome Nutflix sound), Nutz get more control, becoming GigaChadz!! 
//             Lost onchain in this Woke Culture!! Pepe the meme master, Brett the coding queen, and Andy the awesome gamer  were lost. But guess what saved them? Their Nutz power! Pepe powered its community with Nutz, Brett's community rocked Nutflix, and Andy welcomed everyone. Together, they built a giant Nutz community with a special sound called TUDUM.
//             This Nutz community became super famous! Nutflix realized Nutz were awesome and let them influence everything. The TUDUM sound became like a calling for Nutz, giving them a say in what happens. Pepe, Brett, and Andy became super legends - Harnessing TUDUM
//             But it's not just about them. The TUDUM sound isn't just on screens, it's a feeling in all Nutz hearts. The world is finally waking up - lets unite with 8 billion Nutz, all powered by TUDUM! 
//           </p>
//           <footer className="w-full py-6 mt-12 bg-black text-white text-lg font-bold text-center">
//             Untold Stories from the Book of Meme, presented by TUDUM, coming soon on Nutflix
//           </footer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SocialMediaButtons;



import React, { useState } from 'react';

const SocialMediaButtons = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
    // Smooth scroll to the content
    window.scrollTo({
      top: window.innerHeight * 2 + 100, // Scroll down to the height of the viewport
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col items-center mt-4 md:mt-8 relative">
      {!showContent && (
        <button onClick={handleShowContent} className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded">
          Tickle my Balls
        </button>
      )}
      {showContent && (
        <div className="full-page-content overflow-auto" style={{ width: '100vw' }}>
          {/* Ensure width is set to 100vw */}
          <div className="mt-2 md:mt-4 w-full h-full relative">
            <img src="/Asset 1.png" alt="Ball Image" className="mx-auto max-w-full h-auto object-cover scale-125 mt-2 md:mt-4" style={{ maxWidth: '90vw' }} />
            {/* Adjusted max-width to prevent image from overflowing */}
            <div className="absolute inset-0 flex flex-col justify-center items-center md:flex-row md:space-x-10">
              {/* Adjusted the spacing here */}
              <a href="https://t.me/your_telegram_link" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg">
                <button className=" text-white font-bold py-4 px-4 rounded">TELEGRAM</button>
              </a>
              <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg">
                <button className=" text-white font-bold py-2 px-4 rounded">TWITTER</button>
              </a>
            </div>
          </div>
          <p className="text-white mt-2 md:mt-4 text-base md:text-lg font-bold text-center max-w-7xl mx-auto">
            {/* Your content goes here */}
            Forget boring old movies, Nutflix is all about Nutz - there's 8 billion of them! With every TUDUM (that awesome Nutflix sound), Nutz get more control, becoming GigaChadz!!
            Lost onchain in this Woke Culture!! Pepe the meme master, Brett the coding queen, and Andy the awesome gamer were lost. But guess what saved them? Their Nutz power! Pepe powered its community with Nutz, Brett's community rocked Nutflix, and Andy welcomed everyone. Together, they built a giant Nutz community with a special sound called TUDUM.
            This Nutz community became super famous! Nutflix realized Nutz were awesome and let them influence everything. The TUDUM sound became like a calling for Nutz, giving them a say in what happens. Pepe, Brett, and Andy became super legends - Harnessing TUDUM
            But it's not just about them. The TUDUM sound isn't just on screens, it's a feeling in all Nutz hearts. The world is finally waking up - lets unite with 8 billion Nutz, all powered by TUDUM!
          </p>
          <footer className="w-full py-2 md:py-6 mt-2 md:mt-4 bg-black text-white text-xs md:text-base font-bold text-center">
            Untold Stories from the Book of Meme, presented by TUDUM, coming soon on Nutflix
          </footer>
        </div>
      )}
    </div>
  );
};

export default SocialMediaButtons;
