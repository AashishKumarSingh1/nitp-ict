import React from "react";

const ICTTools = () => {
  return (
    <>
      <style>
        {`
          @keyframes blinkingText {
            0% { color: #000; }
            49% { color: #000; }
            60% { color: transparent; }
            99% { color: transparent; }
            100% { color: #000; }
          }
          .blinking {
            animation: blinkingText 0.6s infinite;
          }
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
        `}
      </style>

      <div className="min-h-screen bg-white p-2 sm:p-4 md:p-6">
        <div className="w-[90%] mx-auto bg-[#FFF067] p-2 sm:p-4 md:p-6 text-sm">
          {/* Header - Improved mobile layout */}
          <div className="relative mb-6 md:mb-8 pt-8 sm:pt-4">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold font-['Quicksand']">
              ICT Tools for Teaching, Learning process & Institutes
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://forms.gle/QMKwhMcxLcZKB7hZ6"
                target="_blank"
                rel="noopener noreferrer"
                className="blinking font-bold text-xs sm:text-sm"
              >
                Apply Online
              </a>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Coordinators - Improved mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-2">
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Bharat Gupta, NIT Patna</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Co-Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Gaurav Trivedi, IIT Guwahati</li>
                <li className="ml-4">Prof. Lava Bhargava</li>
                <li className="ml-4">Prof. Amey Karkare, IIT Kanpur</li>
                <li className="ml-4">Dr Prashant K. Jain, IIITDM Jabalpur</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Academy Level Coordinator */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Academy Level Coordinator:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Rakesh Ranjan, NIT Patna</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:rr@nitp.ac.in" className="hover:underline">
                  rr@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:9334385016" className="hover:underline">
                  9334385016
                </a>
              </p>
            </div>

            <br />

            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Jitendra Bahadur Maurya</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:jbm.ec@nitp.ac.in" className="hover:underline">
                  jbm.ec@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:9198042481" className="hover:underline">
                  9198042481
                </a>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Fee Details - More compact on mobile */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Course Fee Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                Academic (student/faculty): <strong>500 INR</strong>
              </p>
              <p>
                Industry People/ Others: <strong>1000 INR</strong>
              </p>
              <p>
                Foreign Participants: <strong>4000 INR</strong>
              </p>
            </div>
          </div>

          {/* Payment Details - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Payment Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>Bank Name: Allahabad Bank (Merge to Indian Bank)</p>
              <p>Account Name: NIT Patna</p>
              <p>
                <strong>Account No.: 50380476798</strong>
              </p>
              <p>
                <strong>IFSC Code: IDIB000B810</strong>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Resource Persons - Responsive text */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Resource Persons:
            </h2>
            <p className="text-sm sm:text-base">
              Awaiated Prof. D. B. Phatak, IITB; Prof. Prabhakar, IITK; Prof. K.
              Mangala Sundar, IITM ; Prof. Binod Kumar, IITR; Prof. S. Sancheti,
              VC, SRMIST (consent awaited) & speakers from IIT Kharagpur
              (consent awaited); Dr. Reema Sahni, FiTT, IITD; Active Learning
              Group Experts from host institutes- ; Prof. Aparajita Ojha,
              IIITDMJ ; Prof. L. Bhargava, MNITJ ; Dr. Pilli Emmanuel Shubhakar,
              MNITJ, ; Dr. Arka Prokash Mazumdar, MNITJ; Dr. A. M. Joshi, ; Dr.
              R. K. Maddila, MNITJ,; Dr. Santosh Vipparthi, MNITJ & Prof. V.
              Sahula, MNITJ ; Dr. Prabhat Kumar & Dr.Bharat Gupta, NIT Patna
            </p>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Contents - Improved mobile layout */}
          <div className="mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] text-center mb-3 sm:mb-4">
              Course contents:
            </h2>
            <div className="border-2 border-black">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-['Quicksand'] w-16">
                        S.No.
                      </th>
                      <th className="p-4 text-left font-['Quicksand']">
                        MODULES TOPICS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#FFE81C] text-base">
                    {[
                      "Use of ICT: Effective use of ICT for transforming pedagogy and empowering students; Empowerment through Communication skills",
                      "Online/Blended Learning: Adopting online/blended-learning in the teaching-learning process",
                      "MooC: Use of MooC for content management, class organization, assessment; MooC’s deployment and use; Building Course Website and Google Suite",
                      "Teaching Learning Tools & e-content generation: Using tools for teaching and learning - interactive whiteboards/smart screens, video conferencing, digital content creation, design of instructional material & presentation",
                      "Content Dissemination: Management, Version Control; ICT tools for English language teaching and learning; Illustration tools and author aids - Visio",
                      "Computer Based Training (CBT): CBT for letters generation, certificate preparation, report writing, presentation and posters preparation, spreadsheets & evaluation, research resources & bibliography management, etc.",
                    ].map((topic, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-[#FFE81C]" : "bg-[#FFF067]"
                        }
                      >
                        <td className="p-4 align-top">{index + 1}</td>
                        <td
                          className="p-4"
                          dangerouslySetInnerHTML={{ __html: topic }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Core Team Members - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Core Team Members, E&ICT Academy, NIT Patna:
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-bold">
                  Dr. Bharat Gupta (CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:bharat@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    bharat@nitp.ac.in
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  Dr. M.P Singh (CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:mps@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    mps@nitp.ac.in
                  </a>
                </p>
              </div>
              <p>
                Website: <strong>http://old.nitp.ac.in/ict/index.php</strong>
              </p>
            </div>
          </div>

          {/* Contact Information - Responsive spacing */}
          <div className="text-center px-2">
            <p className="font-bold font-['Quicksand'] mb-2 text-sm sm:text-base">
              Contact us :
            </p>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Electronics and ICT Academy</p>
              <p>National Institute of Technology, Patna</p>
              <p>AshokRajpath, Patna 800005</p>
              <p>
                <span className="font-bold font-['Quicksand']">Email:</span>{" "}
                eictapatna@nitp.ac.in
              </p>
              <p>
                <span className="font-bold font-['Quicksand']">Website:</span>{" "}
                http://old.nitp.ac.in/ict
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICTTools;
