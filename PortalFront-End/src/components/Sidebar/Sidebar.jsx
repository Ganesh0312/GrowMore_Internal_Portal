import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/students"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="24"
                  height="24"
                  x="0px"
                  y="0px"
                  viewBox="0 0 45 40"
                  enableBackground="new 0 0 50 50"
                  xmlSpace="preserve"
                >
                  <path d="M34.403,12.596v3.861c-0.616,0.412-1.469,1.448,0.438,3.574c1.908-2.126,1.057-3.162,0.438-3.574v-4.2l3.104-1.199L25,5.887  l-13.385,5.171L25,16.229L34.403,12.596z" />
                  <path d="M25,17.411l-7.782-3.007v4.094c-0.475,0.437-0.936,1.289-0.936,2.963c0,1.706,0.967,2.532,1.524,2.866  c0.495,2.508,2.521,6.716,7.193,6.716s6.698-4.208,7.195-6.716c0.556-0.334,1.521-1.16,1.521-2.866c0-1.672-0.461-2.525-0.934-2.961  v-4.096L25,17.411z M31.354,23.238l-0.379,0.139l-0.062,0.398c-0.037,0.241-0.968,5.91-5.914,5.91c-4.945,0-5.876-5.669-5.914-5.91  l-0.061-0.4l-0.381-0.137c-0.01-0.004-1.005-0.375-1.005-1.777c0-1.079,0.213-1.619,0.391-1.871c1.25,0.764,3.838,2.062,6.97,2.062  c3.124,0,5.705-1.29,6.96-2.054c0.192,0.254,0.399,0.795,0.399,1.863C32.359,22.807,31.45,23.201,31.354,23.238z" />
                  <path d="M40.035,34.67c-0.372-2.568-7.252-4.306-7.252-4.306l-5.269,7.817l-1.28-3.871c0.563-0.088,0.995-0.57,0.995-1.159  c0-0.649-0.526-1.177-1.177-1.177h-2.105c-0.649,0-1.177,0.527-1.177,1.177c0,0.589,0.432,1.071,0.995,1.159l-1.28,3.871  l-5.268-7.817c0,0-6.881,1.737-7.252,4.306s-0.465,9.443-0.465,9.443H25h15.499C40.499,44.113,40.405,37.238,40.035,34.67z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Students</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/Trainer"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Trainer</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/students"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  fill="#000000"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.213 512.213"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g transform="translate(0 1)">
                      <g>
                        <g>
                          <path d="M489.067,187.8L292.8,13.72c-20.48-19.627-52.907-19.627-73.387,0l-65.707,59.733v-23.04h8.533 c5.12,0,8.533-3.413,8.533-8.533V7.747c0-5.12-3.413-8.533-8.533-8.533H59.84c-5.12,0-8.533,3.413-8.533,8.533V41.88 c0,5.12,3.413,8.533,8.533,8.533h8.533v98.133L23.147,187.8c-5.973,5.973-7.68,13.653-5.12,21.333 c2.56,6.827,10.24,11.947,17.92,11.947h32.427v238.933H59.84c-5.12,0-8.533,3.413-8.533,8.533v34.133 c0,5.12,3.413,8.533,8.533,8.533h392.533c4.267,0,8.533-3.413,8.533-9.387v-34.133c0-2.56-0.853-4.267-2.56-5.973 c-1.707-1.707-3.413-2.56-5.973-2.56h-8.533V220.227h32.427c8.533,0,15.36-4.267,17.92-11.947 C496.747,201.453,495.04,192.92,489.067,187.8z M477.973,203.16c-0.853,0.853-1.707,0.853-1.707,0.853h-40.96 c-5.12,0-8.533,3.413-8.533,8.533v256c0,5.12,3.413,8.533,8.533,8.533h8.533v17.067H68.373V477.08h8.533 c5.12,0,8.533-3.413,8.533-8.533v-256c0-5.12-3.413-8.533-8.533-8.533h-40.96c-0.853,0-1.707,0-1.707-0.853s0-1.707,0.853-2.56 l47.787-40.96c1.707-1.707,2.56-4.267,2.56-6.827V41.88c0-5.12-3.413-8.533-8.533-8.533h-8.533V16.28h85.333v17.067h-8.533 c-5.12,0-8.533,3.413-8.533,8.533v51.2c0,3.413,1.707,6.827,5.12,9.387c3.413,0.853,6.827,0.853,9.387-1.707l80.213-73.387 c13.653-13.653,34.987-13.653,49.493,0l196.267,174.08C477.973,201.453,478.827,202.307,477.973,203.16z"></path>
                          <path d="M256.107,169.88c-80.213,0-145.067,64.853-145.067,145.067s64.853,145.067,145.067,145.067 s145.067-64.853,145.067-145.067S336.32,169.88,256.107,169.88z M256.107,442.947c-70.827,0-128-57.173-128-128 s57.173-128,128-128s128,57.173,128,128S326.933,442.947,256.107,442.947z"></path>
                          <path d="M264.64,306.976v-68.322c11.005,1.343,19.877,5.319,25.6,11.232v22.395c0,5.12,3.413,8.533,8.533,8.533 s8.533-3.413,8.533-8.533v-24.427c0.054-0.568,0.052-1.143,0-1.713v-25.06c0-5.12-3.413-8.533-8.533-8.533 s-8.533,3.413-8.533,8.533v7.576c-7.352-3.907-16.029-6.303-25.6-7.182v-8.927c0-5.12-3.413-8.533-8.533-8.533 c-5.12,0-8.533,3.413-8.533,8.533v9.096c-26.196,3.398-51.2,22.153-51.2,50.637s25.004,47.239,51.2,50.637v68.284 c-10.65-1.381-19.848-5.345-25.6-11.209v-22.38c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v24.427 c-0.054,0.568-0.052,1.143,0,1.713v25.06c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-7.945 c7.352,3.95,16.029,6.543,25.6,7.509v8.97c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533v-9.096 c26.196-3.398,51.2-22.153,51.2-50.637C315.84,329.129,290.836,310.374,264.64,306.976z M213.44,272.28 c0-17.647,16.474-30.216,34.133-33.358v66.759C229.914,302.7,213.44,290.662,213.44,272.28z M264.64,391.014v-66.759 c17.66,3.143,34.133,15.712,34.133,33.358C298.773,375.995,282.3,388.033,264.64,391.014z"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Fees</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 5.25L9 4.5H18L18.75 5.25V18.75L18 19.5H9L8.25 18.75V16.5H9.75V18H17.25V6H9.75V7.5H8.25V5.25Z"
                      fill="#080341"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.06068 12.7499L14.25 12.7499L14.25 11.2499L7.06068 11.2499L8.78035 9.53027L7.71969 8.46961L4.18936 11.9999L7.71969 15.5303L8.78035 14.4696L7.06068 12.7499Z"
                      fill="#080341"
                    ></path>{" "}
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
