import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [activeTab, setActiveTab] = useState("assisted-living");

  const onClickTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  function createSlug(inputString: string) {
    // Convert to lowercase
    const lowerCaseString = inputString.toLowerCase();

    // Replace spaces and special characters with hyphens
    const slug = lowerCaseString.replace(/[\s\W-]+/g, "-");

    return slug;
  }

  return (
    <div>
      <Header />

      <div className="px-4 lg:px-6 py-4">
        <div className="flex flex-wrap mx-auto max-w-screen-lg mt-20 gap-10">
          <div className="w-full lg:w-4/12">
            <img
              src="https://www.aplaceformom.com/image/web-lighthouse/prod/elder-suicide-intervention.jpg?t=4-3&w=696&f=jpg"
              className="w-96 lg:w-full h-[320px] rounded-r-3xl"
            />
          </div>
          <div className="w-full lg:w-7/12">
            <p className="text-4xl text-[#39768a] font-source-serif">
              Which senior living care type is the best fit for you?
            </p>
            <p className="mt-5">
              Get the information you need to make the best decision about care.
            </p>

            <div className="text-sm font-medium text-center text-gray-500 border-b-2 border-gray-200 my-5">
              <ul className="flex -mb-px">
                {[
                  { title: "Assisted living", alt: "assisted-living" },
                  { title: "Memory care", alt: "alzheimers-care" },
                  { title: "Independent living", alt: "independent-living" },
                  { title: "Nursing homes", alt: "nursing-homes" },
                ].map((tabName) => (
                  <li key={tabName.title} className="me-2">
                    <button
                      onClick={() => onClickTab(tabName.alt)}
                      className={`font-bold text-[14px] inline-block p-4 border-b-4 ${
                        activeTab === tabName.alt
                          ? "border-[#39768a] text-gray-600"
                          : "border-transparent"
                      } rounded-t-lg hover:text-gray-600 hover:border-[#448ba2]`}
                    >
                      {tabName.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {activeTab === "assisted-living" && (
              <p className="text-sm">
                Assisted living facilities offer housing and care for active
                seniors who may need support with activities of daily living,
                like bathing, dressing, and medication management.
              </p>
            )}
            {activeTab === "alzheimers-care" && (
              <p className="text-sm">
                Memory care facilities provide housing, care, and therapies for
                seniors who have Alzheimer’s disease or other forms of dementia
                in an environment designed to reduce confusion and prevent
                wandering.
              </p>
            )}
            {activeTab === "independent-living" && (
              <p className="text-sm">
                Independent living facilities offer convenient, hassle-free
                living in a social environment for seniors who are active,
                healthy, and able to live on their own.
              </p>
            )}
            {activeTab === "nursing-homes" && (
              <p className="text-sm">
                Nursing homes provide short-and long-term care for seniors who
                have physical or mental health conditions that require 24-hour
                nursing and personal care.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-6 py-4">
        <div className="flex flex-wrap mx-auto max-w-screen-lg my-20 gap-10">
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
            <div className="w-5/12 lg:w-2/12" key={item.city}>
              <Link
                className="text-[#39768a] text-[16px] hover:underline"
                to={`/listing/${createSlug(activeTab)}/${item.city}/${
                  item.stateShortName
                }`}
              >
                {item.city}, {item.stateShortName}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
