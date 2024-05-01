export type Book = {
  title: string;
  author: string;
  description?: string;
  isbn: string;
};

export const books: Array<Book> = [
  {
    title: "How to Think Like a Roman Emperor",
    author: "Donald Robertson",
    description:
      "I highly recommend this book for mindfulness enthusiasts. It presents key Stoicism concepts in a narrative way through historical examples, along with practical tools to use in your daily life.",
    isbn: "9781250196620",
  },
  {
    title: "Software Engineering at Google",
    author: "Titus Winters, Tom Manshreck, Hyrum Wright",
    isbn: "9781492082798",
  },
  {
    title: "Hidden Potential",
    author: "Adam Grant",
    description:
      "I became a huge fan of Adam Grant thanks to his ReThinking podcast. In this book he shows cases of successful people unveiling the hidden and intricate processes that led to their immense growth potential. It gave me notions and pragmatic examples on how to make the “growth mindset” concepts more actionable and helped me re-thinking where success truly reside.",
    isbn: "9780593656976",
  },
  {
    title: "Clear Thinking",
    author: "Shane Parrish",
    isbn: "9781529915952",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    description:
      "I am pleased that this book was part of my early, detailed readings in my academic journey. Its core concepts continue to hold their significance and have a wide-ranging applicability across the industry.",
    isbn: "9780134494166",
  },
  {
    title: "Predictably Irrational",
    author: "Dan Ariely",
    description:
      "This was my first insight on cognitive economics. I found myself fascinated by the influence psychology wields in the product industry. This book highlights the necessity of taking into account customer behavior when designing products and making marketing choices, a principle that is just as applicable to the domain of digital products",
    isbn: "9780061353239",
  },
  {
    title: "The Software Engineer's Guidebook",
    author: "Gergely Orosz",
    isbn: "9789083381824",
  },
  {
    title: "Small Data",
    author: "Martin Lindstrom",
    description:
      "Martin Lindstrom's work provides deep insights for comprehending the nuances of people's behaviors and reasonings. While his work is primarily associated with branding, I find key concepts relevant to digital products as well.",
    isbn: "9781250080684",
  },
  {
    title: "Refuse to Choose!",
    author: "Barbara Sher",
    description:
      "As someone who thrives on learning and shifting focus between different projects without committing to one for too long, this book’s insights have provided me with clarity. Thanks to Barbara Sher, who calls folks like me 'scanners', I now see this trait in a whole new light and am making the most of it.",
    isbn: "9781594863035",
  },
  {
    title: "Cloud Native Patterns Designing",
    author: "Cornelia Davis",
    isbn: "9781617294297",
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    isbn: "9780060555665",
  },
  {
    title: "How Google Works",
    author: "Eric Schmidt, Jonathan Rosenberg",
    isbn: "9781455582327",
  },
  {
    title: "Ten Things to Know About Italian Economy",
    author: "Alan Friedman",
    description:
      "My father and I have listened to Alan Friedman's interviews on the national car radio for years. He gifted me this book, which allowed me to understand the intricate mechanisms behind a nation's economy, specifically the tragic Italian one.",
    isbn: "9788822714190",
  },
  {
    title: "Quantum Physics for Poets",
    author: "Leon Lederman, Christopher Hill",
    description:
      "This was my teenage approach to Quantum Physics while binge-watching Kurzgesagt. I felt in love with the way science can be narratively taught as opposed to the school traditional method.",
    isbn: "9781616142339",
  },
  {
    title: "The Six Pillars of Self-Esteem",
    author: "Nathaniel Branden",
    description:
      "Technical, social or physical skills are not the only ones you can work on. This book helps to understand how to concretely be aware and improve a personality trait making it an asset for your daily life.",
    isbn: "9780553374391",
  },
  {
    title: "Dance Music Manual",
    author: "Rick Snoman",
    description:
      "Electronic music production is an hobby of mine. This book enriched my knowledge of music theory. It is an essential reading for anyone in the field.",
    isbn: "9781138319646",
  },
  {
    title: "The Theory of Everything",
    author: "Stephen Hawking",
    isbn: "9788817079761",
  },
  {
    title: "The Art of Happiness",
    author: "Daila Lama",
    isbn: "9781573227544",
  },
  {
    title: "Siddhartha",
    author: "Hesse",
    isbn: "9788845901843",
  },
  {
    title: "The Computer and The Brain",
    author: "John Von Neumann",
    isbn: "9780300181111",
  },
];

export const lastThree: [Book, Book, Book] = [books[3], books[1], books[6]];
