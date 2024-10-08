import React, { useState, useEffect } from "react";
import { SearchBox, SearchButton, SearchTxt } from "./HeaderSearchMenuCss";
import { IoSearchOutline } from "react-icons/io5";

function HeaderSearchMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // 실시간 검색 결과 저장
  const [showDropdown, setShowDropdown] = useState(false); // 드롭다운 표시 여부

  // 실시간 검색 함수
  const fetchSuggestions = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/product/search?name=${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSuggestions(data); // 검색 결과 저장
      setShowDropdown(true); // 드롭다운 표시
    } catch (error) {
      //콘솔에 에러 출력
      console.error("Error fetching search suggestions:", error);
    }
  };

  // 입력값이 바뀔 때마다 실시간 검색
  useEffect(() => {
    if (searchTerm.length > 0) {
      fetchSuggestions(searchTerm);
    } else {
      setShowDropdown(false); // 검색어가 없으면 드롭다운 숨김
    }
  }, [searchTerm]);

  // 검색 버튼 클릭 시 실행되는 일반 검색 함수
  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/product/search?name=${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      //console.log("General Search Result:", data); // 일반 검색 결과를 콘솔에 출력

      //Query Parameters를 사용
      if (data.length > 0) {
        // 첫 번째 상품의 카테고리를 URL에 포함시켜 이동
        const firstProductCategory = data[0].category;
        window.location.href = `/list?category=${encodeURIComponent(
          firstProductCategory
        )}`;
      }

      setShowDropdown(false); // 일반 검색 시 드롭다운 숨기기
    } catch (error) {
      console.error("Error fetching general search results:", error);
    }
  };

  return (
    <div style={{ fontFamily: "apple" }}>
      <SearchBox onSubmit={handleSearch}>
        <SearchTxt
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton type="submit">
          <IoSearchOutline />
        </SearchButton>
      </SearchBox>

      {/* 드롭다운 - 유사한 상품 목록 */}
      {showDropdown && (
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            marginTop: "10px",
            border: "1px solid black",
            width: "500px",
            backgroundColor: "white",
            position: "absolute",
            zIndex: 1000,
            maxHeight: "300px",
            overflow: "auto",
          }}
        >
          {suggestions.map((product) => (
            <li
              key={product.product_id}
              style={{ padding: "5px 10px", cursor: "pointer" }}
            >
              <a
                href={`/listdetail/${product.product_id}`}
                style={{ textDecoration: "none", color: "red" }}
              >
                {product.productName}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HeaderSearchMenu;
