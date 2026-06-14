export type SurveyStatementsT = {
  fatigueType: string;
  statements: string[];
};

export const surveyStatements: SurveyStatementsT[] = [
  {
    fatigueType: "advice",
    statements: [
      "I find the security advice provided by the organisation difficult to understand",
      "I receive too many security-related emails or updates to read them all thoroughly",
      "The security instructions I am given often seem to contradict each other",
      "I feel overwhelmed by the amount of security training I am required to complete",
    ],
  },
  {
    fatigueType: "action",
    statements: [
      "Performing security tasks (like frequent password changes or MFA) feels like a chore",
      "The security procedures I have to follow interfere with my daily productivity",
      "I feel physically or mentally tired from constantly having to perform security checks",
      "I find myself looking for ways to bypass security steps to save time",
    ],
  },
  {
    fatigueType: "cognitive",
    statements: [
      "When a security prompt appears, I click through it quickly without reading the text",
      "I find it difficult to stay focused when learning about new security threats",
      'I often make "gut-feeling" decisions about security rather than following exact steps',
      "At the end of a workday, I am less likely to follow strict security protocols",
    ],
  },
  {
    fatigueType: "attitudinal",
    statements: [
      "I believe that most security policies are unnecessary for my specific role",
      "I feel that the organisation's security rules are designed to make my job harder",
      "I have become indifferent to the risks of a potential security breach",
      "I believe that no matter what I do, a security breach is eventually going to happen anyway",
    ],
  },
];

type SurveyAnswersT = {
  answer: string;
  score: number;
};

export const surveyAnswers: SurveyAnswersT[] = [
  { answer: "I strongly agree", score: 5 },
  { answer: "I agree", score: 4 },
  { answer: "I neither agree or disagree", score: 3 },
  { answer: "I disagree", score: 2 },
  { answer: "I strongly disagree", score: 1 },
];
