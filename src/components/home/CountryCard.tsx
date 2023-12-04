import Link from "next/link";
import Image from "next/image";
import Country from "@/types/country.type";
import Card from "@/components/common/Card";

type CountryCardProps = Country;

export default function CountryCard({ flags, name: { common: name }, population, region, capital }: CountryCardProps) {
  return (
    <li>
      <Card asChild>
        <Link
          className="group block outline-dashed outline-2 outline-offset-4 outline-transparent focus-within:outline-current"
          href={`/${name.toLowerCase()}`}
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={flags.svg}
              alt={`${name} flag`}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="space-y-2 p-4">
            <h3 className="mb-4 font-bold">{name}</h3>
            <p>
              Population: <span className="font-light">{population}</span>
            </p>
            <p>
              Region: <span className="font-light">{region}</span>
            </p>
            <p>
              Capital: <span className="font-light">{capital}</span>
            </p>
          </div>
        </Link>
      </Card>
    </li>
  );
}
