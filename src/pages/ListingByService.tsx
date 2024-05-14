import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const ListingByService = () => {
  const { type } = useParams();
  const [data, setData] = useState<any>(null);
  const [found, setFound] = useState<any>(null);

  useEffect(() => {
    switch (type) {
      case "assisted-living":
        setData({ title: "assisted living" });
        setFound(true);
        break;

      case "alzheimers-care":
        setData({ title: "Memory care" });
        setFound(true);
        break;

      case "independent-living":
        setData({ title: "independent living" });
        setFound(true);
        break;

      case "nursing-homes":
        setData({ title: "nursing homes" });
        setFound(true);
        break;

      case "home-care":
        setData({ title: "home care" });
        setFound(true);
        break;

      case "care-homes":
        setData({ title: "care homes" });
        setFound(true);
        break;

      case "senior-apartments":
        setData({ title: "senior apartments" });
        setFound(true);
        break;

      default:
        setData(null);
        setFound(false);
    }
  }, [type]);

  if (found === false) {
    return <p>Not Found</p>;
  }

  return (
    <>
      <Header />
      <div className="px-4 lg:px-6 py-4 max-w-screen-xl mx-auto mt-5">
        <p className="text-2xl">Find {found && data.title} options</p>
        <hr className="my-2" />
        <div className="flex flex-wrap mx-auto  my-10 gap-10">
          {[
            {
              city: "New York",
              stateFullName: "New York",
              stateShortName: "NY",
            },
            {
              city: "Los Angeles",
              stateFullName: "California",
              stateShortName: "CA",
            },
            {
              city: "Torrance",
              stateFullName: "California",
              stateShortName: "CA",
            },
            { city: "Phoenix", stateFullName: "Arizona", stateShortName: "AZ" },
            {
              city: "Anaheim",
              stateFullName: "California",
              stateShortName: "CA",
            },
            {
              city: "Minneapolis",
              stateFullName: "Minnesota",
              stateShortName: "MN",
            },
            { city: "Tampa", stateFullName: "Florida", stateShortName: "FL" },
            {
              city: "Chicago",
              stateFullName: "Illinois",
              stateShortName: "IL",
            },
            {
              city: "Glendale",
              stateFullName: "Arizona",
              stateShortName: "AZ",
            },
            {
              city: "Scottsdale",
              stateFullName: "Arizona",
              stateShortName: "AZ",
            },
            {
              city: "Philadelphia",
              stateFullName: "Pennsylvania",
              stateShortName: "PA",
            },
            { city: "Mesa", stateFullName: "Arizona", stateShortName: "AZ" },
            { city: "Dallas", stateFullName: "Texas", stateShortName: "TX" },
            {
              city: "Milwaukee",
              stateFullName: "Wisconsin",
              stateShortName: "WI",
            },
            { city: "Houston", stateFullName: "Texas", stateShortName: "TX" },
            { city: "Cleveland", stateFullName: "Ohio", stateShortName: "OH" },
            { city: "Plano", stateFullName: "Texas", stateShortName: "TX" },
            {
              city: "Seattle",
              stateFullName: "Washington",
              stateShortName: "WA",
            },
            {
              city: "Boston",
              stateFullName: "Massachusetts",
              stateShortName: "MA",
            },
            {
              city: "Pittsburgh",
              stateFullName: "Pennsylvania",
              stateShortName: "PA",
            },
            { city: "Atlanta", stateFullName: "Georgia", stateShortName: "GA" },
            {
              city: "Trenton",
              stateFullName: "New Jersey",
              stateShortName: "NJ",
            },
            {
              city: "Washington",
              stateFullName: "District of Columbia",
              stateShortName: "DC",
            },
            { city: "Portland", stateFullName: "Oregon", stateShortName: "OR" },
            { city: "Denver", stateFullName: "Colorado", stateShortName: "CO" },
            { city: "Miami", stateFullName: "Florida", stateShortName: "FL" },
            {
              city: "Fairfax",
              stateFullName: "Virginia",
              stateShortName: "VA",
            },
            {
              city: "Boynton Beach",
              stateFullName: "Florida",
              stateShortName: "FL",
            },
            {
              city: "Vancouver",
              stateFullName: "Washington",
              stateShortName: "WA",
            },
            {
              city: "Kansas City",
              stateFullName: "Missouri",
              stateShortName: "MO",
            },
            {
              city: "Silver Spring",
              stateFullName: "Maryland",
              stateShortName: "MD",
            },
            {
              city: "Overland Park",
              stateFullName: "Kansas",
              stateShortName: "KS",
            },
            { city: "Orlando", stateFullName: "Florida", stateShortName: "FL" },
            {
              city: "St. Louis",
              stateFullName: "Missouri",
              stateShortName: "MO",
            },
            {
              city: "Fort Worth",
              stateFullName: "Texas",
              stateShortName: "TX",
            },
            {
              city: "Baltimore",
              stateFullName: "Maryland",
              stateShortName: "MD",
            },
            {
              city: "Fairfield",
              stateFullName: "Connecticut",
              stateShortName: "CT",
            },
            {
              city: "San Jose",
              stateFullName: "California",
              stateShortName: "CA",
            },
            {
              city: "San Diego",
              stateFullName: "California",
              stateShortName: "CA",
            },
            { city: "Columbus", stateFullName: "Ohio", stateShortName: "OH" },
            {
              city: "Charlotte",
              stateFullName: "North Carolina",
              stateShortName: "NC",
            },
            { city: "Tucson", stateFullName: "Arizona", stateShortName: "AZ" },
            {
              city: "Las Vegas",
              stateFullName: "Nevada",
              stateShortName: "NV",
            },
            {
              city: "Sacramento",
              stateFullName: "California",
              stateShortName: "CA",
            },
            {
              city: "Louisville",
              stateFullName: "Kentucky",
              stateShortName: "KY",
            },
            { city: "Austin", stateFullName: "Texas", stateShortName: "TX" },
            {
              city: "Oklahoma City",
              stateFullName: "Oklahoma",
              stateShortName: "OK",
            },
            {
              city: "Richmond",
              stateFullName: "Virginia",
              stateShortName: "VA",
            },
            {
              city: "Buffalo",
              stateFullName: "New York",
              stateShortName: "NY",
            },
            {
              city: "Raleigh",
              stateFullName: "North Carolina",
              stateShortName: "NC",
            },
            {
              city: "Sarasota",
              stateFullName: "Florida",
              stateShortName: "FL",
            },
            {
              city: "San Antonio",
              stateFullName: "Texas",
              stateShortName: "TX",
            },
            {
              city: "Greenville",
              stateFullName: "South Carolina",
              stateShortName: "SC",
            },
            {
              city: "Jacksonville",
              stateFullName: "Florida",
              stateShortName: "FL",
            },
            {
              city: "Knoxville",
              stateFullName: "Tennessee",
              stateShortName: "TN",
            },
            {
              city: "Fresno",
              stateFullName: "California",
              stateShortName: "CA",
            },
            {
              city: "Virginia Beach",
              stateFullName: "Virginia",
              stateShortName: "VA",
            },
            {
              city: "Spokane",
              stateFullName: "Washington",
              stateShortName: "WA",
            },
            {
              city: "Albuquerque",
              stateFullName: "New Mexico",
              stateShortName: "NM",
            },
            {
              city: "Colorado Springs",
              stateFullName: "Colorado",
              stateShortName: "CO",
            },
          ].map((item) => (
            <div className="w-5/12 lg:w-2/12">
              <Link
                className="text-[#39768a] text-[16px] hover:underline"
                to={`/listing/${type}/${item.city}/${item.stateShortName}`}
              >
                {item.city}, {item.stateShortName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListingByService;
