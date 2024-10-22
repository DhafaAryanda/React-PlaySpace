import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";

const ButtonLogout = () => {
  return (
    <div className="space-y-2">
      <form action={""}>
        <Button
          type="submit"
          variant={"destructive"}
          className="w-full justify-start"
        >
          <LogOut className="mr-2 w-4 h-4" /> Logout
        </Button>
      </form>
    </div>
  );
};

export default ButtonLogout;
