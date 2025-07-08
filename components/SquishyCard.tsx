import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SquishyCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  link: string;
}

const SquishyCard = ({
  title,
  description,
  benefits,
  icon: Icon,
  link,
}: SquishyCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-full overflow-hidden rounded-2xl bg-[#169fda] p-8 border-2 border-transparent hover:border-[#083954] transition-colors duration-500"
    >
      <div className="relative z-10 flex flex-col h-full justify-between text-white">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-white" />
            <motion.span
              initial={{ scale: 0.95 }}
              variants={{
                hover: {
                  scale: 1,
                },
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              className="font-mono text-xl font-bold leading-snug"
            >
              {title}
            </motion.span>
          </div>
          <p className="text-sm mb-3">{description}</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>

        <Link
          href={link}
          className="mt-4 inline-block rounded border-2 border-white bg-transparent py-2 px-4 text-center font-mono font-bold uppercase text-white backdrop-blur transition-colors duration-300 hover:bg-white hover:text-[#169fda]"
        >
          Learn More
        </Link>
      </div>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#083954"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#0b486e"
      />
    </motion.svg>
  );
};

export default SquishyCard;
