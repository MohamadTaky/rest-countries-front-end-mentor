import Country from "@/types/country.type";
import CountryCard from "./CountryCard";
import Grid from "@/components/common/Grid";

type CountryListProps = {
  countries: Country[];
};

export default function CountryList({ countries }: CountryListProps) {
  return (
    <Grid>
      {countries.map((country) => (
        <CountryCard key={country.name.common} {...country} />
      ))}
    </Grid>
  );
}
