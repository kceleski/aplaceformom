import logo from "../logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-slate-200 border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex flex-wrap gap-5 justify-center items-center mx-auto max-w-screen-lg">
            <div>
              <img src={logo} className="mr-3 h-6 sm:h-9 mx-auto" alt="Logo" />
            </div>
            <p className="text-sm text-center text-gray-500">
              A Place for Mom is paid by our participating communities,
              therefore our service is offered at no charge to families.
              Copyright © 2024 A Place for Mom, Inc. All Rights Reserved.
              Privacy & Terms. Do Not Sell My Personal Information.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
