export type Book = {
  title: string,
  author: string,
  description?: string,
  isbn?: string
}

export const books: Array<Book> = [
  {
    title: "How to Think Like a Roman Emperor",
    author: "Donald Robertson",
    description: "I highly recommend this book for mindfulness enthusiasts. It presents key Stoicism concepts in a narrative way through historical examples, along with practical tools to use in your daily life.",
    isbn: "9781250196620"
  },
  {
    title: "Small Data",
    author: "Martin Lindstrom",
    description: "Martin Lindstrom's work provides deep insights for comprehending the nuances of people's behaviors and reasonings. While his work is primarily associated with branding, I find key concepts relevant to the digital products as well.",
    isbn: "9781250080684"
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    description: "I'm glad that this book was among my initial in-depth readings during my academic studies. I find its fundamental principles retain their relevance and could be applied broadly across the industry.",
    isbn: "9780134494166"
  },
  {
    title: "Predictably Irrational",
    author: "Dan Ariely",
    description: "This was my first insight on cognitive economics. Like with M. Lindstorm's 'Small Data', I was amazed at the impact psychology has on the product market. This book underscores the importance of considering consumer behavior in product design and marketing decisions, and this extends to digital products as well.",
    isbn: "9780061353239"
  },
  {
    title: "Refuse to Choose!",
    author: "Barbara Sher",
    description: "As someone who enjoys picking up new things, change interests and delving into different projects without lingering too long on one thing, I find out clarity and insight thanks to Barbara Sher (who would name me a scanner) helping me to embrace and get out the most of this trait.",
    isbn: "9781594863035"
  },
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    isbn: "9780060555665"
  },
  {
    title: "Cloud Native Patterns Designing",
    author: "Cornelia Davis",
    isbn: "9781617294297"
  },
  {
    title: "How Google Works",
    author: "Eric Schmidt, Jonathan Rosenberg",
    isbn: "9781455582327"
  },
  {
    title: "The Computer and The Brain",
    author: "John Von Neumann",
    isbn: "9780300181111"
  },
  {
    title: "Ten Things to Know About Italian Economy",
    author: "Alan Friedman",
    description: "My father and I have listened to Alan Friedman's interviews on the national car radio for years. He gifted me this book, which allowed me to understand the intricate mechanisms behind a nation's economy, specifically the tragic Italian one.",
  },
  {
    title: "Quantum Physics for Poets",
    author: "Leon Lederman, Christopher Hill",
    description: "This was my teenage approach to Quantum Physics while binge-watching Kurzgesagt. I felt in love with the way science can be narratively taught as opposed to the school traditional method.",
    isbn: "9781616142339"
  },
  {
    title: "The Six Pillars of Self-Esteem",
    author: "Nathaniel Branden",
    description: "Technical, social or physical skills are not the only ones you can work on. This book helps to understand how to concretely be aware and improve a personality trait making it an asset for your daily life.",
    isbn: "9780553374391"
  },
  {
    title: "Dance Music Manual",
    author: "Rick Snoman",
    description: "Electronic music production is an hobby of mine. This book enriched my knowledge of music theory. It is an essential reading for anyone in the field.",
    isbn: "9781138319646"
  },
  {
    title: "The Theory of Everything",
    author: "Stephen Hawking",
  },
  {
    title: "The Art of Happiness",
    author: "Daila Lama",
    isbn: "9781573227544"
  },
  {
    title: "Siddhartha",
    author: "Hesse",
    isbn: "9788845901843"
  }
]
