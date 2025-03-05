type TExperienceLetter = {
  companyName: string;
  companyLogo: string;
  companyAddress: string;
  companyEmail: string;
  letterDate: string;
  employeeName: string;
  position: string;
  startDate: string;
  endDate: string;
  content: string;
  signerName: string;
  signerPosition: string;
};

export const experienceLetters: Record<string, TExperienceLetter> = {
  saral: {
    companyName: "SARAL, Inc",
    companyLogo: "/assets/logos/getsaral_logo.jpeg",
    companyAddress: "16192, Coastal Highway Lewes, DE 19958",
    companyEmail: "support@getsaral.com",
    letterDate: "February 14th, 2025",
    employeeName: "Mr. Milind Kumar Mishra",
    position: "Software Engineer",
    startDate: "November 25, 2024",
    endDate: "February 7, 2025",
    content:
      "During his time at SARAL, Milind has consistently demonstrated a good work ethic and a commendable level of frontend engineering skill. He contributed significantly to building our admin dashboard and a few other critical features. He has a proactive approach to problem-solving and a keen ability to learn new technologies. We wish Milind all the best in his future endeavors. He is a talented and dedicated individual, and we are confident that he will continue to achieve great success.",
    signerName: "Michael Teves",
    signerPosition: "People and HR Manager at SARAL",
  },
};
