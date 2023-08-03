import { AiOutlineLinkedin } from "react-icons/ai";

export function Social() {
  return (
    <div className="flex absolute bottom-4 right-4 z-50 sm:text-3xl text-2xl  text-slate-600 ">
      <a href="https://linkedin.com" className="hover:text-blue-500">
        <AiOutlineLinkedin />
      </a>
    </div>
  );
}
