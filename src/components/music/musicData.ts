export interface MusicVideo {
  id: string;
  title: string;
  type: 'live-stream' | 'video';
  date: string; // ISO format: YYYY-MM-DD
  youtubeUrl: string;
  description?: string;
}

// Videos and streams from @trancefjord YouTube channel
// Last updated: 2026-01-01
// Add new videos at the TOP of this array (latest first)
export const musicVideos: MusicVideo[] = [
  // Latest Videos (3-5 months ago)
  {
    id: 'UCbYtnO6dI4',
    title: 'Trancefjord 125 | #TRANCE #TRANCE2025',
    type: 'video',
    date: '2025-10-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=UCbYtnO6dI4',
  },
  {
    id: 'XLHVEaWjoKA',
    title: 'Trancefjord Episode 123 | September 2025 Trance Mix | Sven & Jina | 1 Hour Journey',
    type: 'video',
    date: '2025-10-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLHVEaWjoKA',
  },
  {
    id: 'BE5B6UfXvkE',
    title: 'Trancefjord Episode 122 | Trance Mix with Sven & AI Jina | Ralphie B • Alex M.O.R.P.H. • Allen Watts',
    type: 'video',
    date: '2025-09-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=BE5B6UfXvkE',
  },
  {
    id: 'nvOzj_jeidU',
    title: 'Best TRANCE 2025 | Episode 120 #TRANCE #TRANCE2025',
    type: 'video',
    date: '2025-09-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=nvOzj_jeidU',
  },
  {
    id: 'tsyGHyCzTFU',
    title: 'TECHNO with ALAN WATTS | Episode 119 | #TECHNO',
    type: 'video',
    date: '2025-08-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=tsyGHyCzTFU',
  },
  // Live Streams
  {
    id: 'RSy_fNNJ4sw',
    title: 'BEST TRANCE Episode 118 | #TRANCE #TRANCE2025',
    type: 'live-stream',
    date: '2025-08-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=RSy_fNNJ4sw',
  },
  {
    id: 'P_49vEy51lU',
    title: 'BEST TRANCE Episode 116 | #TRANCE #TRANCE2025',
    type: 'live-stream',
    date: '2025-08-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=P_49vEy51lU',
  },
  {
    id: 'MKQIkuMpE4c',
    title: 'TRANCE Episode 115 | #TRANCE #TRANCE2025',
    type: 'live-stream',
    date: '2025-07-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=MKQIkuMpE4c',
  },
  {
    id: '70EKw5btNjU',
    title: 'BEST TRANCE Episode 113 | #TRANCE #TRANCE2025',
    type: 'live-stream',
    date: '2025-07-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=70EKw5btNjU',
  },
  {
    id: 'lGORMDssqnA',
    title: 'BEST TRANCE Episode 112 | #TRANCE #TRANCE2025',
    type: 'live-stream',
    date: '2025-07-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=lGORMDssqnA',
  },
  {
    id: 'x-TOr0GBe3Q',
    title: 'BEST TRANCE Episode 110 | #TRANCE #TRANCE2025',
    type: 'live-stream',
    date: '2025-06-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=x-TOr0GBe3Q',
  },
  {
    id: 'p-tOa9ZO3To',
    title: 'BEST TRANCE Episode 109 | #TRANCE #TRANCE2025',
    type: 'live-stream',
    date: '2025-06-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=p-tOa9ZO3To',
  },
  {
    id: 'Iha4pIFEc1c',
    title: 'HARD TECHNO Episode 107 | #HARDTECHNO #TECHNO2025',
    type: 'live-stream',
    date: '2025-06-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=Iha4pIFEc1c',
  },
  {
    id: 'uU4MiYeNl5g',
    title: 'MELODIC TECHNO Episode 106 | #TECHNO #TECHNO2025',
    type: 'live-stream',
    date: '2025-06-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=uU4MiYeNl5g',
  },
  // More Videos (8 months ago)
  {
    id: 'dHmKq4CMWpg',
    title: 'BEST TRANCE EVERY WEEK ❤️‍🔥🎧❤️‍🔥 Best #trance2025 music | Episode 103',
    type: 'video',
    date: '2025-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=dHmKq4CMWpg',
  },
  {
    id: '8LEJMQ2T1Us',
    title: 'BEST TRANCE EVERY WEEK ❤️‍🔥🎧❤️‍🔥 Best #trance2025 music | Episode 102',
    type: 'video',
    date: '2025-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=8LEJMQ2T1Us',
  },
  {
    id: 'W8i4TaFCmAA',
    title: 'BEST TRANCE OF 100 EPISODES – part 2 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 101',
    type: 'live-stream',
    date: '2025-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=W8i4TaFCmAA',
  },
  {
    id: 'uCzUBBqhe6U',
    title: 'BEST TRANCE OF 100 EPISODES ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 100',
    type: 'live-stream',
    date: '2025-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=uCzUBBqhe6U',
  },
  {
    id: '0YpZYdFHNwM',
    title: 'BEST MELODIC TRANCE 2025 ❤️‍🔥🎧❤️‍🔥 Best trance music #melodictechno Episode 98',
    type: 'live-stream',
    date: '2025-04-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=0YpZYdFHNwM',
  },
  {
    id: 'S6vP905AI8M',
    title: 'BEST TRANCE 2025 #trance2025 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 97',
    type: 'live-stream',
    date: '2025-04-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=S6vP905AI8M',
  },
  {
    id: 'mjTuLk3HGhE',
    title: 'BEST TRANCE 2025 #trance2025 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 95',
    type: 'live-stream',
    date: '2025-04-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=mjTuLk3HGhE',
  },
  {
    id: 'J61efk5GlZQ',
    title: 'BEST TRANCE 2025 #trance2025 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 94',
    type: 'live-stream',
    date: '2025-04-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=J61efk5GlZQ',
  },
  {
    id: 'Dk9zm1-wZdc',
    title: '128 TRANCE 2025 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 92',
    type: 'live-stream',
    date: '2025-04-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=Dk9zm1-wZdc',
  },
  {
    id: 'dw4zZb_VxJQ',
    title: 'BEST TRANCE EVERY WEEK 2025 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 91',
    type: 'live-stream',
    date: '2025-04-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=dw4zZb_VxJQ',
  },
  {
    id: 'YjYDbZoxCu4',
    title: 'BEST TRANCE EVERY WEEK 2025 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 89',
    type: 'live-stream',
    date: '2025-03-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=YjYDbZoxCu4',
  },
  {
    id: 'Pk6MAuaMnH4',
    title: 'BEST TRANCE EVERY WEEK 2025 ❤️‍🔥🎧❤️‍🔥 Best trance music | Episode 88',
    type: 'live-stream',
    date: '2025-03-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=Pk6MAuaMnH4',
  },
  // Older Videos (1 year ago)
  {
    id: 'QJazNaPiZXQ',
    title: 'BEST TRANCE EVERY WEEK 🚀🎧🚀 Best trance music 2024 | Episode 74 #trance2024 #BTEW',
    type: 'video',
    date: '2025-01-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=QJazNaPiZXQ',
  },
  {
    id: '1wGdAEta7Bo',
    title: 'BEST TRANCE EVERY WEEK 🚀🎧🚀 Best trance music 2024 | Episode 72 #trance2024 #BTEW',
    type: 'video',
    date: '2025-01-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=1wGdAEta7Bo',
  },
  {
    id: 'pA9I_a6crgY',
    title: 'BEST TRANCE EVERY WEEK ❤️‍🔥🎧❤️‍🔥 Best trance music 2024 | Episode 70 #trance2024 #BTEW',
    type: 'video',
    date: '2025-01-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=pA9I_a6crgY',
  },
  {
    id: 'PuBa6KpmZRM',
    title: 'BEST TRANCE EVERY WEEK ❤️‍🔥🎧❤️‍🔥 Best trance music 2024 | Episode 69 #trance2024',
    type: 'video',
    date: '2025-01-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=PuBa6KpmZRM',
  },
  {
    id: 'I9fyEzRm1yo',
    title: 'BEST TRANCE EVERY WEEK ❤️‍🔥🎧❤️‍🔥 Best trance music 2024 | Episode 67 #trance2024',
    type: 'video',
    date: '2025-01-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=I9fyEzRm1yo',
  },
  {
    id: 'XvWMbpMy0ng',
    title: 'TECHNO 👻🎧👻 Best New Techno Music Mix | Episode 66 #techno2024',
    type: 'video',
    date: '2025-01-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=XvWMbpMy0ng',
  },
  {
    id: 'gBLqeaR5An4',
    title: 'TECHNO MIX 2024 💥🎧💥 Best techno remixes in Mai 2024 | Episode 31 | #TECHNO2024',
    type: 'video',
    date: '2024-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=gBLqeaR5An4',
  },
  {
    id: 'R6WYLVYbaE0',
    title: 'Das Boot / U96 💧🎧💧 TECHNO/TRANCE MIX 2024 🎧 Episode 30 #TECHNO2024',
    type: 'video',
    date: '2024-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=R6WYLVYbaE0',
  },
  {
    id: 'j8P1j8ipsvg',
    title: 'TECHNO MIX 2024 ❤️‍🔥🎧❤️‍🔥 Mainstream techno tracks mai 2024 🎧 Episode 28 #TECHNO2024',
    type: 'video',
    date: '2024-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=j8P1j8ipsvg',
  },
  {
    id: 'GqqfCREnKDk',
    title: 'PROGRESSIVE HOUSE MIX 2024 🏖️🎧🏖️Chicane, Armin van Buuren 🎧 Episode 27',
    type: 'video',
    date: '2024-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=GqqfCREnKDk',
  },
  {
    id: '18cpvxZeeZA',
    title: 'DARK TECHNO MIX 2024 🖤🎧🖤 Techno tracks 2024 🎧 Episode 25',
    type: 'video',
    date: '2024-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=18cpvxZeeZA',
  },
  {
    id: 'SCIV8wIguro',
    title: 'TRANCE MIX 2024 🍺🎧🍺 Popular Beatport trance tracks Mai 2024 🎧 Episode 24 | #TRANCE2024',
    type: 'video',
    date: '2024-05-01',
    youtubeUrl: 'https://www.youtube.com/watch?v=SCIV8wIguro',
  },
];
