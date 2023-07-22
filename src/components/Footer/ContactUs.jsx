import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const ContactUs = () => {
  return (
    <div className="px-5 py-5">
      <div>
        <h1
          className="mb-10 text-right font-IRANYekanWeb text-[19px] font-extrabold not-italic leading-[normal] tracking-[-0.684px] text-white
"
        >
          با ایویتک
        </h1>
        <ul
          className="tracking-[-0.576px];  space-y-3 text-right font-IRANYekanWeb text-base font-normal not-italic leading-[normal] text-white
"
        >
          <li className="ease group flex transform cursor-pointer duration-300 hover:-translate-x-2 hover:text-main-green ">
            <span className=" ease  ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100   ">
              <ChevronLeftIcon className="h-4 w-4 text-main-green" />
            </span>
            <span> تماس با ایویتک</span>
          </li>
          <li className="ease group flex transform cursor-pointer duration-300 hover:-translate-x-2 hover:text-main-green ">
            <span className=" ease  ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100   ">
              <ChevronLeftIcon className="h-4 w-4 text-main-green" />
            </span>
            <span> درباره ایویتک</span>
          </li>
          <li className="ease group flex transform cursor-pointer duration-300 hover:-translate-x-2 hover:text-main-green ">
            <span className=" ease  ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100   ">
              <ChevronLeftIcon className="h-4 w-4 text-main-green" />
            </span>
            <span>مجله اختصاصی </span>
          </li>

          <li className="ease group flex transform cursor-pointer duration-300 hover:-translate-x-2 hover:text-main-green ">
            <span className=" ease  ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100   ">
              <ChevronLeftIcon className="h-4 w-4 text-main-green" />
            </span>
            <span>وبلاگ ایویتک</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
