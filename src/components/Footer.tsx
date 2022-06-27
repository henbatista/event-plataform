import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="  w-full p-5  flex items-center justify-between bg-gray-700 border-t border-gray-600">
      <div>
        <h2>Todos os direitos reservados | 2022</h2>
      </div>

      <Logo />

    </footer>
  )
}