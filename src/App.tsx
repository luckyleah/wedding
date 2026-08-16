import './App.css'
import { wedding, type WeddingPartyMember } from './content'

const navItems = [
  ['Home', 'home'], ['Events', 'events'], ['Travel', 'travel'], ['RSVP', 'rsvp'],
  ['Wedding Party', 'party'], ['Registry', 'registry'], ['FAQ', 'faq'],
] as const
const heroImage = `${import.meta.env.BASE_URL}images/leah-and-peter.png`
const heroFrame = `${import.meta.env.BASE_URL}images/homepage-floral-frame.png`
const stationery = {
  mobileFrame: `${import.meta.env.BASE_URL}images/homepage-floral-frame-mobile.png`,
  rose: `${import.meta.env.BASE_URL}images/stationery-rose.png`,
  vine: `${import.meta.env.BASE_URL}images/stationery-element-2.png`,
  heart: `${import.meta.env.BASE_URL}images/stationery-heart.png`,
  heartSprig: `${import.meta.env.BASE_URL}images/stationery-heart-sprig.png`,
  farmhouse: `${import.meta.env.BASE_URL}images/stationery-farmhouse.png`,
  rings: `${import.meta.env.BASE_URL}images/stationery-rings.png`,
  sendoff: `${import.meta.env.BASE_URL}images/stationery-sendoff.png`,
  venueMap: `${import.meta.env.BASE_URL}images/stationery-venue-map.png`,
}
const eventArt = [stationery.rings, stationery.farmhouse, stationery.sendoff]

type OrnamentType = 'flower' | 'heart' | 'home' | 'plane'

function Ornament({ type, className = '' }: { type: OrnamentType; className?: string }) {
  return <span className={`ornament ornament-${type} ${className}`} aria-hidden="true" />
}

function FloralDivider() {
  return <div className="floral-divider" aria-hidden="true"><img src={stationery.vine} alt="" /><img src={stationery.heart} alt="" /><img src={stationery.vine} alt="" /></div>
}

function ExternalButton({ href, children, secondary = false }: { href: string; children: string; secondary?: boolean }) {
  const className = `button${secondary ? ' button-secondary' : ''}`
  return href
    ? <a className={`${className} button-external`} href={href} target="_blank" rel="noreferrer">{children}</a>
    : <span className={`${className} button-pending`} aria-label={`${children} link coming soon`}>{children}<small>Coming soon</small></span>
}

function PartyCard({ member }: { member: WeddingPartyMember }) {
  return <article className="party-card">
    <div className="party-portrait" aria-hidden="true">{member.photo ? <img src={member.photo} alt="" /> : <img className="party-rose" src={stationery.rose} alt="" />}</div>
    <p className="eyebrow">{member.role}</p><h3>{member.name}</h3><p>{member.relationship}</p>
  </article>
}

function App() {
  return <div className="site-shell">
    <a className="skip-link" href="#home">Skip to content</a>
    <main>
      <section id="home" className="hero-section">
        <img className="hero-floral-frame" src={heroFrame} alt="" />
        <img className="hero-floral-frame hero-floral-frame-mobile" src={stationery.mobileFrame} alt="" />
        <nav className="hero-navigation" aria-label="Primary navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="hero-main">
          <h1 className="hero-names" aria-label="Leah and Peter">
            <svg viewBox="0 0 600 150" aria-hidden="true">
              <path id="hero-name-curve" d="M 34 117 Q 300 21 566 117" fill="none" />
              <text><textPath href="#hero-name-curve" startOffset="50%" textAnchor="middle">Leah &amp; Peter</textPath></text>
            </svg>
          </h1>
          <div className="hero-photo-row">
            <p>wedding</p>
            <div className="hero-image-wrap"><img src={heroImage} alt="Leah and Peter smiling together outdoors" /></div>
            <p>website</p>
          </div>
          <p className="hero-date" aria-label="June 5, 2027">
            <svg viewBox="0 0 320 95" aria-hidden="true">
              <path id="hero-date-curve" d="M 10 47 Q 160 88 310 47" fill="none" />
              <text><textPath href="#hero-date-curve" startOffset="50%" textAnchor="middle">June 5, 2027</textPath></text>
            </svg>
          </p>
        </div>
      </section>

      <section className="welcome-section section-frame">
        <Ornament type="flower" className="welcome-flower welcome-flower-top" /><Ornament type="flower" className="welcome-flower welcome-flower-bottom" />
        <p className="script-accent">A little love story</p><h2>Welcome to our wedding weekend</h2>
        <p>From FaceTime calls across the miles to the next chapter of forever, we can’t wait to gather with our families and friends in Ohio.</p>
        <a className="text-link" href="#story">Read our story <span aria-hidden="true">→</span></a>
      </section>

      <section id="events" className="section section-pink">
        <div className="section-heading"><p className="eyebrow">The weekend</p><h2>Events</h2><p>Save the date for a weekend full of love, laughter, and celebration.</p></div>
        <div className="events-layout">
          <div className="timeline">{wedding.events.map((event, index) => <article className="timeline-item" key={event.title}>
            <img className="event-art" src={eventArt[index]} alt="" />
            <div><p className="eyebrow">{event.date}</p><h3>{event.title}</h3><p className="event-time">{event.time}</p><p>{event.note}</p></div>
          </article>)}</div>
        </div>
      </section>

      <section id="travel" className="section travel-section">
        <div className="section-heading"><p className="eyebrow">Make a weekend of it</p><h2>Travel & accommodations</h2></div>
        <div className="travel-grid">
          <article className="info-card venue-card"><img className="travel-art" src={stationery.farmhouse} alt="" /><p className="eyebrow">Our venue</p><h3>{wedding.venue.name}</h3><p>{wedding.venue.address}</p><p className="card-copy">Our ceremony and reception will both take place at Lauren Rose Farm. Parking details will be shared closer to the celebration.</p><ExternalButton href={wedding.venue.mapUrl} secondary>Get directions</ExternalButton></article>
          <article className="info-card"><img className="travel-art travel-art-heart" src={stationery.heartSprig} alt="" /><p className="eyebrow">Official hotel block</p><h3>Residence Inn Columbus Easton</h3><p>Leah & Peter Wedding Block</p><ul><li>Complimentary parking and hot breakfast</li><li>Suite accommodations with full kitchens</li><li>At Easton Town Center, ideal for families</li></ul><p className="deadline">Book by May 7, 2027</p><ExternalButton href={wedding.links.hotel}>Book hotel</ExternalButton></article>
          <article className="info-card"><img className="travel-art travel-art-vine" src={stationery.vine} alt="" /><p className="eyebrow">Flying in?</p><h3>John Glenn Columbus International Airport</h3><p>CMH is the most convenient airport for our out-of-town guests.</p><p className="card-copy">While you’re nearby, explore Easton Town Center for restaurants, coffee, shopping, entertainment, and a nearby Trader Joe’s.</p></article>
        </div>
      </section>

      <section id="rsvp" className="cta-section"><Ornament type="flower" className="cta-flower" /><p className="script-accent">Please join us</p><h2>RSVP</h2><p>We cannot wait to celebrate with you! Please click below to RSVP through The Knot.</p><ExternalButton href={wedding.links.rsvp}>RSVP here</ExternalButton></section>

      <section id="party" className="section party-section">
        <div className="section-heading"><p className="eyebrow">Our favorite people</p><h2>Wedding party</h2><p>We are so grateful for the people standing beside us.</p></div>
        <div className="party-group"><p className="script-accent">Leah’s side</p><h3>Bridesmaids</h3><div className="party-grid">{wedding.weddingParty.bridesmaids.map((member) => <PartyCard key={member.name} member={member} />)}</div></div>
        <FloralDivider />
        <div className="party-group"><p className="script-accent">Peter’s side</p><h3>Groomsmen</h3><div className="party-grid">{wedding.weddingParty.groomsmen.map((member) => <PartyCard key={member.name} member={member} />)}</div></div>
      </section>

      <section id="story" className="section story-section">
        <div className="story-illustration" aria-hidden="true"><Ornament type="heart" /><Ornament type="flower" /><Ornament type="flower" /></div>
        <div className="story-copy"><p className="script-accent">How it all began</p><h2>Our story</h2><p>Our story began in winter 2023 with FaceTime calls from thousands of miles apart after meeting online. When Leah returned to Ohio Northern University, Peter was there with pink roses, chocolates, and a warm smile.</p><p>Dates, studying, long conversations, and a shared love for family quickly turned into a life full of road trips, cross-country drives, Florida sunshine, cottage weekends, karaoke, board games, and meaningful time with the people we love.</p><p>Long distance through school breaks, summers, and internships made every reunion sweeter. As we finish our Construction Management degrees and look ahead to a move to Washington State, we are most excited to stop counting down to the next visit and begin a lifetime of coming home to each other.</p></div>
      </section>

      <section id="registry" className="cta-section registry-section"><Ornament type="heart" className="cta-flower" /><p className="script-accent">With gratitude</p><h2>Registry</h2><p>Your presence at our wedding is the greatest gift. For those who would like to celebrate with a gift, our registry can be found below.</p><ExternalButton href={wedding.links.registry}>View registry</ExternalButton></section>
      <section id="faq" className="section faq-section"><div className="section-heading"><p className="eyebrow">Helpful details</p><h2>Frequently asked questions</h2></div><div className="faq-list">{wedding.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
    </main>
    <footer><FloralDivider /><p className="script-accent">See you in Johnstown</p><p>Leah & Peter · June 5, 2027</p></footer>
  </div>
}

export default App
