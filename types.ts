
export interface StepDetail {
  id: string;
  text: string;
  imageUrl?: string;
  altText?: string;
}

// Types for Comprehension Quiz Game
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: QuizOption[];
  correctOptionId: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface QuizData {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

// Types for Pad Identification Game
export interface IdentificationItem {
  id: string;
  name?: string; // optional: e.g., "Toallita Femenina", "Curita", "Esponja de Cocina"
  imageUrl: string; // we use actual images
  altText?: string; // Optional: alt text for the image
  isCorrect: boolean;
}

export interface IdentificationRound {
  id: string;
  prompt: string;
  items: IdentificationItem[];
}

export interface IdentificationGameData {
  id: string;
  title: string;
  rounds: IdentificationRound[];
}


export interface ContentItem {
  type: 'paragraph' | 'list' | 'orderedList' | 'image' | 'subheading' | 'customHtml' | 'comprehensionQuiz' | 'padIdentificationGame';
  text?: string;
  htmlContent?: string;
  items?: string[];
  orderedItems?: (string | StepDetail)[];
  imageUrl?: string;
  altText?: string;
  quizData?: QuizData; // Data for the comprehension quiz
  identificationGameData?: IdentificationGameData; // Data for the identification game
}

export interface SectionData {
  id: string;
  navTitle: string;
  title: string;
  icon: string; // Emoji
  bgColor: string;
  textColor: string;
  content: ContentItem[];
  titleColor?: string; // Optional specific color for the title
}

export interface NavLink {
  id: string;
  title: string;
}