import { dealerListParam } from "@/types";

const DealerCard = ({ id, name, phone, address, email, mapsLink, cityId }: dealerListParam) => {
  return (
    <div
      key={id}
      className="m-3 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-3"
    >
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{address}</p>
      <p>{email}</p>
      <a
        href={mapsLink}
        target="_blank"
        className="text-blue-500"
        rel="noreferrer"
      >
        Haritada Gör
      </a>
    </div>
  );
};

export default DealerCard;
