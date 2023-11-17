# ShoesMall Website
html, css, js로 구현한 간단한 쇼핑몰 프로젝트

## ⚙ Stack
- HTML, CSS, JavaScript
- Mock Data 만들어서 사용

## 📚 Features

### Home

1.헤더
- 모바일 전용 사이드바 메뉴
- scroll시, nav-menu 상단 고정

2.New 블록
- new goods section - 가로 스크롤
- goods 클릭 시, Detail-Page 이동

3.Goods 블록
- data 받아와서 동적으로 list 출력
- goods pagination
- 가격별 정렬 및 색상별 분류 동시에 가능
- goods 클릭 시, Detail-Page로 이동
- 좋아요 클릭시, WishList에 저장
- icon 색상 변경 (재클릭시 원 상태 + WishList에서 삭제)
- 장바구니 클릭시, Cart에 저장
- 장바구니 총 수량 + 1 (최상단에 nav icon에 표시)
- 재 클릭 시, 이미 cart에 들어가 있는 상품 고지 알림

4. footer
- 사이트정보, 약관 등


### WishList-Page

- WishList-Page에서 상품 삭제 기능
- WishList 비어있을 시, 고지 문구



### Cart-Page

- cart에서 상품 삭제 기능
- goods별 수량 count
- goods별 합계 금액
- goods 총 합계 금액
- cart 비어있을 시, 고지 문구
- order 버튼 클릭 시 주문서 팝업 출력

<br/>

### Detail-Page

- 좋아요 클릭 시, WishList에 저장
- 장바구니 클릭시, Cart에 저장
