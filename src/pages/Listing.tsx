import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import MyImage from "../components/MyImage";
import ImagePlaceHolder from "../assets/no-image.jpeg";

const Listing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const { type, state, city } = useParams();

  const fetchFn = async () => {
    const endpoint = process.env.REACT_APP_API + "/index.php";

    let payload = new FormData();

    console.log(type);

    payload.append("state", `${state}`);
    payload.append("city", `${city}`);
    payload.append("type", `${type}`);

    let response = await fetch(endpoint, {
      method: "POST",
      body: payload,
    });
    if (response.status === 200) {
      let result = await response.json();
      setRecords(result);
    }
  };

  useEffect(() => {
    fetchFn().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-screen-md  mx-auto mt-5">
        {isLoading === true && <p className="text-center">Loading...</p>}
        <div className="flex flex-wrap justify-center items-baseline gap-20">
          {isLoading === false &&
            records.map((record: any) => (
              <div className="flex w-full gap-2 shadow-lg border">
                <div className="w-5/6">
                  <Link to={`/view/${type}/${record.id}`}>
                    <MyImage
                      src={
                        record.image
                          ? "https://www.aplaceformom.com/" + record.image
                          : ImagePlaceHolder
                      }
                      alt={record.title}
                      width={300}
                    />
                  </Link>
                </div>

                <div className="w-5/6 ">
                  <p className="mb-2 text-sm pt-5">{record.location}</p>
                  <Link to={`/view/${type}/${record.id}`}>
                    <p className="text-2xl mb-5 text-[#39768a] hover:underline">
                      {record.title}
                    </p>
                  </Link>
                  <p className="text-sm text-gray-600 mb-2">{record.quote}</p>
                  <div className="my-5 text-xs flex gap-3 items-center">
                    <div className="h-6 w-6 bg-[#39768a] rounded-full text-center items-center flex justify-center text-white">
                      {record["review-score"]}
                    </div>
                    <span className="font-semibold">Review score : </span>
                    <span className="font-light">
                      {record["review-counter"]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Listing;
