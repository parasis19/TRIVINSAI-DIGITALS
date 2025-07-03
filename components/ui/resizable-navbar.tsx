"use client"
import { cn } from "@/lib/utils"
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"

import React, { useRef, useState } from "react"

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface DropdownItem {
  name: string
  description?: string
  href: string
  icon?: React.ReactNode
}

interface NavItem {
  name: string
  link?: string
  dropdown?: DropdownItem[]
}

interface NavItemsProps {
  items: NavItem[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [visible, setVisible] = useState<boolean>(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-0 z-40 w-full  ", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child,
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-4 lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null)
        setDropdownOpen(null)
      }}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`nav-item-${idx}`}
          className="relative"
          onMouseEnter={() => {
            setHovered(idx)
            if (item.dropdown) {
              setDropdownOpen(idx)
            }
          }}
          onMouseLeave={() => {
            if (!item.dropdown) {
              setHovered(null)
            }
          }}
        >
          {item.dropdown ? (
            <a
              href={item.link}
              className="relative flex items-center gap-1 px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-[#0b486e] transition-colors"
              onClick={onItemClick}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20">{item.name}</span>
              <IconChevronDown
                size={16}
                className={cn("relative z-20 transition-transform duration-200", dropdownOpen === idx && "rotate-180")}
              />
            </a>
          ) : (
            <a
              className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-[#0b486e] transition-colors"
              href={item.link}
              onClick={onItemClick}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </a>
          )}

          {/* Dropdown Menu */}
          <AnimatePresence>
            {item.dropdown && dropdownOpen === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
                className="absolute left-1/2 top-full z-50 mt-2 w-80 -translate-x-1/2 rounded-2xl bg-white/90 p-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] backdrop-blur-md dark:bg-neutral-950/90"
              >
                <div className="space-y-2">
                  {item.dropdown.map((dropdownItem, dropdownIdx) => (
                    <a
                      key={`dropdown-${idx}-${dropdownIdx}`}
                      href={dropdownItem.href}
                      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800/50"
                      onClick={onItemClick}
                    >
                      {dropdownItem.icon && (
                        <div className="mt-0.5 text-neutral-500 dark:text-neutral-400">{dropdownItem.icon}</div>
                      )}
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">{dropdownItem.name}</div>
                        {dropdownItem.description && (
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            {dropdownItem.description}
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "16px" : "16px",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-4 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>
}

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.5,
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950 backdrop-blur-md",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return isOpen ? (
    <IconX
      className="text-[#0b486e] dark:text-white cursor-pointer touch-manipulation p-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
      onClick={onClick}
      size={24}
    />
  ) : (
    <IconMenu2
      className="text-[#0b486e] dark:text-white cursor-pointer touch-manipulation p-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
      onClick={onClick}
      size={24}
    />
  )
}

export const NavbarLogo = () => {
  return (
    <a href="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal">
      <img src="/logos/Trivinsai.png" alt="logo" width={150} height={100} />
      
    </a>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "dark" | "gradient"
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"

  const variantStyles = {
    primary:
      "bg-[#0b486e] text-white shadow-[0_2px_8px_rgba(11,72,110,0.2)] hover:shadow-[0_4px_12px_rgba(11,72,110,0.3)]",
    secondary: "bg-transparent text-[#0b486e] shadow-none dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-800",
    dark: "bg-[#0b486e] text-white shadow-[0_2px_8px_rgba(11,72,110,0.2)]",
    gradient: "bg-gradient-to-b from-[#0b486e] to-[#083a56] text-white shadow-[0_2px_8px_rgba(11,72,110,0.2)]",
  }

  return (
    <Tag href={href || undefined} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Tag>
  )
}
