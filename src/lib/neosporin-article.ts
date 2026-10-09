export type ArticleRun = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  href?: string;
};

export type ArticleBlock =
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "h2" | "h3" | "p"; inlines: ArticleRun[] }
  | { type: "li"; inlines: ArticleRun[]; ordered?: boolean; depth?: number };

export const neosporinArticle: ArticleBlock[] = [
  {
    "type": "image",
    "src": "/images/blog/olive-and-louie.jpg",
    "alt": "Olive and Louie very concerned about their stuffed bear friend!",
    "caption": "Olive and Louie very concerned about their stuffed bear friend!"
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "If you’ve ever owned a dog, you know that at some point, they’re going to come limping inside with a mysterious scrape, scratch, or cut. Maybe they misjudged a jump. Maybe they had an overly ambitious zoomie session. Or maybe they just exist, because let’s face it, dogs have a special talent for getting minor injuries."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "And then, like any responsible pet parent, you ask yourself: "
      },
      {
        "text": "“Can I put Neosporin on this?”",
        "bold": true
      },
      {
        "text": " Because, after all, if it’s good for humans, it should be fine for dogs, right? Well, let’s break it down before you go squeezing that tube onto your pup’s paw."
      }
    ]
  },
  {
    "type": "h2",
    "inlines": [
      {
        "text": "Is Neosporin Safe for Dogs?",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "The short answer? "
      },
      {
        "text": "Yes, but with caution.",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "Neosporin is generally "
      },
      {
        "text": "safe",
        "bold": true
      },
      {
        "text": " for minor cuts and scrapes on dogs, "
      },
      {
        "text": "but only when used correctly",
        "bold": true
      },
      {
        "text": ". It contains "
      },
      {
        "text": "three antibiotic ingredients",
        "bold": true
      },
      {
        "text": " (neomycin, bacitracin, and polymyxin B), which help prevent bacterial infections. However, Neosporin "
      },
      {
        "text": "isn’t formulated for dogs",
        "bold": true
      },
      {
        "text": ", which means there are a few key things to keep in mind before slathering it on their skin."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "The Golden Rule:",
        "bold": true
      },
      {
        "text": " If it’s a minor wound, Neosporin "
      },
      {
        "text": "can",
        "italic": true
      },
      {
        "text": " be okay in small amounts. But if it’s anything more than a tiny scrape, you need to consult your vet first."
      }
    ]
  },
  {
    "type": "h2",
    "inlines": [
      {
        "text": "When Is It Okay to Use Neosporin on a Dog?",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "You can safely use Neosporin on your dog if:"
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✅ "
      },
      {
        "text": "It’s a Small, Superficial Wound",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Think small cuts, scrapes, or mild abrasions. If it’s deeper than a surface-level wound, "
      },
      {
        "text": "skip the Neosporin and call the vet.",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✅ "
      },
      {
        "text": "You Use a Tiny Amount",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "A "
      },
      {
        "text": "thin layer",
        "bold": true
      },
      {
        "text": " is more than enough. You don’t need to glob it on like you’re icing a cake."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✅ "
      },
      {
        "text": "Your Dog Can’t Lick It Off",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "This is a biggie. If your dog is a master licker (which, let’s be honest, most are), you need to prevent them from ingesting Neosporin, as it "
      },
      {
        "text": "can cause stomach upset or allergic reactions",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✅ "
      },
      {
        "text": "You’re Using the Basic Formula",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Some versions of Neosporin contain "
      },
      {
        "text": "pain relievers (like Pramoxine)",
        "bold": true
      },
      {
        "text": ", which can be toxic to dogs. Stick to the plain, original "
      },
      {
        "text": "triple antibiotic ointment",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "h2",
    "inlines": [
      {
        "text": "When You Should NOT Use Neosporin on a Dog",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "🚫"
      },
      {
        "text": " If the wound is deep, bleeding heavily, or looks infecte",
        "bold": true
      },
      {
        "text": "d"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Neosporin is "
      },
      {
        "text": "not",
        "bold": true
      },
      {
        "text": " a replacement for proper wound care. If the cut is more than just a surface scratch, "
      },
      {
        "text": "get your vet involved",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "🚫"
      },
      {
        "text": " If your dog has sensitive skin or allergie",
        "bold": true
      },
      {
        "text": "s"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Some dogs are more prone to skin reactions. If you’ve never used Neosporin on your dog before, test a tiny spot first and watch for any irritation."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "🚫"
      },
      {
        "text": " If the wound is near the eyes, nose, or mout",
        "bold": true
      },
      {
        "text": "h"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Neosporin "
      },
      {
        "text": "should never be used on a dog’s face",
        "bold": true
      },
      {
        "text": ", as it can easily get into their eyes or be licked off."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "🚫"
      },
      {
        "text": " If your dog is prone to licking wound",
        "bold": true
      },
      {
        "text": "s"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Neosporin isn’t meant to be ingested. If your dog won’t leave the wound alone, use an "
      },
      {
        "text": "e-collar (cone)",
        "bold": true
      },
      {
        "text": " or a vet-approved alternative."
      }
    ]
  },
  {
    "type": "h2",
    "inlines": [
      {
        "text": "Better Alternatives to Neosporin for Dogs",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "If you’re hesitant about using Neosporin or want something "
      },
      {
        "text": "made for dogs",
        "bold": true
      },
      {
        "text": ", here are a few safer options:"
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✔️ "
      },
      {
        "text": "Veterinary-Approved Antiseptic Ointments",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Brands like "
      },
      {
        "text": "Veterycin",
        "bold": true
      },
      {
        "text": " or "
      },
      {
        "text": "Silver Honey",
        "bold": true
      },
      {
        "text": " are designed specifically for pets and "
      },
      {
        "text": "don’t contain harmful additives",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✔️ "
      },
      {
        "text": "Chlorhexidine Solution",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "A mild antiseptic often used by vets, "
      },
      {
        "text": "diluted chlorhexidine",
        "bold": true
      },
      {
        "text": " (sold in pet stores) is "
      },
      {
        "text": "gentle on wounds and helps prevent infection",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✔️ "
      },
      {
        "text": "Aloe Vera (Pure, No Additives)",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Aloe is naturally soothing and helps with minor cuts, "
      },
      {
        "text": "but make sure it’s 100% pure and doesn’t contain added chemicals",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✔️ "
      },
      {
        "text": "Coconut Oil",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Coconut oil has "
      },
      {
        "text": "natural antibacterial properties",
        "bold": true
      },
      {
        "text": " and can help minor cuts heal, but again, only if your dog doesn’t lick it off immediately."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✔️ "
      },
      {
        "text": "Hydrogen Peroxide (But Use With Caution)",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "It’s okay for "
      },
      {
        "text": "cleaning",
        "bold": true
      },
      {
        "text": " wounds, but it "
      },
      {
        "text": "shouldn’t be used regularly",
        "bold": true
      },
      {
        "text": ", as it can delay healing if overused."
      }
    ]
  },
  {
    "type": "h2",
    "inlines": [
      {
        "text": "What to Do if Your Dog Licks Neosporin",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "First of all, don’t panic. A "
      },
      {
        "text": "tiny",
        "bold": true
      },
      {
        "text": " amount of Neosporin probably won’t harm your dog. However, "
      },
      {
        "text": "if they consume a lot",
        "bold": true
      },
      {
        "text": ", it can lead to:"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Stomach upset",
        "bold": true
      },
      {
        "text": " (vomiting, diarrhea)"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Allergic reactions",
        "bold": true
      },
      {
        "text": " (itching, swelling, difficulty breathing)"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Neurological symptoms",
        "bold": true
      },
      {
        "text": " (rare, but possible with large amounts)"
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "🚨"
      },
      {
        "text": " If your dog licks a significant amount of Neosporin, call your ve",
        "bold": true
      },
      {
        "text": "t for guidance."
      }
    ]
  },
  {
    "type": "h2",
    "inlines": [
      {
        "text": "How to Properly Treat a Dog’s Wound at Home",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "If your dog has a minor cut or scrape, here’s how to handle it "
      },
      {
        "text": "the right way",
        "bold": true
      },
      {
        "text": ":"
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "1️⃣ "
      },
      {
        "text": "Clean the Wound",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Use warm water and "
      },
      {
        "text": "a mild antiseptic (like chlorhexidine)",
        "bold": true
      },
      {
        "text": " to gently clean the area."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "2️⃣ "
      },
      {
        "text": "Stop the Bleeding",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "If needed, apply gentle pressure with a clean cloth or gauze."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "3️⃣ "
      },
      {
        "text": "Apply a Safe Antiseptic",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Use a pet-safe ointment or a "
      },
      {
        "text": "small amount",
        "bold": true
      },
      {
        "text": " of Neosporin if appropriate."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "4️⃣ "
      },
      {
        "text": "Keep It Covered (If Necessary)",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "If your dog keeps licking the wound, consider using a "
      },
      {
        "text": "bandage or cone",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "5️⃣ "
      },
      {
        "text": "Monitor for Signs of Infection",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "Watch for "
      },
      {
        "text": "redness, swelling, discharge, or worsening symptoms",
        "bold": true
      },
      {
        "text": ". If you see any, "
      },
      {
        "text": "call the vet",
        "bold": true
      },
      {
        "text": "."
      }
    ]
  },
  {
    "type": "h2",
    "inlines": [
      {
        "text": "Final Verdict: Can You Use Neosporin on a Dog?",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "Yes, you "
      },
      {
        "text": "can",
        "bold": true
      },
      {
        "text": " use Neosporin on minor cuts and scrapes, "
      },
      {
        "text": "but with caution",
        "bold": true
      },
      {
        "text": ". Always make sure:"
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "✔️ It’s "
      },
      {
        "text": "a small wound",
        "bold": true
      },
      {
        "text": "✔️ You’re using "
      },
      {
        "text": "a tiny amount",
        "bold": true
      },
      {
        "text": "✔️ Your dog "
      },
      {
        "text": "can’t lick it off",
        "bold": true
      },
      {
        "text": "✔️ You "
      },
      {
        "text": "avoid formulas with pain relievers",
        "bold": true
      },
      {
        "text": "✔️ You monitor for "
      },
      {
        "text": "any reactions",
        "bold": true
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "That said, "
      },
      {
        "text": "pet-safe alternatives",
        "bold": true
      },
      {
        "text": " exist and are often a "
      },
      {
        "text": "better choice",
        "bold": true
      },
      {
        "text": ". When in doubt, a quick call to your vet can save you from a lot of stress."
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "So next time your dog turns a simple walk into an extreme sports event, you’ll know exactly what to do. Because let’s be honest, this probably isn’t the last time you’ll be dealing with a mysterious scratch!"
      }
    ]
  },
  {
    "type": "p",
    "inlines": [
      {
        "text": "Sources:",
        "bold": true
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "American Kennel Club (AKC)",
        "href": "https://www.akc.org/"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "VCA Animal Hospitals",
        "href": "https://vcahospitals.com/"
      }
    ]
  },
  {
    "type": "li",
    "inlines": [
      {
        "text": "PetMD",
        "href": "https://www.petmd.com/"
      }
    ]
  }
];
