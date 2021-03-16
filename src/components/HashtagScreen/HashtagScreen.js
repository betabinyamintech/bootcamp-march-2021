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

const selectedHashtagsMock = [
  { title: "ביטחון" },

  { title: "תחבורה" },

  { title: "ביטוח לאומי" },
];

const HashtagScreen = () => {
  const [selectedHashtags, setSelectedHashtags] = useState(
    selectedHashtagsMock
  );
  return (
    <div>
      <div>בחירת#האשטגים רלוונטיים</div>

      <HashtagList
        hashtags={hashtags}
        selectedHashtags={selectedHashtags}
        setSelectedHashtags={setSelectedHashtags}
      />
      <div>זה פשוט עוזר לנו לאתר את המומחה שידע\תדע לעזור לך.</div>
    </div>
  );
};
export default HashtagScreen;
