import React from "react";
import { ReactComponent as Check } from "../assets/Icon.svg";
import { ReactComponent as Modalcheck } from "../assets/Icon (2).svg";

function Modal({ setOpenModal,  data }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto font-roboto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-30"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex justify-center items-center  select-none bg-[#D1FADF]    rounded-full  h-24 w-24 mx-auto mb-3 ">
              <Modalcheck />
            </div>
            <div className="flex mx-auto font-semibold justify-center">
              Bu siparişi verdiğiniz için çok teşekkürler.
            </div>
            <p className="text-center mt-3 mb-8 px-3 text-sm ">
              FIX123456 sipariş numaralı sigorta paketiniz ürününüzle başarıyla
              eşleştirildi. Aşağıda sipariş hakkında tüm detayları bulacaksınız.
              Kafanıza takılan herhangi bir sorunuz olursa canlı sohbet
              üzerinden 7/24 iletişime geçebilirsiniz. Bu arada, satın alınımızı
              paylaşabilir ve mağaza kredisi kazanabilirsiniz.
            </p>
            <div className="px-3 font-semibold mb-24">Sipariş Özeti</div>
            <div>{data.title}</div>
            {/* <div className="mt-3 sm:flex">
                
                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                        <h4 className="text-lg font-medium text-gray-800">
                            Delete account ?
                        </h4>
                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="items-center gap-2 mt-3 sm:flex">
                            <button
                                className="w-full mt-2 p-2.5  text-white bg-blue-800 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                onClick={() => setOpenModal(false)}
                            >
                                Delete
                            </button>
                          
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
