import { Dispatch, SetStateAction, useState } from "react";

import { 
  CommandInput, 
  CommandItem, 
  CommandList,
  CommandGroup,
  CommandEmpty,
  CommandDialog
} from "@/components/ui/command";


interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DashboardCommand = ({ open, setOpen }: Props) => {

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Find a meeting or agent..."
      />
      <CommandList>
        <CommandInput placeholder="Find a meeting or agent"/>
      <CommandItem>Test</CommandItem>
      </CommandList>
      </CommandDialog>
  );
};
