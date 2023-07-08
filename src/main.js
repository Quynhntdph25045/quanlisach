import { render } from "../lib"
import ProductPage from "./pages/products"
import './style/main.css'
import { router } from "../lib"
import upDate from "./pages/admin/book-update"
import Dashboard from "./pages/admin/dashboard"
import HomePage from "./pages/home"

// DOM declaration
var app = document.querySelector('#app')

// Router
// const router = new Navigo('/');
// Defined router
router.on('/', function() {
    console.log("render HomePage");
    render(() => HomePage(), app)
})

router.on('/products/:id', function({data}) {render(() => ProductPage(data.id), app)})

router.on('/admin', function() {
    // console.log(data);
    render(Dashboard, app)
})

router.on('update/:id', function({data}) { render(()=> upDate(data.id), app)})

router.resolve();

