import React, { useEffect, useState } from "react";
import { Modal } from "./modal";

export const ExpandableModalText = ({
  children,
  image,
}: {
  children: React.ReactNode;
  image: React.ReactNode;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false); // mobile inline expand
  const [openModal, setOpenModal] = useState(false); // desktop modal open

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) {
        setExpanded(false); // reset mobile expansion
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setExpanded(!expanded);
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div className="relative">
      <div
        className={
          "text-sm font-normal text-neutral-300 leading-relaxed " +
          (!expanded ? "line-clamp-12" : "")
        }
        style={{ color: 'rgba(212, 212, 212, 0.9)' }}
      >
        {children}
      </div>

      {/* See more / less button */}
      <div className="mt-2">
        <button
          onClick={handleToggle}
          className="inline text-sm text-neutral-300 hover:text-white hover:underline underline-offset-2 transition-colors duration-200"
          style={{ color: 'rgba(212, 212, 212, 0.9)' }}
        >
          {isMobile && expanded ? "See less" : "See more"}
        </button>
      </div>

      {/* Desktop Modal */}
      {!isMobile && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          image={image}
          description={children}
        />
      )}
    </div>
  );
};