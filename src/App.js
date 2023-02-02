import { useState } from "react";
import { ReactComponent as Check } from "./assets/Icon.svg";
import { ReactComponent as Close } from "./assets/Icon (1).svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
// import { Modal} from '@mantine/core';
import datas from "./data";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState(null);

  const selectPlan = (data) => {
    setShowModal(true);
    setSelectedPlanData(data);
    console.log(data);
  };

  return (
    <div className="grid grid-cols-3 py-12 mx-auto gap-10 box-content max-w-[1200px] font-roboto max-[768px]:grid-cols-1  max-[768px]:gap-y-16 max-[992px]:grid-cols-2 ">
      {datas.map((data) => {
        return (
          <div
            className=" max-w-96 shadow-2xl shadow-slate relative z-0"
            key={data.id}
          >
            {data.suggest === true ? (
              <div className="bg-blue-800 py-3 text-white flex items-center justify-center rounded-t-lg">
                Önerilen
              </div>
            ) : (
              <div className="py-3 text-white">"</div>
            )}
            <div className=" px-8 py-8">
              <Logo />
              <div className="mt-3 mb-3 text-gray-700 font-semibold ">
                {data.title}
              </div>
              <div className="text-xl font-bold">₺{data.price},00</div>
              {data.features.map((feature, featureIndex) => (
                <div
                  className={["flex", featureIndex === 0 && "mt-8"]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {feature.goodFeature === true ? (
                    <div className="flex justify-center items-center select-none bg-[#AAC2F7]  text-blue-800 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3 ">
                      <Check />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center select-none bg-gray-100  text-gray-500 text-xl font-bold   rounded-full  h-6 w-6 mr-3 mb-3">
                      <Close />
                    </div>
                  )}
                  <div className="text-gray-700 font-medium">
                    {feature.title}
                  </div>
                </div>
              ))}
              <button
                className="bg-[#0049E6] text-white  py-3 px-5 w-[316px] rounded"
                onClick={() => selectPlan(data)}
              >
                Planı Seç
              </button>
            </div>
          </div>
        );
      })}
      {showModal && (
        <Modal setOpenModal={setShowModal} data={selectedPlanData} />
      )}
    </div>
  );
}

export default App;
