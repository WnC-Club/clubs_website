import './f1-1.css';
import { FaLinkedin } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Office = () => {
  const teamMembers = [
    { name: "PRATHAM SHALYA", role: "WNC - PRESIDENT", linkedin: "https://www.linkedin.com/in/pratham-shalya-a4801323b", image: "/pratham-3.jpg" },
    { name: "RITIK YADAV", role: "WNC - DSA LEAD", linkedin: "https://www.linkedin.com/in/ritik-yadav-45b478251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "/ritikyadav.jpg" },
    { name: "VAISHNAVI GUPTA", role: "WNC - COMMUNITY LEAD", linkedin: "https://www.linkedin.com/in/vaishnavi-gupta-5990b6258", image: "/vaishnavi-2.jpg" },
    { name: "DEVRAJ KUMAR", role: "WNC - CO-COMMUNITY LEAD", linkedin: "https://www.linkedin.com/in/devraj-kumar-5191ba250/", image: "/devraj.jpg" },
    { name: "SHOBH RAJ", role: "WNC - WEB-TEAM LEAD", linkedin: "https://www.linkedin.com/in/iamshobh", image: "/shobhraj-2.jpg" },
    { name: "ADITYA RAJ", role: "WNC - AI/ML LEAD", linkedin: "https://www.linkedin.com/in/hexronus/", image: "/adityaraj.jpg" },
    { name: "AARSI KUMARI", role: "WNC - EVENT LEAD", linkedin: "https://www.linkedin.com/in/aarsi-kumari-21b875271", image: "aarsi.jpg" },
    { name: "PRIYA CHANDRA", role: "WNC - DESIGN-TEAM LEAD", linkedin: "https://www.linkedin.com/in/priya-chandra-b9a794252", image: "/priyachandra.jpg" },
    { name: "YUVRAJ", role: "WNC - MARKETTING HEAD", linkedin: "https://www.linkedin.com/in/yuvraj66601", image: "/yuvraj-2.jpg" },
    { name: "ANKITA KUMARI", role: "WNC - GIRKS COMMUNTY CO-LEAD", linkedin: "https://www.linkedin.com/in/ankita-kumari-751b23258", image:"/anitakumari-2.jpg" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e40af] to-[#9333ea] p-10 overflow-hidden">
      {/* Glassmorphic About Us Section */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-xl p-10 max-w-4xl text-center text-white">
        <h1 className="text-6xl font-extrabold tracking-wide text-white">
          ABOUT US
        </h1>
        <p className="mt-4 text-lg text-white/80 leading-relaxed">
          Welcome to the Web and Coding Club of NIT Patna—where innovation meets technology! 
          We are a community of passionate developers, designers, and tech enthusiasts 
          dedicated to building, learning, and growing in the world of programming and web development.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center p-10">
        {/* 🌟 Office Bearers Title */}
        <h2 className="text-6xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ff7eb3] via-[#facc15] to-[#9333ea] drop-shadow-lg mb-10">
          OFFICE BEARERS
        </h2>

        {/* 🚀 Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-5xl"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-4 text-center text-white transition-transform transform hover:scale-105">
                {/* 🖼 Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-md border border-white/30 shadow-md"
                />
                <h3 className="mt-3 font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-white/80">{member.role}</p>

                {/* 🔗 LinkedIn Button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition"
                >
                  <FaLinkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Office;
