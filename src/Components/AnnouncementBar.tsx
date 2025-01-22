import React, { useEffect, useState } from "react";

const AnnouncementBar: React.FC = () => {
  const announcements: string[] = [
    "🎉 Free shipping on orders over $50!",
    "🔥 Limited-time offer: Get 20% off on your first order!",
    "💥 Buy 1 Get 1 Free on select items!",
    "🚚 Fast delivery within 3 days guaranteed!",
  ];
  const [currentAnnouncement, setCurrentAnnouncement] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 3000); //change after 3 sec
    return () => clearInterval(interval); // cleanup on unmount
  }, [announcements.length]);

  return (
    <div className="bg-grey-600 text-white text-center py-2  tect-sm font-medium">
      {announcements[currentAnnouncement]}
    </div>
  );
};

export default AnnouncementBar;
