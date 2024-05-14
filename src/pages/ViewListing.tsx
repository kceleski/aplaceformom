import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import MyImage from "../components/MyImage";
import ImagePlaceHolder from "../assets/no-image.jpeg";

const ViewListing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [record, setRecord] = useState<any>(null);
  const { type, id } = useParams();

  const fetchFn = async () => {
    const endpoint = process.env.REACT_APP_API + "/view.php";

    let payload = new FormData();

    payload.append("id", `${id}`);
    payload.append("type", `${type}`);

    let response = await fetch(endpoint, {
      method: "POST",
      body: payload,
    });
    if (response.status === 200) {
      let result = await response.json();
      setRecord(result);
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
      <div className="px-4 py-10">
        <div className="flex flex-wrap mx-auto max-w-screen-xl">
          <div className="w-full lg:w-6/12">
            {isLoading === true && <p>Loading...</p>}
            {isLoading === false && (
              <div>
                <p className="text-sm">{record.location}</p>
                <p className="text-4xl my-2 text-[#39768a] font-source-serif">
                  {record.title}
                </p>
                <p className="my-5 text-sm">
                  <span className="font-semibold ">Phone Number:</span>
                  <span className="font-light">{record.phoneNumber}</span>
                </p>
                <MyImage
                  src={
                    record.image
                      ? "https://www.aplaceformom.com/" + record.image
                      : ImagePlaceHolder
                  }
                  alt={record.title}
                  width={500}
                />

                <div className="flex my-5 gap-2">
                  <div className="h-6 w-6 bg-[#39768a] text-[10px] rounded-full text-center items-center flex justify-center text-white">
                    {record["review-score"]}
                  </div>
                  <span className="font-semibold">Review score : </span>
                  <span className="font-light">{record["review-counter"]}</span>
                </div>

                {record.quote && (
                  <div className="mb-5">
                    <p className="font-semibold text-2xl font-source-serif mb-2 text-gray-700">
                      Highly Recommend
                    </p>
                    <div
                      className="rounded-lg"
                      dangerouslySetInnerHTML={{ __html: record.quote }}
                    />
                  </div>
                )}

                <div className="mb-5">
                  <p className="font-semibold text-2xl font-source-serif mb-2 text-gray-700">
                    About the facility
                  </p>
                  <p className="font-semibold text-2xl font-source-serif mb-2 text-gray-700">
                    {record.title}
                  </p>

                  <div
                    dangerouslySetInnerHTML={{ __html: record.description }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewListing;
