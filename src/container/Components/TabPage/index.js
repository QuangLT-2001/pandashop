import React, { useState } from "react";
import { TabPageWrapper, HeadTabs, NavbarWrapper } from "./style";
import SelectOption from "../../../Component/SelectOption";
import _ from 'lodash';
import _filter from 'lodash/filter';
import _slice from 'lodash/slice'
import NamePage from "../../../container/Components/NamePage";
import PaginationPage from "../../../container/Components/Pagination";
import FilerByPriceItem from "./FilterPriceItem";
import RelateProductItem from "./RelateProductItem";
import TabItem from "./TabItem";
import PropTypes from "prop-types";
import { removeVietKey } from "../../../utils"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
const Name = [
    {
        id: 0,
        value: 0,
        label: 'Thứ tự sản phẩm'
    },
    {
        id: 1,
        value: 1,
        label: 'Tên từ A - Z'
    },
    {
        id: 2,
        value: 2,
        label: 'Tên từ Z - A'
    },
    {
        id: 3,
        value: 3,
        label: 'Giá từ thấp tới cao'
    },
    {
        id: 4,
        value: 4,
        label: 'Giá từ cao tới thấp'
    },

]
const Price = [
    {
        id: 1,
        value: 1,
        label: 'All'
    },
    {
        id: 2,
        value: 2,
        label: 'Dưới 100.000đ'
    },
    {
        id: 3,
        value: 3,
        label: '100.000đ - 300.000đ'
    },
    {
        id: 4,
        value: 4,
        label: '300.000đ - 500.000đ'
    },
    {
        id: 5,
        value: 5,
        label: '500.000đ - 700.000đ'
    },
    {
        id: 6,
        value: 6,
        label: '700.000đ - 800.000đ'
    },
    {
        id: 7,
        value: 7,
        label: '800.000đ - 900.000đ'
    },
    {
        id: 8,
        value: 8,
        label: 'Trên 900.000đ'
    }
]

const TabPage = props => {

    const {
        nameLink,
        to,
        nameTabs,
        products,
        history,
        color
    } = props;
    // quản lý checked của radio
    const [checked, setChecked] = useState(Price[0].id)
    // xử lý phần search
    const [filterByPrice, setFilterByPrice] = useState(products)
    // xử lý nut search

    // onChange select
    const [selectSort, setSelectSort] = useState(0)
    // sort by name
    const [listProductSortBy, setListProductSortBy] = useState([]);
    // kiểm tra  mảng sort và mảng filter

    // hàm compare quản lý sort theo tên
    const compareByName = (obFist, obSecond) => {
        if (removeVietKey(obFist.name.toLowerCase()) > removeVietKey(obSecond.name.toLowerCase())) {
            return 1
        }
        else if (removeVietKey(obFist.name.toLowerCase()) < removeVietKey(obSecond.name.toLowerCase())) {
            return -1
        }
        return 0
    }
    // hàm compare quản lý sort giá tiền
    const compareByPrice = (obFirst, obSecond) => {
        if ((obFirst.discountContent ? (obFirst.price * obFirst.discountContent) / 100 : obFirst.price) > (obSecond.discountContent ? (obSecond.price * obSecond.discountContent) / 100 : obSecond.price)) {
            return 1
        }
        else if ((obFirst.discountContent ? (obFirst.price * obFirst.discountContent) / 100 : obFirst.price) < (obSecond.discountContent ? (obSecond.price * obSecond.discountContent) / 100 : obSecond.price)) {
            return -1
        }
        return 0
    }
    // sắp xếp
    const handleSelectChange = event => {
        const { id, value, label } = event;
        setSelectSort(+value)
        let newListProduct = [];

        if (+value === 1) {
            newListProduct = [...(listProductSortBy.length ? listProductSortBy : products)].sort(compareByName);
        }
        else if (+value === 2) {
            newListProduct = _.reverse([...(listProductSortBy.length ? listProductSortBy : products)].sort(compareByName));
        }
        else if (+value === 3) {
            newListProduct = [...(listProductSortBy.length ? listProductSortBy : products)].sort(compareByPrice);
        }
        else if (+value === 4) {
            newListProduct = _.reverse([...(listProductSortBy.length ? listProductSortBy : products)].sort(compareByPrice));
        }
        else {
            newListProduct = products;
        }
        setListProductSortBy(newListProduct);
    }
    const tabs = [
        {
            id: 1,
            label: "Quần áo",
            path: "quan-ao",
            value: 1
        },
        {
            id: 2,
            label: "Giày dép",
            value: 2,
            path: "giay-dep"
        },
        {
            id: 3,
            label: "Phụ kiện khác",
            value: 3,
            path: "phu-kien-khac"
        }
    ]
    const [selectFilter, setSelectFilter] = useState(0)
    const handleSelectChangePrice = event => {
        const { value, id } = event.target;
        setChecked(value);
        setSelectFilter(+value)

        const empty = [{ name: '', type: 'empty' }]
        let newListProduct = [];
        if (+value === 2) {
            newListProduct = _.filter(products, item => (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) < 100000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        if (+value === 3) {
            newListProduct = _.filter(products, item => (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) >= 100000 && (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) <= 300000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 4) {
            newListProduct = _.filter(products, item => (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) >= 300000 && (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) <= 500000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 5) {
            newListProduct = _.filter(products, item => (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) > 500000 && (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) <= 700000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 6) {
            newListProduct = _.filter(products, item => (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) > 700000 && (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) <= 800000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 7) {
            newListProduct = _.filter(products, item => (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) >= 800000 && (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) <= 900000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 8) {
            newListProduct = _.filter(products, item => (item.discountContent ? (item.price * item.discountContent) / 100 : item.price) > 900000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 1) {
            newListProduct = products
        }
        setListProductSortBy(newListProduct);
        setFilterByPrice(newListProduct)
    }
    const handleSelectChangePriceMobile = event => {
        const { value, id } = event;
        setChecked(value);
        setSelectFilter(+value)

        const empty = [{ name: '', type: 'empty' }]
        let newListProduct = [];
        if (+value === 2) {
            newListProduct = _.filter(products, item => item.price < 100000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        if (+value === 3) {
            newListProduct = _.filter(products, item => item.price >= 100000 && item.price <= 300000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 4) {
            newListProduct = _.filter(products, item => item.price >= 300000 && item.price <= 500000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 5) {
            newListProduct = _.filter(products, item => item.price > 500000 && item.price <= 700000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 6) {
            newListProduct = _.filter(products, item => item.price > 700000 && item.price <= 800000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 7) {
            newListProduct = _.filter(products, item => item.price >= 800000 && item.price <= 900000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 8) {
            newListProduct = _.filter(products, item => item.price > 900000);
            newListProduct = [...newListProduct.length < 1 ? empty : newListProduct]
        }
        else if (+value === 1) {
            newListProduct = products
        }
        setListProductSortBy(newListProduct);
        setFilterByPrice(newListProduct)
    }



    const getListProductByFilter = () => {
        if (listProductSortBy.length) {
            return listProductSortBy;
        }
        return products;
    }

    let relateProduct = [];
    _.forEach(products, item => {
        relateProduct = [...relateProduct, products[Math.floor(Math.random() * products.length)]];
    })
    const handleClickToDetail = id => {
        history.push(`/san-pham/${id}`);
    }

    return (
        <TabPageWrapper className="page">
            <HeadTabs
                className="head-tabs">
                <NamePage
                    nameLink={nameLink}
                    to={to}
                    name={nameTabs}
                />
                <SelectOption
                    value={selectSort}
                    handleSelectChange={handleSelectChange}
                    nameSelect="Name"
                    option={Name}
                    placeholder="Sắp xếp..."

                />

            </HeadTabs>
            {/* man PC */}
            <NavbarWrapper
                className="navbar-left"
                color={color}
            >

                <ul className="list-filter">
                    <li className="filter-item">
                        <h4 className="title-navbar">
                            Tìm kiếm theo loại
                        </h4>
                        <ul className="list-tab">
                            {tabs.map(item => <TabItem tabItem={item} key={item.id} />)}
                        </ul>
                    </li>
                    <li className="filter-item">
                        <h4 className="title-navbar">
                            Lọc theo giá tiền
                        </h4>
                        <div className="filter-content">
                            <FormControl>
                                <RadioGroup defaultValue={Price[0].id}>
                                    {Price.map(item => {
                                        return <FilerByPriceItem
                                            checked={+checked === +item.id}
                                            onChange={handleSelectChangePrice} key={item.id}
                                            filterByPriceItem={item} />
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </li>
                </ul>

                <div className="list-ralate-product container-fluid">
                    <div className="ralate-product-content">
                        <h4 className="title-navbar">
                            Bạn có thể tìm
                        </h4>
                        <div className="relate-product-body">
                            <div className="row">
                                {_.slice(_.uniq(relateProduct), 0, 10).map(item => {
                                    return <RelateProductItem productItem={item} key={item.id}
                                        color={color}
                                        onClick={() => handleClickToDetail(item.id)}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </NavbarWrapper>
            <NavbarWrapper
                className="navbar-mobile"
                color={color}
            >
                <SelectOption
                    nameSelect="Price"
                    placeholder="Lọc theo giá tiền"
                    option={Price}
                    handleSelectChange={handleSelectChangePriceMobile}
                    className="filter-item"
                />


                <SelectOption
                    // value={selectSort}
                    handleSelectChange={handleSelectChange}
                    nameSelect="Name"
                    option={Name}
                    placeholder="Sắp xếp..."
                    className="filter-item"

                />
                {/* <SelectOption value={selectSort} handleSelectChange={handleSelectChange} nameSelect="Name" option={Name} /> */}
            </NavbarWrapper>
            {<PaginationPage
                history={history}
                product={getListProductByFilter()}
                color={color}
                sort={filterByPrice}
            />}



        </TabPageWrapper>
    );
}
TabPage.propTypes = {
    nameLink: PropTypes.string,
    to: PropTypes.string.isRequired,
    nameTabs: PropTypes.string,
    products: PropTypes.array,
    color: PropTypes.object,
    history: PropTypes.object
}
export default TabPage;