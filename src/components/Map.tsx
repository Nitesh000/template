import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import { MyObjectType2 } from "../types";
import { Icon } from "leaflet";

const Map = () => {
  const mapQuery = useQuery({
    queryKey: ["map"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .catch((e) => console.log(e)),
  });

  const customIcon = new Icon({
    iconUrl: markerIconPng,
    iconsSize: [25, 25],
  });

  var data;

  if (mapQuery.isSuccess) {
    data = getData(mapQuery.data);

    function getData(data: any[]) {
      var output: MyObjectType2[] = [];
      data.forEach((item, i: number) => {
        output[i] = {
          location: [item.countryInfo.lat, item.countryInfo.long],
          message: [
            item.countryInfo.flag,
            item.country,
            item.cases,
            item.recovered,
          ],
        };
      });
      return output;
    }
  }
  console.log(data);

  return (
    <div className="h-5/6 w-5/6 flex justify-center my-7 mx-3">
      {/* Map of the world with the hover effect */}
      <MapContainer className="h-full w-full" center={[20, 77]} zoom={3}>
        <TileLayer
          attribution="&copy; Just some random things"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((item, i) => (
          <Marker key={i} position={item.location} icon={customIcon}>
            <Popup className="flex flex-col items-center">
              <div>
                <img className="h-5 contain inline" src={item.message[0]} />
                <span className="ml-2">{item.message[1]}</span>
              </div>
              <div>
                <span>Cases: {item.message[2]}</span>
              </div>
              <span>Recovered: {item.message[3]}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
