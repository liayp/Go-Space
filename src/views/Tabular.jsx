import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Table } from "../components";
import useGeoJSON from "../hooks/useGeoJSON";
import { useMemo } from "react";

export default function Tabular() {
  const [geoJSON] = useGeoJSON("Pertahanan dan Keamanan");
  const features = useMemo(
    () =>
      geoJSON
        ? geoJSON.features
            .map((feature) => feature.properties)
            .filter(
              (value, index, self) =>
                self.findIndex((t) => t.REMARK === value.REMARK) === index,
            )
            .map((record) => ({
              Kawasan: record.REMARK,
              Keamanan: record.KEAMANAN,
              Luas: record.LUAS,
            }))
        : [],
    [geoJSON],
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded bg-slate-50 px-2 py-1 text-slate-800 transition-colors hover:bg-slate-100"
      >
        <FaArrowLeft className="inline-block h-[1em]" /> Kembali
      </Link>
      <h1 className="text-center text-3xl font-bold uppercase">
        kawasan tata ruang
      </h1>
      <h2 className="my-2 text-center text-lg font-bold uppercase">
        Provinsi Gorontalo
      </h2>
      <Table data={features} />
    </div>
  );
}
