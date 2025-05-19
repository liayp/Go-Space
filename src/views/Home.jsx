import { Link } from "react-router-dom";
import routes from "../constants/routes";
import strings from "../constants/strings";

export default function Home() {
  return (
    <div className="flex h-svh flex-col items-center justify-center gap-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">{strings.app_name}</h1>
        <p className="mt-2">
          Gorontalo <i>Spatial Planning and Coordination Ecosystem</i>
        </p>
      </header>

      <nav className="flex gap-4">
        <Link
          to={routes.Spatial}
          className="rounded px-4 py-2 outline outline-2 outline-slate-100 transition-colors hover:bg-slate-400/60"
        >
          Data Spasial
        </Link>
        <Link
          to={routes.Tabular}
          className="rounded px-4 py-2 outline outline-2 outline-slate-100 transition-colors hover:bg-slate-400/60"
        >
          Data Tabular
        </Link>
      </nav>

      <main className="max-w-screen-md text-balance text-center">
        <p>
         GO-SPACE adalah sistem informasi yang dirancang untuk mendukung perencanaan tata ruang dan koordinasi pembangunan di Provinsi Gorontalo secara terintegrasi dan berbasis data spasial.
        </p>
      </main>
    </div>
  );
}
