// src/data/commissions.js
export const commissions = [
  {
    id: 1,
    creatorId: 1,
    clientName: "Rina",
    title: "Chibi Couple Commission",
    date: "12 Februari 2025",
    progress: [
      { step: "Sketch", status: "done", preview: null },
      { step: "Line Art", status: "done", preview: null },
      {
        step: "Coloring",
        status: "in-progress",
        preview:
          "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=60",
      },
      { step: "Final Touch", status: "pending", preview: null },
    ],
  },
  {
    id: 2,
    creatorId: 1,
    clientName: "Bagas",
    title: "Full Illustration Fantasy",
    date: "10 Februari 2025",
    progress: [
      { step: "Sketch", status: "done", preview: null },
      { step: "Line Art", status: "pending", preview: null },
      { step: "Coloring", status: "pending", preview: null },
      { step: "Final Touch", status: "pending", preview: null },
    ],
  },
  {
    id: 3,
    creatorId: 2,
    clientName: "Sinta",
    title: "Webtoon Panel",
    date: "8 Februari 2025",
    progress: [
      { step: "Sketch", status: "done", preview: null },
      { step: "Line Art", status: "in-progress", preview: null },
      { step: "Coloring", status: "pending", preview: null },
      { step: "Final Touch", status: "pending", preview: null },
    ],
  },
]
