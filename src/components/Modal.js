import React from "react";
import { ReactComponent as Modalcheck } from "../assets/Icon (2).svg";

function Modal({ setOpenModal,  data }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto font-roboto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-50"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex justify-center items-center  select-none bg-[#D1FADF]    rounded-full  h-24 w-24 mx-auto mb-3 ">
              <Modalcheck />
            </div>
            <div className="flex mx-auto font-semibold justify-center text-[#020246]">
              Bu siparişi verdiğiniz için çok teşekkürler.
            </div>
            <p className="text-center mt-3 mb-8 px-3 text-sm text-gray-800  ">
              <span className="font-semibold">FIX123456</span> sipariş numaralı sigorta paketiniz ürününüzle başarıyla
              eşleştirildi. Aşağıda sipariş hakkında tüm detayları bulacaksınız.
              Kafanıza takılan herhangi bir sorunuz olursa canlı sohbet
              üzerinden 7/24 iletişime geçebilirsiniz. Bu arada, satın alınımızı
              paylaşabilir ve mağaza kredisi kazanabilirsiniz.
            </p>
            <div className="px-3 font-semibold ">Sipariş Özeti</div>
            <div className="flex flex-row justify-between mx-10 mt-10">
              <div className="text-gray-700 font-medium">{data.title}</div>
              <div className="font-bold">₺{data.price},00</div>
            </div>
            <button
                className="bg-[#0049E6] text-white  py-3 px-5 w-full rounded mt-9 mb-2"
                onClick={() => setOpenModal(false)}
              >
                Uygulamaya Dön
              </button>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
