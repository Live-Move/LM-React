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
      const response = await fetch(`http://localhost:8080/api/product/search?name=${searchTerm}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSuggestions(data); // 검색 결과 저장
      setShowDropdown(true); // 드롭다운 표시
    } catch (error) {
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
      const response = await fetch(`http://localhost:8080/api/product/search?name=${searchTerm}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("General Search Result:", data); // 일반 검색 결과를 콘솔에 출력
      setShowDropdown(false); // 일반 검색 시 드롭다운 숨기기
    } catch (error) {
      console.error("Error fetching general search results:", error);
    }
  };

  return (
    <div>
      <SearchBox onSubmit={handleSearch}>
        <SearchTxt
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for products..."
        />
        <SearchButton type="submit">
          <IoSearchOutline />
        </SearchButton>
      </SearchBox>

      {/* 드롭다운 - 유사한 상품 목록 */}
      {showDropdown && (
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "10px", border: "1px solid black", width: "500px", backgroundColor: "white", position: "absolute" }}>
          {suggestions.map((product) => (
            <li key={product.product_id} style={{ padding: "10px", cursor: "pointer" }}>
              <a href={`/product/${product.product_id}`}>{product.productName}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HeaderSearchMenu;
