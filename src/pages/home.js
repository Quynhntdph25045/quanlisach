import Navigation from "../components/navigation"
// import data from "../../db.json" assert {type: "json"}
import { useState, useEffect } from "../../lib";


var HomePage = function() {
    const [data, setData] = useState([])

    useEffect(function(){
      fetch('http://localhost:3000/books')
      .then(function(res){
        return res.json()
      })
      .then(function(dataFetch){
           setData(dataFetch)
      });
    }, [])

    return /*html*/`
    ${Navigation()}
    <div class="grid grid-cols-5 mx-10 gap-5">
      <div class="col-span-1 mt-6">
        <h2 class="text-lg py-3 bg-blue-500 text-center text-white font-bold">Danh mục sản phẩm</h2>
        <ul class="text-center space-y-5 mt-5">
          <li class="hover:bg-slate-200 py-3"><a href="">English Books</a></li>
          <li class="hover:bg-slate-200 py-3"><a href="">Sách tiếng Việt</a></li>
          <li class="hover:bg-slate-200 py-3"><a href="">Văn phòng phẩm</a></li>
          <li class="hover:bg-slate-200 py-3"><a href="">Quà lưu niệm</a></li>
        </ul>
      </div>
      <div class="col-span-4">
        <div>
          <h1 class="text-2xl my-6 ml-6">Nhà Sách Tiki</h1>
          <img src="/banner.png" alt="" class="w-full">
        </div>
        <div class="">
          <ul class="flex gap-8 my-6">
            <li><a href="">Phổ biến</a></li>
            <li><a href="">Bán chạy</a></li>
            <li><a href="">Hàng mới</a></li>
            <li><a href="">Giá thấp</a></li>
            <li><a href="">Giá cao</a></li>
          </ul>
        </div>
        <div class=" grid grid-cols-4 gap-4">
         ${data.map(function(book, index){
            return /*html*/`
            <div>
            <a href="/products/${book.id}">
            <img src="${book.images[0].base_url}" class="w-full h-[300px] py-3">
            <h3>${book.name}</h3>
            </a>
            <span class="text-red-500">${book.original_price}đ</span>
            <br>
            <span class="text-red-500 text-lg">Rẻ hơn hoàn tiền</span>
            </div>`
         }).join('')}
        </div>
      </div>
    </div>`
}

export default HomePage