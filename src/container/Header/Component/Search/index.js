import React, { useState, useRef, useEffect } from "react";
import { removeVietKey } from "../../../../utils";
import Empty from "../../../../container/Components/Empty";
import Input from "../../../../Component/input";
import SearchItem from "../SearchItem";
import { useHistory } from "react-router-dom"
import { InputSearchWrapper, SearchWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"
const Search = ({ products, className, setShowSearch }) => {
     const [keyword, setKeyword] = useState("");
     const [search, setSearch] = useState("");
     const [resultSearch, setResultSearch] = useState([]);
     const [statusSearch, setStatusSearch] = useState(false);
     const [showResult, setShowResult] = useState(true)
     const [isLoading, setIsLoading] = useState(false);
     const inputRef = useRef();
     const typingTimeoutRef = useRef(null);
     const inpSearch = document.querySelector("input[name='search']")
     // useEffect return clearup
     useEffect(() => {
          const closeOpen = (event) => {
               if (event.path[0].tagName !== inputRef.current) {
                    setShowResult(false);
               }
          }
          document.body.addEventListener("click", closeOpen);
          return () => document.body.removeEventListener("click", closeOpen);
     }, [])

     const body = document.querySelector("body")
     const history = useHistory()
     if (!products.length) return null;
     const handleChangeInput = event => {
          const { value } = event.target;
          setSearch(value);
          setIsLoading(true)
          setShowResult(false)
          if (typingTimeoutRef.current) {
               clearTimeout(typingTimeoutRef.current)
          }
          typingTimeoutRef.current = setTimeout(() => {
               const removeMark = removeVietKey(value).toLowerCase();
               setKeyword(removeMark);

               const data = products.filter(item => removeVietKey(item.name).toLowerCase().includes(removeMark));
               setResultSearch(data);

               setShowResult(true)
               setIsLoading(false)
          }, 500)
     }
     let data = keyword ? resultSearch : products;
     const handleClickToDetail = (id) => {
          history.push(`/san-pham/${id}`);
          setKeyword("");
          setSearch("");
          setStatusSearch(false);
          body.classList.remove("hidden");
          if (setShowSearch) {
               setShowSearch(false)
          }
     }
     const handleClickToHome = () => {
          setStatusSearch(false);
          body.classList.remove("hidden");
          history.push("/")
          setSearch("")
          if (setShowSearch) {
               setShowSearch(false)
          }
     }

     const handleClickCloseSearch = () => {
          setSearch("");
          setKeyword("")
     }
     return (
          <SearchWrapper className={className}  >
               <InputSearchWrapper className="frm-search" color={search} >
                    <Input
                         type="text"
                         className="input-search"
                         placeholder="Tìm tên sản phẩm mà bạn mong muốn..."
                         name="search"
                         value={search}
                         onChange={handleChangeInput}
                         autocompelete="off"
                         ref={inputRef}
                    />
                    <div className="btn-search">
                         {search && (!!search && isLoading ? <span className="icon-loading" >
                              <FontAwesomeIcon icon={faSpinner} />
                         </span> : <span className="icon-close" onClick={handleClickCloseSearch}>
                              <FontAwesomeIcon icon={faTimesCircle} />
                         </span>)}

                         <span className="icon-search">
                              <FontAwesomeIcon icon={faSearch} />
                         </span>


                    </div>

               </InputSearchWrapper>
               {data = keyword && showResult ? <div className="search-element">
                    {resultSearch.length ? data.map(item => {
                         return <SearchItem
                              searchItem={item}
                              key={item.id}
                              onClick={handleClickToDetail}
                         />
                    }) : <Empty
                         onClick={handleClickToHome}
                    />}
               </div> : null}
          </SearchWrapper>
     )
}
export default Search