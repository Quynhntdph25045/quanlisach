import { useEffect, useState } from "../../lib";
import Navigation from "../components/navigation";

const ProductPage = function (id) {
  const [book, setBook] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
  }, [])

  return /*html*/`
    ${Navigation()}
            <div class="grid md:grid-cols-2 gap-10 my-10 max-w-7xl mx-auto">
            <div>
                <img class="w-full h-full rounded-3xl" src="${book.images?.[0].base_url}" alt="">
            </div>
            <div class="my-auto">
                <h3 class="font-bold text-4xl mb-4">${book.name}</h3>
                <div class="flex space-x-8 mt-4 mb-24">
                <span class="rounded-2xl bg-amber-500 text-white text-lg font-black py-1 px-3">${book.quantity_sold?.text || 0}</span>
                </div>


                <p class="mb-4 font-bold text-red-500 text-4xl">${book.original_price}đ</p>

                <p class="mt-12 text-[#142850] font-bold text-xl">Mô tả sản phẩm:</p>
                <div class="flex space-x-10 mt-6 mb-10">
                <p class="mt-4">${book.short_description}</p>
                </div>
                <div class="buttons_added inline ">
                  <input aria-label="quantity" class="input-qty border rounded-md outline-none w-40 p-3 border-black" max="20" min="1" name="" type="number" value="" placeholder="số lượng">

                </div>
                <br/>
                <button class="bg-red-500 w-full py-4 border rounded-lg text-white text-xl mt-10 ">Chọn mua</button>
            </div>
        </div>
    `
}
export default ProductPage;

