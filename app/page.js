import Image from "next/image";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Home() {
  const sections = [
    {
      name: "Sarah Johnson",
      description: "Creative Director with 10+ years of experience in brand strategy and visual design. Passionate about creating memorable brand experiences.",
      image: "/placeholder1.jpg",
      buttons: ["View Portfolio", "Contact", "Book Meeting"],
      socialLinks: [
        { icon: FiLinkedin, url: "linkedin.com/sarahjohnson", label: "LinkedIn" },
        { icon: FiGithub, url: "github.com/sarahjohnson", label: "GitHub" },
        { icon: FiInstagram, url: "instagram.com/sarahj.design", label: "Instagram" }
      ]
    },
    {
      name: "Michael Chen",
      description: "Senior Software Engineer specializing in full-stack development. Expert in React, Node.js, and cloud architecture.",
      image: "/placeholder2.jpg",
      buttons: ["GitHub", "Resume", "Projects"],
      socialLinks: [
        { icon: FiGithub, url: "github.com/michaelchen", label: "GitHub" },
        { icon: FiLinkedin, url: "linkedin.com/michaelchen", label: "LinkedIn" },
        { icon: FiInstagram, url: "instagram.com/michaelchen", label: "Instagram" }
      ]
    },
    {
      name: "Emma Rodriguez",
      description: "UX/UI Designer focused on creating intuitive and accessible digital experiences. Strong advocate for user-centered design.",
      image: "/placeholder3.jpg",
      buttons: ["Portfolio", "Case Studies", "Design Blog"],
      socialLinks: [
        { icon: FiLinkedin, url: "linkedin.com/emmarodriguez", label: "LinkedIn" },
        { icon: FiGithub, url: "github.com/emmarodriguez", label: "GitHub" },
        { icon: FiInstagram, url: "instagram.com/emma.designs", label: "Instagram" }
      ]
    },
    {
      name: "David Kim",
      description: "Product Manager with expertise in agile methodologies and product strategy. Successfully launched multiple SaaS products.",
      image: "/placeholder4.jpg",
      buttons: ["Product Blog", "Speaking", "Contact"],
      socialLinks: [
        { icon: FiLinkedin, url: "linkedin.com/davidkim", label: "LinkedIn" },
        { icon: FiGithub, url: "github.com/davidkim", label: "GitHub" },
        { icon: FiInstagram, url: "instagram.com/davidkim", label: "Instagram" }
      ]
    },
    {
      name: "Sophia Patel",
      description: "Marketing Director specializing in digital marketing and growth strategies. Expert in SEO, content marketing, and analytics.",
      image: "/placeholder5.jpg",
      buttons: ["Marketing Blog", "Services", "Case Studies"],
      socialLinks: [
        { icon: FiLinkedin, url: "linkedin.com/sophiapatel", label: "LinkedIn" },
        { icon: FiGithub, url: "github.com/sophiapatel", label: "GitHub" },
        { icon: FiInstagram, url: "instagram.com/sophia.marketing", label: "Instagram" }
      ]
    },
    {
      name: "James Wilson",
      description: "Data Scientist with a focus on machine learning and AI. PhD in Computer Science with multiple research publications.",
      image: "/placeholder6.jpg",
      buttons: ["Research", "Publications", "Projects"],
      socialLinks: [
        { icon: FiGithub, url: "github.com/jameswilson", label: "GitHub" },
        { icon: FiLinkedin, url: "linkedin.com/jameswilson", label: "LinkedIn" },
        { icon: FiInstagram, url: "instagram.com/jameswilson", label: "Instagram" }
      ]
    },
    {
      name: "Olivia Martinez",
      description: "Content Strategist and Copywriter. Expert in creating engaging content that drives conversions and builds brand voice.",
      image: "/placeholder7.jpg",
      buttons: ["Writing Portfolio", "Blog", "Services"],
      socialLinks: [
        { icon: FiLinkedin, url: "linkedin.com/oliviamartinez", label: "LinkedIn" },
        { icon: FiGithub, url: "github.com/oliviamartinez", label: "GitHub" },
        { icon: FiInstagram, url: "instagram.com/oliviamartinez", label: "Instagram" }
      ]
    },
    {
      name: "Alex Thompson",
      description: "DevOps Engineer with expertise in cloud infrastructure and automation. Certified AWS and Azure professional.",
      image: "/placeholder8.jpg",
      buttons: ["GitHub", "Blog", "Contact"],
      socialLinks: [
        { icon: FiGithub, url: "github.com/alexthompson", label: "GitHub" },
        { icon: FiLinkedin, url: "linkedin.com/alexthompson", label: "LinkedIn" },
        { icon: FiInstagram, url: "instagram.com/alexthompson", label: "Instagram" }
      ]
    },
    {
      name: "Isabella Lee",
      description: "Frontend Developer specializing in modern JavaScript frameworks and responsive design. Passionate about web accessibility.",
      image: "/placeholder9.jpg",
      buttons: ["Portfolio", "GitHub", "Blog"],
      socialLinks: [
        { icon: FiGithub, url: "github.com/isabellalee", label: "GitHub" },
        { icon: FiLinkedin, url: "linkedin.com/isabellalee", label: "LinkedIn" },
        { icon: FiInstagram, url: "instagram.com/isabellalee", label: "Instagram" }
      ]
    },
    {
      name: "Daniel Park",
      description: "Mobile App Developer with expertise in iOS and Android development. Created multiple successful apps with millions of downloads.",
      image: "/placeholder10.jpg",
      buttons: ["App Store", "Play Store", "Portfolio"],
      socialLinks: [
        { icon: FiGithub, url: "github.com/danielpark", label: "GitHub" },
        { icon: FiLinkedin, url: "linkedin.com/danielpark", label: "LinkedIn" },
        { icon: FiInstagram, url: "instagram.com/danielpark", label: "Instagram" }
      ]
    },
    {
      name: "Daniel Park",
      description: "Mobile App Developer with expertise in iOS and Android development. Created multiple successful apps with millions of downloads.",
      image: "/placeholder10.jpg",
      buttons: ["App Store", "Play Store", "Portfolio"],
      socialLinks: [
        { icon: FiGithub, url: "github.com/danielpark", label: "GitHub" },
        { icon: FiLinkedin, url: "linkedin.com/danielpark", label: "LinkedIn" },
        { icon: FiInstagram, url: "instagram.com/danielpark", label: "Instagram" }
      ]
    },
    {
      name: "Daniel Park",
      description: "Mobile App Developer with expertise in iOS and Android development. Created multiple successful apps with millions of downloads.",
      image: "/placeholder10.jpg",
      buttons: ["App Store", "Play Store", "Portfolio"],
      socialLinks: [
        { icon: FiGithub, url: "github.com/danielpark", label: "GitHub" },
        { icon: FiLinkedin, url: "linkedin.com/danielpark", label: "LinkedIn" },
        { icon: FiInstagram, url: "instagram.com/danielpark", label: "Instagram" }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="navbar w-full flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-30 border-b border-[#FF5A5F]/30 shadow-lg backdrop-blur-lg">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold" style={{ color: "#BFD7EA" }}>G1</span>
          <span className="text-lg sm:text-xl font-semibold" style={{ color: "var(--foreground)" }}>Group 1 Portfolio</span>
        </div>
      </nav>
      {/* Spacer for navbar */}
      <div className="h-20"></div>
      {/* Animated Background */}
      <div className="animated-bg absolute inset-0">
        {/* Base radial gradient */}
        <div className="base-radial absolute inset-0"></div>
        {/* Rotating gradient */}
        <div className="rotating-gradient absolute inset-0 animate-gradient-rotate"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* About Us Section */}
        <section className="mb-12 sm:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6" style={{ color: "#BFD7EA" }}>
            Group 1
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4" style={{ color: "var(--foreground)" }}>
            We are a diverse team of passionate professionals dedicated to creating innovative solutions. 
            Our expertise spans across design, development, and digital strategy, allowing us to deliver 
            exceptional results for our clients. Together, we combine creativity with technical excellence 
            to build the future of digital experiences.
          </p>
        </section>

        {/* Image Section */}
        <section className="flex justify-center mb-12 sm:mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#BFD7EA] bg-[#1a3a4a]/60 backdrop-blur-lg p-2">
            <img src="/globe.svg" alt="Group 1 Globe" className="w-[320px] h-[320px] object-contain" />
          </div>
        </section>

        {/* Team Members Sections */}
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section, index) => (
            <section 
              key={index} 
              className={`backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl border border-white/20 dark:border-gray-700/20 ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
              } w-full md:w-[90%] min-h-[400px] sm:min-h-[450px] md:h-[500px]`}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 h-full ${
                index % 2 === 0 ? 'md:grid-flow-col' : 'md:grid-flow-col-dense'
              }`}>
                {/* Image Section */}
                <div className={`relative h-48 sm:h-56 md:h-full ${
                  index % 2 === 0 ? 'order-1' : 'order-2'
                }`}>
                  <div className="absolute inset-0 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-hidden border border-white/20 dark:border-gray-700/20">
                    <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Profile Image
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-3 sm:space-y-4 md:space-y-6 flex flex-col justify-between ${
                  index % 2 === 0 ? 'order-2' : 'order-1'
                }`}>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                      {section.name}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 sm:line-clamp-4">
                      {section.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {section.buttons.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white rounded-md hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors whitespace-nowrap border border-white/20 dark:border-gray-700/20"
                        >
                          {button}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-3 sm:gap-4">
                      {section.socialLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={`https://${link.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2  text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-white/50 dark:hover:bg-gray-700/50 "
                          aria-label={link.label}
                        >
                          <link.icon className="w-9 h-9" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
