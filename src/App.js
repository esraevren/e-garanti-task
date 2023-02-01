import { ReactComponent as Check } from "./assets/Icon.svg";
import { ReactComponent as Close } from "./assets/Icon (1).svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import datas from "./data";

function App() {
  return (
    <div className="grid grid-cols-3 py-12 ml-12  font-roboto ">
      {datas.map((data) => {
        return (
          <div className="w-96">
            {data.suggest === true ? <div className="bg-blue-800 py-3 text-white flex items-center justify-center rounded-t-lg">Önerilen</div> : <div className=" py-3 text-white">"</div>}
            <div className=" px-8 py-8">
              
              <Logo />
              <div className="mt-3 mb-3 text-gray-700 font-semibold ">
                {data.title}
              </div>
              <div className="text-xl font-bold ">₺{data.price},00</div>
              <div className="flex mt-8">
                {data.features[0].goodFeature === true ? (
                  <div className="flex justify-center items-center select-none bg-[#AAC2F7]  text-blue-800 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3 ">
                    <Check />
                  </div>
                ) : (
                  <div className="flex justify-center items-center select-none bg-gray-100  text-gray-500 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3">
                    <Close />
                  </div>
                )}
                <div className="text-gray-700 font-medium">
                  {data.features[0].title}
                </div>
              </div>

              <div className="flex">
                {data.features[1].goodFeature === true ? (
                  <div className="flex justify-center items-center select-none bg-[#AAC2F7]  text-blue-800 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3 ">
                    <Check />
                  </div>
                ) : (
                  <div className="flex justify-center items-center select-none bg-gray-100  text-gray-500 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3">
                    <Close />
                  </div>
                )}
                <div className="text-gray-700 font-medium">
                  {data.features[1].title}
                </div>
              </div>
              <div className="flex">
                {data.features[2].goodFeature === true ? (
                  <>
                    <div className="flex justify-center items-center select-none bg-[#AAC2F7]  text-blue-800 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3 ">
                      <Check />
                    </div>
                    <div className="text-gray-700 font-medium">
                      {data.features[2].title}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center items-center select-none bg-gray-100  text-gray-500 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3">
                      <Close />
                    </div>
                    <div className="text-gray-500 ">
                      {data.features[2].title}
                    </div>
                  </>
                )}
              </div>

              <div className="flex">
                {data.features[3].goodFeature === true ? (
                  <>
                    <div className="flex justify-center items-center select-none bg-[#AAC2F7]  text-blue-800 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3 ">
                      <Check />
                    </div>
                    <div className="text-gray-700 font-medium">
                      {data.features[3].title}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center items-center select-none bg-gray-100  text-gray-500 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3">
                      <Close />
                    </div>
                    <div className="text-gray-500 ">
                      {data.features[3].title}
                    </div>
                  </>
                )}
              </div>
              <button class="bg-[#0049E6] text-white  py-3 px-5 w-[316px] rounded">
                Planı Seç
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
