import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { meetUs, type TeamMember } from "./pagesData";

function iconFor(type: string) {
  return type.toLowerCase().includes("mail")
    ? "/images/envelope.svg"
    : "/images/linkden.svg";
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className={`meet-us-card ${member.bg}`}>
      <div className="meet-us-img">
        <Image
          src={member.image}
          width={600}
          height={600}
          alt={member.name}
          sizes="(max-width: 767px) 100vw, 430px"
          style={{ width: "100%", height: "367px", objectFit: "cover" }}
        />
      </div>
      <div className="meet-us-text">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <div className="meet-links">
          {member.links.map((link) => (
            <a
              key={link.type}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Image src={iconFor(link.type)} width={24} height={24} alt={link.type} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MeetUsPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Meet Us"
          image="https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/Berlin-Business-Office-USA-Meet-the-team-scaled.jpg"
          alt="Aerial View of Victory column and Berlin Tiergarten, Germany"
          bannerClass="meet-us-banner"
        />

        <div className="container actualcontent">
          <div className="wpb-content-wrapper">
            <section className="content-row">
              <div className="meet-us-inner">
                <div className="meet-shape">
                  <Image
                    src="/images/Muster-Streifen-Schwarz.svg"
                    width={140}
                    height={140}
                    alt=""
                  />
                </div>
                <div className="meet-row">
                  {meetUs.team.map((member) => (
                    <div className="meet-col" key={member.name}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
