import "leaflet/dist/leaflet.css";
import "leaflet-search/dist/leaflet-search.min.css";
import L from "leaflet";

import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Popup,
  ScaleControl,
  TileLayer,
  Tooltip,
} from "react-leaflet";

import { FaArrowLeft } from "react-icons/fa6";
import { GeoJSON } from "../components";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";
import useGeoJSON from "../hooks/useGeoJSON";
import useGeoJSONFeatures from "../hooks/useGeoJSONFeatures";
// import SearchControl from "../components/SearchControl";
import SearchFookingControl from "../components/SearchFookingControl";

export default function Spatial() {


  const [dlkpGeoJSON] = useGeoJSON("DLKp");
  const dlkpMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.DLKp === feature.properties.DLKp,
      ),
      feature.properties.DLKp,
    ],
    [],
  );
  const dlkpFeatures = useGeoJSONFeatures(dlkpGeoJSON, dlkpMatchFeature);

  const [karstGeoJSON] = useGeoJSON("Karst");
  const karstMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.Sumber === feature.properties.Sumber,
      ),
      feature.properties.Sumber,
    ],
    [],
  );
  const karstFeatures = useGeoJSONFeatures(karstGeoJSON, karstMatchFeature);

  const [kmsGeoJSON] = useGeoJSON("Kawasan Migrasi Satwa");
  const kmsMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.MGRSAT === feature.properties.MGRSAT,
      ),
      feature.properties.MGRSAT,
    ],
    [],
  );
  const kmsFeatures = useGeoJSONFeatures(kmsGeoJSON, kmsMatchFeature);

  const [kkopGeoJSON] = useGeoJSON("KKOP");
  const kkopMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.KKOP_1 === feature.properties.KKOP_1,
      ),
      feature.properties.KKOP_1,
    ],
    [],
  );
  const kkopFeatures = useGeoJSONFeatures(kkopGeoJSON, kkopMatchFeature);

  const [kp2bGeoJSON] = useGeoJSON("KP2B");
  const kp2bMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.REMARK === feature.properties.REMARK,
      ),
      feature.properties.REMARK,
    ],
    [],
  );
  const kp2bFeatures = useGeoJSONFeatures(kp2bGeoJSON, kp2bMatchFeature);

  const [krb03GeoJSON] = useGeoJSON("KRB_03");
  const krb03MatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.KRB_03 === feature.properties.KRB_03,
      ),
      feature.properties.KRB_03,
    ],
    [],
  );
  const krb03Features = useGeoJSONFeatures(krb03GeoJSON, krb03MatchFeature);

  const [patahanGeoJSON] = useGeoJSON("Patahan");
  const patahanMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.Nama_patah === feature.properties.Nama_patah,
      ),
      feature.properties.Nama_patah,
    ],
    [],
  );
  const patahanFeatures = useGeoJSONFeatures(patahanGeoJSON, patahanMatchFeature);

  const [pertahananKeamananGeoJSON] = useGeoJSON("Pertahanan dan Keamanan");
  const pertahananKeamananMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.REMARK === feature.properties.REMARK,
      ),
      feature.properties.REMARK,
    ],
    [],
  );
  const pertahananKeamananFeatures = useGeoJSONFeatures(pertahananKeamananGeoJSON, pertahananKeamananMatchFeature);

  const [pertambanganGeoJSON] = useGeoJSON("Pertambangan");
  const pertambanganMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.Pertambang === feature.properties.Pertambang,
      ),
      feature.properties.Pertambang,
    ],
    [],
  );
  const pertambanganFeatures = useGeoJSONFeatures(pertambanganGeoJSON, pertambanganMatchFeature);

  const [rtmGeoJSON] = useGeoJSON("Rencana Terminal Marisa");
  const rtmMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.KETERANGAN === feature.properties.KETERANGAN,
      ),
      feature.properties.KETERANGAN,
    ],
    [],
  );
  const rtmFeatures = useGeoJSONFeatures(rtmGeoJSON, rtmMatchFeature);

  const [resapanAirGeoJSON] = useGeoJSON("Resapan Air");
  const resapanAirMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.RESAIR === feature.properties.RESAIR,
      ),
      feature.properties.RESAIR,
    ],
    [],
  );
  const resapanAirFeatures = useGeoJSONFeatures(resapanAirGeoJSON, resapanAirMatchFeature);

  const [sempadanGeoJSON] = useGeoJSON("Sempadan");
  const sempadanMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.KSMPDN === feature.properties.KSMPDN,
      ),
      feature.properties.KSMPDN,
    ],
    [],
  );
  const sempadanFeatures = useGeoJSONFeatures(sempadanGeoJSON, sempadanMatchFeature);

  const [wilayahGorontaloGeoJSON] = useGeoJSON("Wilayah Gorontalo");
  const wilayahGorontaloMatchFeature = useCallback(
    (feature, featuresGeoJSON) => [
      featuresGeoJSON.findIndex(
        ({ geoJSON }) =>
          geoJSON.features[0].properties.OBJECTID === feature.properties.OBJECTID,
      ),
      feature.properties.OBJECTID,
    ],
    [],
  );
  const wilayahGorontaloFeatures = useGeoJSONFeatures(wilayahGorontaloGeoJSON, wilayahGorontaloMatchFeature);
  
  return (
    <div className="relative isolate flex h-svh">
      <NavLink
        to="/"
        className="absolute left-16 top-4 inline-flex items-center gap-2 rounded bg-slate-50 px-2 py-1 text-slate-800 shadow-md transition-colors hover:bg-slate-100"
      >
        <FaArrowLeft className="inline-block h-[1em]" /> Kembali
      </NavLink>

      <h1 className="absolute left-1/2 top-4 z-10 mx-auto w-fit -translate-x-1/2 rounded bg-white/30 px-2 py-1 text-center text-xl font-bold text-slate-800 backdrop-blur">
        Peta Spasial Tata Ruang Provinsi Gorontalo
      </h1>

      <MapContainer
        center={[0.68694401562217, 122.75520767212]}
        zoom={10}
        minZoom={10}
        className="-z-10 flex-auto"
      >
        <SearchFookingControl />
        {/* <SearchControl searchLayer={<LayerGroup layers={[patahanFeatures, pertahananKeamananFeatures, pertambanganFeatures, rtmFeatures, resapanAirFeatures, sempadanFeatures, wilayahGorontaloFeatures]}/>} /> */}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Citra Satelit">
            <TileLayer
              attribution='&copy; CNES, Distribution Airbus DS, &copy; Airbus DS, &copy; PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}"
              ext="jpg"
            />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay checked name="DLKp">
            <LayerGroup>
              {dlkpFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Karst">
            <LayerGroup>
              {karstFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Kawasan Migrasi Satwa">
            <LayerGroup>
              {kmsFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="KKOP">
            <LayerGroup>
              {kkopFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="KP2B">
            <LayerGroup>
              {kp2bFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          
          <LayersControl.Overlay checked name="Kawasan Rawan Bencana">
            <LayerGroup>
              {krb03Features.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  fill
                  opacity={0.3}
                >
                  <Tooltip sticky>Kawasan Rawan Bencana {geoJSON.name}</Tooltip>
                  <Popup>
                    <table>
                      <tbody>
                        <tr>
                          <th>Nama</th>
                          <td>:</td>
                          <td>{geoJSON.name}</td>
                        </tr>
                        <tr>
                          <th>Keterangan</th>
                          <td>:</td>
                          <td>
                            {geoJSON.features
                              .reduce(
                                (acc, feature) => acc + feature.properties.KRB_03,
                                0,
                              )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Popup>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Patahan">
            <LayerGroup>
              {patahanFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Pertahanan dan Keamanan">
            <LayerGroup>
              {pertahananKeamananFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  fill
                  opacity={0.3}
                >
                  <Tooltip sticky>Pertahanan dan Keamanan {geoJSON.name}</Tooltip>
                  <Popup>
                    <table>
                      <tbody>
                        <tr>
                          <th>Nama</th>
                          <td>:</td>
                          <td>{geoJSON.name}</td>
                        </tr>
                        <tr>
                          <th>Luas</th>
                          <td>:</td>
                          <td>
                            {geoJSON.features
                              .reduce(
                                (acc, feature) => acc + feature.properties.LUAS,
                                0,
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Popup>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Pertambangan">
            <LayerGroup>
              {pertambanganFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  fill
                  opacity={0.3}
                >
                  <Tooltip sticky>Pertambangan {geoJSON.name}</Tooltip>
                  <Popup>
                    <table>
                      <tbody>
                        <tr>
                          <th>Nama</th>
                          <td>:</td>
                          <td>{geoJSON.name}</td>
                        </tr>
                        <tr>
                          <th>Luas</th>
                          <td>:</td>
                          <td>
                            {geoJSON.features
                              .reduce(
                                (acc, feature) => acc + feature.properties.LUAS,
                                0,
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Popup>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Rencana Terminal Marisa">
            <LayerGroup>
              {rtmFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Resapan Air">
            <LayerGroup>
              {resapanAirFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  stroke
                  weight={3}
                >
                  <Tooltip sticky>{geoJSON.name}</Tooltip>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Sempadan">
            <LayerGroup>
              {sempadanFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  fill
                  opacity={0.3}
                >
                  <Tooltip sticky>Sempadan {geoJSON.name}</Tooltip>
                  <Popup>
                    <table>
                      <tbody>
                        <tr>
                          <th>Nama</th>
                          <td>:</td>
                          <td>{geoJSON.name}</td>
                        </tr>
                        <tr>
                          <th>KSMPDN</th>
                          <td>:</td>
                          <td>
                            {geoJSON.features
                              .reduce(
                                (acc, feature) => acc + feature.properties.KSMPDN,
                                0,
                              )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Popup>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Wilayah Gorontalo">
            <LayerGroup>
              {wilayahGorontaloFeatures.map(({ geoJSON, color }) => (
                <GeoJSON
                  key={geoJSON.name}
                  data={geoJSON}
                  color={color}
                  fill
                  opacity={0.3}
                >
                  <Tooltip sticky>Wilayah Gorontalo {geoJSON.name}</Tooltip>
                  <Popup>
                    <table>
                      <tbody>
                        <tr>
                          <th>Nama</th>
                          <td>:</td>
                          <td>{geoJSON.name}</td>
                        </tr>
                        <tr>
                          <th>Luas</th>
                          <td>:</td>
                          <td>
                            {geoJSON.features
                              .reduce(
                                (acc, feature) => acc + feature.properties.LUAS,
                                0,
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Popup>
                </GeoJSON>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

        </LayersControl>

        <ScaleControl position="bottomleft" maxWidth={200} />
      </MapContainer>

      <footer className="absolute bottom-4 left-1/2 right-0 w-fit -translate-x-1/2 rounded bg-white/30 px-2 py-1 text-center text-slate-800 backdrop-blur">
        Copyright &copy; 2025{" "}
        {/* <a href="https://github.com/kabggis/" target="_blank"> */}
          GIS Tata Ruang Gorontalo
        {/* </a> */}
      </footer>
    </div>
  );
}
