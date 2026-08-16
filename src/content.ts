export type WeddingPartyMember = {
  name: string
  role: string
  relationship: string
  photo?: string
}

export const wedding = {
  couple: 'Leah & Peter',
  date: 'June 5, 2027',
  location: 'Johnstown, Ohio',
  venue: {
    name: 'Lauren Rose Farm',
    address: '6895 Sportsman Club Rd NW, Johnstown, OH 43031',
    mapUrl: 'https://maps.app.goo.gl/u5gML8np2fHKhAxcA',
  },
  links: {
    hotel:
      'https://www.marriott.com/event-reservations/reservation-link.mi?id=1785783450439&key=GRP&app=resvlink&_branch_match_id=1526358610040761359&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi0uy0wtN7IHytiCODmZedlqmSm2huYWpuYWxiamBibGlmrZqZW27kEBanVFqWmpQO156fFJRfnlxalFts4ZRfm5qQCEmJtAYQAAAA%3D%3D',
    rsvp: '',
    registry: '',
  },
  events: [
    {
      title: 'Ceremony',
      date: 'Saturday, June 5',
      time: '4:30 PM',
      note: 'Lauren Rose Farm · Please arrive 20–30 minutes early.',
    },
    {
      title: 'Cocktail Hour',
      date: 'Saturday, June 5',
      time: 'Immediately following the ceremony',
      note: 'Join us for appetizers, drinks, and photos.',
    },
    {
      title: 'Reception',
      date: 'Saturday, June 5',
      time: 'Following cocktail hour',
      note: 'Dinner, dancing, and a joyful celebration to follow.',
    },
  ],
  weddingParty: {
    bridesmaids: [
      { name: 'Maya', role: 'Maid of Honor', relationship: 'Leah’s best friend since age one' },
      { name: 'Gloria', role: 'Bridesmaid', relationship: 'Peter’s twin sister' },
      { name: 'Julia', role: 'Bridesmaid', relationship: 'Leah’s college friend' },
      { name: 'Olivia', role: 'Bridesmaid', relationship: 'Leah’s friend since middle school' },
      { name: 'Lauren', role: 'Bridesmaid', relationship: 'Leah’s friend since middle school' },
    ] satisfies WeddingPartyMember[],
    groomsmen: [
      { name: 'Dean', role: 'Best Man', relationship: 'Peter’s brother' },
      { name: 'Zach', role: 'Groomsman', relationship: 'Gloria’s fiancé' },
      { name: 'Travis', role: 'Groomsman', relationship: 'Peter’s cousin' },
      { name: 'Asher', role: 'Groomsman', relationship: 'Leah’s brother' },
      { name: 'To be announced', role: 'Groomsman', relationship: 'A dear friend will join us here soon' },
    ] satisfies WeddingPartyMember[],
  },
  faqs: [
    { question: 'What should I wear?', answer: 'Attire details will be shared with your invitation soon.' },
    { question: 'Are children invited?', answer: 'Please refer to the names included on your invitation.' },
    { question: 'Can I bring a plus one?', answer: 'Your invitation will indicate whether a guest has been reserved for you.' },
    { question: 'When should I RSVP?', answer: 'Please RSVP by the date listed with your invitation.' },
    { question: 'Where should I stay?', answer: 'We have reserved a room block at Residence Inn Columbus Easton for our guests.' },
    { question: 'Is parking available at the venue?', answer: 'Parking information will be shared here as the weekend approaches.' },
    { question: 'What airport should I fly into?', answer: 'John Glenn Columbus International Airport (CMH) is the most convenient airport.' },
    { question: 'What time should I arrive?', answer: 'Please plan to arrive 20–30 minutes before our 4:30 PM ceremony.' },
    { question: 'Will the ceremony and reception be indoors or outdoors?', answer: 'More venue-day details will be shared here soon.' },
    { question: 'What will the weather be like in June?', answer: 'Ohio June weather can be warm and changeable; we recommend checking the forecast before traveling.' },
    { question: 'Who should I contact with questions?', answer: 'Please check back for a wedding-weekend contact.' },
  ],
}
