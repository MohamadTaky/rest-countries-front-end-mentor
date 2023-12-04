import Button from "@/components/common/Button";
import cn from "@/utils/cn";
import * as RadixDropDown from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

const DropDownContext = createContext<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }>({
  open: false,
  setOpen: () => {},
});

function Menu({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <DropDownContext.Provider value={{ open, setOpen }}>
      <RadixDropDown.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDropDown.Root>
    </DropDownContext.Provider>
  );
}

function Trigger({ children, className }: { children?: ReactNode; className?: string }) {
  const { open } = useContext(DropDownContext);
  return (
    <RadixDropDown.Trigger asChild className={cn("w-52 justify-between", className)}>
      <Button size="lg">
        {children}
        <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </Button>
    </RadixDropDown.Trigger>
  );
}

function Content({ children }: { children?: ReactNode }) {
  const { open } = useContext(DropDownContext);
  return (
    <AnimatePresence>
      {open && (
        <RadixDropDown.Portal forceMount>
          <RadixDropDown.Content side="bottom" avoidCollisions={false} sideOffset={5} asChild>
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-element-3 border-element-1 w-52 overflow-hidden rounded-md border-2"
            >
              {children}
            </motion.ul>
          </RadixDropDown.Content>
        </RadixDropDown.Portal>
      )}
    </AnimatePresence>
  );
}

function Item({
  children,
  onSelect,
  className,
}: {
  children?: ReactNode;
  onSelect?: (event: Event) => void;
  className?: string;
}) {
  return (
    <RadixDropDown.Item className={cn("w-full", className)} asChild onSelect={onSelect}>
      <Button content="start" size="lg" className="-outline-offset-2">
        {children}
      </Button>
    </RadixDropDown.Item>
  );
}

export { Content, Item, Menu, Trigger };
