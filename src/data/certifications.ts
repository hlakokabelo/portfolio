export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    date: "Earned Jul 2026 · Expires Jul 2027",
    credentialId: "B0DCF3FE6B66C133",
    verifyUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/KabeloHlako-4075/B0DCF3FE6B66C133?sharingId=792E1E9F7AC008E",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Earned Jun 2026",
    credentialId: "6F62F0D0CD266594",
    verifyUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/KabeloHlako-4075/6F62F0D0CD266594?sharingId=792E1E9F7AC008E",
  },
  {
    name: "Artificial Intelligence in the 4IR",
    issuer: "University of Johannesburg",
    date: "Dec 2024",
    credentialId: "55482308-01-VE7T",
    verifyUrl: "https://dcveri.uj.ac.za/?reference=55482308-01-VE7T",
  },
  {
    name: "GitHub Foundations (KN-GH900) — Course Completion Badge",
    issuer: "Mecer Inter-Ed",
    date: "Oct 2026",
    credentialId: "KN-GH900",
    verifyUrl:
      "https://learn.mecerintered.co.za/badges/badge.php?hash=8fdc4abfbfafd7b2f89f6c972d0dbab7ae7cb499",
  },
  {
    name: "SQL / Business Analysis",
    issuer: "Signature Academy",
    date: "Aug 2025",
  },
];