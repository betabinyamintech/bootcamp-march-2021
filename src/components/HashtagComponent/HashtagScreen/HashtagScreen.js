import React, { useState } from "react";
import HashtagList from "./HashtagList";

const hashtags = [
  {
    title: "אינטרנט",
  },
  {
    title: 'נדל"ן',
  },
  {
    title: "מיסוי",
  },

  {
    title: "שיתופי פעולה",
  },
  {
    title: "תקשורת",
  },
  {
    title: "דת",
  },
  {
    title: "בריאות",
  },
  { title: "עסקים" },

  { title: "ביטחון" },

  { title: "תחבורה" },

  { title: "ביטוח לאומי" },
];

const selectedHashtagsMock = [];

const HashtagScreen = () => {
  const [selectedHashtags, setSelectedHashtags] = useState(
    selectedHashtagsMock
  );
  return (
    <div
      style={{
        display: "flex",
        width: " 400p",
        height: "200px",
        alignitems: "center",
      }}
    >
      <HashtagList
        hashtags={hashtags}
        selectedHashtags={selectedHashtags}
        setSelectedHashtags={setSelectedHashtags}
      />
    </div>
  );
};
export default HashtagScreen;
