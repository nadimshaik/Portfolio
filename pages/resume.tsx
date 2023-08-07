import Bar from "../components/Bar";
import { languages, tools } from "../data";
import Head from "next/head"

const Resume = () => {
  return (
    <div className="px-6 py-2">
         <Head>
        <title> Web Developer | Resume | Nadeem Khatik </title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Bachelor of Computer Applications(BCA)
            </h5>
            <p className="font-semibold">Academy of Technology (2015-2018)</p>
            <p className="my-3">
           I have done my BCA in 2018 from Raisoni College of Engineering and Business Management Jalgaon Maharashtra.
           North Maharashtra University Jalgaon Maharashtra.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experiences</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer</h5>
            <p className="font-semibold">Logicloop Venture LLP</p>
            <p className="my-3">Oct'2022-Dec'2022</p>
          </div>
        </div>
        <div>
          
          <div className="">
            <h5 className="my-2 text-xl font-bold">ReactJS Developer</h5>
            <p className="font-semibold">Cygnet InfoTech PVT LTD</p>
            <p className="my-3">Nov'2021-Aug'2022</p>
          </div>
        </div>
        <div>
          
          <div className="">
            <h5 className="my-2 text-xl font-bold">MERN Stack Web Developer</h5>
            <p className="font-semibold">Digital Communication LLC</p>
            <p className="my-3">May'2018-Jul'2020</p>
          </div>
        </div>
      </div>

   
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
