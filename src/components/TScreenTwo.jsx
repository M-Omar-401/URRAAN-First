import React from "react";
import logo from "../assets/TaskThree/logo.png";
import iconAward from "../assets/TaskThree/icon_awards.png";
import one from "../assets/TaskThree/1.png";

function TScreenTwo() {
  return (
    <div>
      <div className="relative bg-[#8d2b2b] h-[120vh] p-5">
        <img
          src={logo}
          alt="Logo"
          className="w-[190px] h-[190px] ml-[100px] mt-[50px]"
        />
        <h1 className="text-[100px] ml-[100px] mt-2 font-[Libre Franklin] font-bold text-white">
          RED CARD 2018
        </h1>
        <p className="text-[50px] ml-[100px] font-bold text-white">
          China Digital Football Awards
        </p>
        <div className="w-[90%] text-white text-lg ml-[100px] mt-2">
          <p>
            The Red Card is globally recognized as the leading annual report to
            assess the most influential European football clubs, leagues, and
            players online in China. Now in its 7th year, Red Card 2018 has been
            reimagined to include 5 additional awards to recognize the many
            areas of digital performance in China, thereby taking the Red Card
            report to a whole new level. Due to the nature and variety of these
            new categories, the winners will be chosen by a panel of 6 industry
            experts, rather than by the traditional metrics used to assess the
            three headline awards.
          </p>
          <br />
          <p>
            This report aims to educate teams and organizations on how to
            improve their China digital strategy, what today's Chinese fans
            want, and what works online in China.
          </p>
        </div>

        {/* White Triangle in the Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 bg-white clip-path-triangle w-[100px] h-[100px]"></div>
      </div>

      {/* Best Clubs Section */}
      {Array(4)
        .fill()
        .map((_, index) => (
          <div key={index} className="ml-[60px] mt-[60px] p-5">
            <h2 className="text-[50px] font-[Libre Franklin] font-bold text-black flex items-center">
              <img src={iconAward} className="w-10 h-10 mr-2" />
              BEST CLUBS
            </h2>
            <div className="flex flex-wrap gap-[90px] py-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <div key={i}>
                    <img
                      src={one}
                      alt="Club Logo"
                      className="w-[160px] h-[160px]"
                    />
                    <p className="text-center font-[Libre Franklin] font-bold mt-2">
                      <span className="text-red-600">Lorem ipsum</span>
                      <br />
                      <span className="text-black">Lorem</span>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      <div className="relative bg-[#8d2b2b] text-white font-bold p-[100px] pl-[100px] text-[1.5em] flex items-center">
        <p className="text-[50px] font-bold m-0">
          RED CARD 2019 WINNERS <br />
          AND REPORT TO BE LAUNCHED <br />
          ON 24TH JANUARY 2019.
        </p>
        <div className="absolute bottom-0 right-0 bg-white clip-path-triangle w-[100px] h-[100px]"></div>
      </div>
      <div className="h-[10px]"></div>
    </div>
  );
}

export default TScreenTwo;
