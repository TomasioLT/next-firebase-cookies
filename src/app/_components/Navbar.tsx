"use client";
import Link from "next/link";
import {CircleUser, Menu, Package2, Search, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Input} from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {toast} from "sonner";

export default function Navbar() {
  const {setTheme} = useTheme();

  return (
    <div className="flex w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link
            href="/signin"
            className="text-muted-foreground transition-colors hover:text-foreground">
            Login
          </Link>
          <Link
            href="/signup"
            className="text-muted-foreground transition-colors hover:text-foreground">
            Register
          </Link>

          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground">
            Settings
          </Link>
          <Link
            href="/users"
            className="text-muted-foreground transition-colors hover:text-foreground">
            Users
          </Link>
          <Link
            href="/products"
            className="text-muted-foreground transition-colors hover:text-foreground">
            Products
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <SheetClose asChild>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/signin"
                  className="text-muted-foreground hover:text-foreground">
                  Login
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/signup"
                  className="text-muted-foreground hover:text-foreground">
                  Register
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#" className="hover:text-foreground">
                  Settings
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/users"
                  className="text-muted-foreground transition-colors hover:text-foreground">
                  Users
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/producs"
                  className="text-muted-foreground transition-colors hover:text-foreground">
                  Products
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
