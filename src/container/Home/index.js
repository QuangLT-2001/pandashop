import React, { useEffect, useState } from 'react';
import {
    HomeWrapper,
    BannerWrapper,
    TabItems,
    MainWrapper,
    PolicyWrapper,
    CareWrapper,
    PostWrapper,
    BannerIntroMobileWrapper,
    AdvertisementWrapper,
    DonorWrapper
} from './style';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    SliderItem,
    ShippingUnits,
    Polices,
    News
} from './data';
import ProductItem from './Component/ProductItem';
import _uniq from 'lodash/uniq';
import _filter from 'lodash/filter';
import _intersection from 'lodash/intersection'
import _map from "lodash/map"
import _uniqBy from "lodash/uniqBy"
import _slice from "lodash/slice";
import _intersectionBy from "lodash/intersectionBy";
import _forEach from "lodash/forEach"
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getListProduct, getListPostRequest } from './actions';
import Button from '../../Component/Button'
import PolicyItem from './Component/PolicyItem';
import PostItem from './Component/Post';
import {
    selectListProduct,
    selectIsLoading,
    selectPosts,
    selectColor
} from './selectors';
import Loading from '../Components/Loading';
import {
    careTab,
    settings,
    CenterMode,
    SliderFade
} from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import Meta from '../../Component/Meta';
import MyImage from '../../Component/Image';
import HeaderTab from './Component/HeaderTab';
import DonorItem from './Component/DonorItem';
const TabItem = props => {
    const {
        item,
        onClick,
        classActive,
        status,
        color
    } = props;

    return (<TabItems className={`tab-item ${classActive}`}
        status={status}
        onClick={onClick}
        color={color} >
        {item.label} </TabItems>
    );


}

const Home = props => {
    const {
        history
    } = props
    // Xu ly mapStateToProps
    const products = useSelector(selectListProduct);
    const isLoading = useSelector(selectIsLoading);
    const posts = useSelector(selectPosts);
    const color = useSelector(selectColor);
    // xu ly mapDispatchToProps
    const dispatch = useDispatch()
    // l???y data trong productReducer (trong store)
    const [state, setState] = useState({
        slider: [],
        shippingUnits: [],
        status: true,
        listPolicy: [],
        news: [],
    })
    // x??? l?? loading
    // get data
    const [listenStatus, setListenStatus] = useState(false);
    const body = document.querySelector("body");
    useEffect(() => {
        dispatch(getListProduct())
        dispatch(getListPostRequest())
        setTimeout(() => {
            setListenStatus(true);
            body.classList.add("hidden");
        }, 1000)
        setState({
            ...state,
            slider: SliderItem,
            shippingUnits: ShippingUnits,
            listPolicy: Polices,
            news: News,
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })



    }, []);


    // x??? l?? tabs carousel


    // x??? l?? tabs products
    // n??t ch???n c??c m???t h??ng ??? ph???n tabs
    const [filterTabs, setFilterTabs] = useState([]);

    // lay 30 san pham dau tien cua mang productTabs
    const newData = _slice(products, 0, 30);
    //
    // lua chon theo type: giao cua 2 tap hop
    const filterProduct = () => {
        const newList = newData.filter(item => {
            const { type } = item;
            const news = _intersectionBy(filterTabs, type, 'name');
            const mobile = _intersectionBy(filterTabs, type, 'id')
            const check = news.length || mobile.length ? true : false;
            return check
        })
        return newList;
    }
    // tr???ng th??i active c???a menu tabs
    const data = filterTabs.length ? filterProduct() : newData;

    // ????????ng ??????n prodcut
    const handleClickToProd = () => {
        history.push("/san-pham")
    }
    // l???y s???n ph???m gi???m gi?? trong product-tabs
    const discount = _filter(products, item => item.discount !== '');
    const clothesProduct = _filter(products, item => item.tabs === "clothes");
    const shoesProduct = _filter(products, item => item.tabs === "sneaker");
    const accessoryProduct = _filter(products, item => item.tabs === "accessory");
    let productNew = [];
    productNew = [
        ...productNew,
        { id: 1, titleTabs: 'qu???n ??o', product: clothesProduct },
        { id: 2, titleTabs: 'gi??y d??p', product: shoesProduct },
        { id: 3, titleTabs: 'c??c ph??? ki???n kh??c', product: accessoryProduct }
    ];
    const slices = state.slider.slice(0, 2);

    // x??? l?? selling unit
    let sellingUnit = [];
    _forEach(products, item => {
        sellingUnit = [...sellingUnit, products[Math.floor(Math.random() * products.length)]]
    })


    // link t???i trang gi???i thi???u
    const handleClickToIntro = () => {
        history.push("/gioi-thieu")
    }
    // link toi post detail
    const handleClickToPostDetail = postId => {
        history.push(`/tin-tuc/${postId}`);
    }
    const handleClickClose = () => {
        setListenStatus(false);
        body.classList.remove('hidden')
    }
    const handleClickToListPost = () => {
        history.push("/tin-tuc")
    }
    const handleLocationToSeeAll = () => {
        props.history.push("/san-pham")
    }
    // x??? l?? load
    if (isLoading) return <>
        <Meta
            image="http://www.shoppanda.net/assets/images/banner/intro.png"
            description="Shop th???i trang Panda ch??ng t??i kh??ng ????n thu????n la?? ca??i ??e??p th????i trang, chu??ng t??i khao kha??t ki????n ta??o nh????ng gia?? tri?? xa?? h????i nh??n v??n, tr???? tha??nh m????t l????i s????ng ?????? ??????ng ha??nh cu??ng phu?? n???? tr??n ha??nh tri??nh th????u ca??m ve?? ??e??p cu??a chi??nh mi??nh. Shop Th????i Trang Panda la?? k??nh mua s????m online uy ti??n ha??ng ??????u, cu??ng v????i ??????i ngu?? nh??n vi??n chuy??n nghi????p, chu??ng t??i cam k????t ??em nh????ng sa??n ph????m t????t nh????t, v????i gia?? ca?? pha??i ch??ng, uy ti??n va?? ch????t l??????ng v????i di??ch vu?? t????t nh????t ??????n v????i mo??i ng??????i."
            url="http://www.shoppanda.net"
            title="Shop th???i trang Panda"
            titlePage="Trang Ch???" />
        <Loading />
    </>
    return (

        <HomeWrapper className="home" >

            <Meta image="http://www.shoppanda.net/assets/images/banner/intro.png"
                description="Shop th???i trang Panda ch??ng t??i kh??ng ????n thu????n la?? ca??i ??e??p th????i trang, chu??ng t??i khao kha??t ki????n ta??o nh????ng gia?? tri?? xa?? h????i nh??n v??n, tr???? tha??nh m????t l????i s????ng ?????? ??????ng ha??nh cu??ng phu?? n???? tr??n ha??nh tri??nh th????u ca??m ve?? ??e??p cu??a chi??nh mi??nh. Shop Th????i Trang Panda la?? k??nh mua s????m online uy ti??n ha??ng ??????u, cu??ng v????i ??????i ngu?? nh??n vi??n chuy??n nghi????p, chu??ng t??i cam k????t ??em nh????ng sa??n ph????m t????t nh????t, v????i gia?? ca?? pha??i ch??ng, uy ti??n va?? ch????t l??????ng v????i di??ch vu?? t????t nh????t ??????n v????i mo??i ng??????i."
                url="http://www.shoppanda.net/"
                title="Shop th???i trang Panda"
                titlePage="Trang Ch???" />

            {
                listenStatus && < AdvertisementWrapper className="banner-advertisement" >
                    <div className='banner-content' >

                        <MyImage
                            image="/assets/images/banner/intro.png"
                            name="banner advertisement"
                            width="461px"
                            height="709px"
                            />
                        <span
                            className='icon-close'
                            onClick={handleClickClose} >
                            <FontAwesomeIcon icon={faTimes}
                            /> </span> </div> </AdvertisementWrapper>
            } <BannerWrapper className='banner' >
                <div className="container">
                    <Slider {...SliderFade}>
                        {SliderItem.map(item => {
                            return <MyImage
                                image={item}
                                name={item}
                                width="1296px"
                                height="428px"
                                />
                        })}
                    </Slider>
                </div>

            </BannerWrapper>

            <section className=" body-wrapper" >
                <div className='container'>
                    <MainWrapper className="main"
                        color={color} >
                        <HeaderTab handleLocationToSeeAll={handleLocationToSeeAll}
                            nameTitleBody="S???n ph???m b??n ch???y"
                            nameSeeMore="See All" />
                        <div className='list-product' >
                            <Slider {...settings} > {
                                _map(_filter(products, item => item.type[0] == "s???n ph???m b??n ch???y"), item => {
                                    return <ProductItem
                                        type="border"
                                        nameButton="xem th??ng tin"
                                        productItem={item}
                                        key={item.id}
                                        history={history}
                                        color={color}
                                        className="product-item" />
                                })
                            } </Slider> </div>

                        <HeaderTab handleLocationToSeeAll={handleLocationToSeeAll}
                            nameTitleBody="S???n ph???m ph??? bi???n"
                            nameSeeMore="See All" />
                        <div className='list-product' >
                            <Slider {...settings} > {
                                _map(_filter(products, item => item.type[0] == "s???n ph???m ph??? bi???n"), item => {
                                    return <ProductItem
                                        type="border"
                                        nameButton="xem th??ng tin"
                                        productItem={item}
                                        key={item.id}
                                        history={history}
                                        color={color}
                                        className="product-item" />
                                })
                            } </Slider> </div> <HeaderTab handleLocationToSeeAll={handleLocationToSeeAll}
                                nameTitleBody="S???n ph???m m???i"
                                nameSeeMore="See All" />
                        <div className='list-product' >
                            <Slider {...settings} > {
                                _map(_filter(products, item => item.type[0] == "s???n ph???m m???i"), item => {
                                    return <ProductItem
                                        type="border"
                                        nameButton="xem th??ng tin"
                                        productItem={item}
                                        key={item.id}
                                        history={history}
                                        color={color}
                                        className="product-item" />
                                })
                            } </Slider>
                        </div>
                    </MainWrapper>
                </div>


            </section>

            <BannerIntroMobileWrapper >
                <div className="banner-intro"
                    onClick={handleClickToIntro} >

                    <div className="intro" >
                        <p className="intro-content" >
                            Ch??o m???ng qu?? kh??ch ?????n v???i < span > S </span>HOPPANDA.NET </p> </div> <img src="/assets/images/logo/6.png"
                                alt="logo" />
                </div>
            </BannerIntroMobileWrapper>


            <PolicyWrapper className="policy-wrapper"
                color={color} >
                <div className="container" >
                    <h3 className="title-body" >
                        Ch??nh s??ch & h?????ng d???n c???a SHOPPANDA </h3>
                    <div className="row" > {
                        state.listPolicy.map(item => < PolicyItem className="col-lg-6 col-md-12"
                            policyItem={item}
                            key={item.id}
                            color={color}
                        />)

                    } </div> </div> </PolicyWrapper>
            <CareWrapper
                className="care-wrapper"
                color={color} >
                <div className="container" >
                    <h3 className="title-body" >
                        C?? th??? b???n quan t??m </h3>
                    <p className="descript-care" >
                        B???n c?? th??? t??m th???y nh???ng ph???m t???t v?? chi ph?? ???????c gi???m t???i 70 % v???i nh???ng m???u m?? ??a d???ng v?? ph?? h???p v???i h???u bao c??? c??c l???a tu???i hi???n nay.Ch??ng t??i cam k???t lu??n mang ?????n cho c??c b???n nh???ng s???n ph???m t???t nh???t,
                        ch???t l?????ng nh???t. </p>
                    <Slider {...careTab} > {
                        _map(_uniqBy(_slice(sellingUnit, 0, 6), 'id'), item => {
                            return <ProductItem
                                type="border"
                                nameButton="xem th??ng tin"
                                productItem={item}
                                key={item.id}
                                color={color}
                            />
                        })
                    }

                    </Slider> </div> </CareWrapper>
            <DonorWrapper className='donor-wrapper'>
                <div className='container'>
                    <Slider {...CenterMode}>
                        {ShippingUnits.map(item => {
                            return <DonorItem key={item.id} donorItem={item} />
                        })}
                    </Slider>
                </div>
            </DonorWrapper>
            <PostWrapper className="post-wrapper"
                color={color} >
                <div className="container" >
                    <h3 className="title-body" >
                        B??i vi???t m???i nh???t </h3>
                    <p className="descript-post" >
                        Blog t???p h???p nh???ng b???n tin,
                        b??i vi???t v??? kinh nghi???m mua s???m v?? chia s??? c??c cung b???c c???m x??c h???ng ng??y.T???p h???p nh???ng m???o v???t ????? c???i thi???n c???a s???ng c???a b???n t???t h??n,
                        ho??n h???o h??n. </p> <div className='container-fluid' >
                        <div className="row" > {
                            _map(_slice(posts, 0, 4), item => {
                                return <PostItem
                                    className="col-xl-3 col-lg-6 col-md-6 col-sm-6"
                                    postItem={item}
                                    key={item.id}
                                    onClick={
                                        () => handleClickToPostDetail(item.id)}
                                    color={color}
                                />
                            })
                        } </div> </div> <Button name="Xem th??m b??i vi???t"
                            type="add"
                            color={color}
                            onClick={handleClickToListPost} /> </div>
            </PostWrapper>

        </HomeWrapper>
    );
}


Home.propTypes = {
    history: PropTypes.object,
}

TabItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
    classActive: PropTypes.string,
    status: PropTypes.bool,
    color: PropTypes.object
}

export default Home;