"use client"
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="place-content-center">
      <a
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        privacy policy
      </a>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-800 dark:text-neutral-300">
          <h2 className="text-4xl text-center font-bold text-neutral-900 dark:text-neutral-100">
            Privacy Policy 
          </h2>
          <p>
            At TRIVINSAI Digital and Company, we are committed to protecting your personal information and your right to privacy.
            This drawer provides a brief overview of how we handle your data when you interact with our services.
          </p>
          <p>
            <strong>Data We Collect:</strong> We collect personal data such as your name, email address, contact details, and business
            information when you interact with our website, subscribe to services, or reach out for support.
          </p>
          <p>
            <strong>Use of Data:</strong> We use your information to provide and improve our services, communicate with you, process
            transactions, and ensure the security of our systems.
          </p>
          <p>
            <strong>Cookies & Tracking:</strong> We use essential, preference, analytics, and marketing cookies to enhance user
            experience and analyze traffic.
          </p>
          <p>
            <strong>Data Protection:</strong> We implement technical and organizational safeguards to secure your information. However, no
            system is completely immune to breaches.
          </p>
          <p>
            <strong>Your Rights:</strong> You have the right to access, correct, or delete your data and opt out of marketing communications
            at any time.
          </p>
          <p>
            For more information, please read our full privacy policy or contact us directly at{" "}
            <a className="text-primary underline" href="mailto:privacy@trivinsai.com">
              privacy@trivinsai.com
            </a>.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-orange-100 dark:bg-[#111827]"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-orange-100 dark:bg-[#111827] p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
