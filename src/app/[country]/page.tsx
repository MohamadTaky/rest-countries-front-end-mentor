import getCountry from "@/api/getCountry";
import BackButton from "./BackButton";
import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";

export default async function CountryDetailsPage({ params: { country } }: { params: { country: string } }) {
  const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } =
    await getCountry(country);
  return (
    <>
      <BackButton />
      <section className="mt-8 flex flex-col gap-8 md:gap-16 lg:flex-row">
        <Image
          width={1200}
          height={600}
          src={flags.svg}
          alt={`${name.common} flag`}
          className="w-full object-contain drop-shadow-md lg:max-w-md"
        />
        <div className="my-4 flex-1">
          <h2 className="mb-4 text-3xl font-bold">{name.common}</h2>
          <ul className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="space-y-2">
              <li>
                Native Name: <span className="font-light">{name.nativeName}</span>
              </li>
              <li>
                Population: <span className="font-light">{population}</span>
              </li>
              <li>
                Region: <span className="font-light">{region}</span>
              </li>
              <li>
                Sub Region: <span className="font-light">{subregion}</span>
              </li>
              <li>
                Capital: <span className="font-light">{capital}</span>
              </li>
            </div>
            <div className="space-y-2">
              <li>
                Top Level Domain: <span className="font-light">{tld}</span>
              </li>
              <li>
                Currencies: <span className="font-light">{currencies}</span>
              </li>
              <li>
                Languages: <span className="font-light">{languages}</span>
              </li>
            </div>
          </ul>
          <ul className="mt-8 flex flex-wrap items-center gap-2">
            <p className="max-sm:w-full">Border Countries :</p>
            {borders.length ? (
              borders.map((border) => (
                <li className="w-full sm:w-32" key={border}>
                  <Button className="w-full" size="sm" asChild>
                    <Link href={`/${border.toLowerCase()}`}>{border}</Link>
                  </Button>
                </li>
              ))
            ) : (
              <li className="font-light">None</li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
