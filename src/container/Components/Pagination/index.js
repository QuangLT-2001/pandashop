import React, { useState, useEffect, memo } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationPageWrapper } from './style';
import ProductItem from '../../Home/Component/ProductItem';
import _slice from 'lodash/slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import Empty from './../Empty';
import PropTypes from "prop-types";
const PaginationPage = props => {
    const { product, history, color } = props;
    const page = _slice(product);
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 8;
    const pagesVisited = pageNumber * productsPerPage;
    const pageCount = Math.ceil(page.length / productsPerPage);
    const changePage = (data) => {
        const { selected } = data
        setPageNumber(selected);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <PaginationPageWrapper
        className="paginaion container-fluid"
        color={color}
        >
            {page.slice(pagesVisited, pagesVisited + productsPerPage).length ? <>
                <div className="row">
                {page.slice(pagesVisited, pagesVisited + productsPerPage).map((item, index) => {
                    return item.name !== '' ?
                        <ProductItem
                            typeProd="product"
                            type="border"
                            nameButton="Xem thông tin sản phẩm"
                            icon={item.discountContent}
                            productItem={item}
                            className="col-lg-3 col-md-4 col-sm-6 col-6 product-item"
                            history={history}
                            key={item.id}
                            color={color}
                        /> :
                        <Empty key={null} history={history} />
                })}


            </div>
            {page.slice(pagesVisited, pagesVisited + productsPerPage).length ? <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
                nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
                pageCount={pageCount}
                breakLabel={'...'}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            ></ReactPaginate> : ''}
            </> : <Empty history={history}/>}
        </PaginationPageWrapper>
    );
}

PaginationPage.propTypes = {
    product: PropTypes.array.isRequired,
    history: PropTypes.object,
    color: PropTypes.object
}

export default memo(PaginationPage);