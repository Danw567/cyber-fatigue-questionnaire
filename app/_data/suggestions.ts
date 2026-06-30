export type SuggestionsT = {
  type: string;
  description: string;
  suggestions: SuggestionT[];
};

export type SuggestionT = {
  title: string;
  explanation: string;
};

export const suggestions: SuggestionsT[] = [
  {
    type: "action",
    description:
      'The exhaustion resulting from excessive daily security "friction." It occurs when manual tasks like frequent re-authentications, redundant prompts, and cumbersome workflows tax a user\'s operational patience, leading them to prioritize speed over safety by seeking out workarounds.',
    suggestions: [
      {
        title: "Eliminate Arbitrary Password Expirations",
        explanation:
          "Stop forcing users to change their passwords every 60 or 90 days. Unless a breach is suspected or credentials are known to be compromised, drop the expiration policy. Aligning with modern NIST guidelines instantly removes one of the most universally frustrating recurring tasks for users.",
      },
      {
        title: "Implement Risk-Based Authentication (Adaptive MFA)",
        explanation:
          "Prompting for MFA on every single login creates immediate fatigue and leads to careless approvals. Tune your Identity Provider to challenge users only when their context changes, such as logging in from a new device, an unusual geographical location, or an anomalous time of day.",
      },
      {
        title: "Transition to Passwordless and SSO",
        explanation:
          "Radically reduce the physical number of times a user must type credentials. Expand your Single Sign-On footprint and pair it with device-level biometrics (like Windows Hello or TouchID). This shifts the security burden away from manual user actions and onto the hardware.",
      },
      {
        title: "Replace Manual VPNs with Seamless Access",
        explanation:
          "If users have to constantly launch a VPN client, deal with connection drops, and manually re-authenticate to access internal tools, their daily action tax is too high. Transition to modern network access solutions (like ZTNA) that run invisibly in the background and authenticate connections without requiring user clicks.",
      },
      {
        title: "Consolidate Overlapping Security Checks",
        explanation:
          "Map out a standard employee's digital morning. If they have to unlock their machine, log into a web portal, and then immediately authenticate again for a specific app, the workflow is broken. Streamline your trust policies so that one strong, initial authentication carries the user smoothly through their primary tools.",
      },
    ],
  },
  {
    type: "advice",
    description:
      'The mental overload caused by the frequency, volume, or irrelevance of security communications. It occurs when users are bombarded with generic policies, repetitive training, and non-contextual alerts, causing them to reflexively ignore all security guidance as "background noise."',
    suggestions: [
      {
        title: "Move to Just-in-Time, Contextual Nudges",
        explanation:
          "Stop giving users abstract advice in a classroom and expecting them to remember it months later. Implement point-in-time tooltips or DLP (Data Loss Prevention) pop-ups that gently warn users exactly when they take a risky action (like attempting to email a sensitive file externally), making the advice instantly relevant.",
      },
      {
        title: 'Kill the "Security Newsletter" Spam',
        explanation:
          "Stop sending weekly or monthly company-wide security emails that users automatically filter into their junk folders. Consolidate your communications and only broadcast to the entire company when there is an immediate, highly relevant threat or a major shift in operational policy.",
      },
      {
        title: "Provide Tools Instead of Just Rules",
        explanation:
          'Telling users to "create complex, unique passwords for every application and never write them down" is exhausting advice. Instead of giving them a rule to memorise, give them an enterprise password manager and teach them how to use it. Replace complex instructions with paved, secure roads.',
      },
      {
        title: "Shift from Marathon Training to Micro-Learning",
        explanation:
          "Abandon the mandatory, hour-long annual compliance videos that users just click through on mute to get back to work. Break security awareness down into hyper-focused, 2-to-3-minute, role-specific modules spread throughout the year so the cognitive load is minimal.",
      },
      {
        title: "Condense and Translate Security Policies",
        explanation:
          "End-users should not have to read a 50-page PDF filled with legal and technical jargon to know how to handle data safely. Audit your acceptable use policies and rewrite the employee-facing versions into plain, scannable language focused on what they should do, rather than a massive list of restrictions.",
      },
    ],
  },
  {
    type: "attitudinal",
    description:
      "Attitudinal fatigue manifests as apathy, cynicism, or a diminished belief in the importance of security, often leading to intentional workarounds because users feel security is just a meaningless roadblock.",
    suggestions: [
      {
        title: 'Change the Metric from "Violations" to "Saves"',
        explanation:
          'Users become cynical when security only ever contacts them to tell them they did something wrong. Shift the narrative by publicly acknowledging when user reporting actually stops a threat. Showing tangible proof that their effort protects the company directly combats the feeling of "why bother?"',
      },
      {
        title: "Align Security with Business Enablement",
        explanation:
          'If users feel security exists only to say "no," attitudinal fatigue spikes. Reframe security policies by showing how they enable the business to move faster. Instead of "You cannot use this software," use "Here is our pre-approved, secure software catalog so you can start working immediately."',
      },
      {
        title: "Make the 'Why' Relatable and Explicit",
        explanation:
          '"Because it\'s policy" breeds resentment. When enforcing a rule, clearly explain the specific, relatable risk it mitigates. For example, instead of "Do not plug in unauthorized USBs," explain that "A compromised USB can lock down the entire accounting department\'s network in seconds."',
      },
      {
        title: "Enforce Visible Executive Compliance",
        explanation:
          "Nothing breeds attitudinal fatigue faster than a double standard. If the C-Suite bypasses MFA, ignores password rules, or demands exceptions to security policies, the workforce will immediately stop caring about those rules, too. Leaders must visibly and publicly adhere to the exact same friction as the frontline staff.",
      },
      {
        title: "Act on Friction Feedback",
        explanation:
          "Apathy sets in when users feel their frustrations are ignored. Create a simple feedback loop for users to report overly burdensome security protocols. When you eliminate a redundant login or simplify a process based on their feedback, announce it. Showing that the InfoSec team is actively trying to make their lives easier builds massive goodwill.",
      },
    ],
  },
  {
    type: "cognitive",
    description:
      'Cognitive fatigue occurs when a user’s mental bandwidth is overloaded, leading to "click-blindness" or habituated, automatic unsafe behaviors without conscious awareness.',
    suggestions: [
      {
        title: 'Break the "Click-Blindness" Habit',
        explanation:
          'If a user sees the exact same security pop-up every day, their brain learns to dismiss it automatically. Combat this by changing the visual appearance, color, or placement of critical warnings so they force a momentary pause and break the habituated muscle memory of clicking "Accept."',
      },
      {
        title: "Implement Secure-by-Default Settings",
        explanation:
          "Do not force users to make complex security configurations. Every tool, platform, and device should come pre-configured with the highest necessary security settings (like default encryption or restricted sharing). Users should only have to use cognitive energy if they need to actively lower a setting for a specific task.",
      },
      {
        title: "Automate the Technical Decisions",
        explanation:
          "Stop asking users to evaluate technical certificates, verify domain structures, or parse complex URL strings to decide if a site is safe. If a decision requires technical analysis, the security architecture should be making that decision in the background—blocking the malicious site before the user even has to think about it.",
      },
      {
        title: "Redesign Warnings for High Readability",
        explanation:
          "When an alert must be shown, it needs to be processed instantly. Strip out all error codes, legal jargon, and dense paragraphs. Use plain language with clear visual hierarchy: What happened? What is the risk? What is the exact one-click action the user needs to take?",
      },
      {
        title: "Reduce Concurrent Security Tasks",
        explanation:
          "Cognitive load spikes when users have to juggle multiple security requirements simultaneously (e.g., verifying a 6-digit code on their phone while racing a 30-second timeout on their desktop). Widen timeout windows and allow users to handle authentication steps sequentially rather than concurrently.",
      },
    ],
  },
];
