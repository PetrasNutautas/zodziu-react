import classNames from "classnames";
import React, { ReactNode } from "react";
import crossIcon from "../assets/cross.svg";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

const styles = {
  container: [
    "select-none",
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "w-screen",
    "h-screen",
    "top-0",
    "left-0",
    "z-20",
  ],

  card: [
    "flex",
    "flex-1",
    "flex-col",
    "justify-center",
    "items-center",
    "m-4",
    "py-4",
    "border-silver",
    "border-2",
    "rounded-md",
    "shadow-md",
    "bg-white",
    "z-30",
  ],

  overlay: [
    "transition-all",
    "duration-500",
    "w-screen",
    "h-screen",
    "z-10",
    "bg-white",
    "fixed",
    "top-0",
    "left-0",
  ],
};

export default function Card({ isOpen = false, children, onClose }: Props) {
  return (
    <>
      <div
        className={classNames(
          styles.container,
          isOpen ? "opacity-1" : "opacity-0 -translate-y-64"
        )}
        style={{
          visibility: isOpen ? "visible" : "hidden",
          transition: "all 0.5s ease",
        }}
      >
        <div className={classNames(styles.card)} style={{ maxWidth: 450 }}>
          <div className="px-8 pt-4 flex justify-end w-full">
            <div className="cursor-pointer select-none" onClick={onClose}>
              <img
                src={crossIcon}
                alt="close"
                style={{ width: "2rem", height: "2rem" }}
              />
            </div>
          </div>
          {children}
        </div>
      </div>

      <div
        className={classNames(
          styles.overlay,
          isOpen ? "opacity-80" : "opacity-0"
        )}
        style={{
          visibility: isOpen ? "visible" : "hidden",
          transition: "all 0.5s ease",
        }}
      ></div>
    </>
  );
}
