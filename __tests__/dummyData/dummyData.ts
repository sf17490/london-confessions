import { ConfessionTimeWithChurches } from "@/app/types";

export const dummyChurchData = {
  address: "Victoria",
  id: 1,
  name: "A dummy church name",
  website: "https://dummyChurch.com",
};

export const dummyConfessionTimesWithChurches: ConfessionTimeWithChurches[] = [
  {
    churches: [
      {
        Church: {
          address: "Victoria St, London SW1P 1LT",
          id: 1,
          name: "Westminster Cathedral",
          website: "https://westminstercathedral.org.uk/",
        },
        ChurchConfession: {
          churchId: 1,
          confessionTimeId: 1,
        },
      },
      {
        Church: {
          address: "Clerkenwell",
          id: 2,
          name: "Sts Peter & Paul",
          website: "https://parish.rcdow.org.uk/clerkenwell/",
        },
        ChurchConfession: {
          churchId: 2,
          confessionTimeId: 1,
        },
      },
    ],
    confessionTime: "11:30",
  },
  {
    churches: [
      {
        Church: {
          address: "Soho",
          id: 3,
          name: "St Patrick's",
          website: "https://www.stpatricksoho.org/",
        },
        ChurchConfession: {
          churchId: 3,
          confessionTimeId: 2,
        },
      },
    ],
    confessionTime: "12:00",
  },
  {
    churches: [
      {
        Church: {
          address: "Knightsbridge",
          id: 4,
          name: "Brompton Oratory",
          website: "https://www.bromptonoratory.co.uk/#about",
        },
        ChurchConfession: {
          churchId: 4,
          confessionTimeId: 3,
        },
      },
    ],
    confessionTime: "17:30",
  },
  // {
  //   churches: [
  //     {
  //       Church: {
  //         address: "MayFair",
  //         id: 5,
  //         name: "Ukrainian Catholic Cathedral",
  //         website: "https://somedummyUkraininanUrl.com",
  //       },
  //       ChurchConfession: {
  //         churchId: 5,
  //         confessionTimeId: 4,
  //       },
  //     },
  //   ],
  //   confessionTime: "06:45",
  // },
];

// Mocked DB responses use the below:

export const elevenThirtyChurches = [
  {
    Church: {
      address: "Victoria St, London SW1P 1LT",
      id: 1,
      name: "Westminster Cathedral",
      website: "https://westminstercathedral.org.uk/",
    },
    ChurchConfession: {
      churchId: 1,
      confessionTimeId: 1,
    },
  },
  {
    Church: {
      address: "Clerkenwell",
      id: 2,
      name: "Sts Peter & Paul",
      website: "https://parish.rcdow.org.uk/clerkenwell/",
    },
    ChurchConfession: {
      churchId: 2,
      confessionTimeId: 1,
    },
  },
];

export const twelveOclockChurches = [
  {
    Church: {
      address: "Soho",
      id: 3,
      name: "St Patrick's",
      website: "https://www.stpatricksoho.org/",
    },
    ChurchConfession: {
      churchId: 3,
      confessionTimeId: 2,
    },
  },
];

export const fiveThirtyChurches = [
  {
    Church: {
      address: "Knightsbridge",
      id: 4,
      name: "Brompton Oratory",
      website: "https://www.bromptonoratory.co.uk/#about",
    },
    ChurchConfession: {
      churchId: 4,
      confessionTimeId: 3,
    },
  },
];

export const sixFortyFiveChurches = [
  {
    Church: {
      address: "MayFair",
      id: 5,
      name: "Ukrainian Catholic Cathedral",
      website: "https://somedummyUkraininanUrl.com",
    },
    ChurchConfession: {
      churchId: 5,
      confessionTimeId: 4,
    },
  },
];
