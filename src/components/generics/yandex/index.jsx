import { YMaps, Map, Placemark } from "react-yandex-maps";
let mapStyle = {
  position: "relative",
  top: 0,
  left: 0,
  width: "99.5%",
  height: "50vh",
  overflow: "hidden",
};
function Yandex({geometry}) {
  return (
    <YMaps
      query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "en_RU" }}
    >
      <Map
        style={mapStyle}
        state={{ center: geometry || [41.294165, 69.681795], zoom: 13 }}
      >
        <Placemark geometry={[41.294165, 69.681795]} />
      </Map>
    </YMaps>
  );
}
//
export default Yandex;
