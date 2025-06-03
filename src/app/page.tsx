import Sidebar from "@/component/sidebar";
import Image from "next/image";

export default function App () {
  return (
    <div className="flex h-screen overlfow-hidden">
      <div className="w-[250px] bg-gray-900 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <section id="home" className="relative h-screen w-full">
          <Image
          src="/banner-home.jpg"
          alt="banner"
          fill
          priority
          className="object-cover w-full h-full" 
          />
        
          <div className="absolute top-1/2 left-10 text-white">
            <h1 className="text-3xl font-bold">
              Angga Jovary
            </h1>
            <p className="text-5xl mt-2">
              Full Stack Developer
            </p>
          </div>
        </section>
        
        <section id="about" className="px-10 py-20 bg-white text-black">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">About</h2>
            <div className="w-20 h-1 bg-blue-500 mb-4"></div>
            <p className="mb-6 text-gray-700 text-xl">Creating efficient and reliable digital solutions is my main focus as a Full Stack Developer. I’m passionate about building scalable and maintainable systems, handling both frontend and backend development. With a deep understanding of modern web architecture, I’m committed to continuous learning and delivering high-quality results in every project I take on.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="w-full max-w-[300px] aspect-square relative">
                <Image 
                src="/profile.png"
                alt="profile"
                fill
                className="rounded-lg object-cover"
                />
              </div>
            <div className="">
              <h3 className="text-3xl font-bold mb-2">Full Stack Developer</h3>
              <p className="italic text-gray-600 mb-6">Experienced in building end-to-end web applications, with strong skills in frontend technologies like React and backend tools like Node.js</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl">
                <p><strong>➤ Birthday:</strong> 12 July 2000</p>
                <p><strong>➤ Age:</strong> 24</p>
                <p><strong>➤ Website:</strong> </p>
                <p><strong>➤ Degree:</strong> Diploma</p>
                <p><strong>➤ Phone:</strong> 081295875003</p>
                <p><strong>➤ Email:</strong> ajovary69@gmail.com</p>
                <p><strong>➤ City:</strong> Bekasi City, Indonesia</p>
                <p><strong>➤ Freelance:</strong> Available</p>
              </div>
            </div>
          </div>
            <div className="mt-20 bg-white p-8 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">Skills</h3>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-700 mb-10 text-xl">
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Skill Bar Component */}
                {[
                  { name: "HTML", value: 100 },
                  { name: "CSS", value: 90 },
                  { name: "JavaScript", value: 75 },
                  { name: "Next.JS", value: 80 },
                  { name: "React", value: 90 },
                  { name: "Tailwind", value: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-semibold mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="bg-blue-500 h-2 rounded"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>

        <section id="resume" className="px-10 py-20 bg-white text-black">
          <h2 className="text-4xl font-bold mb-2">Resume</h2>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl">
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Summary</h3>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-xl font-semibold">Angga Jovary</h4>
                  <p className="italic text-gray-600 mb-2">
                    A passionate Full Stack Developer with 2+ years of experience building scalable and maintainable web applications from frontend to backend.
                  </p>
                  <ul className="text-gray-700 list-disc list-inside">
                    <li>Bekasi City, Indonesia</li>
                    <li>0812-9587-5003</li>
                    <li>ajovary69@gmail.com</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="border-l-4 border-blue-500 pl-4 space-y-6">
                  <div className="text-xl">
                    <h4 className="font-semibold">Diploma of Informatics Management</h4>
                    <p className="text-gray-600">Politeknik LP3I Jakarta | 2018 - 2021</p>
                    <p className="text-gray-700 mt-1">
                      Focused on software development, database design, and network fundamentals with hands-on project-based learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
              <div className="border-l-4 border-blue-500 pl-4 space-y-6 text-xl">
                <div>
                  <h4 className="font-semibold">Staff ICT</h4>
                  <p className="text-gray-600 font-semibold">Politeknik LP3I Jakarta, February 2019 — April 2019</p>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    <li>Troubleshooting Network, Hardware, and PC</li>
                    <li>Perform maintenance on campus computers</li>
                    <li>Monitoring server network on campus lab</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">E-Commerce Admin</h4>
                  <p className="text-gray-600 font-semibold">Rumah Kaos Bintang, November 2020 - Desember 2021</p>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    <li>Research the latest trends and customer needs to facilitate an effective promotion process.</li>
                    <li>Design and implement marketing strategies to reach new customers on an effective budget</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">E-Commerce Specialist</h4>
                  <p className="text-gray-600 font-semibold">Rass Mandiri Utama, April 2022 - April 2024</p>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    <li>Design promotional content for products to be published online</li>
                    <li>Work with the creative team to create the latest marketing content for the company</li>
                    <li>Create a promotional variants in the form of; Discount vouchers, free shipping, flash sales, and campaigns</li>
                    <li>Manage & execute the delivery of net sales, profit & loss targets of the business</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Project Administration</h4>
                  <p className="text-gray-600 font-semibold">PT Mitra Solusi Telematika, May 2024 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    <li>Supported project planning and execution, ensuring timelines and goals were met</li>
                    <li>Maintained detailed project documentation and prepared status reports for stakeholders</li>
                    <li>Coordinated team meetings, managed schedules, and handled administrative tasks</li>
                    <li>Monitored project risk, issues, and budgets, ensuring proper resolution and cost control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-10 py-20 bg-gray-100 text-black">
          <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mb-10"></div>
          <p className="text-gray-600 mb-10">
            Here are some of the project outcomes I’ve handled in the field of application development and online shop management.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a href="/portfolio/project-1" className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="/port-profile.png" alt="Project 1" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">Personal Website</h3>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/portfolio/project-2" className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="/company-profile.jpeg" alt="Project 2" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">Company Profile</h3>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/portfolio/project-3" className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="/e-commerce.jpeg" alt="Project 3" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">E-Commerce Shop</h3>
              </div>
            </a>
          </div>
        </section>

        <section id="testimonials" className="px-10 py-20 bg-white text-black">
          <h2 className="text-4xl font-bold mb-2">Testimonials</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-600 mb-10 text-xl">
            Here are some reviews from clients who have worked with me.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jonathan Doe",
                position: "CEO, TechCorp",
                review:
                  "Angga is an outstanding developer. He delivered everything on time and exceeded expectations!",
                avatar: "/pic-1.jpg",
              },
              {
                name: "Megan Fox",
                position: "Product Manager, SoftVision",
                review:
                  "Always responsive and very detail-oriented. The project went smoothly thanks to his expertise.",
                avatar: "/pic-3.jpg",
              },
              {
                name: "Elle Fanning",
                position: "Founder, Startup.io",
                review:
                  "Highly professional and skilled. Would definitely recommend Angga for any full stack work.",
                avatar: "/pic-2.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">“{testimonial.review}”</p>
              </div>
            ))}
          </div>
        </section>
      
        <section id="contact" className="px-10 py-20 bg-white text-black">
          <h2 className="text-4xl font-bold mb-2">Contact</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-700 mb-10 text-xl">
            Here is my contact information for your reference
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-10">
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 text-2xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p>Kp. Rawabacang, Jl. Al-Amin III No.49, Pondok Melati, Jatirahayu, Kota Bekasi, Jawa Barat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-500 text-2xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p>081295875003</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-blue-500 text-2xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p>ajovary69@gmail.com</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 p-3 rounded w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-3 rounded w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-300 p-3 rounded w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  )
}